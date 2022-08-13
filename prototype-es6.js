class Animal {
  constructor(options)
  {
    this.name = options.name;
    this.color = options.color;
  }
  voice(){
    console.log('I am Home Animal',this.name);
  }
}
const _dog = new Animal({name:'Rex',color:'#fff'});

class Cat extends Animal{
  /**
 * Animal.apply(this,arguments);
 * Cat.prototype = Object.create(Animal.prototype);
 * Object.create allow determine prototype
 * Cat.prototype.constructor = Cat;
 * We need to implement the base class constructor for use use this.
 * Animal.apply(this, arguments); => super(options);
   */
  constructor(options){
    super(options); //Mi obrashaemsya roditelskomu konstruktoru
    this.hasTail = true;
    this.type = 'Cat';
  }

  voice(){
    console.log(this.name + ' says Miyao');
  }
}
const _cat = new Cat({name:'Mimi', color:'#777777', hasTail:true});

Object.prototype.print = function(){
  console.log('I am object: ', this);
}

Cat.prototype.printCat = function(){
  console.log('I am object: ', this);
}
 /* Object.prototype.print = ()=> {
   Pricina : ()=>
   In this case, they can create their own scope. Here, this does not apply to context. It belongs to the upper level.
   Therefore, this in this case is a Windows object
   console.log('I am object ', this);
 }
*/
_cat.print();

Array.prototype.Mapping = function()
{
  return this.map.apply(this,arguments);
}

console.log([1,2,3,4,5].Mapping(r => r ** 2));

String.prototype.toTag = function(tagName)
{
  return `<${tagName}> ${this} </${tagName}>`
}

Array.prototype.MyMapping = function()
{
  return this.map.apply(this,arguments);
}

console.log('Linr');
console.log([1,2,3].MyMapping(r => r**2));