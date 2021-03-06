const editUserPost = async (e) => {
    e.preventDefault();

    
    const title = document.querySelector('#postTitle').value;
    const post_content = document.getElementById('contentForm').value;
    // const id = document.getElementById('post-id')
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];
    const response = await fetch(`/api/newpost/${id}`, {
        method: "PUT", 
        body: JSON.stringify({
           title,
           post_content,
        }),
        headers: { "Content-Type": "application/json"}
    })
    if (response.ok) {
        document.location.replace('/dashboard')
    }else{
        alert(response.statusText)
}
}


document.querySelector(".editPostForm").addEventListener("submit", editUserPost);