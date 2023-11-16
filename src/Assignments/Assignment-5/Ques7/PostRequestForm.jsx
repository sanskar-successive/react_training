import axios from "axios";
import { useState } from "react";

const PostRequestForm = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handleContentChange = (e) => {
    setPost({ ...post, content: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: post.title,
      content: post.content,
    };
    const response = await axios.post("https://reqres.in/api/users", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        Post title :
        <input type="text" value={post.title} onChange={handleTitleChange} />
        Post Content :
        <textarea
          cols="30"
          rows="10"
          value={post.content}
          onChange={handleContentChange}
        ></textarea>
        <button type="submit">Create post</button>
      </form>
    </>
  );
};
export default PostRequestForm;
