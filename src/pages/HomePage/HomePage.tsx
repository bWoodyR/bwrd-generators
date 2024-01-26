import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl">GENERATORS</h1>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <Button>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </div>
   
    </section>
  );
};

export default HomePage;
