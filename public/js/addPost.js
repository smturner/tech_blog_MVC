const newPostForm = async(e) =>{
    console.log("hello")

    e.preventDefault();
    // console.log("hello")
    const titleForm = document.querySelector('#titleForm').value.trim();
    const contentForm = document.querySelector('#contentForm').value.trim();

    if (titleForm && contentForm) {
        const response = await fetch('/api/dashboard', {
            method: 'POST',
            body: JSON.stringify({
                titleForm,
                contentForm
            }),
        });
        if (response.ok) {
            document.location.replace ('/homepage')
        }else {
            alert('Failed to create post')
        }
    }


   
}

document
.querySelector(".createPostForm")
.addEventListener("submit", newPostForm)