import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { isEmpty } from "lodash";

import { toast } from "react-toastify";

import { GlobalContextType, IUserConnect } from "@/types/global";

import { ethers } from "ethers";

interface Props {
  children: React.ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isDark, setIsDark] = useState<boolean>(false);

  const [isConnected, setIsConnected] = useState<boolean>(false);

  const [userConnect, setUserConnect] = useState<IUserConnect>({});

  const [transactions, setTransactions] = useState<any[]>([]);

  // -- handler for connections with wallet

  const connectWalletHandler = (): void => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          accountChangedHandler(result[0]);

          setIsConnected(true);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // -- handler account change

  const accountChangedHandler = (account: any): void => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window?.ethereum
        .request({ method: "eth_getBalance", params: [account, "latest"] })
        .then((balance: any) => {
          setUserConnect({
            account: account,
            balance: ethers.formatEther(balance),
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // -- disconnect account

  const disconnectWalletHandler = (): void => {
    setIsConnected(false);
    setUserConnect({});
  };

  // -- handler of chainChanged

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // -- transfer payment

  const transferPaymentHandler = async (addrs: any, amount: any): Promise<void> => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      ethers.getAddress(addrs);

      const tx = await signer.sendTransaction({
        to: addrs,
        value: ethers.parseEther(amount)
      });

      setTransactions([tx]);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  // -- listen for account changes / disconnect

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.on("accountsChanged", accountChangedHandler);

      window.ethereum.on("chainChanged", chainChangedHandler);

      window.ethereum.on("disconnect", disconnectWalletHandler);
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(errorMessage)) {
      toast.info(errorMessage, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [errorMessage]);

  const value = useMemo(
    () => ({
      errorMessage,
      isDark,
      isConnected,
      userConnect,
      transactions,
      connectWalletHandler,
      disconnectWalletHandler,
      transferPaymentHandler,
    }),
    [errorMessage, isDark, isConnected, userConnect, transactions]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext) as GlobalContextType;
};

export default GlobalProvider;
