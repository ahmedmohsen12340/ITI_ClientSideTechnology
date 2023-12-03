//problem 1

// var arr=[];
// for(var i=0;i<5;i++){
// arr[i]=prompt(`enter the ${i+1} number:`);
// }
// document.write(`You have entered the values: ${arr.join()}`);
// document.write(`</br>Your values after sorted descending:${arr.sort((a,b)=> b-a).join()} `);
// document.write(`</br>Your values after sorted descending: ${arr.sort((a,b)=> a-b).join()}`);

//problem 2

// var r = prompt('enter radius of circle:');
// var area = Math.PI * parseFloat(r) * parseFloat(r);
// alert(area);

// var base = prompt('what is the value you want to calculate its sqrt:');
// var sqrt = Math.sqrt(parseInt(base));
// alert(sqrt);

// var angle = prompt('enter angle to calculate its cos:');
// var cos = (Math.cos(parseFloat(angle)/180*Math.PI)).toFixed(4);
// alert(cos);

//problem 3

var arr=[]
for(var i=0;i<3;i++){
    arr[i]=parseInt(prompt(`enter the ${i+1} number:`))
}
var addation = 0;
var multiplication = 1
var division =arr[0]
for(var i=0;i<arr.length;i++){
    addation += arr[i];
    multiplication *= arr[i];
    if(i===0)
        continue;
    division /= arr[i];
}
document.write(`${arr.join('+')} = ${addation}`);
document.write(`<br>${arr.join('*')} = ${multiplication}`);
document.write(`<br>${arr.join('/')} = ${division}`);

