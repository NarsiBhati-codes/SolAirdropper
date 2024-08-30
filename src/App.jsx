import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from './components/Airdrop';

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://solana-mainnet.g.alchemy.com/v2/t5cFQB7TVTx7OAftkM3z9tqIX0jDcied"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div style={{paddingLeft: "7rem",paddingRight: "7rem" ,margin: "3rem", display: "flex" ,justifyContent: "space-between"}}>
              <WalletMultiButton />
              <WalletDisconnectButton/>
            </div>
            <Airdrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
