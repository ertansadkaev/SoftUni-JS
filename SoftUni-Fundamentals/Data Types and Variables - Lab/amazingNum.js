function amazingNum (num){
    num = num.toString();
    sum = 0;
    for (i = 0; i < num.length; i++){
    sum += Number(num[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}
amazingNum(1233);