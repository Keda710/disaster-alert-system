export default function Login() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-transparent">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96 dark:bg-[#2d2d2d]">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 dark:text-white/40 mt-4">
            New User? <a href="/signup" className="text-blue-600 hover:underline">SignUp</a>
          </p>
        </div>
      </div>
    );
  }
  