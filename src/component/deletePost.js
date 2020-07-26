import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions";
import { Form, Label, Input, Button } from "../component/helper/Forms";

const DeletePost = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
  });

  //destructuring form data
  const { id } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(deletePost({ id }));
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
            placeholder="Insert ID to Delete"
            onChange={onChange}
            value={id}
          />
        </div>

        <Button type="submit">Delete Post</Button>
      </Form>
    </div>
  );
};
export default DeletePost;
