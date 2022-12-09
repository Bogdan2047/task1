// const fs = require('node:fs');
// const path = require('node:path');


// fs.mkdir(path.join(__dirname, 'boys'), (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Directory created successfully!');
// });

// fs.mkdir(path.join(__dirname, 'girls'), (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Directory created successfully!');
// });

// fs.appendFile(path.join('./boys', 'lena.json'),'{"gender":"female"}');

// fs.appendFile(path.join('./girls', 'vitya.json'),'{"gender":"male"}',() => {});

// fs.appendFile(path.join('./boys', 'valera.json'),'{"gender":"male"}',() => {});

// fs.appendFile(path.join('./girls', 'olena.json'),'{"gender":"female"}',() => {});

// fs.appendFile(path.join('./boys', 'masha.json'),'{"gender":"female"}',() => {});

// fs.appendFile(path.join('./girls', 'gosha.json'),'{"gender":"male"}',() => {});

// fs.appendFile(path.join('./boys', 'olya.json'),'{"gender":"female"}',() => {});

// fs.appendFile(path.join('./boys', 'itya.json'),'{"gender":"male"}',() => {});

// fs.appendFile(path.join('./girls', 'pasha.json'),'{"gender":"male"}',() => {});

// fs.appendFile(path.join('./boys', 'olena.json'),'{"gender":"female"}',() => {});



// fs.readdir(__dirname, function(err,data) {

//     let arr = data.map((item)=> {
//         let folder = path.join(__dirname, item)
        
//         fs.readdir(folder, function(err,data) {
//             if(data) {
//                 data.map( (item) => {
//                     let filePath = path.join(folder,item)
                 
//                     fs.readFile(filePath,function (err,data){
//                         let file = JSON.parse(data)
//                         console.log(item);
//                         if(file.gender === 'male'){
//                             let maleWay = path.join(__dirname, 'boys', item)
//                             fs.rename(filePath,maleWay, () =>{})
//                         }else{
//                             let femaleWay = path.join(__dirname, 'girls', item)
//                             fs.rename(filePath,femaleWay, () =>{})
//                         }
//                     })
//                 })
//             }
            
//         })
//     })
    
// })