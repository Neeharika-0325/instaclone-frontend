const BASE_URL="http://localhost:8000";

function getUserPosts(){
    return fetch(`${BASE_URL}/posts`)
    .then(res => res.json())
    .catch(err => alert(err.message));
}

function newPost(post){
    return fetch(`${BASE_URL}/post`,{
        method : "POST",
        body : post
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
}

export{
    getUserPosts,
    newPost
}