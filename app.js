import express from 'express';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from './src/AppRoutes';

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  let html = ReactDOMServer.renderToString(
    <html>
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
        <StaticRouter location={req.url}>
            <AppRoutes />
        </StaticRouter>
        <script src="index.js" />
      </body>
    </html>
  );
  res.send("<!DOCTYPE html>" + html);
});

app.use(express.static(path.join(__dirname, 'src')));
  
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});