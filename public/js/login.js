const loginForm = async (e) => {
    console.log("hello")
    e.preventDefault();

    const email = document.querySelector('#emailLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();
    console.log(email)
    console.log(password)
    
    if (email && password) {
        const response = await fetch('/api/user/login', {
            method:'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace ('/api/newpost')
        }else {
            alert(response.statusText);
        }
    }
  
};


document
.querySelector('.loginForm')
.addEventListener('submit', loginForm);

