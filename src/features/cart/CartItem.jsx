import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between transition-all">
      <p className="mb-1 sm:mb-0 font-medium">
        <span className="font-bold text-stone-500">{quantity}&times;</span> {name}
      </p>
      
      <div className="flex items-center justify-between sm:gap-6">
        {/* Slightly pushed the price to be more prominent */}
        <p className="text-sm font-bold text-stone-700">
          {formatCurrency(totalPrice)}
        </p>

        {/* Action Group: Grouping quantity and delete together */}
        <div className="flex items-center gap-3 md:gap-8">
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;