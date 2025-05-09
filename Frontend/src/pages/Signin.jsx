
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInstart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../Components/OAuth";


export default function SignIn() {
  const [formData, setFormData] = useState({}); 
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange =  (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value
      }
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    dispatch(signInstart());
    const res = await fetch('/api/auth/Signin',
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
     const data = await res.json();
     if (data.success === false) {
      dispatch(signInFailure(data.message));
      return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    }catch (error) {
       dispatch(signInFailure(error.message));
     }
   }; 
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl pt-14 text-center text-blue-900 font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
         {/* <input type="text" placeholder="username" id="username" className='border p-3 rounded-lg' onChange={handleChange}/> */}
        <input type="email" placeholder="email" id="email" className='border p-3 rounded-lg' onChange={handleChange} />
        <input type="password" placeholder="password" id="password" className='border p-3 rounded-lg'onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 cursor-pointer'>
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an Account?</p>
        <Link to={"/sign-up"} >
        <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 text-center mt-3'>{error}</p>}
    </div>
  );
} 