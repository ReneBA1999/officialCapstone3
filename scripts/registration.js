"use strict";


const signupForm = document.querySelector("#signup");

signupForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use signupForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const signupData = {
       
        fullname: signupForm.fullname.value,
        username: signupForm.username.value,
        password: signupForm.password.value,
    }

    // Time to actually process the signup using the function from auth.js!
    signup(signupData);
};
