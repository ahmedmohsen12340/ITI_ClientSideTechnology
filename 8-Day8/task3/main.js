var myForm = document.querySelector('#myform');
var myInputs = document.getElementsByTagName('input')
var key = false;
myForm.onsubmit= function(e){
    for(var i=0;i<myInputs.length;i++)
    {
        if(myInputs[i].value=='')
        {
            alert('there are some empty inputs')
            e.preventDefault();
            break;
        }
    }
}

var myEvent = new Event('message');
document.addEventListener('message',()=>{
    setTimeout(()=>{
        for(var i=0;i<myInputs.length-1;i++)
        {
            if(myInputs[i].value !='')
            {
                key = true;
                break;
            }
        }
        if(key==false)
            alert("you haven't enter anything for 30 secconds")
    },5000)
})
    document.dispatchEvent(myEvent);
