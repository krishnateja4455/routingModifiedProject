const express=require('express');
const app=express();
const userRouter=require("./Routes/UsersRoutes");
const productRouter=require("./Routes/ProductRoutes");
require('dotenv').config();

app.use(userRouter);
app.use(productRouter);

const port=process.env.PORT;

app.get("/",(req,res)=>{
  res.send("Home Page");
});

app.get("/details",(req,res)=>{
  res.send("Details Page");
})

app.listen(port,()=>{
  console.log(`Server Running on Port ${port}`);
});
