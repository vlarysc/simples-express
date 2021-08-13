const express = require("express");
const app = express();
const porta = 500;
const projectName = "Server Side"

app.get("/", function( response, request) {
    let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${projectName}</title>
      </head>
      <body>
        <div id="conteudo"></div>
        <script type="text/babel">
          ReactDOM.render(
            <div>
              <header>
                <h1> Desafio </h1>
              </header>
    
              <main>
                <label>
                  Construir um projeto cliente side:{" "}
                </label>
                <div>
                  <p> Talvez tenhamo conseguido!</p>
                </div>
              </main>
            </div>,
            document.getElementById("conteudo")
          );
        </script>
    
        <div id="like_button_container"></div>
        <script
          src="https://unpkg.com/react@17/umd/react.production.min.js"
          crossorigin
        ></script>
        <script
          src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
          crossorigin
        ></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="./components/buttonLike.js"></script>
      </body>
    </html>
    `
    request.send(html);
});

app.get("/sobre", function( response, request) {
    request.send("Estamos em sobre");
});

app.get("/conteudo", function( response, request) {
    request.send("Eu consegui caralho!");
});

app.listen(500, function () {
    console.log(`You can now view ${projectName} in the browser. Local: http://localhost:${porta}`)
});