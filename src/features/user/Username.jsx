import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    // Added a subtle tracking-wide and shifted to a slightly softer stone color
    // Added a fade-in animation so it doesn't just "pop" when the user logs in
    <div className="hidden animate-fade-in text-sm font-bold tracking-tight text-stone-700 md:block lg:text-base">
      <span className="text-stone-400 font-medium">Hello, </span>
      {username}
    </div>
  );
}

export default Username;