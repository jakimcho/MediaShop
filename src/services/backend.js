//import config from 'config';

/* const userver = config.get("backEnd.host");
const port = config.get("backEnd.port");
const apiPath = config.get("backEnd.apiPath"); */

const userver = "localhost";
const port = 3001;
const apiPath = "api";


export const apiURL = `http://${userver}:${port}/${apiPath}`;