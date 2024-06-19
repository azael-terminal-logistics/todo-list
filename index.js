import { Server } from 'http';

import { CONFIG } from './src/config';
import app from './src/server';

const server = new Server(app);

server.listen(CONFIG.SERVER.APP_PORT, () => {
	console.log('Server up and running on port: ', CONFIG.SERVER.APP_PORT);
});
