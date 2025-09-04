import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react';
 
const RequestAirdrop = () => {

    const wallet = useWallet();

    function requestAirdrop(){
        alert("hi there")
    }

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <input type="text" placeholder='Enter the amount of SOL to airdrop' style={{ marginRight: '10px', padding: '5px' }} />
        <button onClick={requestAirdrop} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Airdrop</button>
        <p>Wallet Address: {wallet.publicKey?.toBase58()}</p>
    </div>
  )
}

export default RequestAirdrop