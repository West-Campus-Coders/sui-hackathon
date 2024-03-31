import chip from './assets/chipslot.jpg';
import eggplant from './assets/eggplantslot.jpg';
import seven from './assets/7slot.jpg';
import { Button, Input } from '@mui/material';
import { useState } from 'react';
import { useDataStore } from './Store';

const picArray = [
    {
        id: 0,
        src: chip,
        name: "chip",
        value: "chip",
    },
    {
        id: 1,
        src: eggplant,
        name: "eggplant",
        value: "eggplant",
    },
    {
        id: 2,
        src: seven,
        name: "seven",
        value: "seven",
    },
];
    

function Slots() {
    const [pic1, setPic1] = useState(picArray[0]);
    const [pic2, setPic2] = useState(picArray[1]);
    const [pic3, setPic3] = useState(picArray[2]);
    const [row1, setRow1] = useState('');
    const [row2, setRow2] = useState('');
    const [row3, setRow3] = useState('');
    const [clicked, setClicked] = useState(false);
    const [userChips, setUserChips] = useDataStore(state => [state.userChips, state.setUserChips]);
    const [win, setWin] = useState(false);
    const [bet_amount, setBetAmount] = useState(0);
    const [winnings, setWinnings] = useState(0);
    const spin = () => {
        setClicked(true);
        setPic1(picArray[Math.floor(Math.random() * 3)]);
        setPic2(picArray[Math.floor(Math.random() * 3)]);
        setPic3(picArray[Math.floor(Math.random() * 3)]);
        setRow1(pic1.value);
        setRow2(pic2.value);
        setRow3(pic3.value);
        isWinner(row1, row2, row3);
        update_values(bet_amount);
    }

    async function handleChange(event){
        setBetAmount(event.target.value);
    }
    async function update_values(bet){
        setUserChips(userChips - bet_amount);
    }

    const Reset = () => {
        setClicked(false);
    }

    const isWinner = (row1, row2, row3) => {
        if(row1 === row2 && row2 === row3){
            setWin(true);
            setWinnings(bet_amount * 2);
            setUserChips(userChips + winnings);
        }
    }

    return(
        <div>
            {clicked? (
            <div>
            <img src={pic1.src} />
            <img src={pic2.src} />
            <img src={pic3.src} />
            {win ? (<><h1>Winner!</h1></>) : (<><h1>Loser!</h1></>)}
            </div>) : (
                 <div>
                 <img src={chip} />
                 <img src={eggplant} />
                 <img src={seven} />
                 </div>
            ) }
            <h3>You have {userChips} how much would you like to bet?</h3>
            <Input value={bet_amount} placeholder='Enter Amount to Bet' onChange={handleChange}/>
            <Button variant='contained' color='primary' onClick={spin}>Spin!</Button>
            <Button variant='contained' color='primary' onClick={Reset}>Reset</Button>  
        </div>
    );
};

export default Slots;