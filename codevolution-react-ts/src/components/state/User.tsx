import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogIn = () => {
    setUser({
      name: "felipe",
      email: "felipe@hotmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Log in</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is: {user?.name} </div>
      <div>User email is: {user?.email} </div>
    </div>
  );
};
