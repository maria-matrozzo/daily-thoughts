import React from "react";

function Post({postInfo}) {

    return(
        <div>
            <p>{postInfo.content}</p>
            <p>{postInfo.time}</p>

        </div>
    )
}

export default Post;