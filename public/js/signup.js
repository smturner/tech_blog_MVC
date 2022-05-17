const signUpForm = async (e) => {
    e.preventDefault();


    const name = document.querySelector('#nameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim ();



    if (name && email && password) {
        const response = await fetch ('/api/user/', {
            method: 'POST',
            body:JSON.stringify({name, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace ('/dashboard')
        }else {
            alert(response.statusText)
        }
    }
};

document
.querySelector('.signupForm')
.addEventListener('submit', signUpForm)