var mess = prompt('enter your message:');
var child = window.open('./page2.html');
var i=0;
child.setInterval(()=>{
    child.document.write(mess[i]);
    if(i<mess.length){
        i++
    }
    if(i==mess.length){
        child.setTimeout(()=>{
            child.close();
        },500)
    }
},500)

//question: I can't use getElementByID? Why?