let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj){
        for(const value in obj){
            if(typeof obj[value] === 'number'){
                obj[value] *= 2;
            }
        }

  }

  multiplyNumeric(menu);

  console.log(menu);