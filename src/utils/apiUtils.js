
const BASE_URL = process.env.Node_Api || "http://localhost:8080";

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