 
 async function test(){
  const result = await fetch('http://facebook.com').then((res)=>{
    return res.json();
}).catch((err)=>{
  console.log(err);
});

console.log(result);
 }

 test();

