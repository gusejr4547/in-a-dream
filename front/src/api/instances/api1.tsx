import axios from "axios";
import { SERVER_URL } from "../../constants";

// Axios 인스턴스 생성
const api1 = axios.create({
  // baseURL: "http://52.78.186.98:8082", // API의 기본 URL
  // baseURL: "http://192.168.30.162:8080", // API의 기본 URL
  baseURL: SERVER_URL, // API의 기본 URL
});

// 요청 인터셉터 설정
api1.interceptors.request.use(
  (config) => {
    // 여기에 원하는 요청 전처리 로직을 추가할 수 있습니다.
    // 예를 들어, 토큰을 헤더에 추가하거나 요청 데이터를 수정할 수 있습니다.
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
api1.interceptors.response.use(
  (response) => {
    // 여기에 원하는 응답 후처리 로직을 추가할 수 있습니다.
    // 예를 들어, 응답 데이터를 가공하거나 에러 처리를 수행할 수 있습니다.
    // console.log(response);
    return response;
  },
  async (error) => {
    // 에러 처리 로직을 추가합니다.

    if (error.response.status === 401) {
      console.log("4014014014014010410401에러에러에러에ㅓ레ㅓㅇ");
    }
    return Promise.reject(error);
  }
);

export default api1;