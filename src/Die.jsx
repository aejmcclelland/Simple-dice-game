import { useState, useEffect } from 'react';
// eslint-disable-next-line react/prop-types
export default function Die({ numSides }) {
    const roll = () => {
        return Math.floor(Math.random() * numSides) + 1;
    };

    const [die1, setDie1] = useState(roll());
    const [die2, setDie2] = useState(roll());
    const [total, setTotal] = useState(die1 + die2);

    const rollDice = () => {
        const newDie1 = roll();
        const newDie2 = roll();
        const newTotal = total + newDie1 + newDie2;
        setDie1(newDie1);
        setDie2(newDie2);
        setTotal(newTotal);
    };

    const isLoser = die1 === die2;
    const styles = { color: isLoser ? 'red' : 'green' };

    useEffect(() => {
        if (isLoser) {
            setTotal(0);
        }
    }, [isLoser]);

    return (
        <div className="SnakeEyes" style={styles}>
            <h2>You rolled a {die1} and a {die2}</h2>
            <h2>Total: {total}</h2>
            <h2>{isLoser ? 'You rolled a double!! You lose!' : '\u00A0'}</h2>
            <button className="button" onClick={rollDice}>Roll Dice</button>
        </div>
    );
}
