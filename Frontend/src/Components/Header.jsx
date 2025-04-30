import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
     <header>
  <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-gradient-to-b from-white to-gray-100 p-3 shadow-sm z-50">
    <div className='flex items-center'>
      <img src="./logo.png" alt="logo" className='w-10 h-10 mr-2' />
      <Link to='/'>
        <h1 className="text-2xl font-bold ">
          <span className="text-teal-700">Estate</span>
        <span className="text-blue-900">Hub</span>
        </h1>
      </Link>
    </div>
    <div className='flex-grow mx-8 max-w-sm'>
      <form className="flex items-center bg-white rounded-md border border-gray-300 px-2 py-1 shadow-sm">
        <input
          type="search"
          placeholder="Search..."
          className="flex-grow text-base bg-transparent outline-none text-gray-700"
        />
        <FaSearch className='text-gray-500' />
      </form>
    </div>
    <div className=''>
      <ul className='flex gap-6'>
        <Link to='/'>
          <li className='text-gray-700 font-medium hover:underline cursor-pointer'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='text-gray-700 font-medium hover:underline cursor-pointer'>About</li>
        </Link>
        <Link to='/sign-in'>
          <li className='text-gray-700 font-medium hover:underline cursor-pointer'>Sign In</li>
        </Link>
      </ul>
    </div>
    
  </div>
</header>
 );
};

export default Header;