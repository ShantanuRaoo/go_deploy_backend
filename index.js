import express from 'express';
require('dotenv').config();

const app=express();

app.get('/',(req,res)=>{
    res.send('Welcome Home');
});

app.get('/login',(req,res)=>{
    res.send('<h1>What!! You wanna login now :|</h1>')
});

app.get('/instagram',(req,res)=>{
    res.send('follow @shantanu__rao');
});

app.listen(process.env.PORT,()=>{
    console.log("App is running at http://localhost:3000");
});


