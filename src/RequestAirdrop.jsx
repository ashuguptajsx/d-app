import React from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

 
const RequestAirdrop = () => {
 
    const wallet = useWallet();
    const {connection }= useConnection();

    function requestAirdrop(){
       const publickey = wallet.publicKey;
       const amount = document.getElementById("amount").value;
       connection.requestAirdrop(publickey, amount * LAMPORTS_PER_SOL);
    }

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <input type="text" placeholder='Enter the amount of SOL to airdrop' style={{ marginRight: '10px', padding: '5px' }} id="amount" />
        <button onClick={requestAirdrop} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }} id="airdrop-button">Airdrop</button>
        <p>Wallet Address: {wallet.publicKey?.toBase58()}</p>
    </div>
  )
}

export default RequestAirdrop