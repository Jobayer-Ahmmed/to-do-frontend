import { useState } from "react";
import { Link } from "react-router-dom";

const TaskInfo = () => {
    const [taskType, setTaskType] = useState("See All Task")

    const handleFilter=(option)=>{
      if(option === "To Do Task"){
        setTaskType(option)
      }
      if(option === "Ongoing Task"){
        setTaskType(option)
      }
      if(option === "Complete Task"){
        setTaskType(option)
      }
      else{
        setTaskType(option)
      }
    }
  return (
    <div className="px-xPadding2 md:m-xPadding flex justify-center my-myMargin">

<div>
<div className="flex justify-between mb-8">
    <Link to="/addtask" className="btn btn-outline">Add Task</Link>

{/* filter task */}
    <select onChange={(e)=>handleFilter(e.target.value)} name="filter" id="" className="bg-base-300 p-2">
        <option value="See All Task">See All Task</option>
        <option value="To Do Task">To Do Task</option>
        <option value="Ongoing Task">Ongoing Task</option>
        <option value="Complete Task">Complete Task</option>
    </select>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {
          (taskType === "To Do Task" || taskType === "See All Task") && <div className="border-[2px] rounded shadow-xl p-10">
          <h2>To Do Task</h2>
          <div>
            <div className="grid grid-cols-2">
              <p>Task Name</p>
              <p>Desciption</p>
            </div>
          </div>
        </div>
        }
        {
          (taskType === "Ongoing Task" || taskType === "See All Task") && <div className="border-[2px] rounded shadow-xl p-10">
          <h2>Ongoing Task</h2>
          <div>

              <tr>
                <th>Task Name</th>
                <th>Description</th>
              </tr>

          </div>
        </div>
        }
        {
          (taskType === "Complete Task" || taskType === "See All Task") && <div className="border-[2px] rounded shadow-xl p-10">
          <h2>Complete Task</h2>
          <div>

              <tr>
                <th>Task Name</th>
                <th>Description</th>
              </tr>

          </div>
        </div>
        }

      </div>
</div>
    </div>
  );
};

export default TaskInfo;
