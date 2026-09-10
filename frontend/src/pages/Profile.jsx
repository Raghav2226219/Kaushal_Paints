import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Customer Account
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            View your account information.
          </p>
        </div>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Name
              </p>

              <p className="mt-2 text-base font-medium text-gray-900">
                {user?.name || "Not available"}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Email
              </p>

              <p className="mt-2 break-all text-base font-medium text-gray-900">
                {user?.email || "Not available"}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Phone
              </p>

              <p className="mt-2 text-base font-medium text-gray-900">
                {user?.phone || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Account ID
              </p>

              <p className="mt-2 text-base font-medium text-gray-900">
                #{user?.id || "—"}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;