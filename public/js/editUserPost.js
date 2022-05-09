const editUserPost = async (e) => {
    e.preventDefault();

    const postHeader = e.target.parentElement().children(".card-header")



   const id =postHeader.getAttribute("data-postId")
        document.location.replace (`/editPost/${id}`)



}
