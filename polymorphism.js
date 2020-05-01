function Shape(color){
    this.color=color;
}
Shape.prototype.duplicate=function(){
    console.log('duplicate');
}

function extend(Child, Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
}
function Circle(radius, color){
    Shape.call(this, color); 
    this.radius=radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate=function(){
    console.log('duplicate Circle');
}

Circle.prototype.draw= function(){
    console.log('draw');
}

function Square(size){
    this.size=size;
}

extend(Square, Shape);

Square.prototype.duplicate=function(){
    console.log('duplicate Square');
}

const shapes=[
    new Circle(),
    new Square()
]

for(let shape of shapes)
   shape.duplicate();