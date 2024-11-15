import UserNavlink from "@/style/UserNavlink";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Link to={"/auth"} className='signup-style'>
      <button className='text-secondary-0 whitespace-nowrap font-semibold'>
        ثبت نام
      </button>
    </Link>
  );
}

export default SignUp;
