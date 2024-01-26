import * as React from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!userId && isLoaded) {
      navigate("/sign-in");
    }
  }, [navigate, userId, isLoaded]);

  if (!isLoaded) return "Loading...";

  if (!userId) return "Login required...";

  return (
    <>
      <section className="flex relative">
        <Sidebar />
        <div className="flex flex-col gap-8 w-full">
          <h1 className="ml-[90px] mt-4 text-4xl md:ml-[270px]">Hello, {user?.firstName}</h1>
          <div className="ml-[75px] md:ml-[250px] ">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
