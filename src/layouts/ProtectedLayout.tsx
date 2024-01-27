import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!userId && isLoaded) {
      navigate("/sign-in");
    }
  }, [navigate, userId, isLoaded]);

  if (!isLoaded)
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );

  if (!userId) return "Login required...";

  return (
    <>
      <section className="flex relative">
        <Sidebar />
        <div className="ml-[75px] md:ml-[250px] w-full  mt-4  overflow-hidden">
          <Outlet />
        </div>
      </section>
    </>
  );
}
