import axios from "axios";

async function fetchProtectedData() {
  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await axios.get("http://localhost:3001/api/v1/protected", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching protected data:", error);
  }
}

export default fetchProtectedData;
