const startScreenElements = document.querySelector("[data-startScreenContainer='startScreenContainer']");
const gameField = document.querySelector("[data-gameContainer='gameContainer']");
const spaceShip = document.querySelector("[data-spaceShip='spaceShip']");

// Function which start updating game
export const startGame = (updateGame) => {
    requestAnimationFrame(updateGame);
}
//Changing initial styles
export const initialUpdatesAfterStartOfTheGame = () => {
    initialStylesUpdate();
}
const initialStylesUpdate = () => {
    startScreenElements.style.display = "none";
    gameField.style.display = "block";
    spaceShip.style.bottom = '5%';
    spaceShip.style.left = '50%';
}