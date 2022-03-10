import React, {useState} from "react";

function PostForm({createPost}) {

    const [formData, setFormData] = useState({
        content:''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(formData)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>

            <label>
            What Are Your Thoughts?
            <input type="text" name="content" value={formData.content} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
     </div>
    )
}

export default PostForm;