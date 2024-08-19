import axios from 'axios';

// Tạo một instance của Axios
const axiosInstance = axios.create({
  baseURL: 'https://localhost:7220', // Thay đổi URL cơ bản của API của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm một interceptor để đính kèm token vào mỗi yêu cầu
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Hoặc lấy token từ một nơi khác
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;