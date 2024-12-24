import React from 'react'
import {Link} from "react-router-dom" ;
import {useState} from "react" ;

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Form Data:", formData); 
  };


  return (
       <div>
        <div className="bg-gray-100 h-screen">
        <div className="flex justify-center container mx-auto">
        <form onSubmit={handleSubmit}>
        <div className="bg-slate-50 my-40 pt-7 text-center rounded-lg shadow-lg p-20 max-w-xl">
        <h1 className="font-serif text-4xl font-bold tracking-widest">Login</h1>
        <label className="block text-sm mt-4 text-start mb-2 text-slate-700">email:</label>
        <input value={formData.email} name="email" onChange={handleChange}  type="email" className="form-input rounded-2xl mb-2 px-4 py-3 h-10 w-full max-w-2xl" placeholder='example@gmail.com'/>
        <label className="block text-sm mt-4 text-start mb-2 text-slate-700">password:</label>
        <input value={formData.password} name="password" onChange={handleChange} type="password" className="form-input rounded-2xl mb-2 px-4 py-3 h-10 w-full max-w-2xl" placeholder='password'/>
        <button type='submit' className="bg-black hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-2xl w-full max-w-2xl mt-5 mb-4">
         Login
        </button>
        <p>Don't have an account ? <Link to="Signup" className="text-orange-400">SignUp</Link></p>
      </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login
