var num = 119283724;
var zeroDigit = 1
var result = []
while(true){
    result.push(Math.floor(num % 10) * zeroDigit)
    num = num / 10
    zeroDigit = zeroDigit * 10
    if(Math.floor(num) == 0){
        break
    }
}

result = result.sort(function(a, b){return b-a})

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}