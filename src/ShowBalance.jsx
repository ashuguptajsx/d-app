import React from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';


const ShowBalance = () => {
    const {connection} = useConnection();
    const wallet = useWallet();

    const getMeUserBalance = async() =>{
        const balance  = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }


    useEffect(() =>{
        getMeUserBalance();
    },[wallet.publicKey])

       return (
    <div>
        Balance: <span id = "balance"></span> SOL
    </div>
  )
}

export default ShowBalance