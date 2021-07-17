function validateInputs(){
  var form=document.getElementsByTagName("form");
  var firstnameInput=document.getElementById("firstname");
  var lastnameInput=document.getElementById("lastname");
  var yearInput=document.getElementById("yearOf");
  var monthInput=document.getElementById("monthOf");
  var dayInput=document.getElementById("dayOf"); 
  var genderInput=document.forms["gender"];

  if(!firstnameInput.value){
    firstnameInput.nextElementSibling.style.display="block";
    firstnameInput.style.border="3px solid #B42D46";
    return false;
  }else{
    firstnameInput.nextElementSibling.style.display="none";
    firstnameInput.style.border="1px solid transparent";
      }

    if(!lastnameInput.value){
      lastnameInput.nextElementSibling.style.display="block";
      lastnameInput.style.border="3px solid #B42D46";
    return false;
    }else{
      lastnameInput.nextElementSibling.style.display="none";
      lastnameInput.style.border="1px solid transparent";
      }
    
    if(!yearInput.value||yearInput.value<1900 || yearInput.value>2021){
        yearInput.nextElementSibling.style.display="block";
        yearInput.style.border="3px solid #B42D46";
      return false;
      }else{
        yearInput.nextElementSibling.style.display="none";
        yearInput.style.border="1px solid transparent";
        }  


        if(!monthInput.value||monthInput.value<0 || monthInput.value>12){
          monthInput.nextElementSibling.style.display="block";
          monthInput.style.border="3px solid #B42D46";
        return false;
        }else{
          monthInput.nextElementSibling.style.display="none";
          monthInput.style.border="1px solid transparent";
          }  
  
  

          if(!dayInput.value||dayInput.value<0 || dayInput.value>31){
            dayInput.nextElementSibling.style.display="block";
            dayInput.style.border="3px solid #B42D46";
          return false;
         }else{
          dayInput.nextElementSibling.style.display="none";
            dayInput.style.border="1px solid transparent";
           }  
    
         var valid=false;
         for(var i=0; i<genderInput.length; i++){
           if(genderInput[i].checked){
               valid=true;
               break;
           }   
         }

          if(valid){
          genderInput.nextElementSibling.style.display="none";
          genderInput.style.border="1px solid transparent";
          }
          else{
          genderInput.nextElementSibling.style.display="block";
          genderInput.style.border="3px solid #B42D46";
          return false;
        
        }




};





















//var form=document.querySelector("form");
//var firstnameInput=document.getElementById("firstname");
//var error=document.getElementsByClassName("errormessage1");
//var year1=document.getElementById("year").value;
//var month1=document.getElementById("month").value;
//var day1=document.getElementById("day"); 

  //var validateInputs = () =>  {
    //if(!firstnameInput.value){
   // firstnameInput.classList.add("invalid");
   // firstnameInput.nextElementSibling.style.display="block";
   // return false;
  //  }else{
     // firstnameInput.nextElementSibling.style.display="none";
    //  firstnameInput.style.border="1px solid transparent";
   // }
  //};




//form.addEventListener("submit",(e) =>{
  //e.preventDefault();
 // validateInputs();
//});

//firstnameInput.addEventListener("input,()" =>{


 //function validation() {

  // if(firstname==null ||firstname==""){
   //  text="please enter a valid name"
    // errorMessage1.innerHTML=text;
   //  return false;
  // }
    //else if(year<1900 || year>2021){
   // number="*please enter a valid year";
    //errorMessage2.innerHTML=number;
    // return false;
 // }




 // else if(month<= 0 || month > 12){
 //   number="*please enter a valid month";
   // errorMessage3.innerHTML=number;
  //   return false;
 // }


//  else if(day<=0 || day > 31){
   // number="*please enter a valid day";
   // errorMessage4.innerHTML=number;
     //return false;
 // }
//}


  //day=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + d ) mod 7

  //where;

 //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 //where;

 //CC - is the century digits. For example 1989 has CC = 19

// YY - is the Year digits (1989 has YY = 89)

// MM -  is the Month

 //DD - is the Day of the month 

 //mod - is the modulus function ( % )