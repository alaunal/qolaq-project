import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineInboxIn,
  HiOutlineDocumentText,
} from "react-icons/hi";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center mb-8 bg-gray-50 -mx-5 px-5">
      <Link
        to={"/"}
        className={`h-12 inline-flex items-center text-lg font-medium ${
          location?.pathname === "/"
            ? "text-orange-500"
            : "text-gray-500 hover:text-amber-600 hover:border-b hover:border-amber-600"
        }`}
      >
        <HiOutlineHome className="mr-1" /> Home
      </Link>
      <Link
        to={"/transfer"}
        className={`h-12 inline-flex items-center text-lg font-medium ${
          location?.pathname === "/transfer"
            ? "text-orange-500"
            : "text-gray-500 hover:text-amber-600 hover:border-b hover:border-amber-600"
        } ml-4`}
      >
        <HiOutlineInboxIn className="mr-1" /> Transfer
      </Link>
      <Link
        to={"/transactions"}
        className={`h-12 inline-flex items-center text-lg font-medium ${
          location?.pathname === "/transactions"
            ? "text-orange-500"
            : "text-gray-500 hover:text-amber-600 hover:border-b hover:border-amber-600"
        } ml-4`}
      >
        <HiOutlineDocumentText className="mr-1" /> Transactions
      </Link>
    </nav>
  );
};

export default Navigation;
