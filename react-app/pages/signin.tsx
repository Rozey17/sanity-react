import { Layout } from "../components/layout";
import { SigninForm } from "../components/signinForm";

const Signin = () => {
  return (
    <Layout>
      <div className="p-20 space-y-10 bg-gradient-to-r from-rose-100 to-teal-100">
        <SigninForm />
      </div>
    </Layout>
  );
};

export default Signin;
