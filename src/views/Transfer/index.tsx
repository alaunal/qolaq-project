import React from "react";

import { useGlobal } from "@/hooks/GlobalContext";

import { HiOutlineInboxIn } from "react-icons/hi";

const Transfer = () => {
  const { transferPaymentHandler } = useGlobal();

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    const data = new FormData(e.target);

    transferPaymentHandler(data.get("address"), data.get("amount"));
  };

  return (
    <form className="py-4 block" onSubmit={handleSubmit}>
      <h2 className="text-2xl text-gray-700 mb-8 font-light flex items-center">
        <HiOutlineInboxIn className="mr-2 inline-block" />
        Transfer
      </h2>

      <div className="grid grid-cols-1 gap-5">
        <label className="block">
          <span className="text-gray-700 font-semibold">
            Recipient Address:
          </span>
          <input
            type="text"
            name="address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Recipient Address..."
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-semibold">
            Amount (in ETH/BSC):
          </span>
          <input
            type="text"
            name="amount"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Amount (in ETH/BSC)..."
          />
        </label>
        <div className="flex justify-center">
          <button
            className="h-10 inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 px-8 text-white rounded-full text-lg hover:shadow"
            type="submit"
          >
            TRANSFER
          </button>
        </div>
      </div>
    </form>
  );
};

export default Transfer;
