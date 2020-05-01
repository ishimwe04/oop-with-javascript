function Stack(array=[]){
    this.array=array;

    this.push= function(item){
        this.array.push(item);
        return item;
    }

    this.pop= function(){
        this.array.pop();
    }

    this.peek= function(){
        return this.array[array.length-1]
    }
    this.count= function(){
        return this.array.length;
    }
}

const stack=new Stack();