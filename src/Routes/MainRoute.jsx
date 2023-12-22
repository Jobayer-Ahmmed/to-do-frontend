import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayouts from "../Layout/MainLayouts";
import Register from "../Pages/Register/Register";
import TaskInfo from "../Pages/Task-info/TaskInfo";
import AddTask from "../Pages/AddTask/AddTask";




const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayouts/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/task-info",
                element:<TaskInfo/>
            },
            {
                path:"/addtask",
                element:<AddTask/>
            }
           
        ]
    }
])

export default routes