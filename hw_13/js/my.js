const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
} 

newObj={};
function convert(obj){
    for(let i in obj){
        if(typeof(obj[i]) === `object`){
            for(let j in obj[i]){
                newObj[j] = obj[i][j];
            }
        } else{
            newObj[i]=obj[i];
        }
    } 
    return newObj;
}
console.log(convert(obj))