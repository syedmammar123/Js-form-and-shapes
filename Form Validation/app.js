var  fname=document.getElementById('fname');
var  lname=document.getElementById('lname');
var  zip=document.getElementById('zip');
var  number=document.getElementById('number');
var  email=document.getElementById('email');


function submition(){
  if(fname.value=="" || lname.value=="" || zip.value=="" || number.value=="" || email.value=="" )
  {
    alert("Fill all fields")
  }
  else{
    document.body.innerHTML=''
    document.write("<h1>User's Info</h1> <br> <br> <hr>")
    document.write("<b>Name : <b>"+fname.value+" "+lname.value+" <br> <br>")
    document.write("<b>Zip : <b>"+zip.value+"<br> <br>")
    document.write("<b>Ph number : <b>"+number.value+"<br> <br>")
    document.write("<b>Email : <b>"+email.value+"<br> <br>")
    
  }

};

function fnamevalid(){
  if(fname.value=="")
  {
    alert("Must enter First Name ")
  }
else{
  var counter=0;
  for(var i=0; i<(fname.value).length;i++)
  {
    if (isNaN((fname.value).charAt(i))){
      // if alphabet then it is executed or it will go to else
    }
    else {counter++}
  }

  if(counter>0){
    alert("You cannot enter a number in Name");
    fname.placeholder="Enter Text Only";
    fname.value=""
  }
}
}

function lnamevalid(){
  if(lname.value=="")
  {
    alert("Must enter Last Name ")
  }
else{
  var counter=0;
  for(var i=0; i<(lname.value).length;i++)
  {
    if (isNaN((lname.value).charAt(i))){
      // if alphabet then it is executed or it will go to else
    }
    else {counter++}
  }

  if(counter>0){
    alert("You cannot enter a number in Name");
    lname.placeholder="Enter Text Only";
    lname.value=""
  }
}
}

function zipvalid(){
  if(zip.value=="")
  {
    alert("Must fill this field")
  }
  else{
    if((zip.value).length<5 || (zip.value).length>5){
      alert("ZipCode must consist of 5 digits only")
      zip.placeholder="Enter 5-digits Only";
      zip.value=""
    }
    else{
      
      for(var i=0; i<5;i++)
        {
          if (isNaN((zip.value).charAt(i))){
            // if alphabet then it is executed or it will go to else
            alert("ZipCode must consist of 5 digits only")
            zip.placeholder="Enter 5-digits Only"
            zip.value=""
          } 
        }   
    } 
  }
}


function numbervalid()
{
  if(number.value=="")
  {
    alert("Must fill this field")
  }
  else{
    if((number.value).length<11 || (number.value).length>11){
      alert("Phone Number must consist of 11-digits only")
      number.placeholder="Enter 11-digits Only";
      number.value=""
    }
    else{
      
      for(var i=0; i<12;i++)
        {
          if (isNaN((number.value).charAt(i))){
            // if alphabet then it is executed or it will go to else
            alert("Phone Number cannot contain an alphabet")
            number.placeholder="Enter 5-digits Only"
            number.value=""
          } 
        }   
    } 
  }
}



function emailvalid(){
  if(email.value=="")
  {
    alert("Must enter an email")
  }
else{
  var counter=0;
  for(var i=0; i<(email.value).length;i++)
  {
    if ((email.value).charAt(i)==='@'){
      counter++;
    }
   
  }
  if(counter==1){
   
  }
  else{
    alert("There must be an '@' in an email");
    email.placeholder="Enter email with 1 '@' sign";
    email.value=""
  }
}
}
