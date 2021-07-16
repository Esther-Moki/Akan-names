function validation() {
  var firstname=document.getElementById("firstname").value;
  var year=document.getElementById("year").value;
  var month=document.getElementById("month").value;
  var day=document.getElementById("day").value; 
  var number;

   if(firstname==null ||firstname==""){
     text="please enter a valid name"
     errorMessage1.innerHTML=text;
     return false;
   }

    else if(year<1900 || year>2021){
    number="*please enter a valid year";
    errorMessage2.innerHTML=number;
     return false;
  }




  else if(month<= 0 || month > 12){
    number="*please enter a valid month";
    errorMessage3.innerHTML=number;
     return false;
  }


  else if(day<=0 || day > 31){
    number="*please enter a valid day";
    errorMessage4.innerHTML=number;
     return false;
  }
}


  day=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + d ) mod 7

  //where;

 //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 //where;

 //CC - is the century digits. For example 1989 has CC = 19

// YY - is the Year digits (1989 has YY = 89)

// MM -  is the Month

 //DD - is the Day of the month 

 //mod - is the modulus function ( % )