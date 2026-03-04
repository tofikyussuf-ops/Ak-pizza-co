import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-3 transition-all duration-300 hover:bg-stone-50/50 px-2 rounded-lg group">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={name}
          className={`h-24 w-24 object-cover transition-transform duration-500 group-hover:scale-105 ${
            soldOut ? 'opacity-60 grayscale' : ''
          }`}
        />
      </div>

      <div className="flex grow flex-col pt-0.5">
        <p className="font-bold text-stone-800">{name}</p>
        <p className="text-sm capitalize italic text-stone-500 line-clamp-2">
          {ingredients.join(', ')}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-semibold text-stone-600">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8 animate-fade-in">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;