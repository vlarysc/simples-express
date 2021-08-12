const express = require('express');
const app = express();
const PORT = 5007;

app.get('/', (req, res) => {
  const text = 'Olá';
  const html = `<html lang='en'>
  <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <meta http-equiv='X-UA-Compatible' content='ie=edge'>
      <title>startupClass</title>
      <meta name="description" content="startupClass boilerplate express">
      <link rel='icon' href='/public/favicon.ico'>
  </head>
  <body>
      <div id="app">
      ${text}
      <img src="/public/images/logo.png" />
      </div>
  </body>
  </html>`;

  return res.send(html);

});

app.get('/sobre', (req, res) => {
  res.send('Sobre a empresa');
});

app.use('/public', express.static('./public'));
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});