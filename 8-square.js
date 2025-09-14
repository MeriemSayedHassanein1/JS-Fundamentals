const arg = process.argv[2];
const size = Number(arg);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let line = "X".repeat(size); 
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
}