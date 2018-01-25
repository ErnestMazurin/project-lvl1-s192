import userAnswer from '../userAnswer';
import CalcTask from '../tasks/CalcTask';
import questionMaker from '../makers/questionMaker';
import gameMaker from '../makers/gameMaker';
import mainMaker from '../makers/mainMaker';
import random from '../random';

// -------------------------------------------------------------------------------
// =========================== game config =======================================
const gameSteps = 3; // number of steps
const [minRandomInterval1, maxRandomInterval1] = [0, 100]; // first interval of random numbers
const [minRandomInterval2, maxRandomInterval2] = [0, 100]; // second interval of random numbers
const symbolSet = ['+', '-', '*']; // available arithmetic operators

// -------------------------------------------------------------------------------
// ======================= input data functions ==================================
// task`s data
const calcRandom = () => {
  const number1 = random(minRandomInterval1, maxRandomInterval1)();
  const number2 = random(minRandomInterval2, maxRandomInterval2)();
  const symbol = symbolSet[Math.floor(Math.random() * symbolSet.length)];
  return [number1, symbol, number2];
};

// -------------------------------------------------------------------------------
// ==================== making game objects ======================================
const gameQuestion = questionMaker(userAnswer, calcRandom, CalcTask);
const calcGame = gameMaker(gameSteps, gameQuestion);
const calcMain = mainMaker('What is the result of the expression?\n', calcGame);

export default calcMain;
