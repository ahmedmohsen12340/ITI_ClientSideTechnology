var img = document.getElementById('img');
var i =1;
function nex(){
    i++
    if(i>6){
        i=6
    }
    img.src=`SlideShow/${i}.jpg`
}
function prev(){
    i--;
    if(i<1){
        i=1;
    }
    img.src=`SlideShow/${i}.jpg`
}
var x;
function show(){
    x =setInterval(()=>{
        i++
        if(i>6){
            i=1;
        }
        img.src=`SlideShow/${i}.jpg`
    },500)
}
function stop(){
    clearInterval(x);
}