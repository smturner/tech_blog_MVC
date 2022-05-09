const newPostForm = async(e) =>{
    console.log("hello")

    e.preventDefault();
    // console.log("hello")
    const titleForm = document.querySelector('#titleForm').value;
    const contentForm = document.querySelector('#contentForm').value;



    if (titleForm && contentForm) {
        const response = await fetch ('/api/dashboard/', {
            method: 'POST',
            body:JSON.stringify({titleForm,contentForm}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace ('/homepage')
        }else {
            alert(response.statusText)
        }
    }
};

document
.querySelector(".createPostForm")
.addEventListener("submit", newPostForm)