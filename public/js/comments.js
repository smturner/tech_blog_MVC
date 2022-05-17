const commentForm = async(e) => {
    console.log("hello")
    e.preventDefault()

    const comment_content= document.getElementById('commentBody').value.trim()
    console.log(comment_content)
    const post_id=  window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];
      console.log(post_id)

if (comment_content) {
    const response = await fetch('/api/comments', {
        method: "POST",
        body:JSON.stringify({post_id, comment_content}),
        headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) {
        console.log('TEST')
        // document.location.reload('/dashboard')
       
    }else {
        alert(response.statusText)
    }
}

};

document
.querySelector(".commentForm")
.addEventListener("submit", commentForm)