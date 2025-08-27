import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "../Ui/Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navaigation = useNavigation();
  const isLoading = navaigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] font-sans">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
