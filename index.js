const cron=require("node-cron")
const shell=require("shelljs")

cron.schedule("* * * * * *",function(){
    console.log("Hello ...")
    if(shell.exec("node sayHello.js").code !==0){
        console.log("Something went wrong")
    }
})