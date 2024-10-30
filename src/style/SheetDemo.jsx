import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoChatbubbleOutline } from "react-icons/io5";
export function SheetDemo() {
  return (
    <div>
      <Sheet>
        <SheetTrigger
          asChild
          className='rounded-full absolute right-0 h-14 w-14 shadow-lg md:top-80 top-[500px]'
        >
          <Button variant='outline'>
            <IoChatbubbleOutline />
          </Button>
        </SheetTrigger>
        <SheetContent className='overflow-scroll transition-custom'>
          <SheetHeader>
            <div className='flex flex-col gap-4'>
              comments
              <SheetTitle>name</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>{" "}
              <SheetTitle>name</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </div>
          </SheetHeader>
          <div className='grid gap-8 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                title
              </Label>
              <Input id='name' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                description
              </Label>
              <Input id='username' className='col-span-3' />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit'>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
