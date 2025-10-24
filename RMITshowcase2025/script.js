const img = document.querySelector("#test-img");
async function loadData() {
  try {
    const response = await fetch("s4021256/data_EXAMPLE.json"); // Path to your JSON file
    const data = await response.json(); // Parse the JSON data
    displayData(data); // Call a function to display the data
  } catch (error) {
    console.error("Error fetching or parsing JSON:", error);
  }
}
