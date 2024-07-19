const { spawn } = require('child_process');
const { getAppPath, getPlatform } = require('./platform');

const xsd = {
    /**
     * Executes a command and returns the standard output.
     * @param {string} fileName - The xsd filename.
     * @returns {Promise<string>} - A promise that resolves with the standard output of the command.
    */
    convert: (fileName) => {
        return new Promise((resolve, reject) => {
            const converterAppPath = getAppPath();
            if (getPlatform() !== 'win32') {
                fs.chmodSync(converterAppPath, '755');
            }
            // Spawn the process with the captured arguments
            const appSubProcess = spawn(converterAppPath, [fileName]);

            let outputData = '';
            // Capture standard output
            appSubProcess.stdout.on('data', (data) => {
                outputData += data;
            });

            // Capture standard error
            appSubProcess.stderr.on('data', (data) => {
                console.error(`Error: ${data}`);
            });

            // Handle process exit
            appSubProcess.on('close', (code) => {
                if (code === 0) {
                    // Write the output to the specified file
                    resolve(outputData);
                } else {
                    reject(code);
                }
            });
        });

        return promise;
    }
}

module.exports = xsd;