import { UserButton, useUser } from "@clerk/clerk-react";

const SidebarUser = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-center items-center gap-2">
      <UserButton afterSignOutUrl="/"></UserButton>
      <span className="hidden lg:block">{user?.emailAddresses[0].emailAddress}</span>
    </div>
  );
};

export default SidebarUser;
