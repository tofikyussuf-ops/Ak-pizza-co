import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  
  // Modernized: Swapped blue for stone/yellow palette to match your branding
  // Added transition-all for a smoother hover effect
  const className = 'text-sm text-stone-500 hover:text-stone-800 transition-all duration-300 hover:underline';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;