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

  return (
    <div style={{margin: '3rem',paddingLeft: "6rem",paddingRight: "6rem"}}>
        <input id="amount" type="text" placeholder='Amount' style={{margin: "1rem" ,padding:"1rem",borderRadius: "0 0.5rem", border: "0.1rem solid" ,fontSize: "0.9rem"}}></input>
        <button onClick={sendAirdropToUser} style={{margin: "1rem" ,padding:"1rem",borderRadius: "0 1rem", border: "0", backgroundColor: "black" , color: "white" ,fontSize: "0.9rem"}}> Send Airdrop</button>
    </div>
  )
}
