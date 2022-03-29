import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TestAxios({ url }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(url);
      setUser(res.data);
    };

    getUserData();
  }, []);

  return (
    <div>
      {user ? <p data-testid="name">{user.title}</p> : <span>Loading...</span>}
    </div>
  );
}
