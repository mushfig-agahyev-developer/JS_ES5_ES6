let line = '';
for (let index = 0; index < 144; index++) {
    line += '-';
}

function _line() {
    console.log(line);
}

/**Parent class */
const Animal = function (options) {
    this.name = options.name,
    this.color = options.color;

    this.speech = function () {
        console.log('Base voice from Animal', this.name);
    }
}

Animal.prototype.voice = function () {
    console.log('Base voice from', this.name);
}


console.log('Animal.prototype');
console.log(Animal.prototype);
_line();
/**Parent class */

/*Dog object*/
const _dog = new Animal({name: 'Beethoven', color: '#fff'});
console.log('_dog.voice()');
_dog.voice();
_line();
console.log(_dog);
_line();
/*Dog object*/

/*Cat object*/
const Cat = function (options) {
    Animal.apply(this, arguments);
    this.hasTail = true;
    this.type = 'cat';
}
// const Cat = function(...args){
//     Animal.apply(this,args);
// }


Cat.prototype = Object.create(Animal.prototype);
/** Object.create allows to determine prototype */
Cat.prototype.constructor = Cat;

// Animal.prototype.voice = function(){
// Animal.apply(this, arguments);
// console.log('I am Cat', this.name);
// }

Cat.prototype.voice = function () { 
    Animal.apply(this, arguments);
    console.log('I am Cat', this.name);
}

const _cat = new Cat({name: 'Mimi', color: '#777777', hasTail: true});
console.log(_cat);
console.log('_cat.voice');
_cat.voice();
_dog.voice();
/*Cat object*/
