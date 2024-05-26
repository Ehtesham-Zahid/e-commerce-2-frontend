import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import SigninForm from "../SigninForm/SigninForm";

const SigninSection = () => {
  return (
    <div className="w-screen flex flex-col   items-center h-screen">
      <Banner />
      <Header />
      <div className="w-full h-full flex justify-center items-center">
        <SigninForm />
      </div>
    </div>
  );
};

export default SigninSection;
