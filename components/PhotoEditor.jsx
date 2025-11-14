import React, { useState, useRef, useCallback } from 'react';

function PhotoEditor() {
  const [image, setImage] = useState(null);
  const [canvasRef, setCanvasRef] = useState(null);
  const [ctx, setCtx] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeFilter, setActiveFilter] = useState('none');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [backgroundType, setBackgroundType] = useState('solid');
  const [gradientDirection, setGradientDirection] = useState('to-r');
  const [gradientColor1, setGradientColor1] = useState('#3B82F6');
  const [gradientColor2, setGradientColor2] = useState('#8B5CF6');
  const fileInputRef = useRef(null);

  const initCanvas = useCallback((canvas) => {
    if (canvas && !canvasRef) {
      setCanvasRef(canvas);
      const context = canvas.getContext('2d');
      setCtx(context);
    }
  }, [canvasRef]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          setOriginalImage(img);
          drawImageOnCanvas(img);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const drawImageOnCanvas = (img) => {
    if (canvasRef && ctx) {
      const canvas = canvasRef;
      const maxWidth = 800;
      const maxHeight = 600;
      
      let { width, height } = img;
      
      // Scale image to fit canvas while maintaining aspect ratio
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width *= ratio;
        height *= ratio;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);
    }
  };

  const applyFilter = async (filterType) => {
    if (!canvasRef || !ctx || !originalImage) return;
    
    setIsProcessing(true);
    setActiveFilter(filterType);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    drawImageOnCanvas(originalImage);
    
    const canvas = canvasRef;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    switch (filterType) {
      case 'grayscale':
        for (let i = 0; i < data.length; i += 4) {
          const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
          data[i] = gray;
          data[i + 1] = gray;
          data[i + 2] = gray;
        }
        break;
      case 'sepia':
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
          data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
          data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
        }
        break;
      case 'vintage':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = Math.min(255, data[i] * 1.2);
          data[i + 1] = Math.min(255, data[i + 1] * 1.1);
          data[i + 2] = Math.max(0, data[i + 2] * 0.8);
        }
        break;
      case 'blur':
        // Simple blur effect (basic implementation)
        const tempData = new Uint8ClampedArray(data);
        for (let i = 0; i < data.length; i += 4) {
          if (i >= 4 && i < data.length - 4) {
            data[i] = (tempData[i - 4] + tempData[i] + tempData[i + 4]) / 3;
            data[i + 1] = (tempData[i - 3] + tempData[i + 1] + tempData[i + 5]) / 3;
            data[i + 2] = (tempData[i - 2] + tempData[i + 2] + tempData[i + 6]) / 3;
          }
        }
        break;
      case 'invert':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
        break;
    }
    
    if (filterType !== 'none') {
      ctx.putImageData(imageData, 0, 0);
    }
    
    setIsProcessing(false);
  };

  const changeBackground = () => {
    if (!canvasRef || !ctx || !originalImage) return;
    
    setIsProcessing(true);
    
    setTimeout(() => {
      const canvas = canvasRef;
      
      // Create background
      if (backgroundType === 'solid') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (backgroundType === 'gradient') {
        let gradient;
        if (gradientDirection === 'to-r') {
          gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        } else if (gradientDirection === 'to-b') {
          gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        } else if (gradientDirection === 'to-br') {
          gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        } else {
          gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)/2);
        }
        gradient.addColorStop(0, gradientColor1);
        gradient.addColorStop(1, gradientColor2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (backgroundType === 'pattern') {
        // Create a simple pattern
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradientColor1;
        const size = 20;
        for (let x = 0; x < canvas.width; x += size * 2) {
          for (let y = 0; y < canvas.height; y += size * 2) {
            ctx.fillRect(x, y, size, size);
            ctx.fillRect(x + size, y + size, size, size);
          }
        }
      }
      
      // Draw the image with some transparency for background effect
      ctx.globalAlpha = 0.9;
      ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1.0;
      
      setIsProcessing(false);
    }, 300);
  };

  const resetImage = () => {
    if (originalImage) {
      drawImageOnCanvas(originalImage);
      setActiveFilter('none');
    }
  };

  const downloadImage = () => {
    if (canvasRef) {
      const link = document.createElement('a');
      link.download = 'edited-photo.png';
      link.href = canvasRef.toDataURL();
      link.click();
    }
  };

  const copyToClipboard = async () => {
    if (canvasRef) {
      try {
        const blob = await new Promise(resolve => canvasRef.toBlob(resolve));
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        // Show success message (you could add a toast here)
      } catch (err) {
        console.error('Failed to copy image:', err);
      }
    }
  };

  const filters = [
    { id: 'none', label: 'Original', icon: '📷' },
    { id: 'grayscale', label: 'Grayscale', icon: '⚫' },
    { id: 'sepia', label: 'Sepia', icon: '🟤' },
    { id: 'vintage', label: 'Vintage', icon: '📸' },
    { id: 'blur', label: 'Blur', icon: '🌫️' },
    { id: 'invert', label: 'Invert', icon: '🔄' }
  ];

  const gradientDirections = [
    { id: 'to-r', label: 'Left to Right', icon: '➡️' },
    { id: 'to-b', label: 'Top to Bottom', icon: '⬇️' },
    { id: 'to-br', label: 'Diagonal', icon: '↘️' },
    { id: 'radial', label: 'Radial', icon: '🎯' }
  ];

  return (
    <section id="photo-editor" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Photo <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Editor</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Upload your images and apply various filters, effects, and background modifications
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {!image ? (
            // Upload Section
            <div className="text-center">
              <div className="bg-gray-900/30 backdrop-blur-sm border-2 border-dashed border-gray-600 rounded-xl p-12 hover:border-blue-400 transition-all duration-300">
                <div className="text-6xl mb-6">📷</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Upload Your Photo</h3>
                <p className="text-gray-400 mb-8">
                  Click to upload or drag and drop your image here
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Choose Image
                </button>
                <div className="mt-8 text-sm text-gray-500">
                  Supported formats: JPG, PNG, GIF • Max size: 10MB
                </div>
              </div>
            </div>
          ) : (
            // Editor Interface
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Controls Panel */}
              <div className="lg:col-span-1 space-y-6">
                {/* Filters */}
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                    </svg>
                    Filters
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => applyFilter(filter.id)}
                        disabled={isProcessing}
                        className={`flex flex-col items-center p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeFilter === filter.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
                        } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <span className="text-2xl mb-1">{filter.icon}</span>
                        <span>{filter.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background Settings */}
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Background
                  </h3>
                  
                  {/* Background Type */}
                  <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Type</label>
                    <select
                      value={backgroundType}
                      onChange={(e) => setBackgroundType(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    >
                      <option value="solid">Solid Color</option>
                      <option value="gradient">Gradient</option>
                      <option value="pattern">Pattern</option>
                    </select>
                  </div>

                  {/* Color Controls */}
                  {backgroundType === 'solid' && (
                    <div className="mb-4">
                      <label className="block text-gray-400 text-sm font-medium mb-2">Color</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="w-16 h-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-400"
                        />
                      </div>
                    </div>
                  )}

                  {backgroundType === 'gradient' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Direction</label>
                        <div className="grid grid-cols-2 gap-1">
                          {gradientDirections.map((dir) => (
                            <button
                              key={dir.id}
                              onClick={() => setGradientDirection(dir.id)}
                              className={`p-2 rounded text-xs font-medium transition-all duration-300 ${
                                gradientDirection === dir.id
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                              }`}
                            >
                              {dir.icon} {dir.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-gray-400 text-xs font-medium mb-1">Start Color</label>
                          <input
                            type="color"
                            value={gradientColor1}
                            onChange={(e) => setGradientColor1(e.target.value)}
                            className="w-full h-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-xs font-medium mb-1">End Color</label>
                          <input
                            type="color"
                            value={gradientColor2}
                            onChange={(e) => setGradientColor2(e.target.value)}
                            className="w-full h-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {backgroundType === 'pattern' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-1">Base Color</label>
                        <input
                          type="color"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="w-full h-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-1">Pattern Color</label>
                        <input
                          type="color"
                          value={gradientColor1}
                          onChange={(e) => setGradientColor1(e.target.value)}
                          className="w-full h-10 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  <button
                    onClick={changeBackground}
                    disabled={isProcessing}
                    className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Processing...
                      </div>
                    ) : (
                      'Apply Background'
                    )}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={resetImage}
                    className="w-full px-4 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300"
                  >
                    Reset to Original
                  </button>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Upload New Image
                  </button>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="lg:col-span-2">
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Preview
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={copyToClipboard}
                        className="px-4 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300"
                        title="Copy to clipboard"
                      >
                        Copy
                      </button>
                      <button
                        onClick={downloadImage}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:scale-105 transition-all duration-300"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative bg-gray-800/50 rounded-lg p-4 min-h-[400px] flex items-center justify-center">
                    {isProcessing && (
                      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
                          <p className="text-gray-300">Processing...</p>
                        </div>
                      </div>
                    )}
                    <canvas
                      ref={initCanvas}
                      className="max-w-full max-h-full rounded-lg shadow-2xl"
                      style={{ 
                        imageRendering: 'pixelated',
                        imageRendering: '-moz-crisp-edges',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sample Images Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-100">
            Try with Sample Images
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => {
                  const img = new Image();
                  img.crossOrigin = "anonymous";
                  img.onload = () => {
                    setImage(img);
                    setOriginalImage(img);
                    drawImageOnCanvas(img);
                  };
                  img.src = `https://picsum.photos/400/300?random=${num}`;
                }}
                className="relative group overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <img
                  src={`https://picsum.photos/200/150?random=${num}`}
                  alt={`Sample ${num}`}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="text-white text-sm font-medium">Use Sample</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.PhotoEditor = PhotoEditor;