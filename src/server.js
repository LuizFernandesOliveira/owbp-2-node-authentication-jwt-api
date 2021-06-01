require('dotenv/config');

const PORT = process.env.PORT;

const app = require('./app');

app.listen(PORT, () => {
  console.log('listening on PORT: ' + PORT);
});
