const signUpForm = async (e) => {
    console.log("hello")
    e.preventDefault();


    const name = document.querySelector('#nameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim ();

    console.log(name, email, password)


    if (name && email && password) {
        const response = await fetch ('/api/user/', {
            method: 'POST',
            body:JSON.stringify({name, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace ('/api/newpost')
        }else {
            alert(response.statusText)
        }
    }
};

document
.querySelector('.signupForm')
.addEventListener('submit', signUpForm)