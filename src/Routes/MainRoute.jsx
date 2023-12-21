import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayouts from "../Layout/MainLayouts";



const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayouts/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

export default routes