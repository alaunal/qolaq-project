export type IUserConnect = {
  account?: string | null;
  balance?: string | number | null;
};

export type GlobalContextType = {
  errorMessage?: string;
  isDark: boolean;
  isConnected: boolean;
  transactions: any[];
  userConnect: IUserConnect;
  connectWalletHandler(): void;
  disconnectWalletHandler(): void;
  transferPaymentHandler(addrs: any, amount: any): void;
};
