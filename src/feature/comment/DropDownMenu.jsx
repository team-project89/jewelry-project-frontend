import { Button } from "@/components/ui/button";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useOpen } from "@/context/NavbarOpen";
export function DropdownMenuDemo() {
  const { open, handleClick } = useOpen();

  return (
    <div className='block lg:hidden'>
      <DropdownMenu open={open} onOpenChange={handleClick}>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' onClick={handleClick}>
            {open ? <IoCloseOutline /> : <HiOutlineMenu />}
          </Button>
        </DropdownMenuTrigger>

        {open && (
          <DropdownMenuContent className='w-screen mt-4 '>
            <DropdownMenuSeparator />
            <div>Find Designer</div>
            <DropdownMenuGroup className='border-l-2 p-4 m-3'>
              <DropdownMenuItem>Designer Search</DropdownMenuItem>
              <DropdownMenuItem>Post a Job</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem>Inspiration</DropdownMenuItem>
              <DropdownMenuItem>Jobs</DropdownMenuItem>
              <DropdownMenuItem>Go Pro</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
