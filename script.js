import {startGame, initialStylesUpdate} from "./modules/startGame.mjs";
import {spaceShipControl} from "./modules/spaceShip.mjs";
const startGameButton = document.querySelector("[data-startScreenContainer='startScreenContainer'] button");

// Function which update game over and over again
const updateGame = () => {
    requestAnimationFrame(updateGame);
}

//Function which start invoke "updateGame" function and change initial styles
startGameButton.addEventListener("click", () => {
    startGame(updateGame);
    initialStylesUpdate();
});

// Spaceship movement
["keypress", "keyup", "mousemove"].forEach(el => window.addEventListener(el, (event) => spaceShipControl(event, el)));
