const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Audit Log
const logStream = fs.createWriteStream('audit.log', { flags: 'a' });

const auditLog = (message) => {
  const log = `${new Date().toISOString()} - ${message}\n`;
  logStream.write(log);
  console.log(message);
};

// API Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const newMessage = new Message({ name, email, message });

  try {
    const savedMessage = await newMessage.save();
    auditLog(`New message from ${name} (${email})`);
    res.json(savedMessage);
  } catch (err) {
    auditLog(`Error saving message from ${name} (${email}): ${err.message}`);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
