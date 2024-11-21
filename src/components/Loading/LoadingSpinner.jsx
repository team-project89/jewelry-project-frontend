export default function LoadingSpinner() {
  return (
    <div className='p-16 bg-gradient-to-br from-secondary-50 via-secondary-0 to-secondary-50 min-h-[500px] flex items-center justify-center'>
      <div className='w-24 h-24 border-8 border-secondary-900/20 border-t-secondary-900 rounded-full animate-spin'></div>
    </div>
  );
} 