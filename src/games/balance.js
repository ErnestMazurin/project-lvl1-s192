import game from '..';
import { random } from '../functions';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const [minRandomInterval1, maxRandomInterval1] = [0, 10000]; // interval of random numbers

// -------------------------------------------------------------------------------
// ==================== making game ==============================================
const number2Array = num => String(num).split('').map(x => Number(x));
const array2String = arr => arr.map(x => String(x)).join('');

const isBalance = (sequence) => {
  const diff = Math.max(...sequence) - Math.min(...sequence);
  const sortedSequence = sequence.slice().sort((a, b) => a - b);
  return (diff <= 1) && (array2String(sequence) === array2String(sortedSequence));
};

const balance = (arr) => {
  if (isBalance(arr)) {
    return arr;
  }
  const [min, ...rest] = arr.slice().sort((a, b) => a - b); // absolutely immutable now! >.<
  const [max, ...middle] = rest.slice().sort((a, b) => b - a);
  const newArr = middle.concat(min + 1, max - 1).sort((a, b) => a - b);
  return balance(newArr);
};

const balanceGame = () => {
  const greeting = 'Balance the given number.';
  const balanceTask = () => {
    const question = random(minRandomInterval1, maxRandomInterval1)();
    const answer = array2String(balance(number2Array(question)));
    return [question, answer];
  };

  game(greeting, balanceTask);
};

export default balanceGame;
