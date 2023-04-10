import axios from "axios";

const ApiService = {
  LoginUser: async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      // console.log(response);
      const jwtToken = response.data.body.token;
      console.log("JWT Token:", jwtToken);

      return jwtToken;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  },

  getUserProfile: async (jwtToken) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log(response);
      return response.data.body;
    } catch (error) {
      console.error("Error getting user profile:", error);
    }
  },
};

export default ApiService;
