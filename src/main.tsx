
import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import type {} from 'react-dom/client';
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
// Removed unused types WalletAdapterConfig and Network
import { Network as AptosNetwork } from "@aptos-labs/ts-sdk";
import App from "./App.tsx";
import "./styles/globals.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{
        network: AptosNetwork.MAINNET,
        aptosApiKeys: {
          mainnet: import.meta.env.VITE_APTOS_API_KEY,
        },
      }}
      onError={(error: any) => {
        console.error("Wallet adapter error:", error);
      }}
    >
      <App />
    </AptosWalletAdapterProvider>
  </React.StrictMode>
);

