let bookNowbtn = document.getElementById("bookNow");
bookNowbtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal= userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal= userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let UserRemarksVal=document.getElementById("userRemarks").value;

    BookNow(userNameVal,userEmailVal,userPaxVal,UserRemarksVal);

})

function BookNow(userName,UserEmail,UserPax,UserRemarks){
    alert(userName);
}