import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    /* Changed h-screen to h-dvh for better mobile browser support */
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] bg-stone-50">
      {isLoading && <Loader />}

      <Header />

      {/* Improved scroll behavior and background consistency */}
      <div className="overflow-y-auto overflow-x-hidden">
        <main className="mx-auto max-w-3xl px-4 py-6 sm:px-0">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;