import { SignIn } from "@clerk/clerk-react";
const SignInPage = () => {
  return (
    <div>
      <SignIn afterSignInUrl="/generators"></SignIn>
    </div>
  );
};

export default SignInPage;
