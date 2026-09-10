import API_BASE_URL from "./api";

export const signup = async ({
  name,
  email,
  password,
  phone,
}) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Signup failed"
    );
  }

  return data;
};

export const login = async ({
  email,
  password,
}) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Login failed"
    );
  }

  return data;
};

export const logout = async () => {
  const response = await fetch(
    `${API_BASE_URL}/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Logout failed"
    );
  }

  return data;
};

export const getMe = async () => {
  const response = await fetch(
    `${API_BASE_URL}/auth/me`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Authentication required"
    );
  }

  return data;
};