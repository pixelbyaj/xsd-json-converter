import path from 'path';
import os from 'os';
const platform = os.platform();

export const getAppPath = () => {
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

export const getPlatform = () => {
    return platform;
}