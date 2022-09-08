import React, { useEffect } from "react";
import moment from "moment/moment";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormAdd = () => {
  let navigate = useNavigate();
  const { date } = useSelector((state) => state.addPost);
  useEffect(()=>{
    if(date==='') navigate('/')
  },[])
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} />
        <input {...register("description")} />
        <input defaultValue={date} {...register("dayts",{ required: true})} />

        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default FormAdd;
