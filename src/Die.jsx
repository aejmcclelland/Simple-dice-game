import { useState, useEffect } from 'react';

export default function Die({ numSides }) {
    const roll = () => {
        return Math.floor(Math.random() * numSides) + 1;
    };

    const [die1, setDie1] = useState(roll());
    const [die2, setDie2] = useState(roll());
    const [total, setTotal] = useState(die1 + die2);
    const [gameOver, setGameOver] = useState(false);
    const [highestScore, setHighestScore] = useState(localStorage.getItem('highestScore') || 0);

    const rollDice = () => {
        if (gameOver) return;

        const newDie1 = roll();
        const newDie2 = roll();
        const newTotal = total + newDie1 + newDie2;
        setDie1(newDie1);
        setDie2(newDie2);
        setTotal(newTotal);

        if (newDie1 === newDie2) {
            setGameOver(true);
            setTotal(0);
            updateHighestScore(newTotal);
        }
    };

    const isLoser = die1 === die2;
    const styles = { color: isLoser ? 'red' : 'green' };

    useEffect(() => {
        if (isLoser) {
            setTotal(0);
        }
    }, [isLoser]);

    const endGame = () => {
        const message = `Congratulations you scored ${total} points`;
        alert(message);
        setGameOver(false);
        setTotal(0);
        updateHighestScore(total);
    };

    const updateHighestScore = (score) => {
        if (score > highestScore) {
            setHighestScore(score);
            localStorage.setItem('highestScore', score);
        }
    };

    return (
        <div className="SnakeEyes" style={styles}>
            <h2>You rolled a {die1} and a {die2}</h2>
            <h2>Total: {total}</h2>
            <h2>Highest Score: {highestScore}</h2>
            <h2>{isLoser ? 'You rolled a double!! You lose!' : '\u00A0'}</h2>
            <button className="button" onClick={rollDice}>Roll Dice</button>
            <button className="button" onClick={endGame}>End Game</button>
        </div>
    );
}

