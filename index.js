const express = require("express")
const app = express()
const db = require("./models")
const {userRouter} = require("./routes/user.route")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to my website")
})

app.get("/",userRouter)


db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log("server running");
    });
});
