function validator(){
  var uname=document.getElementById('name').value;
  var cc=document.getElementById('century').value;
  var yy=document.getElementById('year').value;
  var mm=document.getElementById('month').value;
  var dd=document.getElementById('day').value;
  var gender=document.getElementById('gender').value;

  if(uname==''){
    window.alert('Input your name');
    uname.focus();
    return false;
  }
  if(cc==''){
    window.alert("Input century");
    cc.focus();
    return false;
  }
  if(yy==''){
    window.alert("Input year");
    yy.focus();
    return false;
  }
  if(mm==''|| mm<0 || mm>12){
    window.alert("Input Month ");
    mm.focus();
    return false;
  }
  if(dd==''||dd<0 || dd>31){
    window.alert("Input valid date");
    dd.focus();
    return false;
  }
  if(gender==''){
    window.alert("Select valid Gender");
    gender.focus();
    return false;
  }
  
  var d = parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
  // var d=parseInt((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7);
  var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var gmale =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
  var gfemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  
  if(d==0 && gender=="male"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gmale[0]+" you were born on a"+days[0]);
    return false;
  }else
  if(d==1 && gender=="male"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gmale[1]+" you were born on a"+days[1]);
    return false;
  } else
  
  if(d==2 && gender=="male"){
    window.alert("Dear "+uname+"\nYour Akan name is "+gmale[2]+" you were born on a"+days[2]);
    return false;
  }else
  if(d==3 && gender=="male"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gmale[3]+" you were born on a"+days[3]);
    return false;
  }else
  if(d==4 && gender=="male"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gmale[4]+" you were born on a"+days[4]);
    return false;
  }else
  if(d==5 && gender=="male"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gmale[5]+" you were born on a"+days[5]);
    return false;
  }else
  if(d==6 && gender=="male"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gmale[6]+" you were born on a"+days[6]);
    return false;
  }else
  if(d==0 || gender=="female"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gfemale[0]+" you were born on a"+days[0]);
    return false;
  }else
  if(d==1 && gender=="female"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gfemale[1]+" you were born on a"+days[1]);
    return false;
  }
  else
  if(d==2 && gender=="female"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gfemale[2]+" you were born on a"+days[2]);
    return false;
  }else
  
  if(d==3 && gender=="female"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gfemale[3]+" you were born on a"+days[3]);
    return false;
  }else
  if(d==4 && gender=="female"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gfemale[4]+" You were born on a"+days[4]);
    return false;
  }else
  if(d==5 && gender=="female"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gfemale[5]+" you were born on a"+days[5]);
    return false;
  }else
  if(d==6 && gender=="female"){
    window.alert("Dear "+uname+"\n Your Akan name is "+gfemale[6]+" you were born on a"+days[6]);
    return false;
  }alert('Invalid')

}
