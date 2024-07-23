const child_process = require("child_process");

child_process.exec("start chrome www.whatsapp.com")


child_process.exec ("dir",(data,stdout)=>{
console.log("stdout");
})