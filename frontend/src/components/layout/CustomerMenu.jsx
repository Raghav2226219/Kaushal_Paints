import { NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const CustomerMenu = ({ onNavigate }) => {
  const { user } = useAuth();

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  const getLinkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
      isActive
        ? "bg-gray-900 text-white shadow-sm"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-gray-200 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Customer
        </p>

        <p className="mt-1 truncate text-base font-semibold text-gray-900">
          {user?.name}
        </p>

        <p className="mt-1 truncate text-sm text-gray-500">
          {user?.email}
        </p>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        <NavLink
          to="/products"
          onClick={handleNavigate}
          className={getLinkClass}
        >
          Products
        </NavLink>

        <NavLink
          to="/quote"
          onClick={handleNavigate}
          className={getLinkClass}
        >
          Quote Cart
        </NavLink>

        <NavLink
          to="/services"
          onClick={handleNavigate}
          className={getLinkClass}
        >
          Services
        </NavLink>

        <NavLink
          to="/quotes"
          onClick={handleNavigate}
          className={getLinkClass}
        >
          Quote History
        </NavLink>

        <NavLink
          to="/profile"
          onClick={handleNavigate}
          className={getLinkClass}
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default CustomerMenu;