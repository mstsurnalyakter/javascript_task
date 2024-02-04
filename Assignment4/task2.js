const str = (str1, str2) =>{
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        let index = str1.search(str2);
        if (index >= 0) {
            return true;
        }else{
            return false;
        }
    }else{
        return `Please provide two string`
    }
}

console.log(str('John Doe','ohn'));
console.log(str("JavaScript","Code"));
console.log(str("Peter Parker","Pen"));
