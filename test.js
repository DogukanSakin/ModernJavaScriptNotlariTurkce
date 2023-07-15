function getMaxSubSum(arr){
    const isAllItemsEqualsZero = arr.every((item)=>item<0);
    if(isAllItemsEqualsZero) return 0;

    let currentSum = 0, maxSum = 0;

    for(const value of arr){
        currentSum += value;
        maxSum = Math.max(currentSum,maxSum);
    }

    return maxSum;


}

console.log(getMaxSubSum([100, -9, 2, -3, 5]));






