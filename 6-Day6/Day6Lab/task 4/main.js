    var data = document.querySelectorAll(".data");
    var keyValue=[];
    var query = location.search.substring(1,location.search.length).split('&')
    for(var i=0;i<query.length;i++){
        keyValue[i]= query[i].split('=');
    }
    for(var i=0;i<keyValue.length;i++){
        if(keyValue[i][1].includes('+'))
            keyValue[i][1]= keyValue[i][1].replace(/\+/g,' ');
        if(keyValue[i][1].includes('%40'))
            keyValue[i][1] = keyValue[i][1].replace(/\%40/g,'@');
        data[i].textContent = keyValue[i][1];
    }