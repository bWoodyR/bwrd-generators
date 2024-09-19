import React, { useCallback } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useGeneratorsUsers } from "@/services/api/useGenerators";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const { mutate, isPending } = useGeneratorsUsers();

  const addUserOrGetUser = useCallback(() => {
    mutate({
      email: user?.emailAddresses[0].emailAddress as string,
      firstName: user?.firstName as string,
      lastName: user?.lastName as string,
      clerkId: user?.id as string,
    });
  }, [mutate, user?.emailAddresses, user?.firstName, user?.lastName, user?.id]);

  React.useEffect(() => {
    if (!userId && isLoaded) {
      navigate("/sign-in");
    }
    if (userId) addUserOrGetUser();
  }, [navigate, userId, isLoaded, addUserOrGetUser]);

  if (!isLoaded || isPending)
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );

  if (!userId) return "Login required...";

  // if (userId) mutate();

  return (
    <>
      <section className="flex relative">
        <Sidebar />
        <div className="ml-[75px] lg:ml-[250px] w-full  mt-4  overflow-hidden">
          <Outlet />
        </div>
      </section>
    </>
  );
}
