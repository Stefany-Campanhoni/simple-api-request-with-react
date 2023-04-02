import axios from "axios"

export async function getAllUsers() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")

  return data
}
