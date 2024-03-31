
import './App.css'
import { ConnectButton, useCurrentAccount, useSignAndExecuteTransactionBlock, createNetworkConfig, SuiClientProvider, WalletProvider, useSuiClient } from '@mysten/dapp-kit';
import {Button, Box, Container, Input} from '@mui/material' 
import casino from './assets/casino.png'
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';
import chippie from './assets/smallchippies.jpg'
import { useDataStore } from './Store';

const { networkConfig } = createNetworkConfig({
	devnet: { url: getFullnodeUrl('devnet') },
});

const txb = new TransactionBlock();

const [coin] = txb.splitCoins(txb.gas, [txb.pure(100)])


function App() {
	const navigate = useNavigate();
	async function go_to_blackjack(){navigate('/blackjack')}
	async function go_to_roulette(){navigate('/roulette')}
	async function go_to_slots(){navigate('/slots')}
	const currentAccount = useCurrentAccount();
	const [tobuy, setToBuy] = useState(0);
	const [userChips, setUserChips] = useDataStore(state => [state.userChips, state.setUserChips]);
	const [clicked, setClicked] = useState(false);
	const {mutate: signAndExecute} = useSignAndExecuteTransactionBlock();
	
	

	const buy_clicked = () => {
		setClicked(true);
	}
	const user_chips = () => {
		// signAndExecute(
		// 	{
		// 		networkConfig,
		// 		transactionBlock: txb,
		// 	  options: {
		// 		showEffects: true,
		// 		showObjectChanges: true,
		// 	  },
		// 	},
		// 	{
		// 	  onSuccess: (tx) => {
		// 		client.waitForTransactionBlock({ digest: tx.digest }).then(() => {
		// 		  refetch();
		// 		});
		// 	  },
		// 	},
		//   );
		  console.log(coin)
		setUserChips(tobuy * 100);
		setClicked(false);
	}
	async function handleChange(event){
		setToBuy(event.target.value);
	}
return (
<>
<div  id='connect'> <ConnectButton/></div>
	<div>
	{currentAccount ? (
		<body id='app'>
		<img src={casino} id='bg'/>
		<container className='left-container'>
		<h1>Choose A Game</h1>
		<Button variant='contained' color='primary' onClick={buy_clicked}>Buy Chips</Button>
		{clicked ? (<>
			<h1>BUY CHIPPIES!</h1>
			<img id="chippy" src={chippie}/>
			<h3>Each SUI you spend gets 100 chippies to use in the casino.</h3>
			<Input value={tobuy} placeholder='Enter Amount of SUI to Spend' onChange={handleChange}/>
			<div id='spacer'>
			<Button variant='contained' color='primary' onClick={user_chips}>Buy Chippies</Button>
			</div>
			</> ) : (<></>) }
		<Button variant='contained' color='primary' onClick={go_to_blackjack}>BlackJack</Button>
		<Button variant='contained' color='primary' onClick={go_to_roulette}>Roulette</Button>
		<Button variant='contained' color='primary' onClick={go_to_slots}>Slots</Button>
	</container>
	</body>
	) :( <h1>Please Connect your Wallet</h1>)}
		</div>

</>
)
}

export default App
