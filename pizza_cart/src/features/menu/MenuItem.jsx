import { useDispatch, useSelector } from "react-redux";
import Button from "../../Ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQty from "../cart/UpdateItemQty";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const cartQuantity = useSelector(getCurrentQuantityById(id))
  const dispatch = useDispatch()
  const handleAddtoCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem))
  };

  // console.log(cartQuantity)
  const isInCart = cartQuantity > 0;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "grayscale opacity-70" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between items-center">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-red-500">
              Sold out
            </p>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddtoCart}>
              Add to cart
            </Button>
          )}
          {isInCart && 
          <div className="flex gap-4 sm:gap-8 items-center">
            <UpdateItemQty pizzaId={id} currentQty={cartQuantity}/>
            <DeleteItem pizzaId={id} />
          </div>
          }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
