var args = Number(process.argv);
var sum = 0;

for (i = 2; i < process.argv.length; i++){
  console.log(sum + process.argv[i]);
}