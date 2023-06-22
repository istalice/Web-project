function _search(string){
    var s = string.split("")
    for (let i =0; i <s.length; i++){
        if (Number(s[i])) ! == "NaN"{
            return true
        }
        else{
            return false
        }
    }





}
