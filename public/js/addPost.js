const newPostForm = async(e) =>{
    console.log("hello")

    e.preventDefault();
    // console.log("hello")
    const title = document.querySelector('#titleForm').value;
    const post_content = document.querySelector('#contentForm').value;



    if (title && post_content) {
        const response = await fetch ('/api/newpost/', {
            method: 'POST',
            body:JSON.stringify({title, post_content}),
            // headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace ('/dashboard')
        }else {
            alert(response.statusText)
        }
    }
};

document
.querySelector(".createPostForm")
.addEventListener("submit", newPostForm)