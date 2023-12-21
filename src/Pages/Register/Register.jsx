import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../../ContextApi/MyAuthProvider";


const Register = () => {
  const { createMyUser } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
    const {username, email, password, confirm_password} = data
    console.log(username);
    if(password === confirm_password){
      createMyUser(email, password)
      .then(res=>console.log(res))
    }
    else{
      console.log("Password didnt match")
    }
  };

  return (
    <div className="px-xPadding2 md:m-xPadding flex justify-center">
      <div className=" bg-base-300 p-10 rounded-sm">
        <p className="text-center text-3xl  font-medium mb-5">Register Now</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", { required: true })}
            type="text"
            placeholder="Username"
            className="w-72 h-10 pl-5 rounded-sm"
          /> <br />
          {errors.username && <span>Username is required</span>} <br />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-72 h-10 pl-5 rounded-sm   mt-3"
          /> <br />
          {errors.email && <span>Email is required</span>} <br />
          <input
            {...register("password", { required: true })}
            type="Password"
            placeholder="password"
            className="w-72 h-10 pl-5 rounded-sm  mt-3"
          /> <br />
          {errors.password && <span>Password is required</span>} <br />
          <input
            {...register("confirm_password", { required: true })}
            type="password"
            placeholder="Confirm Password"
            className="w-72 h-10 pl-5 rounded-sm  mt-3 "
          /> <br />
          {errors.password && <span>Confirm Passwors is required</span>} <br />
          <input type="submit" value="Regsiter" className="btn btn-primary mt-3"/>

        </form>
      </div>
    </div>
  );
};

export default Register;
