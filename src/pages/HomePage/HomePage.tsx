import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-4 ">
      <div className="flex flex-col gap-4 justify-center items-center w-full md:w-1/2 text-center">
        <h1 className="text-5xl text-blue-500 font-bold tracking-wider relative after:rounded-full after:w-20 after:h-20 after:bg-transparent after:absolute after:-top-24 after:left-32 md:after:-top-4 md:after:-left-24 after:outline after:outline-1 after:outline-red after:bg-[url('/generatorsImg.png')] after:bg-center after:bg-cover">
          Generators v2
        </h1>
        <p className="text-slate-600 font-medium">created by Roman Ďurek</p>
        <p className="text-balance text-center font-medium tracking-wide text-lg">Generate captivating Lorem Ipsum, craft random birth numbers, and effortlessly create daily reports. Enjoy secure exploration with Clerk authentication, customize languages, and stay tuned for exciting updates</p>
        <p>🚀#Innovation 🎨#Creativity</p>
      </div>
      <div>
        <SignedIn>
          <Link to={"/generators"}>
            <Button>Go To Generators</Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <Button>
            <Link to="/sign-in">SIGN IN</Link>
          </Button>
        </SignedOut>
      </div>
    </section>
  );
};

export default HomePage;
