import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  // Log it for debugging, but keep the UI clean
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center animate-fade-in">
      <h1 className="text-2xl font-bold tracking-tight text-stone-700 md:text-3xl mb-4">
        Something went wrong <span className="text-yellow-500">😢</span>
      </h1>
      
      {/* Container for the error message to make it look like a "card" */}
      <div className="bg-stone-100 border border-stone-200 p-6 rounded-lg mb-8 max-w-lg shadow-sm">
        <p className="text-stone-500 font-mono text-sm break-words">
          {error.data || error.message || "An unexpected error occurred."}
        </p>
      </div>

      <LinkButton to="-1">
        &larr; Go back to safety
      </LinkButton>
    </div>
  );
}

export default Error;