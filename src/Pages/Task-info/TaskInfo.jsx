import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios/useAxios";

const TaskInfo = () => {
  const [taskType, setTaskType] = useState("See All Task");
  const [toDoTaskData, setToDoTaskData] = useState([]);
  const [ongoingTaskData, setOngoingTaskData] = useState([]);
  const [completeTaskData, setCompleteTaskData] = useState([]);
  const taskAxios = useAxios();

  useEffect(() => {
    taskAxios.get("/to-do-task").then((res) => setToDoTaskData(res.data));
    taskAxios
      .get("/push-to-do-task")
      .then((res) => setOngoingTaskData(res.data));
    taskAxios
      .get("/complete-task")
      .then((res) => setCompleteTaskData(res.data));
  }, [taskAxios]);

  const handlePushToDo = (data) => {
    const {
      _id,
      task_name,
      task_description,
      task_initial_date,
      task_expected_completed_date,
    } = data;
    taskAxios
      .post("/push-to-do-task", {
        task_name,
        task_description,
        task_initial_date,
        task_expected_completed_date,
      })
      .then((res) => console.log(res));

    taskAxios.delete(`/to-do-task/${_id}`).then((res) => console.log(res));
  };

  const handleCompleteToDo = (data) => {
    const {
      _id,
      task_name,
      task_description,
      task_initial_date,
      task_expected_completed_date,
    } = data;
    taskAxios
      .post("/complete-task", {
        task_name,
        task_description,
        task_initial_date,
        task_expected_completed_date,
      })
      .then((res) => console.log(res));

    taskAxios.delete(`/ongoing-task/${_id}`)
    .then((res) => console.log(res));
  };

  const handleDeleteTask = (id) => {
    taskAxios.delete(`/complete-task/${id}`)
    .then(res=>console.log(res))
  };

  const handleFilter = (option) => {
    if (option === "To Do Task") {
      setTaskType(option);
    }
    if (option === "Ongoing Task") {
      setTaskType(option);
    }
    if (option === "Complete Task") {
      setTaskType(option);
    } else {
      setTaskType(option);
    }
  };
  return (
    <div className="px-xPadding2 md:m-xPadding flex justify-center my-myMargin">
      <div className="w-full">
        <div className="flex justify-between mb-8">
          <Link to="/addtask" className="btn btn-outline">
            Add Task
          </Link>

          {/* filter task */}
          <select
            onChange={(e) => handleFilter(e.target.value)}
            name="filter"
            id=""
            className="bg-base-300 p-2"
          >
            <option value="See All Task">See All Task</option>
            <option value="To Do Task">To Do Task</option>
            <option value="Ongoing Task">Ongoing Task</option>
            <option value="Complete Task">Complete Task</option>
          </select>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
          {(taskType === "To Do Task" || taskType === "See All Task") && (
            <div className="border-[2px] rounded shadow-xl p-10">
              <h2 className="text-xl font-medium">To Do Task</h2>

              {toDoTaskData?.map((data, id) => (
                <div
                  key={data._id}
                  className="w-full flex flex-wrap items-center align-middle gap-5 mt-3"
                >
                  <p>{id + 1}. </p>
                  <p>{data.task_name}</p>
                  <Link
                    className="btn btn-sm btn-outline"
                    onClick={() => handlePushToDo(data)}
                  >
                    Push It Ongoing
                  </Link>
                  <Link className="btn btn-sm btn-outline">Details</Link>
                </div>
              ))}
            </div>
          )}
          {(taskType === "Ongoing Task" || taskType === "See All Task") && (
            <div className="border-[2px] rounded shadow-xl p-10">
              <h2 className="text-xl font-medium">Ongoing Task</h2>

              {ongoingTaskData?.map((data, id) => (
                <div
                  key={data._id}
                  className="flex flex-wrap items-center align-middle gap-3 mt-6"
                >
                  <p>{id + 1}. </p>
                  <p>{data.task_name}</p>
                  <Link
                    className="btn btn-sm btn-outline"
                    onClick={() => handleCompleteToDo(data)}
                  >
                    Push It Complete
                  </Link>
                  <Link className="btn btn-sm btn-outline">Details</Link>
                </div>
              ))}
            </div>
          )}
          {(taskType === "Complete Task" || taskType === "See All Task") && (
            <div className="border-[2px] rounded shadow-xl p-10">
              <h2 className="text-xl font-medium">Complete Task</h2>

              {completeTaskData?.map((data, id) => (
                <div
                  key={data._id}
                  className="flex flex-wrap items-center align-middle gap-3 mt-6"
                >
                  <p>{id + 1}. </p>
                  <p>{data.task_name}</p>
                  <Link
                    className="btn btn-sm btn-outline"
                    onClick={() => handleDeleteTask(data._id)}
                  >
                    Delete
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
