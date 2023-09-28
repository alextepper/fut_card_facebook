import React, { useState, useEffect } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = axios.get(
        "https://fut-server.onrender.com/api/posts/timeline/651543ea76174d8aef7efdf5"
      );
      console.log(res);
    };

    fetchPosts();
  }, []);
  return (
    <div className="feedbar">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
