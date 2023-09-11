let form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  let fName = form[0].value;
  let fEmail = form[1].value;
  let fText = form[2].value;

  if(fName === "" || fEmail === "" || fText === "") alert("All fields must be completed!");
  else{
    alert("Sent!")
    Array.from(form).forEach((input)=> input.value = "")
    
  }
})