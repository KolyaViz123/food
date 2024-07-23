import { FC } from "react";
import img from "../assets/http-404-error-message-information-not-found-c67377ad6962cc3d650a3312a110d3a1.png";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 text-white">
      <img src={img} alt="img" />
      <Link
        to={"/"}
        className="rounded-md bg-sky-500 px-6 py-2 hover:bg-sky-600"
      >
        {" "}
        Home{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
