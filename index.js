#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
const platform = os.platform();
const fs = require('fs');

let converterAppPath;

// Determine the correct executable path based on the platform
switch (platform) {
    case 'win32':
        converterAppPath = path.join(__dirname, 'tools','win-x64', 'XSDConverter.exe');
        break;
    case 'linux':
        converterAppPath = path.join(__dirname, 'tools','linux-x64', 'XSDConverter');
        break;
    case 'darwin': // macOS
        converterAppPath = path.join(__dirname, 'tools','osx-x64', 'XSDConverter');
        break;
    default:
        console.error('Unsupported OS');
        process.exit(1);
}

// Ensure the executable has proper permissions on Unix-like systems
if (platform !== 'win32') {
    fs.chmodSync(converterAppPath, '755');
}

// Capture command-line arguments passed to the Node.js script
const args = process.argv.slice(2);

if(args === 0 || args.length > 2)
{
    console.error('Usage: xsd-json-converter <source-path> <output-path>');
    process.exit(1);
}
//Capture output path
const outputPath = args.pop();

// Spawn the process with the captured arguments
const appProcess = spawn(converterAppPath, args);

let outputData = '';
// Capture standard output
appProcess.stdout.on('data', (data) => {
    outputData += data;
});

// Capture standard error
appProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

// Handle process exit
appProcess.on('close', (code) => {
    if (code === 0) {
        // Write the output to the specified file
        fs.writeFileSync(outputPath, outputData, 'utf8');
        console.log(`Output written to ${outputPath}`);
    } else {
        console.error(`application exited with code ${code}`);
    }
});
