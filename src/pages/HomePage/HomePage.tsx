import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-[url('/generatorsImg.png')] bg-cover bg-center">
      <div className="bg-black p-8 flex flex-col gap-4 rounded-xl">
        <SignedIn>
          <Link to={"/generators"}>
            <Button>Go To Generators</Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <p className="text-lg">Sign in to use this application</p>
          <Button>
            <Link to="/sign-in">SIGN IN</Link>
          </Button>
        </SignedOut>
      </div>
    </section>
  );
};

export default HomePage;
