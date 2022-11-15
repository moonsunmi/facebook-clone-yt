import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        className=" object-contain"
        src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
        height={200}
        width={200}
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
