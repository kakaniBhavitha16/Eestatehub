import  {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user) 
  return (
    <div className=' p-3 max-w-lg mx-auto'>
       <h1 className='p-11 text-3xl text-center text-gray-900 font-semibold my-7'>
        Profile</h1>
        <form className='flex flex-col gap-4' >
          <img className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 ' src={currentUser.avatar} alt="profile " />
          <input type="text" placeholder="username" id="username"  className='border p-3 rounded-lg  m-2 bg-white'/>
          <input type="email" placeholder="email" id="email" className='border p-3 rounded-lg  m-2 bg-white'  />
          <input type="text" placeholder="passsword" id="password" className='border p-3 rounded-lg  m-2 bg-white' />
          <button className='p-3 uppercase bg-slate-700 text-white rounde-lg hover:opacity-95'>UPDATE</button>
        </form>
        <div className="flex justify-around mt-5">
          <span className='text-red-600 cursor-pointer '>Delete Account</span>
          <span className='text-red-600 cursor-pointer '>Sign Out</span> 
        </div>
    </div> 
  ) 
} 