function transformUpperCase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("NamaPengguna"); //1 select element
elNamaPengguna .addEventListener("keyup",function(){
    elNamaPengguna.value = transformUpperCase(elNamaPengguna.value);
})