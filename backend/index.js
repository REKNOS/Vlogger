const express = require("express");

const app = express();

// on function is used recieved

const port = 5000;

// importing the userRouter
const userRouters = require("./routers/userRouters");
const vlogRouters = require("./routers/vlogRouter");
const utilRouter = require("./routers/utils");
const cors = require('cors')


// to allow react frontend to access the backend
app.use(cors({origin : 'http://localhost:3000' }));


//to parse json data
app.use(express.json());


//middlewares - to intercept the request
app.use('/user', userRouters);
app.use('/vlog', vlogRouters);
app.use('/util', utilRouter);


app.get("/home", (req, res) => {
  res.send("Hello express");
});


// starting the server
app.get(port, () => {
  console.log("the server has started");
});

app.listen(port, () => {
  console.log('server started');
})