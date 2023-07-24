function outerFunction() {
    const outerVariable = 'Bu bir dış değişkendir';
  
    function innerFunction() {
      const innerVariable = 'Bu bir iç değişkendir';

    }
    console.log(innerVariable);
    innerFunction();
  }
  
  outerFunction();