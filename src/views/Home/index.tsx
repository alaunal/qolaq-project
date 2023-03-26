import React from "react";

import { useGlobal } from "@/hooks/GlobalContext";

import { HiOutlineLogout } from "react-icons/hi";

import illustrationLogin from "@/assets/login.svg";

const Home = () => {
  const {
    isConnected,
    userConnect,
    connectWalletHandler,
    disconnectWalletHandler,
  } = useGlobal();

  return (
    <>
      {isConnected ? (
        <div className="flex w-full py-10 justify-center items-center">
          <div className="text-center inline-block">
            <h1 className="text-3xl font-light text-gray-600 mb-2">
              Connected!
            </h1>
            <div className="truncate w-3/4 px-3 py-2 text-sm font-semibold text-blue-700 bg-blue-300 rounded-md inline-block">
              {userConnect.account}
            </div>
            <p className="text-3xl font-semibold text-gray-600 mt-2 mb-8">
              {userConnect.balance}
            </p>

            <button
              className="inline-flex items-center px-4 h-10 bg-transparent border-0 outline-0 text-red-500 font-medium"
              onClick={() => disconnectWalletHandler()}
            >
              <HiOutlineLogout className="mr-2" />
              Disconnect
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full py-10 justify-center items-center">
          <div className="inline-block w-3/5 text-center">
            <img src={illustrationLogin} alt="not connect" className="mb-4" />
            <p className="text-gray-600 text-lg mb-8">
              Please connect with your metamask account.
            </p>

            <p>
              <button
                className="h-10 inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 px-6 text-white rounded-full text-lg font-medium hover:shadow"
                onClick={() => connectWalletHandler()}
              >
                Connect
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
