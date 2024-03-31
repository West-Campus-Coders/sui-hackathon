import React from 'react'
import ReactDOM from 'react-dom/client'
import GameLobby from './GameLobby.jsx'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit'
import Roulette from './roulette.jsx'
import Slots from './Slots.jsx'
const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/blackjack',
		element: <GameLobby />,
	},
	{
		path: '/roulette',
		element: <Roulette />,
	},
	{
		path: '/slots',
		element: <Slots />,
	
	}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<QueryClientProvider client={queryClient}>
<SuiClientProvider>
<WalletProvider >
<RouterProvider router={router}/>
</WalletProvider>
</SuiClientProvider>
</QueryClientProvider>
</React.StrictMode>


)
