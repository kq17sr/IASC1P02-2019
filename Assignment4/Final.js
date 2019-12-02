function formValidation()
{
var first = document.forms["RegForm"]["first_name"];
var last = document.forms["RegForm"]["last_name"];
var birth = document.forms["RegForm"]["birth_date"];
var phone = document.forms["RegForm"]["phone_number"];
var email_add = document.forms["RegForm"]["email_address"];
var prog = document.forms["RegForm"]["program"];
var term_1 = document.forms["RegForm"]["term"];

if (first.value == "")
  {
      window.alert("Please enter your first name.");
      first.focus();
      return false;
  }

if (last.value == "")
  {
      window.alert("Please enter your last name.");
      last.focus();
      return false;
  }

if (birth.value == "")
  {
      window.alert("Please enter a valid birth date.");
      birth.focus();
      return false;
  }

if (phone.value == "")
  {
      window.alert("Please enter your telephone number.");
      phone.focus();
      return false;
  }

if (email_add.value == "")
  {
      window.alert("Please enter your email address");
      email_add.focus();
      return false;
  }

  return true;
  }

function myFunction() {
  alert("Your form has been submitted");
}
