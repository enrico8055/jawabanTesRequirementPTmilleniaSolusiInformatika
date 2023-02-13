for (let baris = 5; baris > 0; baris--) {
    temp = baris-1;
    for (let kolom = 0; kolom < 5; kolom++) {
        if(temp != 0){
            process.stdout.write(" ");

        }else{
            process.stdout.write("*");
        }

        if(temp != 0){
            temp--;
        }
    }
    process.stdout.write("\n");
}