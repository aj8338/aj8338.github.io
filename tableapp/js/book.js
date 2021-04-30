let bookNowbtn = document.getElementById("bookNow");
bookNowbtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal= userName.value;
    let userEmail = document.getElementById("userEmail");
    let userEmailVal= userEmail.value;
    let userPax = document.getElementById("userPax");
    let userPaxVal= userPax.value

    let userRemarks=document.getElementById("userRemarks").value

    BookNow(userNameVal,userEmailVal,userPaxVal,UserRemarksVal);

})

function BookNow(userName,UserEmail,UserPax,UserRemarks){
    alert(userName);
}