
const BASE_URL = "https://instaclone-backend-74q8.onrender.com";


export function getUserPosts(){
    return fetch(`${BASE_URL}/posts`)
    .then(res => res.json())
    .catch(err => alert(err.message));
}


export function newPost(post) {
    console.log(`${BASE_URL}/post`)
    console.log(post)
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
