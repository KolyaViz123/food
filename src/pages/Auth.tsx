import { FC, useState } from "react";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className="mt-40 flex flex-col  items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? "Login" : "Registration"}
      </h1>

      <form className="mx-auto flex w-1/3 flex-col gap-5">
        <input type="text" className="input" placeholder="email" />
        <input type="password" className="input" placeholder="password"/>

        <button className="btn btn-green mx-auto">submit</button>
      </form>
    </div>
  );
};

export default Auth;
