#!/usr/bin/env node

import { spawn } from 'child_process';
import { getAppPath, getPlatform } from './platform';
import fs = require('fs');


const converterAppPath = getAppPath();
// Ensure the executable has proper permissions on Unix-like systems
if (getPlatform() !== 'win32') {
    fs.chmodSync(converterAppPath, '755');
}

// Capture command-line arguments passed to the Node.js script
const args = process.argv.slice(2);

if (args.length != 2) {
    console.error('Usage: xjc <source-path> <output-path>');
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
        fs.writeFileSync(outputPath as any, outputData, 'utf8');
        console.log(`Output written to ${outputPath}`);
    } else {
        console.error(`application exited with code ${code}`);
    }
});