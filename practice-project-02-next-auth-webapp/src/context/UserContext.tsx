"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface UserContextType {
  user: UserType | null | undefined;
  setUser: (user: UserType) => void;
}

interface UserType {
  name: string;
  email: string;
  id: string;
  image?: string;
}

export const userDataContext = React.createContext<UserContextType | undefined>(
  undefined
);

function UserContext({ children }: { children: React.ReactNode }) {
  const session = useSession();

  const [user, setUser] = useState<UserType | null>();

  const data = {
    user,
    setUser,
  };

  useEffect(() => {
    async function getUser() {
      try {
        const result = await axios("/api/user");
        setUser(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, [session]);

  return (
    <userDataContext.Provider value={data}>{children}</userDataContext.Provider>
  );
}

export default UserContext;
