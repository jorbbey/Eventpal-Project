import { fetchUserId } from "./user-id";

export const fetchUserData = async () => {
    const {UserId} = await fetchUserId()
    console.log('This is log from userdata: ', UserId);
    
    try {
      const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/user/${UserId}/`;

      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorMessage = `Error: ${res.status} ${res.statusText}`;
        console.log(errorMessage);
        throw new Error(errorMessage);
      }

      const data = await res.json();
      console.log('user data: ', data);

      return{data, error: null}

    } catch (error) {
      console.log("Fetch error: ", error.message);
      return{data: null, error: error}
    }
  };