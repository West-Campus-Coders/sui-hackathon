import React from 'react'
import ReactDOM from 'react-dom/client'
import GameLobby from './GameLobby.jsx'
import './index.css'

// import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
// import { getFullnodeUrl } from '@mysten/sui.js/client';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();
// const networks = {
// 	localnet: { url: getFullnodeUrl('localnet') },
// 	devnet: { url: getFullnodeUrl('devnet') },
// 	testnet: { url: getFullnodeUrl('testnet') },
// 	mainnet: { url: getFullnodeUrl('mainnet') },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
	<GameLobby/>
)
