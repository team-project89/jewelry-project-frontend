import React from 'react'

function ConfirmDelete({resourceName, onClose, onConfirm, disabled, warning = ""}) {
  return (
    <div>
        <h2 className='font-bold text-base mb-8'> آیا از حذف "{resourceName}" مطمئن هستید؟</h2>
        <h3 className='mb-4 text-red-600 font-bold'> {warning} </h3>
        <div className="flex justify-between items-center gap-x-16">
            <button 
                onClick={onClose}
                disabled={disabled}
                className='btn btn--primary flex-1'>
                    لغو
                </button>
            <button 
                onClick={onConfirm}
                disabled={disabled}
                className='btn border-2 border-red-500 flex-1 py-3'>تایید</button>
        </div>
    </div>
  )
}

export default ConfirmDelete