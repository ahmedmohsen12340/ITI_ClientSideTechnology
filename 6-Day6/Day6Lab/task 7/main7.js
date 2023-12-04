var marbles = document.images;
var i = 1;
var x = setInterval(()=>{
    marbles[i].src="marbels/marble1.jpg"
    i++;
    if(i>=marbles.length)
        i=0;
    marbles[i].src="marbels/marble3.jpg"
},500)
function mouseOver(){
    clearInterval(x);
}
function mouseLeave(){
    x =setInterval(()=>{
        marbles[i].src="marbels/marble1.jpg"
        i++;
        if(i>=marbles.length)
            i=0;
        marbles[i].src="marbels/marble3.jpg"
    },500)
}