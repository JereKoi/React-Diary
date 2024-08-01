import axios from "axios";

// Set up Axios interceptors for token inclusion
axios.interceptors.request.use(
  (config) => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleLogin = async (email, password) => {
  try {
    const response = await axios.post("/api/signin", { email, password });
    const { data } = response;

    if (data.status === "SUCCESS") {
      window.location.href = data.redirectUrl;
    } else {
      // Handle failed login (display error message, etc.)
      console.log(data.message);
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
