function kadalbuntung(input){
    for (let step = 1; step < input + 1; step++) {
        if(step % 3 == 0 && step % 5 == 0){
            console.log("kadalbuntung");
        }else if(step % 3 == 0){
            console.log("kadal");
        }else if(step % 5 == 0){
            console.log("buntung");
        }else{
            console.log(step);
        }
    }
}

function main(){
    var input = 20;
    kadalbuntung(input);
}

main()