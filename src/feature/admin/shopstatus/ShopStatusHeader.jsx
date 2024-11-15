import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "@/style/Modal";
import CreateShopStatus from "./CreateShopStatus";
import { useGetShopStatus } from "@/feature/home/listofhomeitems/shopstatus/useGetShopStatus";
import Empty from "@/style/Empty";

function ShopStatusHeader() {
  const [open, setOpen] = useState(false);
  const { statusShop } = useGetShopStatus();
  const boolean = Boolean(statusShop.name);
  if (!statusShop) return <Empty resourceName='وضعیت' />;

  return (
    <div className='flex justify-between mb-10 bg-secondary-0 rounded-3xl p-4'>
      <h3 className='font-bold text-xl flex items-center text-secondary-900 gap-x-3'>
        ثبت وضعیت فروشگاه
        <IoIosArrowDown />{" "}
      </h3>
      <button
        onClick={() => setOpen(true)}
        className='btn btn--primary flex items-center gap-x-2'
      >
        <span> ایجاد محصول جدید</span>
        <MdAddCircleOutline className='w-6 h-6' />
      </button>
      <Modal
        title='اضافه کردن محصول جدید'
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateShopStatus
          setOpen={setOpen}
          boolean={boolean}
          statusShop={statusShop}
        />
      </Modal>
    </div>
  );
}

export default ShopStatusHeader;
