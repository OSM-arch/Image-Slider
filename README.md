<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider Project - README</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            color: #2980b9;
            margin-top: 25px;
        }
        code {
            background-color: #f8f9fa;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        pre {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        .features li {
            margin-bottom: 8px;
        }
        .btn {
            display: inline-block;
            background: #3498db;
            color: white;
            padding: 8px 15px;
            text-decoration: none;
            border-radius: 5px;
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <h1>Image Slider Project</h1>
    
    <p>A responsive, full-screen image slider with auto-rotation and interactive controls.</p>
    
    <a href="index.html" class="btn">View Live Demo</a>
    
    <h2>Features</h2>
    <ul class="features">
        <li>Full-screen responsive design</li>
        <li>Auto-rotation every 5 seconds</li>
        <li>Smooth slide transitions with CSS animations</li>
        <li>Animated caption appearance (slide-up effect)</li>
        <li>Interactive navigation buttons with hover effects</li>
        <li>Mobile-friendly design</li>
        <li>Clean, modern UI with SVG icons</li>
    </ul>
    
    <h2>Technologies Used</h2>
    <ul>
        <li>HTML5</li>
        <li>CSS3 (with transitions and transforms)</li>
        <li>JavaScript (for slider functionality)</li>
        <li>SVG (for navigation icons)</li>
    </ul>
    
    <h2>Project Structure</h2>
    <pre>
project-folder/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── app.js          # JavaScript functionality
├── IMGs/           # Folder for slide images
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   └── 4.jpg
└── README.html     # This documentation file
    </pre>
    
    <h2>Installation</h2>
    <ol>
        <li>Clone or download the repository</li>
        <li>Open <code>index.html</code> in your browser</li>
        <li>No server or dependencies required</li>
    </ol>
    
    <h2>Customization</h2>
    <p>To customize the slider:</p>
    <ul>
        <li>Replace images in the <code>IMGs</code> folder</li>
        <li>Modify slide content in <code>index.html</code></li>
        <li>Adjust timing in <code>app.js</code> (change the 5000ms value)</li>
        <li>Edit styles in <code>style.css</code></li>
    </ul>
    
    <h2>Browser Support</h2>
    <p>Works on all modern browsers including:</p>
    <ul>
        <li>Chrome</li>
        <li>Firefox</li>
        <li>Safari</li>
        <li>Edge</li>
    </ul>
    
    <h2>License</h2>
    <p>This project is open-source and available under the MIT License.</p>
</body>
</html>
