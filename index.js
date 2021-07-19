function validateInputs() {
  var form = document.getElementsByTagName("form");
  var firstnameInput = document.getElementById("firstname");
  var lastnameInput = document.getElementById("lastname");
  var yearInput = document.getElementById("yearOf");
  var monthInput = document.getElementById("monthOf");
  var dayInput = document.getElementById("dayOf");
  var genderInput = document.forms["gender"];
  var century=document.getElementById('century')

  if (!firstnameInput.value) {
    firstnameInput.nextElementSibling.style.display = "block";
    firstnameInput.style.border = "3px solid #B42D46";
    return false;
  } else {
    firstnameInput.nextElementSibling.style.display = "none";
    firstnameInput.style.border = "1px solid transparent";
  }

  if (!lastnameInput.value) {
    lastnameInput.nextElementSibling.style.display = "block";
    lastnameInput.style.border = "3px solid #B42D46";
    return false;
  } else {
    lastnameInput.nextElementSibling.style.display = "none";
    lastnameInput.style.border = "1px solid transparent";
  }

  if (!yearInput.value || yearInput.value < 1900 || yearInput.value > 2021) {
    yearInput.nextElementSibling.style.display = "block";
    yearInput.style.border = "3px solid #B42D46";
    return false;
  } else {
    yearInput.nextElementSibling.style.display = "none";
    yearInput.style.border = "1px solid transparent";
  }


  if (!monthInput.value || monthInput.value < 0 || monthInput.value > 12) {
    monthInput.nextElementSibling.style.display = "block";
    monthInput.style.border = "3px solid #B42D46";
    return false;
  } else {
    monthInput.nextElementSibling.style.display = "none";
    monthInput.style.border = "1px solid transparent";
  }



  if (!dayInput.value || dayInput.value < 0 || dayInput.value > 31) {
    dayInput.nextElementSibling.style.display = "block";
    dayInput.style.border = "3px solid #B42D46";
    return false;
  } else {
    dayInput.nextElementSibling.style.display = "none";
    dayInput.style.border = "1px solid transparent";
  }

  if (genderInput[0].checked == false && genderInput[1].checked == false) {
    genderInput.nextElementSibling.style.display = "block";

  }
  else {
    genderInput.nextElementSibling.style.display = "none";
  }
  console.log('Hello GUys')


}