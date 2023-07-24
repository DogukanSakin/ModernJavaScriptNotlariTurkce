const obj = {
    name:'hello',
    myf: function() {
        console.log(this.name);
    }
}

const objRef = obj;

objRef(); // hello