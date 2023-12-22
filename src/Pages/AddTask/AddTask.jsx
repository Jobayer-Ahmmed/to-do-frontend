import { useForm } from "react-hook-form";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center my-myMargin">
      <div className=" border-[2px] p-10 rounded shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("task_Name", { required: true })}
            type="text"
            placeholder="Task Name"
            className="w-72 h-10 px-3 rounded-sm outline-none border-[2px]"
          />{" "}
          <br />
          {errors.task_Name && <span>Task Name is required</span>} <br />
          <textarea
            {...register("task_Description")}
            type="text"
            placeholder="Task Description"
            className="w-72 h-40 px-3 rounded-sm outline-none border-[2px] pt-2 mb-3"
          />{" "}
          <br />

          <label>Last Date to Complete The Task</label><br />
          <input
            {...register("task_complete_date", { required: true })}
            type="date"
            className="w-72 h-10 px-3 rounded-sm outline-none border-[2px]"
          />{" "}
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
