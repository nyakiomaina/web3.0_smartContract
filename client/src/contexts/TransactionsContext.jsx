import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install Metamask");

        //get metamask connected accounts
        const accounts = await ethereum.requests({ method: 'eth_accounts' });

        console.log(accounts);

    }

    //useEffect to call this function
    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    return (
        <TransactionContext.Provider value={{value: 'test'}}>
            { children }
        </TransactionContext.Provider>
    )
}