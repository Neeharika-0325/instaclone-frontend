

export default function Post({post:{id, name, location, likes, description, PostImage, date}}){
    // console.log(props.post)
    // console.log(name, location, likes)
    return <div className="post-card">
        {/* {console.log(post)}*/}
        {/* <h1>{post.name}</h1>  */}
        <div className="card-header">
            <div>
                <div className="post-title">{name}</div>
                <div className="post-location">{location}</div>
            </div>
            <div className="post-action">...</div>
        </div>
        <div className="post-img">
            <img src={PostImage} alt="user-post"/>
        </div>
        <div className="card-footer">
            <div className="card-likes">
                {likes} likes
            </div>
            <div className="card-description">
                {description}
            </div>
            
        </div>
    </div>
}