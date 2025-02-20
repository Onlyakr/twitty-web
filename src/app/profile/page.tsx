"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <div>
          <div></div>
          <div>
            <h1>User</h1>
            <h2></h2>
          </div>
        </div>
      </div>
    );
  }
  return <div>Hello</div>;
};

export default Profile;
