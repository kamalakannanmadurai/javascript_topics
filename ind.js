for(let i=0;i<10;i++){
console.log(i);
}
const check = {a:1,b:2};

for (let key in check){
console.log(key,check[key]);
}
const check2 = [1,2,3,4,5];
for (let key in check2){
    console.log(key,check2[key]);
    }

for (let key of check2){
        console.log(key);
        }