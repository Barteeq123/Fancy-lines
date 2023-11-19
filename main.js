let userClicked = false;
let lineColor = "#ff0000"
let buttonColor = "#969696";
let buttonTextColor = "#ffffff";
let buttonTextSize = 20;
let buttonX = 25;
let buttonY;
let buttonTextOffsetX = 14;
let buttonTextOffsetY = 0;
let buttonWidth = 80;
let buttonHeight = 25
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function main() {
    userClicked = false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buttonY = canvas.height - 45;

    window.onclick = (e) => {
        if (userClicked === false) {
            if (e.clientX < canvas.width / 2 && e.clientY < canvas.height / 2) {
                for (let x = 0; x <= canvas.width; x += 100) {
                    context.beginPath();
                    context.moveTo(x, canvas.height);
                    context.lineTo(0, 0);
                    context.strokeStyle = lineColor;
                    context.stroke();
                    context.closePath();
                }
    
                for (let y = 0; y <= canvas.height; y += 100) {
                    context.beginPath();
                    context.moveTo(canvas.width, y);
                    context.lineTo(0, 0);
                    context.strokeStyle = lineColor;
                    context.stroke();
                    context.closePath();
                }
            
            } else if (e.clientX < canvas.width / 2 && e.clientY > canvas.height / 2) {
                for (let x = 0; x <= canvas.width; x += 100) {
                    context.beginPath();
                    context.moveTo(x, 0);
                    context.lineTo(0, canvas.height);
                    context.strokeStyle = lineColor
                    context.stroke();
                    context.closePath();
                }
    
                for (let y = 0; y <= canvas.height; y += 100) {
                    context.beginPath();
                    context.moveTo(canvas.width, y);
                    context.lineTo(0, canvas.height);
                    context.strokeStyle = lineColor
                    context.stroke();
                    context.closePath();
                }
            } else if (e.clientX > canvas.width / 2 && e.clientY < canvas.height / 2) {
                for (let x = 0; x <= canvas.width; x += 100) {
                    context.beginPath();
                    context.moveTo(x, canvas.height);
                    context.lineTo(canvas.width, 0);
                    context.strokeStyle = lineColor
                    context.stroke();
                    context.closePath();
                }
    
                for (let y = 0; y <= canvas.height; y += 100) {
                    context.beginPath();
                    context.moveTo(0, y);
                    context.lineTo(canvas.width, 0);
                    context.strokeStyle = lineColor
                    context.stroke();
                    context.closePath();
                }
            } else if (e.clientX > canvas.width / 2 && e.clientY > canvas.height / 2) {
                for (let x = 0; x <= canvas.width; x += 100) {
                    context.beginPath();
                    context.moveTo(x, 0);
                    context.lineTo(canvas.width, canvas.height);
                    context.strokeStyle = lineColor;
                    context.stroke();
                    context.closePath();
                }
    
                for (let y = 0; y <= canvas.height; y += 100) {
                    context.beginPath();
                    context.moveTo(0, y);
                    context.lineTo(canvas.width, canvas.height);
                    context.strokeStyle = lineColor;
                    context.stroke();
                    context.closePath();
                }
            }
        
            userClicked = true;
        } else if (
            userClicked &&
            e.clientX >= buttonX &&
            e.clientX <= buttonX + buttonWidth &&
            e.clientY >= buttonY &&
            e.clientY <= buttonY + buttonHeight
        ) {
            main();
        }
    }
}

main();

function animate() {
    if (userClicked) {
        context.fillStyle = buttonColor;
        context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

        context.font = buttonTextSize + "px " + "sans-serif";
        context.fillStyle = buttonTextColor;
        context.fillText("Reset", buttonX + buttonTextOffsetX, (buttonY + buttonTextSize) + buttonTextOffsetY)
    }

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", main);