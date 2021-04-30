let bookNowbtn = document.getElementById("bookNow");
bookNowbtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal= userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal= userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let UserRemarksVal=document.getElementById("userRemarks").value;

    BookNow(userNameVal, userEmailVal, userPaxVal, UserRemarksVal);

})

function BookNow(userName,UserEmail,UserPax,UserRemarks){
    let url = 'https://api.sheety.co/5d98dc1133a299f4ca55f896b57e5881/tableApp2/bookingitems';
  let body = {
    bookingitem: {
      name:userName,
      email:userEmail,
      pax:userPax,
      remarks:userRemarks

    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers:{
        "Content-Type": "application/json"
    }

  })
  .then((response) => response.json())
  .then(json => {
      alert(json.bookingitem.name + "Succesfully Added");
    
    
  });
}