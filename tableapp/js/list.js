  
let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click",function(){
 GetBooking();
});

    function GetBooking(){
        let url = 'https://api.sheety.co/5d98dc1133a299f4ca55f896b57e5881/tableApp2/bookingitems';
    }
    fetch(url)
    .then((response) => response.json())
    .then(json =>  {

    let bookingNameList = document.getElementById("bookingNameList");

    //clear the table rows
    for(let k= bookingNameList.rows.length-1;k > 0; k--)
    bookingNameList.deleteRow(k);
    })

    for(let i = 0; i < json.bookingitems.length; i++) {
        let gName = json.bookingitems[i].name;
        let gEmail = json.bookingitems[i].email;
        let gPax = json.bookingitems[i].pax;
        let gRemarks = json.bookingitems[i].remarks;
        let gId = json.bookingitems[i].Id;

        let row = bookingNameList.insertrow(bookingNameList.rows.length);
        row.insertCell(0).innerHTML = gId
        row.insertCell(1).innerHTML = gName
        row.insertCell(3).innerHTML = gEmail
        row.insertCell(4).innerHTML = gPax
        row.insertCell(5).innerHTML = "TBC"

    }
  // Do something with the data
  console.log(json.bookingitems);
}); 