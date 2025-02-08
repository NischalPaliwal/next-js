import axios from "axios";

async function getUser() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data;
}

export default async function User() {
    const data = await getUser();
    return (
        <div>
            {data.name}
            {data.email}
        </div>
    )
}