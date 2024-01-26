import { UserButton, useUser } from "@clerk/clerk-react";

const SidebarUser = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-center items-center gap-2">
      <UserButton></UserButton>
      <span className="hidden md:block">{user?.emailAddresses[0].emailAddress}</span>
    </div>
  );
};

export default SidebarUser;
