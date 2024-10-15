import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Link
      to={"/signup"}
      className=' bg-secondary-900 px-6 rounded-full h-[48px] flex justify-center items-center hover:opacity-60 transition-all'
    >
      <div className='text-secondary-0 font-semibold'>
        <span> SignUp</span>
      </div>
    </Link>
  );
}

export default SignUp;
