import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  // const totalCartQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.quantity , 0)
  // );
  const totalCartQuantity = useSelector(getTotalQuantity)
  const totalCartPrice = useSelector(getTotalPrice)
  
  if(!totalCartQuantity) return null
  return (
    <div className="bg-stone-800 p-4 uppercase text-stone-200 text-sm flex justify-between items-center md:text-base ">
      <p className="text-stone-300 space-x-4 font-semibold sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
