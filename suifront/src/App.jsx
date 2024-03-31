
import './App.css'
import { ConnectButton, useCurrentAccount, useSignAndExecuteTransactionBlock, createNetworkConfig, SuiClientProvider, WalletProvider, useSuiClient } from '@mysten/dapp-kit';
import {Button, Box, Container} from '@mui/material' 
import casino from './assets/casino.png'
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { useState } from 'react';

const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	//mainnet: { url: getFullnodeUrl('mainnet') },
});


function App() {
	const navigate = useNavigate();
	async function go_to_blackjack(){navigate('/blackjack')}
	async function go_to_store(){navigate('/Store')}
	const currentAccount = useCurrentAccount();

return (
<>
<body id='app'>
<nav> <ConnectButton /></nav>
<img src={casino} id='bg'/>
	<div>
	{currentAccount ? (
		<container className='left-container'>
		<h1>Choose A Game</h1>
		<Button variant='contained' color='primary' onClick={go_to_blackjack}>BlackJack</Button>
		<Button variant='contained' color='primary' onClick={go_to_store}>Go to Store</Button>
	</container>
	) :( <h1>Please Connect your Wallet</h1>)}
		</div>
</body>
</>
)
}

export default App
