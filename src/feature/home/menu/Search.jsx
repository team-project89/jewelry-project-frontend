import TextFieldSearch from "@/style/TextFieldSearch";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className='relative w-full'>
      <TextFieldSearch />
      <Link to={"/searchpage"}>
        <BsSearch className='  absolute left-4 w-5 h-5 top-1/2 transform -translate-y-1/2 text-secondary-400 xl:hidden' />
      </Link>
    </div>
  );
}

export default Search;
