import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className=' bg-secondary-900 px-6 rounded-full h-[48px] flex justify-center items-center hover:opacity-60 transition-all'>
      <Link to={"/auth"} className='text-secondary-0 font-semibold'>
        SignUp
      </Link>
    </div>
  );
}

export default SignUp;
