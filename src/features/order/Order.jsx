import { useFetcher, useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher]
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="animate-fade-in space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-stone-700">Order #{id} Status</h2>

        <div className="flex gap-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-stone-100 px-6 py-5 border border-stone-200">
        <p className="font-semibold text-stone-700">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : 'Order should have arrived!'}
        </p>
        <p className="text-xs text-stone-500 italic">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t border-stone-200">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      {/* Pricing Card */}
      <div className="space-y-3 rounded-lg bg-stone-100 px-6 py-5 border border-stone-200">
        <div className="flex items-center justify-between text-sm font-medium text-stone-500 border-b border-stone-200 pb-2">
          <span>Price pizza:</span>
          <span className="text-stone-700">{formatCurrency(orderPrice)}</span>
        </div>
        
        {priority && (
          <div className="flex items-center justify-between text-sm font-medium text-stone-500 border-b border-stone-200 pb-2">
            <span>Price priority:</span>
            <span className="text-stone-700">{formatCurrency(priorityPrice)}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-1">
          <p className="text-lg font-bold text-stone-800">To pay on delivery:</p>
          <p className="text-lg font-extrabold text-stone-900">
            {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;