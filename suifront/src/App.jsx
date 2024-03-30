
import './App.css'
import { ConnectButton } from '@mysten/dapp-kit';
import {Button} from '@mui/material' 
import casino from './assets/casino.png'

function App() {
 

  return (
<body id='app'>
 <img src={casino} id='bg'/>
	<nav>
		<ConnectButton />
	</nav>
	<container className='left-container'>
		<h1>Choose A Game</h1>
		<Button variant='contained' color='primary'>BlackJack</Button>


	</container>
</body>

  )
}

export default App
