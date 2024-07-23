const fs = require('fs');

const normalizepath =  path.normalize("E:/WT/Node/server")
console.log("normalize path:: ",normalizepath)

const extname = path.extname("E:/WT/Node/server.html")
console.log("Ext Path::",extname)

const baseName = path.basename("E:/WT/Node/server")
console.log("Base Path::",baseName)

const dirname = path.dirname("E:/WT/Node/server")
console.log("Dir Path::",dirname);

const joinpath = path.join("E:/WT/Node/server","Ayush")
console.log("Join Path",joinpath);
// fs.renameSync('demo.txt','user.txt')

// let data = fs.readFileSync('demo.txt',(err)=>{
//     if(err) throw err
// })
console.log("data::",data.toString());

