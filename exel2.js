var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse(__dirname+'/1.xlsx');
var excelObj=obj[0].data;
console.log(excelObj);

var data = [];
for(var i in excelObj){
    var arr=[];
    var value=excelObj[i];
    for(var j in value){
        arr.push(value[j]);
        
    }
    data.push(arr);
}

for(var i=0;i<data.length;i++){
    var s = {}
     s[j]  = parseInt(data[i][0])
    for(var j=0;j<data[i].length;j++){
        s[j]  = parseInt(data[i][0]) +  parseInt(data[i][j])
    }
 }
 console.log(s,1);

var buffer = xlsx.build([
    {
        name:'sheet1',
        data:data
    },
     {
        name:'sheet1e',
        data:data
    }           
]);

//将文件内容插入新的文件中
fs.writeFileSync('test12.xlsx',buffer,{'flag':'w'});
