
import './App.css'
import { ConnectButton } from '@mysten/dapp-kit';
import {Button} from '@mui/material' 
import casino from './assets/casino.png'
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
});

const queryClient = new QueryClient();


function App() {
	const navigate = useNavigate();
	async function go_to_blackjack(){navigate('/blackjack')}
	async function go_to_store(){navigate('/Store')}
return (
<QueryClientProvider client={queryClient}>
<SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
<WalletProvider>
<body id='app'>
<img src={casino} id='bg'/>
	<nav>
		<ConnectButton />
	</nav>
	<container className='left-container'>
		<h1>Choose A Game</h1>
		<Button variant='contained' color='primary' onClick={go_to_blackjack}>BlackJack</Button>
		<Button variant='contained' color='primary' onClick={go_to_store}>Transfer Money</Button>
	</container>
</body>
</WalletProvider>
</SuiClientProvider>
</QueryClientProvider>
)
}

export default App
