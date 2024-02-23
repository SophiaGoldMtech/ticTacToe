let tileEl = document.querySelectorAll('.tile');
let currentPlayer = 'x';
let winArray = [["","",""],["","",""],["","",""]];

tileEl.forEach(item =>{
    item.addEventListener('click', event => {

        if(event.target !== event.currentTarget) return;
        const tile = event.target;
            
        if (tile.classList.contains('x') || tile.classList.contains('o')) {
            console.log("First Current player:", currentPlayer);
            return
        } else if (!tile.classList.contains('x') || !tile.classList.contains('o')) {
            tile.classList.add(currentPlayer);
            let location = tile.dataset.location
            let row = location[0]
            let column = location[1]
            winArray[row][column] = currentPlayer
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        }
        
        ifWinner()
    })
})

function winnerRow() {
    

    for (let i = 0; i < winArray.length; i++){
        if (winArray[i][0] !== "" && winArray[i][0] === winArray[i][1] && winArray[i][1] === winArray[i][2]) {
            const winner = winArray[i][0]; 
            return winner;
        }
    } return false;
}

function winnerColumn() {
    for (let i = 0; i < winArray[0].length; i++) {
       if (winArray[0][i] !== "" && winArray[0][i] === winArray[1][i] && winArray[0][i] === winArray[2][i]) {
            const winner = winArray[0][i];
            return winner;
       }
    } return false;
}

function winnerDiagonal() {
    if (winArray[1][1] === "") {
        return false;
    }

    if (winArray[0][0] === winArray[1][1] && winArray[1][1] === winArray[2][2]) {
        const winner = winArray[1][1];
        return winner;
    } else if (winArray[0][2] === winArray[1][1] && winArray[1][1] === winArray[2][0]) {
        const winner = winArray[1][1];
        return winner;
    } 
    
    return false;
}

function haveYouWon() {
    let winner = winnerRow();
        if (!winner) {
            winner = winnerColumn();
            if (!winner) {
                winner = winnerDiagonal();
            }
        }
    return winner;
}

function ifWinner() {
    const winner = haveYouWon();
    if (winner) {
        window.alert(`Player ${winner} has won! Good job player!`);
    }
}