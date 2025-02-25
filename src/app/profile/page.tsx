"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const profile = {
    name: session?.user?.name,
    email : session?.user?.email,
    image: session?.user?.image
  };
  if (session) {
    return (
      <div className="h-[90vh] w-screen p-14 flex justify-center items-center">
        <div className="container max-w-[300px] h-1/3 bg-white flex flex-col items-center justify-center px-8 py-20 space-y-8 rounded-3xl shadow-lg shadow-white md:h-1/2 md:max-w-[500px] ">
          <img src={profile.image} alt="" className="size-30 max-w-[100px] md:size-full md:max-w-[200px] md:max-h-[200px] rounded-full ring-2 ring-background"/>
          <div className="flex flex-col items-start space-y-4 text-background text-medium md:text-xl md:space-y-6">
            <h1>Name : {profile.name}</h1>
            <h2>Email : {profile.email}</h2>
          </div>
        </div>
      </div>
    );
  }
  return <div>Hello</div>;
};

export default Profile;
