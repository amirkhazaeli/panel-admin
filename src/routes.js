import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import Users from "./pages/users/Users";

let Routes = [
    { path:'/' , element: <Home />},
    { path:'/users' , element: <Users />},
    { path:'/newUser' , element: <NewUser />}
]
export default Routes;