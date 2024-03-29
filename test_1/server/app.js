const express = require('express');


const usersRouter = require('./userRouter');

const app = express();
const port = 7777;

app.use(express.json());

app.use(`/songs`, usersRouter);



const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
 app.use(
 '/api',
 createProxyMiddleware({
 target: 'http://localhost:3000',
 changeOrigin: true,
 }) );
};



app.get('/', (req, res)=>
{
    res.send(`<h2>welcome to server</h2>`);
});

app.listen(port, ()=>
{
   console.log(`SERVER 실행됨 ${port}`); 
});