/* Given are two strings password and password_repeat. Check if the password is secure by the following critera:
- both passwords must match
- password must be at least 8 chars
- contains at least a number
- contains at lease an uppercase letter
- contains at least a lowercase letter
- contains at least one of these special chars (&$%§-_)

Return true only if all criteria are met, otherwise return false.*/

function checkPassword(password, password_repeat) {
  
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[&$%\-_]).{8,}$/;

    if (password !== password_repeat) {
        return false;
    }

    return passwordRegex.test(password);
}
