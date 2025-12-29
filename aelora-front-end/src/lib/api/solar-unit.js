const baseUrl = "http://localhost:8000/api";  // Base URL for the API

// Function to get a solar unit by its ID

export const getSolarUnitById = async (id) => {
  try {
    // Make the API call to fetch the solar unit by ID
    const res = await fetch(`${baseUrl}/solar-units/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    const data = await res.json();  // Parse the JSON response
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
