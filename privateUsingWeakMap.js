const _radius= new WeakMap();
const _move= new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
        _move.set(this, ()=>{
            console.log('move', this);
        })
    }

    draw(){
        console.log(_radius.get(this));
        _move.get(this)();
    }
}

const c= new Circle(5);