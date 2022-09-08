import React, { useEffect } from "react";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const FormChange = () => {
  let navigate = useNavigate();
  const { changeKey } = useSelector((state) => state.changeKey);
  const items = JSON.parse(localStorage.getItem(changeKey));
  console.log(items);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem(
      data.dayts,
      JSON.stringify({
        title: data.title,
        description: data.description,
        creation: moment().format("DD/MM/YYYY HH:mm"),
      })
    );
    navigate("/");
  };
  const deletePost = () => {
    localStorage.removeItem(changeKey);
    navigate("/");
  };

  return (
    <>
      <p>Edit</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={items.title}
          {...register("title", { required: true })}
        />
        <input defaultValue={items.description} {...register("description")} />
        <input defaultValue={changeKey} {...register("dayts")} />
        <p>Changed: {items.creation}</p>
        {errors.exampleRequired && <span>This field is required</span>}
        <input value="save" type="submit" />
      </form>
      <button onClick={deletePost}>Delete</button>
    </>
  );
};

export default FormChange;
