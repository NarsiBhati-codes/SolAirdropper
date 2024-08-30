import React from 'react'
import { useWallet , useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export const Airdrop = () => {

  const wallet = useWallet();
  const {connection} = useConnection();

  async function sendAirdropToUser()  {
    let amount = document.getElementById("amount").value;
    await connection.requestAirdrop(wallet.publicKey,amount * LAMPORTS_PER_SOL);
    alert("airdropped sol")
  }

  const styleInput = { 
    width: '100%', 
    marginBottom: '1rem', 
    padding: '0.7rem', 
    boxSizing: 'border-box', 
    borderRadius: "0.4rem",
    marginTop: '1rem' 
  }

  const styleButton = {
    width: '100%', 
    marginBottom: '1rem', 
    padding: '0.7rem',
    fontSize: "1rem",
    borderRadius: "0.4rem",
    boxSizing: 'border-box', 
    marginTop: '1rem',
    color: "white",
    backgroundColor: "black"
  }

  return (
    <div>
        <input id="amount" type="text" placeholder='Amount' style={styleInput}></input>
        <button onClick={sendAirdropToUser} style={styleButton}> Send Airdrop</button>
    </div>
  )
}
