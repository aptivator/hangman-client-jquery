import client from 'superagent/superagent';
import server from 'superagent';

export default typeof process === 'undefined' ? client : server;
