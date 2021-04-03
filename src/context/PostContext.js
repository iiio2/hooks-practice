import { useReducer, createContext } from 'react';
import * as postReducer from '../reducers/PostReducer';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(
    postReducer.addReducer,
    postReducer.initialState.posts
  );

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
