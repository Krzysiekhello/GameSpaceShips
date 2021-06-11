const spaceShip = document.querySelector("[data-spaceShip='spaceShip']");
const spaceShipFire = document.querySelector("[data-spaceShip='spaceShip'] > div");
let verticalPosition = 0;
let horizontalPosition = 0;
let keyUpInterval = null;

// Spaceship movement function
export const spaceShipControl = (event, el) => {
    let verticalSpaceShipPosition = spaceShip.style.bottom.replace(/\D+/g, '');
    switch (el) {
        case "keypress":
            if (event.keyCode === 32) {
                spaceShipFire.style.display = "block";
                if (verticalSpaceShipPosition < window.innerHeight / 3) {
                    verticalPosition += 10;
                    spaceShip.style.bottom = verticalPosition + "px";
                }
                if (keyUpInterval || verticalSpaceShipPosition <= 10) {
                    clearInterval(keyUpInterval);
                    keyUpInterval = null;
                }
            }
            break;
        case "keyup":
            if (event.keyCode === 32) {
                spaceShipFire.style.display = "none";
                keyUpInterval = setInterval(() => {
                    verticalPosition -= 10;
                    spaceShip.style.bottom = verticalPosition + "px";
                }, 50)
            }
            break;
        case "mousemove":
            if (verticalSpaceShipPosition <= 10) {
                clearInterval(keyUpInterval);
            }
            horizontalPosition = event.pageX;
            spaceShip.style.left = horizontalPosition + "px";
            break;
    }
}
setInterval(() => checkingVerticalSpaceShipPosition(),50);
const checkingVerticalSpaceShipPosition = () => {
        let verticalSpaceShipPosition = spaceShip.style.bottom.replace(/\D+/g, '');
        if (verticalSpaceShipPosition <= 10) {
            clearInterval(keyUpInterval);
        }
}