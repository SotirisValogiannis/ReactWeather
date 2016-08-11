function addPromise(a,b) {
  return new Promise(function(resolve, reject){
    if( typeof a === 'number' && typeof b === 'number' ) {
        resolve(a+b);
    } else {
        reject('not two numbers provided');
    }
  })
}

addPromise(2,10).then(function( result ){
  console.log('the result is:', result );

  return result;
}, function(err){
  console.log('promise error',err);
})
.then(function(result){
  console.log('result apo deutero then',result)
},function(err){
  console.log('error apo deutero then',err);
});
