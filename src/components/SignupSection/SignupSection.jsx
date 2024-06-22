import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import SignupForm from "../SignupForm/SignupForm";

const SignupSection = () => {
  return (
    <div className="w-full flex flex-col   items-center h-screen">
      <Banner />
      <Header />
      <div className="w-full h-full flex justify-center items-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupSection;
