import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions";
import CreatePost from "./createPost";
import EditPost from "./editPost";
import DeletePost from "./deletePost";
import Loading from "./helper/loading";
import Post from "./post";
import { Message, Button } from "../component/helper/Forms";
import { Grid, StyledAlbum } from "../component/helper/Grid";

const App = () => {
  //Display states
  const posts = useSelector((state) => state.PostReducer.posts);
  const isLoading = useSelector((state) => state.PostReducer.loading);

  //Dispatches
  const dispatch = useDispatch();

  const showList = () => {
    const postList = posts.map((item) => (
      <StyledAlbum key={item.id}>
        <Post id={item.id} title={item.title} body={item.body} />
      </StyledAlbum>
    ));
    return postList;
  };

  return (
    <div className="App">
      <Message className="postlists">
        Performing CRUD from JSON placeholder
      </Message>
      <br />
      <Button onClick={() => dispatch(fetchPosts())}>Click to see posts</Button>

      {/* list posts in a Grid */}
      {posts.length > 0 ? (
        <Grid>
          <StyledAlbum>
            <CreatePost />
          </StyledAlbum>

          <StyledAlbum>
            <EditPost />
          </StyledAlbum>

          <StyledAlbum>
            <DeletePost />
          </StyledAlbum>
        </Grid>
      ) : (
        ""
      )}
      {isLoading ? <Loading /> : <Grid>{showList()}</Grid>}
    </div>
  );
};
export default App;
