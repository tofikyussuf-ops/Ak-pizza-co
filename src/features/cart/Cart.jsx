import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    // Added animate-fade-in for a smooth entrance
    <div className="animate-fade-in px-4 py-3 sm:px-6">
      <LinkButton to="/menu">Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold text-stone-800">
        Your cart, <span className="text-yellow-600">{username}</span>
      </h2>

      {/* Modernized list with slightly more breathing room */}
      <ul className="mt-4 divide-y divide-stone-200 border-b border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-3 sm:gap-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;