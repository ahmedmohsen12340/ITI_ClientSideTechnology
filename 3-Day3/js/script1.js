//problem 1
// var x=prompt('enter a message:')
// for(var i=0;i<6;i++){
//     document.write(`<h${i+1}>${x}</h${i+1}>`)
// }

//problem 2
// var y;
// for(var i=0;i<100&&y!=0;i++){
//     y=prompt();
// }

//problem 3

// var x= parseInt(prompt('enter a number:'))
// var y= parseInt(prompt('enter a number:'))
// var z= parseInt(prompt('enter a number:'))

// if(x%y===0&&x%z===0){
//     document.write(`${x} is divisible by both ${y} and ${z}`);
// }else if(x%y===0&&x%z!==0){
//     document.write(`${x} is divisible by ${y} only`)
// }else if(x%y===0&&x%z!==0){
//     document.write(`${x} is divisible by ${z} only`)
// }


//problem 4
function range(first,second,sign){
    var big,small;
    if(first>second){
        big=first;
        small=second;
    }else{
        big=second;
        small=first;
    }
    for(i=small;i<=big;i++){
        if(sign==='no'){
            document.write(i+'\n');
        }else if(sign==='odd'){
            if(i%2!=0)
                document.write(i+'\n');
        }else if(sign==='even'){
            if(i%2==0)
                document.write(i+'\n');
        }
    }
    
}


var first = parseFloat(prompt("enter first num:"));
var second = parseFloat(prompt("enter second num:"));
var sign;
do{
    sign = prompt("enter odd or even or no:");
}while(sign !='odd'&&sign!='even'&&sign!='no')

range(first,second,sign)

