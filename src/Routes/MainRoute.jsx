import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayouts from "../Layout/MainLayouts";
import Register from "../Pages/Register/Register";




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
            }
           
        ]
    }
])

export default routes