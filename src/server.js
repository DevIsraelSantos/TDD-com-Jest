const app = require('./app');

const PORTA = (process.eventNames.PORT || 3333);

app.listen(PORTA);

console.log('Server Online');
