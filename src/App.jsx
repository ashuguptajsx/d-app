import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import RequestAirdrop from './RequestAirdrop';
import ShowBalance from './ShowBalance';

import "@solana/wallet-adapter-react-ui/styles.css";
import './App.css';

import React from 'react'

const App = () => {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{ display: 'flex', justifyContent: "space-between" }}>
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          {/* <  */}
          <ShowBalance />
          {/* <Tokens /> */}
          {/* <SignMessage /> */}
          {/* <SendTokens /> */}
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App