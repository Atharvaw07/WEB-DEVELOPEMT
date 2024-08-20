const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Psuedo and design</title>
      <style>
          .container{
              border: 3px solid rgb(71, 25, 25);
              background-color: rgb(142, 241, 185);
              padding: 34px;
              margin: 34px auto;
              width: 700px;
          }
          .btn{
              border: none;
              background-color:thistle;
              font-style: italic;
              font-size: 18px;
              cursor: pointer;
          }
          a{
              text-decoration: none;
          }
          a:hover{
              color: tomato;
          }
  
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h2>This is the heading</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia accusamus tenetur nobis totam blanditiis ab qui voluptatem ullam ratione, voluptas officiis magnam ipsum laboriosam molestias distinctio unde laborum sapiente repellat!</p>
          <a href="https://www.google.com/ " class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
