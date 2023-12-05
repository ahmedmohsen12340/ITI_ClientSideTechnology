var Name = document.getElementById("name");
var Age = document.getElementById("Age");
var counter=parseInt(GetCookie("Counter"));
if(counter){
    counter;
}
else{
    counter=0;
}
function getGender() {
    var ele = document.getElementsByName('Gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}
function getColor(){
    var ele = document.getElementById('color');
    return ele.options[ele.selectedIndex].innerHTML;
}
function ReG(){
    CreateCookie("Name",Name.value);
    CreateCookie("Age",Age.value);
    CreateCookie("Gender",getGender());
    CreateCookie("Color",getColor());
    CreateCookie("Counter",counter);
}
