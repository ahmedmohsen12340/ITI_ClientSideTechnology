var linkedList = {
    data:[],
    pushVal: function(val){
        if(this.data.length!=0){
            if(val==this.data[this.data.length-1].value){
                console.error('You have entered a repeated value');
            }
            else if(val>this.data[this.data.length-1].value){
                linkedList.data.push({value: val});
            }
            else
            console.error('you have push a small value');
        }
        else
        linkedList.data.push({value: val});
    },
    popVal: function(){
        linkedList.data.pop();
    },
    unshift: function(val){
        if(this.data.length!=0){
            if(val==this.data[0].value){
                console.error('You have entered a repeated value');
            }
            else if(val<this.data[this.data.length-1].value){
                linkedList.data.unshift({value: val});
            }
            else
                console.error('you have unshift a large value');
        }else
            linkedList.data.unshift({value: val});
    },
    shift: function(){
        linkedList.data.shift();
    },
    addByVal: function(val){
        if(this.data.length!=0){
            if(val>this.data[this.data.length-1].value){
                linkedList.data.push({value: val});
            }else if(val<this.data[0].value){
                linkedList.data.unshift({value: val});
            }else{
                var len = this.data.length;
                for(var i=0;i<len;i++){
                    if(val==this.data[i].value&&len==this.data.length)
                    {
                        console.error('this number exist in the list')
                        break;
                    }
                    if(this.data[i].value>val){
                        var x =this.data.length-1;
                        for(var j=x;j>=i;j--)
                        {
                            this.data[j+1]={value: this.data[j].value};
                        }
                        this.data[i].value=val;
                        break;
                    }
                }
            }
        }
        else
            linkedList.data.push({value: val});
    },
    removeByVal: function(val){
        var key = false;
        for(var i=0;i<this.data.length;i++){
            if(val==this.data[i].value)
            {
                for(var j=i;j<this.data.length-1;j++){
                    this.data[j].value=this.data[j+1].value
                }
                key=true;
                this.data.pop()
                break;
            }
        }
        if(key===false){
            console.log('data not found');
        }
    }
}