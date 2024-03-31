import { useState } from 'react';
import { RouletteTable } from 'react-casino-roulette';

import 'react-casino-roulette/dist/index.css';

import { RouletteWheel } from 'react-casino-roulette';
import { useDataStore } from './Store';


const Table = () => {
  const [bets, setBets] = useState({});

  const handleBet = (betData) => {
    const { id } = betData;

    setBets((prevState) => ({
      ...prevState,
      [id]: {
        icon: 'https://cdn-icons-png.flaticon.com/512/10095/10095709.png',
      },
    }));
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto' }}>
      <RouletteTable bets={bets} onBet={handleBet} />
      {console.log(bets)}
    </div>
  );
};

const Wheel = () => {
    const [start, setStart] = useState(false);
    const [winningBet, setWinningBet] = useState('-1');
    const rouletteNumbers = ['00', '0']
    for (let i = 1; i<37; i++){
        rouletteNumbers.push(i.toString());
    }
    const doSpin = () => {
      setWinningBet(rouletteNumbers[Math.floor(Math.random() * 37)]);
      setStart(true);
    };
  
    return (
      <div>
        <div
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <RouletteWheel start={start} winningBet={winningBet} />
        </div>
        <div>
          <button type="button" disabled={start} onClick={doSpin}>
            Spin
          </button>
          {console.log(winningBet)}
        </div>
      </div>
    );
  };


export default function Roulette() {
    async function rewardChips(){
        const [userChips, setUserChips] = useDataStore(state => [state.userChips, state.setUserChips]);
        setUserChips(userChips + 100);
    }
    return (
        <div>
        <Table/>
        <Wheel/>
        </div>
    );
    }