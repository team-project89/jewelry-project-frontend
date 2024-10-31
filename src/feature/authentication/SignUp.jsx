import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function SignUp() {

  return (
    <Link to={"/auth"} className='signup-style'>
      <Button className='text-secondary-0 whitespace-nowrap font-semibold'>
        ثبت نام
      </Button>
    </Link>
  );
}

export default SignUp;
