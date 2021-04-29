function transformUpperCase(_val){
    return _val.toUpperCase();
}

var elNamaPengguna = document.getElementById("NamaPengguna"); //1 select element
elNamaPengguna .addEventListener("keyup",function(){
    elNamaPengguna.value = transformUpperCase(elNamaPengguna.value);
})