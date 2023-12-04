var child= window.open('','','width=200,height=200');
child.focus();
var down,up;
function moveUP(){
    up= setInterval(()=>{
        child.moveBy(-50,-50);
        if(child.screenX==0||child.screenY==0)
        {
            clearInterval(up);
            moveDown();    
        }
    },500)
}
function moveDown(){
    down=setInterval(()=>{
        child.moveBy(50,50);
        if(child.screenX==400||child.screenY==400)
        {
            clearInterval(down);
            moveUP();
        }
    },500)
}
function stop(){
    clearInterval(down);
    clearInterval(up);
    child.focus();
}
moveDown();