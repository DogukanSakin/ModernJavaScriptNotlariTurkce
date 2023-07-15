function getDateAgo (date,days){
    return  date.getDate()-days;
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date,1));







