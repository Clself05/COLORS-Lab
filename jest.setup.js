import { spawn } from 'child_process';
import net from 'net';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

let phpServer;

// Helper: wait until port 8000 is open
function waitForServer(port, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const start = Date.now();

        const check = () => {
            const socket = net.createConnection(port, 'localhost');
            socket.on('connect', () => {
                socket.end();
                resolve();
            });
            socket.on('error', () => {
                if (Date.now() - start >= timeout) {
                    reject(new Error('PHP server did not start in time'));
                } else {
                    setTimeout(check, 100);
                }
            });
        };

        check();
    });
}

beforeAll(async () => {
    phpServer = spawn('php', ['-S', 'localhost:8000', '-t', './api'], {
        stdio: 'ignore'
    });

    // Wait until PHP server is actually listening
    await waitForServer(8000);
});

afterAll(() => {
    if (phpServer) {
        phpServer.kill();
    }
});
