function htmlElement(){
    this.click= function(){
        console.log('clicked.');
    }
}
htmlElement.prototype.focused= function(){
    console.log('focued');
}

function htmlSelectElement(items=[]){
    this.items=items;
    this.addItems= function(item){
        this.items.push(item);
    }
    this.removeItem= function(item){
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render= function(){
        return `
        <select> ${this.items.map(item=>`
            <option> ${item} </option>`).join('')}
        </select>`
    }
}

htmlSelectElement.prototype= new htmlElement();
htmlSelectElement.prototype.constructor= htmlSelectElement;

function htmlImageElement(src){
    this.src=src;

    this.render= function(){
        return `<img src="${this.src}" />`
    }
}

htmlImageElement.prototype= new htmlElement();
htmlImageElement.prototype.constructor= htmlImageElement;

const elements=[
    new htmlSelectElement([1,2,3]),
    new htmlImageElement('http//')
]

for(let element of elements)
    console.log(element.render());