function pass_check(pass) {
    let count_symb=0;
    let count_char_small=0;
    let count_char_caps=0;
    let count_num=0;
    for(let i=0;i<pass.length;i++) {
        let code=pass.charCodeAt(i);
        if((code>=48) && (code<=57)) {
            count_num++;
        }
        if((code>=65) && (code<=90)) {
            count_char_caps++;
        }
        if((code>=97) && (code<=122)) {
            count_char_small++;
        }
        if(((code>=33) && (code<=47)) || ((code>=58) && (code<=64))) {
            count_symb++;
        }  
    }
    if(count_num==0) {
        return "Please include atleast one number"
    } else if(count_char_caps==0) {
        return "Please include atleast one capital character"
    } else if(count_char_small==0) {
        return "Please include atleast one small character"
    } else if(count_symb==0) {
        return "Please include atleast one Symbol"
    } else {
        return "This is Valid Password"
    }
}

module.exports= pass_check;
