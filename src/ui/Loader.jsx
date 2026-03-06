function Loader() {
  return (
    /* Changed to fixed inset-0 to ensure it locks to the viewport during navigation */
    /* Added animate-fade-in for a smooth overlay appearance */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-200/30 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="loader"></div>
        
        {/* Optional: Subtle branding text to keep the user engaged */}
        <p className="text-xs font-bold uppercase tracking-widest text-stone-500 animate-pulse">
          Preparing your pizza...
        </p>
      </div>
    </div>
  );
}

export default Loader;