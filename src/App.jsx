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
  const styleBox = {
    margin: '3rem',
    padding: '2rem 6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Adds shadow
    borderRadius: '8px', // Optional: Adds rounded corners
    maxWidth: '400px', // Optional: Restricts the width of the container
    backgroundColor: '#fff' // Optional: Adds background color for contrast
  }
  
  const styleButton = { 
    marginBottom: "1rem", 
    padding: '0 2.8rem'
  }

  return (
    <>
      <ConnectionProvider endpoint={"https://solana-mainnet.g.alchemy.com/v2/t5cFQB7TVTx7OAftkM3z9tqIX0jDcied"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div style={{alignItems: "center", margin: "7rem" ,maxWidth: '800px'}}>
              <div style={styleBox}>
                <WalletMultiButton  style={styleButton}/>
                <WalletDisconnectButton style={{marginBottom: "2rem"}}/>
                <Airdrop />
              </div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
