let cargv=process.argv[2];
let num=Number(cargv);
if (isNaN(num)){
    console.log("Missing number of occurrences");
}else {
    for(let i=0;i<num;i++){
    console.log(`C is fun`);
}
}
