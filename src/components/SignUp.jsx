export default function SignUp() {
    return (
      <div className="flex justify-center items-center min-h-screen dark:text-white dark:bg-transparent bg-gray-100">
        <div className="bg-white dark:bg-[#2d2d2d] p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">SignUp</h2>
          <form>
            <div className="mb-4 dark:text-white">
              <label className="block text-gray-700 dark:text-white">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white">Location</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your location"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              SignUp
            </button>
          </form>
          <p className="text-center text-gray-600 dark:text-white/40 mt-4">
            Already Registered? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </div>
      </div>
    );
  }
  