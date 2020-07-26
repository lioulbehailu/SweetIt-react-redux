import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions";
import { Form, Label, Input, Button } from "../component/helper/Forms";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: "",
  });

  //destructuring form data
  const { title, body, userId } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      userId,
    };

    dispatch(createPost(newPost));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>Title: </Label>
          <br />
          <Input
            type="text"
            name="title"
            placeholder="Insert Title"
            onChange={onChange}
            value={title}
          />
        </div>
        <br />
        <div>
          <Label>Body: </Label>
          <br />
          <Input
            name="body"
            placeholder="Insert Body of the post"
            onChange={onChange}
            value={body}
          />
        </div>
        <br />
        <div>
          <Input
            type="text"
            name="userId"
            placeholder="Insert user Id"
            onChange={onChange}
            value={userId}
          />
        </div>
        <Button type="submit">Create Post</Button>
      </Form>
    </div>
  );
};
export default CreatePost;
