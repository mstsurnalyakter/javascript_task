const cubeNumber = num =>{
    if (typeof num === 'number') {
        return num * num * num;
    }else{
        return `Enter Valid Number.`
    }
}

const result = cubeNumber(4);
console.log(result);