import express from 'express';
import { conf } from './conf.js';

let port = conf("PORT");
const app = express();

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: './www' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));