function makeInputVerifier(min, max){
    return (input)=>{
        if(input < min){
            return "input is less than minimum value";
        }else if(input > max){
            return "input is more than maximum value";
        }else if(input >= min && input <= max){
            return "input is in range";
        }
    };
}

function main(){
    var min = 5;
    var max = 10;
    var init = makeInputVerifier(min,max);
    var input = 12;
    var values = init(input);
    console.log(values)
}

main()