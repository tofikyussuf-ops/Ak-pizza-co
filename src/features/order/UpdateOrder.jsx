import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  
  // Modern UI: Check if the form is currently being submitted
  const isUpdating = fetcher.state === 'submitting';

  return (
    /* Added animate-fade-in to match the rest of the Order page */
    <fetcher.Form method="PATCH" className="text-right animate-fade-in">
      <Button type="primary" disabled={isUpdating}>
        {isUpdating ? 'Updating Priority...' : 'Make priority'}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  // The data being sent to the API
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}