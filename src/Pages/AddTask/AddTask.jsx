import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios/useAxios";
import moment from "moment";

const AddTask = () => {
  const addToDoAxios = useAxios()
  const nowTime = moment().format("YYYY-MM-DD"); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {task_name, task_description, task_expected_completed_date } = data

    addToDoAxios.post("/to-do-task", {
      task_name,
      task_description,
      task_initial_date:nowTime,
      task_expected_completed_date
    })
    .then(res=>console.log(res))

  };

  return (
    <div className="flex justify-center my-myMargin">
      <div className=" border-[2px] p-10 rounded shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("task_name", { required: true })}
            type="text"
            placeholder="Task Name"
            className="w-72 h-10 px-3 rounded-sm outline-none border-[2px]"
          />{" "}
          <br />
          {errors.task_name && <span>Task Name is required</span>} <br />
          <textarea
            {...register("task_description")}
            type="text"
            placeholder="Task Description"
            className="w-72 h-40 px-3 rounded-sm outline-none border-[2px] pt-2 mb-3"
          />{" "}
          <br />

          <label>Last Date to Complete The Task</label><br />
          <input
            {...register("task_expected_completed_date", { required: true })}
            type="date"
            className="w-72 h-10 px-3 rounded-sm outline-none border-[2px] mb-8"
          />{" "}
          <br />

          <input type="submit" className="btn btn-primary" value="Add Task"/>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
