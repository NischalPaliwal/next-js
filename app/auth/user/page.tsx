import axios from "axios";

async function getUser() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function User() {
    const data = await getUser();
    return (
        <div>
            {data.name}<br />
            {data.email}
        </div>
    )
}