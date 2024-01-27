const weight = parseFloat(prompt(`Enter you weight`));
const height = parseFloat(prompt(`Enter your height`));
const BMI = weight / (height)^2;


if (BMI < 18.5) {
    console.log(`You are underweight`);
}else if (BMI >= 18.5 && BMI <= 24.9){
    console.log(`You are healthy`);
}else if(BMI >= 25 && BMI <= 29.9){
    console.log(`You are overweight`);
}else{
    console.log(`You are obese`);
}