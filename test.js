function printNumbers(from,to){
    const timer = setInterval(()=>{
        console.log(from);
        from -= 1;
        if(from < to){
             clearInterval(timer)
        }
    },1000);

   

}

printNumbers(5,1);






