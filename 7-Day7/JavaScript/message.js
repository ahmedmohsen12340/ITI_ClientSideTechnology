var counter =parseInt(GetCookie("Counter"));
counter++;
CreateCookie("Counter",counter);
var img = document.querySelector('img');
img.src=`../Images/${GetCookie("Gender")}.jpg`
var mess = document.querySelector('#message');
mess.innerHTML= `Welcome <span style="color:${GetCookie('Color')}">${GetCookie('Name')}</span> you Have visited this site <span style="color:${GetCookie('Color')}">${GetCookie('Counter')}</span> times`
