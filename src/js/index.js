import '../css/style.css';
import goblinImage from '../goblin.png';

function createBoard() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    document.body.appendChild(grid);

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

let currentIndex = -1;

function moveGoblin() {
    const cells = document.querySelectorAll('.cell');
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * cells.length);
    } while (randomIndex === currentIndex);

    const goblin = document.createElement('img');
    goblin.classList.add('goblin');
    goblin.src = goblinImage;

    if (currentIndex !== -1) {
        cells[currentIndex].innerHTML = '';
    }

    cells[randomIndex].appendChild(goblin);

    currentIndex = randomIndex;
}

createBoard();
moveGoblin();
setInterval(moveGoblin, 1000);
