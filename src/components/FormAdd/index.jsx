import React, { useEffect } from "react";
import moment from "moment/moment";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormAdd = () => {
  let navigate = useNavigate();
  const date = localStorage.getItem("addDay");
  useEffect(() => {
    if (date === "") navigate("/");
  }, []);
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
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 "
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <textarea
          className="mb-2 h-14 "
          placeholder="Text"
          {...register("description")}
        />
        <input
          className="mb-2"
          defaultValue={date}
          {...register("dayts", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <input className="cursor-pointer border border-sky-900 rounded" type="submit" />
      </form>
    </div>
  );
};

export default FormAdd;
