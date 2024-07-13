/*Read the first name and last name from the inputs (#firstname and #lastname) and write the full name into the #fullname input.
If an input is not filled add this placeholder #.*/

function whatIsMyName() {
  let firstName = document.querySelector("#firstname").value;
  let lastName = document.querySelector("#lastname").value;

  let firstNameValue = firstName.value ;
  let lastNameValue = lastName.value ;

  if (!firstName) {
        firstName = '#';
    }
    if (!lastName) {
        lastName = '#';
    }

  let fullName = `${firstName} ${lastName}`;
   document.querySelector("#fullname").value = fullName;
}
