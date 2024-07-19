const path = require('path');
const os = require('os');
const platform = os.platform();
const fs = require('fs');

const getAppPath = () => {
    let converterAppPath;

    // Determine the correct executable path based on the platform
    switch (platform) {
        case 'win32':
            converterAppPath = path.join(__dirname, 'tools', 'win-x64', 'XSDConverter.exe');
            break;
        case 'linux':
            converterAppPath = path.join(__dirname, 'tools', 'linux-x64', 'XSDConverter');
            break;
        case 'darwin': // macOS
            converterAppPath = path.join(__dirname, 'tools', 'osx-x64', 'XSDConverter');
            break;
        default:
            converterAppPath = '';
    }

    return converterAppPath;
}

const getPlatform = () => {
    return platform;
}

module.exports = {
    getAppPath,
    getPlatform
}