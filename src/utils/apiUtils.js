const Node_Api = "https://instaclone-back-end.onrender.com"
const BASE_URL = Node_Api || "http://localhost:8080";

export function getUserPosts(){
    return fetch(`${BASE_URL}/posts`)
    .then(res => res.json())
    .catch(err => alert(err.message));
}


export function newPost(post) {
    return fetch(`${BASE_URL}/post`,{
        method : "POST",
        body : post
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
}

// export{
//     getUserPosts,
//     newPost
// }
