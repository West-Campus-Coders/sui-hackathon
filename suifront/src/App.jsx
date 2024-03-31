
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ConnectButton } from '@mysten/dapp-kit';
import {Button} from '@mui/material' 
import casino from './assets/casino.png'
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';

const theme = createTheme({
	palette: {
	  ochre: {
		main: '#ffffff',
		
		
	  },
	},
	
  });



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
<ThemeProvider theme={theme}>
<body id='app'>
	
	<container className='left-container'>
		<div>
		<h1 >Choose A Game</h1>
		</div>
		<div>
		<button class="button-64" role="button"><span class="text" onClick={go_to_blackjack}>
			Black Jack
		</span></button>
			
		</div>
		
		<div>
		<button class="button-64" role="button"><span class="text" onClick={go_to_store}>
			Store
		</span></button>
		</div>
		<div>
			<ConnectButton/>
		</div>
	</container>


	<container className='right-container'>
		<img src={casino} id='intro-image'/>
	</container>

</body>
</ThemeProvider>
</WalletProvider>
</SuiClientProvider>
</QueryClientProvider>
)
}

export default App
