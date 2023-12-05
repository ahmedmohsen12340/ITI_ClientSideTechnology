function CreateCookie(key,value,expire){
    if(expire){
        var exDate=new Date().setMonth(new Date.getMonth()+parseInt(expire));
        document.cookie=`${key}=${value};expires=${exDate}`;
    }
    else{
        document.cookie=`${key}=${value};`
    }
}
var assArray = [];
function RemoveCookie(key){
    var exDate=new Date();
    exDate.setMonth(exDate.getMonth()-10);
    document.cookie=`${key}='';expires=${exDate.toUTCString()}`;
}
function ShowCookie(){
    assArray=[];
    var CookieArray = document.cookie.split('; ');
    for(var i=0;i<CookieArray.length;i++){
        var key=CookieArray[i].split('=')[0];
        var value=CookieArray[i].split('=')[1];
        assArray[key]=value;
    }
    return assArray;
}
function GetCookie(key){
    return ShowCookie()[key];
}
