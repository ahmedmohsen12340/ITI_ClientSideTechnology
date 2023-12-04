function opWin(){
    var child = window.open('/task 3/page2.html');
    setInterval(()=>{
        child.scrollBy(0,50);
    },500)
}