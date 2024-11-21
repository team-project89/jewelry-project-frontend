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
import { Link } from "react-router-dom";

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
          <DropdownMenuContent className='w-screen mt-4 py-4'>
            <DropdownMenuGroup className='space-y-2'>
              <DropdownMenuItem asChild>
                <Link
                  dir='rtl'
                  to='/user/basket'
                  className='w-full text-center py-3 hover:bg-gray-50 transition-colors text-right'
                >
                  سبد خرید
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className='my-2' />
              <DropdownMenuItem asChild>
                <Link
                  dir='rtl'
                  to='/user/wishlist'
                  className='w-full text-center py-3 hover:bg-gray-50 transition-colors text-right'
                >
                  مورد علاقه‌ها
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
