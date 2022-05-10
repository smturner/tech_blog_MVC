const commentForm = async(e) => {
    e.preventDefault()

    const comment_content= document.querySelector('#commentBody').value
    const post_id=  window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];

}