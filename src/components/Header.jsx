const Header = () => {
    return (
      <header className="flex justify-between items-center px-6 py-3 border-b">
        {/* Logo */}
        <h1 className="text-blue-600 text-lg font-semibold whitespace-nowrap">DisAlert</h1>
  
        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-black">
          <a href="#" className="text-sm">Add</a>
          <a href="#" className="text-sm">Support</a>
          <a href="#" className="text-sm">SignUp</a>
          <button className="border px-3 py-1 text-sm rounded text-white bg-black">Login</button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  