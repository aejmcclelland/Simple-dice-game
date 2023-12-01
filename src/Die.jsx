// eslint-disable-next-line react/prop-types
export default function Die({ numSides }) {
    const roll = () => {
        return Math.floor(Math.random() * numSides) + 1;
    };

    const [die1, die2] = [roll(), roll()];
    const total = die1 + die2;

    const styles = { color: die1 !== die2 ? 'green' : 'red' };

    return (
        <div className="SnakeEyes" style={styles}>
            <h1>SnakeEyes!</h1>
            <h2>You rolled a {die1} and a {die2}</h2>
            {die1 === die2 ? <h2>You rolled a double!! You lose! </h2> : <h2>Total: {total}</h2>}
        </div>
    );
}
