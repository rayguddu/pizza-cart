import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-400 px-4 py-3 uppercase sm:px-6 sm:py-4 border-b border-stone-200 flex items-center justify-between font-sans">
      <Link to="/" className="tracking-[5px] ">React Pizza CO.</Link>
      <SearchOrder />
      <Username/>
    </header>
  );
}

export default Header;
