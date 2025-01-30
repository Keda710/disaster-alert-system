import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="flex justify-between items-center h-20 px-16 pb-8 pt-12 border-b shadow-md  ">
        {/* Logo */}
        <Link to="/" className="text-blue-600 text-3xl font-semibold whitespace-nowrap dark:text-blue-500">DisAlert</Link>
  
        {/* Navigation */}
        <nav className="flex items-center space-x-8 text-lg text-black dark:text-white ">
          <a href="#" className="relative after:absolute after:bg-gray-500 after:h-[2px] after:w-0 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" >Add</a>
          <Link to="/help" className="relative after:absolute after:bg-gray-500 after:h-[2px] after:w-0 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" >Help</Link>
          <Link to="/signup" className="relative after:absolute after:bg-gray-500 after:h-[2px] after:w-0 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0" >SignUp</Link>
          <Link to="/login" className="border px-3 py-1 rounded text-white bg-black hover:bg-white hover:border-black hover:text-black transition-all duration-300">Login</Link>
        </nav>
      </header>
    );
  };
  
  export default Header;
  
  