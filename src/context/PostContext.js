import { useState, createContext } from 'react';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Adam Smith' },
    { id: 2, title: 'Dan Robert' },
    { id: 3, title: 'Geroge Alderson' },
  ]);

  const add = (post) => {
    const id = Math.random() * 100;
    const newPost = {};
    newPost.id = id;
    newPost.title = post;

    const allPosts = [...posts, newPost];
    setPosts(allPosts);

    console.log(post);
  };

  return (
    <PostContext.Provider value={{ posts, add }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
