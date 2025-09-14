let argz=process.argv[2];
let num=Number(argz);
if(isNaN(num)){
    console.log(`Not a number`);
}else{
    console.log(`My number : ${num}`);
}