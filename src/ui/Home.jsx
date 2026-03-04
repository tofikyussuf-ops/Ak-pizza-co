import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    // Added animate-fade-in (if you have it) or just cleaner spacing
    <div className="my-10 px-4 text-center sm:my-16 transition-all duration-700 ease-in">
      <h1 className="mb-8 text-2xl font-bold tracking-tight text-stone-700 md:text-4xl lg:text-5xl">
        The best pizza.
        <br />
        <span className="mt-2 block text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <div className="animate-bounce-short">
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;