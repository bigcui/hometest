var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse(__dirname+'/test.xls');
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
console.log(data)
for(var i=0;i<data.length;i++){
    if(i!=0){
        var sum = 0;
        for(var j=0;j<data[i].length;j++){
            if(j!=0){
                  sum  = parseInt(sum)  +  parseInt(data[i][j])
                 data[i][0] = sum +'￥'
            }
           
        }
    }
}
console.log(data,0)
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
fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});
