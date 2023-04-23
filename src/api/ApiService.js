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
      const jwtToken = response.data.body.token;
      // console.log("LoginUser Successfully:", response.data);
      return jwtToken;
    } catch (error) {
      console.error("Error logging in:", error);

      if (error.response) {
        const errorCode = error.response.status;

        if (errorCode === 400) {
          console.error("Invalid fields or bad request.");
          // Afficher un message d'erreur à l'utilisateur
        } else if (errorCode === 500) {
          console.error("Internal server error.");
        }
      }
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
      // console.log("getUserProfile Successfully:", response.data);
      // console.log("First Name:", response.data.body.firstName);
      return {
        status: response.data.status,
        message: response.data.message,
        body: response.data.body,
      };
    } catch (error) {
      console.error("Error logging in:", error);

      if (error.response) {
        const errorCode = error.response.status;

        if (errorCode === 400) {
          console.error("Invalid fields or bad request.");
          // Afficher un message d'erreur à l'utilisateur
        } else if (errorCode === 500) {
          console.error("Internal server error.");
          // Afficher un message d'erreur à l'utilisateur
        }
      }
    }
  },

  updateUserProfile: async (jwtToken, updatedProfile) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        updatedProfile,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Erreur lors de la mise à jour du profil.");
      }

      return response.data.body;
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  },
};

export default ApiService;
