const baseUrl = "http://localhost:8000/api";  // Base URL for the API

// Function to get energy generation records by solar unit ID

export const getEnergyGenerationRecordsBySolarUnit = async (solarUnitId) => {
  const res = await fetch(
    `${baseUrl}/energy-generation-records/solar-unit/${solarUnitId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};
