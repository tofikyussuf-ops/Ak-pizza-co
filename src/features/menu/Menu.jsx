import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    /* 1. Added animate-fade-in for a smooth "page load" feel */
    /* 2. Increased horizontal padding on larger screens for better focus */
    <ul className="animate-fade-in divide-y divide-stone-200 px-4 sm:px-8 lg:px-12">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;