import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function SignUp() {
  return (
    <Link
      to={"/auth"}
      className=' cursor-pointer bg-secondary-900 px-6 rounded-full h-[48px] flex justify-center items-center hover:opacity-60 transition-all'
    >
      <Button className='text-secondary-0 whitespace-nowrap font-semibold'>
        ثبت نام
      </Button>
    </Link>
  );
}

export default SignUp;
