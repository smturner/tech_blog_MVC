const editUserPost = async (e) => {
    e.preventDefault();

    const title = document.querySelector("#postTitle").value;
    const post_content =document.querySelector('#postContent')
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ]; 
if(title || post_content) {
    const response = await fetch(`/api/newpost/${id}`, {
     
        method: 'PUT',
        body: JSON.Stringify ({title, post_content}),
        headers: { 'Content-Type': 'application/json'},
    });
    console.log(response)
    if (response.ok) {
        document.location.replace ('/dashboard');
    }else {
        alert (response.statusText)
    }
}
};


document
.querySelector('.editPostForm')
.addEventListener("submit", editUserPost)