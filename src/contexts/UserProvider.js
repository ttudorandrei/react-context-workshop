import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const getProfileData = async () => {
    try {
      const profileData = await axios.get(
        "https://api.github.com/users/aidkool"
      );

      console.log(profileData.data);

      setUserData(profileData.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
