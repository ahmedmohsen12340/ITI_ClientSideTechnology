document.body.onkeydown=function(e){
    if(e.key=='Alt'||e.key=='Control'||e.key=='Shift')
        console.log(e.key);
    else
        console.log(e.key.charCodeAt(0));
}