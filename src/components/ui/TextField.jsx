import { Input } from "@/components/ui/input";

function TextField({ label, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className='block mb-3 text-size'>{label}</label>
      <Input type={type} className='input-style w-full p-4 mb-8' />
    </div>
  );
}

export default TextField;
