import { useState, useEffect } from "react";
import { Post, Tag } from "../models";

const useFilteredPosts = (posts: Post[], filterTag: string): Post[] => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (!filterTag) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.tags.some((tag: Tag) =>
          tag.id.toLowerCase().includes(filterTag.toLowerCase())
        )
      );
      setFilteredPosts(filtered);
    }
  }, [posts, filterTag]);

  return filteredPosts;
};

export default useFilteredPosts;
