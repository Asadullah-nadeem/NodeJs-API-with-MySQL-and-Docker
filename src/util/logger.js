import logger from 'pino';
// import { colorizerFactory } from 'pino-pretty';

const log = logger({
    base: {pid: false},
    transport:{
        target: 'pino-pretty',
        options:{
            colorized: true
        }
    },
    timeStamp: () => `, "time": "${new Data().toLocaleString()}"`
});
export default log;