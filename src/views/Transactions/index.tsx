import React from "react";

import { isEmpty } from "lodash";

import { useGlobal } from "@/hooks/GlobalContext";

import illustrationEmpty from "@/assets/empty.svg";

import { HiOutlineDocumentText } from "react-icons/hi";

const Transactions = () => {
  const { transactions } = useGlobal();

  return (
    <>
      {!isEmpty(transactions) ? (
        <div className="block py-6">
          <h2 className="text-2xl text-gray-700 mb-8 font-light flex items-center">
            <HiOutlineDocumentText className="mr-2 inline-block" />
            Transfer
          </h2>

          
        </div>
      ) : (
        <div className="flex w-full py-10 justify-center items-center">
          <div className="inline-block w-3/5 text-center">
            <img src={illustrationEmpty} alt="not connect" className="mb-4" />
            <p className="text-gray-600 text-lg mb-8">
              History transaction not available!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
