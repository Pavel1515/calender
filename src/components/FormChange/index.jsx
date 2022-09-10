import moment from "moment/moment";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const FormChange = () => {
  let navigate = useNavigate();
  const changeKey = localStorage.getItem("changeKey");
  const items = JSON.parse(localStorage.getItem(changeKey));
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
    navigate("/");
    localStorage.removeItem(changeKey);
    localStorage.removeItem("changeKey");
  };

  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center flex-col">
      <p>Edit</p>
      <form className="flex flex-col  " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start justify-between">
          <span>Title:</span>
          <input
            className="mb-2 w-52"
            defaultValue={items.title}
            {...register("title", { required: true })}
          />
        </div>

        <div className="flex items-start justify-between">
          <span>Text:</span>
          <textarea
            className="mb-2 w-52 "
            defaultValue={items.description}
            {...register("description")}
          />
        </div>

        <input
          className="mb-2 "
          defaultValue={changeKey}
          {...register("dayts")}
        />
        <p>Changed: {items.creation}</p>
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="mb-2 cursor-pointer border border-sky-900 rounded "
          value="Save"
          type="submit"
        />
      </form>
      <button
        className="w-60 bg-red-600 cursor-pointer border border-sky-900 rounded"
        onClick={deletePost}
      >
        Delete
      </button>
    </div>
  );
};

export default FormChange;
