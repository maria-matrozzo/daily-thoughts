import React from "react";

function Post({postInfo, deletePost}) {

    return(

        <div className="container">
            <div className="container-inner">
                <div className="sticky-container">
                <div className="sticky-outer">
                    <div className="sticky">
                    <svg width="0" height="0">
                        <defs>
                        <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                            <path
                                d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                                stroke-linejoin="round"
                                stroke-linecap="square"
                                />  
                        </clipPath>
                        </defs>
                    </svg>
                    <div className="sticky-content">
                    <p>{postInfo.content}</p>
                    <button onClick={() => deletePost(postInfo.id)}>X</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        // <div className="post-it-note">
        //     <p>{postInfo.content}</p>
        //     <p>{postInfo.time}</p>
        //     <button onClick={() => deletePost(postInfo.id)}>X</button>
        // </div>
    )
}

export default Post;