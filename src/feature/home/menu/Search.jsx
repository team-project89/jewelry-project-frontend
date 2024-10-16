import TextField from "@/style/TextField";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className='relative w-full'>
      <TextField />
      <Link to={"/searchpage"}>
        <BsSearch className='  absolute right-2 w-5 h-5 top-1/2 transform -translate-y-1/2 text-secondary-400 xl:hidden' />
      </Link>
    </div>
  );
}

export default Search;
