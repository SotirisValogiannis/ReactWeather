// var names = ['Sotiris','Giorgos','Aris'];
//
// names.forEach(function(name){
//   console.log('Foreach',name);
// })
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// })
//
// names.forEach( (name)=> console.log('arrowFunc', name) );
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Sotiris'));

// var person = {
//   name: 'Sotiris',
//   greet: function(){
//     names.forEach((name) => console.log(this.name + ' says hi to' + name))
//   }
// }
//
// person.greet();


function add(a, b) {
  return a + b;
};
console.log(add(1,3));

var addSingle = (a, b) => {console.log(a+b)};

addSingle(4,5);
