const commentForm = async(e) => {
    e.preventDefault()

    const comment_content= document.querySelector('#commentBody').value
    const post_id=  window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];

if (comment_content) {
    const response = await fetch('/api/comments/', {
        method: "POST",
        body:JSON.stringify({post_id, comment_content}),
        headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) {
        document.location.reload()
       
    }else {
        alert(response.statusText)
    }
}

};

document
.querySelector(".commentForm")
.addEventListener("submit", commentForm)

