import {
  signup,
  login,
  logout,
  getMe,
} from "../services/authService";

const AuthTest = () => {
  const handleSignup = async () => {
    try {
      const data = await signup({
        name: "Frontend Test User",
        email: `frontend${Date.now()}@test.com`,
        password: "Test@12345",
        phone: "9999999999",
      });

      console.log("SIGNUP SUCCESS:", data);
    } catch (error) {
      console.error("SIGNUP ERROR:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const data = await login({
        email: "YOUR_TEST_EMAIL",
        password: "YOUR_TEST_PASSWORD",
      });

      console.log("LOGIN SUCCESS:", data);
    } catch (error) {
      console.error("LOGIN ERROR:", error);
    }
  };

  const handleGetMe = async () => {
    try {
      const data = await getMe();

      console.log("GET ME SUCCESS:", data);
    } catch (error) {
      console.error("GET ME ERROR:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const data = await logout();

      console.log("LOGOUT SUCCESS:", data);
    } catch (error) {
      console.error("LOGOUT ERROR:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          Auth Service Test
        </h1>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={handleSignup}
            className="w-full rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Test Signup
          </button>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Test Login
          </button>

          <button
            type="button"
            onClick={handleGetMe}
            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-500"
          >
            Test Get Me
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-500"
          >
            Test Logout
          </button>
        </div>
      </div>
    </main>
  );
};

export default AuthTest;