function handleCheckout(){
  let checkCondition = true;


//validate phone number
let phone = document.querySelector("#phone").value;
let rePhone= /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

if (!rePhone.test(phone)) {
  document.querySelector("#errors").innerHTML =
    "Phone number format should be like XXXXXXXXXX!!";
  checkCondition = false;
}


//email validation
let email = document.querySelector("#email").value;
if (email == "") {
document.querySelector("#errors").innerHTML = "Email field is empty";
checkCondition = false;
}
let reEmail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (!reEmail.test(email)) {
  document.querySelector("#errors").innerHTML ="Invalid Email!";
    
  checkCondition = false;
}


  // name validation
  
  let reFname =  /^[a-zA-Z][a-zA-Z\\s]+$/;
let lname = document.querySelector("#lname").value;

if (lname == " ") {
  document.querySelector("#errors").innerHTML = "Name field is empty!";
  checkCondition = false;
}

if (!reFname.test(lname)) {
  document.querySelector("#errors").innerHTML =
    "Name should be letters!!";
  checkCondition = false;
}


if(checkCondition == true){
  document.querySelector("#errors").innerHTML = "Success!";
  
  
}

}