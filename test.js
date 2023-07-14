function extractCurrencyValue(value){
    return Number(value.slice(1));
}
console.log(extractCurrencyValue('$120'));
