function writeVal(val) {
    document.getElementById("txt1").value += val.trim();
}
function c() {
    document.getElementById("txt1").value ='';
}
function del() {
    var x = document.getElementById("txt1").value;
    var y = document.getElementById("txt1").value.substring(0, x.length - 1);
    document.getElementById("txt1").value = y;
}
