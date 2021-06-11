const amountOfEnemySpaceShipsInEveryRound = [2,5];
let indexOfAmountOfEnemySpaceShipsInEveryRoundArray = 0;
const amountOfEnemySpaceShipsInCurrentRound = amountOfEnemySpaceShipsInEveryRound[indexOfAmountOfEnemySpaceShipsInEveryRoundArray];
const gameField = document.querySelector("[data-gameContainer='gameContainer']");
let topPositionDifference= 0;
export const creatingEnemySpaceShips = () => {
    for (let i = 0; i < amountOfEnemySpaceShipsInCurrentRound ; i++) {
        const enemySpaceShip = document.createElement("div");
        enemySpaceShip.classList.add("enemySpaceShips");
        enemySpaceShip.style.left = "50%";
        enemySpaceShip.style.top = 20 + topPositionDifference + "px";
        gameField.appendChild(enemySpaceShip);
        topPositionDifference += 20;
    }
    enemySpaceShipsMovement();
}
const enemySpaceShipsMovement = () => {
    const spaceShipsArray = Array.from(document.querySelectorAll(".enemySpaceShips"));
    setInterval(() => {
       for (let i = 0; i < spaceShipsArray.length ; i++) {
           const randomHorizontalPosition = Math.floor(Math.random() * window.innerWidth);
           spaceShipsArray[i].style.transition = "3s 0.5s";
           spaceShipsArray[i].style.left = `${randomHorizontalPosition > window.innerHeight ?
                   randomHorizontalPosition - (randomHorizontalPosition - window.innerWidth) - 50 :
               randomHorizontalPosition}px`;
       }
   },3000);
}