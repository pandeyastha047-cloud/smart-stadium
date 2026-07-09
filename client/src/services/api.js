const API_URL = "http://localhost:5000";


export async function getStadiumData() {
  const response = await fetch(`${API_URL}/api/stadium`);
  return response.json();
}


export async function getTickets() {
  const response = await fetch(`${API_URL}/api/tickets`);
  return response.json();
}