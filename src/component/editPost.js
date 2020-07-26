import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../actions";
import { Form, Label, Input, Button } from "../component/helper/Forms";

const EditPost = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
    userId: "",
  });

  //destructuring form data
  const { id, title, body, userId } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id,
      title,
      body,
      userId,
    };

    dispatch(editPost(newPost));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>ID: </Label>
          <br />
          <Input
            type="text"
            name="id"
            placeholder="Insert ID"
            onChange={onChange}
            value={id}
          />
        </div>
        <br />
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
        <Button type="submit">Edit Post</Button>
      </Form>
    </div>
  );
};
export default EditPost;
