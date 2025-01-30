export function Button({ children, className }) {
  

  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
     
    >
      {children}
    </button>
  )
} 