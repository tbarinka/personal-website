
class Square {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
        this.isHit = false;
        this.containsShip = false;
        this.ship = null;
        //this.start = null
    }
}
class Gameboard {
    constructor(input) {
        this.xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        this.yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.grid = this.makeGrid()
    }
    receiveAttack(xLetter, yNum) {
        let found = this.grid.find(square => (square.X == xLetter && square.Y == yNum));
        found.isHit = true;
        if (found.containsShip == true) {
            found.ship.hit();
            return found.ship;
        }
        return found.ship;
    }
    makeGrid() {
        let grid = [];
        for (let x = 0; x < this.xAxis.length; x++) {
            for (let y = 0; y < this.yAxis.length; y++) {
                let square = new Square(this.xAxis[x], this.yAxis[y]);
                grid.push(square);
            }
        }
        return grid;
    }
    populateShip(size, xStart, yStart, direction) {
        if (size > 1) {
            if (direction == "north") {
                if (yStart < size) {
                    return 'overflow!'
                }
            }
            if (direction == "south") {
                if ((yStart - 1) > (10 - size)) {
                    return 'overflow!'
                }
            }
            if (direction == "west") {
                if (this.xAxis.indexOf(xStart) < (size - 1)) {
                    return 'overflow!'
                }
            }
            if (direction == "east") {
                if (this.xAxis.indexOf(xStart) > (10 - size)) {
                    return 'overflow!'
                }
            }
        }
        let newShip = new Ship(size, xStart, yStart, direction);
        newShip.direction = direction;
        let startingSquare = this.grid.find(square => (square.X == newShip.xStart && square.Y == newShip.yStart));
        let squaresContainingNewShip = [];
        startingSquare.containsShip = true;
        startingSquare.ship = newShip;
        squaresContainingNewShip.push(startingSquare);
        let yIndex = this.grid.indexOf(startingSquare);
        while (size > 1) {
            if (direction == "north") {
                yStart = yStart - 1;
                let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
            if (direction == "south") {
                //yStart = yStart + 1;
                yIndex += 1
                //let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                let square = this.grid[yIndex];
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square)
                size = size - 1;
            } else if (direction == "east") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) + 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square);
                size = size - 1;
            } else if (direction == "west") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) - 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = true;
                square.ship = newShip;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
        }
        return squaresContainingNewShip;
        //add some code to account for size > 1 and direction
    }
    depopulateShip(size, xStart, yStart, direction) {
        let newShip = new Ship(size, xStart, yStart);
        let startingSquare = this.grid.find(square => (square.X == newShip.xStart && square.Y == newShip.yStart));
        let squaresContainingNewShip = [];
        startingSquare.containsShip = false;
        startingSquare.ship = null;
        squaresContainingNewShip.push(startingSquare);
        let yIndex = this.grid.indexOf(startingSquare);
        while (size > 1) {
            if (direction == "north") {
                yStart = yStart - 1;
                let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
            if (direction == "south") {
                //yStart = yStart + 1;
                yIndex += 1
                //let square = this.grid.find(square => (square.X == newShip.xStart && square.Y == yStart));
                let square = this.grid[yIndex];
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square)
                size = size - 1;
            } else if (direction == "east") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) + 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square);
                size = size - 1;
            } else if (direction == "west") {
                xStart = this.xAxis[this.xAxis.indexOf(xStart) - 1];
                let square = this.grid.find(square => (square.X == xStart && square.Y == newShip.yStart))
                square.containsShip = false;
                square.ship = null;
                squaresContainingNewShip.push(square)
                size = size - 1;
            }
        }
        return squaresContainingNewShip;
        //add some code to account for size > 1 and direction
    }
}
class Ship {
  constructor(size, xStart, yStart, direction) {
    this.size = size
    this.hits = []
    this.xStart = xStart
    this.yStart = yStart
    this.direction = null
  }
  hit() {
    this.hits.push('hit');
    if (this.hits.length == this.size) {
      return this.isSunk();
    } else {
      return this.hit;
    }
  }
  isSunk() {
    return 'sunk!'
  }
} 

function removeDuplicates(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
 
//suite of functions for loading the two DOM boards & score keeper card
function squareLoader(coordinate, player = "ai") {
    let square = document.createElement('div');
    square.classList.add('square');
    if (coordinate.isHit == true) {
        square.style.backgroundColor = "#6ee7b7";
    }
    if (player == "ai") {
        square.classList.remove('square');
        square.classList.add('aiSquare');
        square.addEventListener('click', function () {
            let x = coordinate.X;
            let y = coordinate.Y;
            attackAI(x, y);
        });
    }
    if (coordinate.isHit == true && coordinate.containsShip == true) {
        square.style.backgroundColor = "red";
        square.textContent = "X";
    }
    //if (coordinate.containsShip == true) {
        //square.style.backgroundColor = "red";
    //}
    if (player != "ai") {
        if (coordinate.containsShip == true) {
            square.style.backgroundColor = "red";
        }
    }
    return square;
}
function boardLoader(board, player) {
    let arrayOfGridCoordinates = board.grid;
    let container = document.createElement('div');
    container.classList.add('grid-container');
    arrayOfGridCoordinates.forEach((coordinate) => {
        let square = squareLoader(coordinate, player);
        container.appendChild(square);
    })
    return container;
};
function xCoordinateLoader() {
    let arrayOfXCoordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let container = document.createElement('div');
    container.classList.add('xCoordinateContainer');
    arrayOfXCoordinates.forEach((coordinate) => {
        let square = document.createElement('div');
        square.classList.add('upperSquare');
        square.textContent = coordinate;
        container.appendChild(square);
    });
    return container;
}
function xCoordinateDoubler() {
    let container = document.createElement('div');
    container.classList.add('xCoordinateContainerDouble');
    container.appendChild(xCoordinateLoader());
    container.appendChild(xCoordinateLoader());
    return container;
}
function yCoordinateLoader() {
    let arrayOfXCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let container = document.createElement('div');
    container.classList.add('yCoordinateContainer');
    arrayOfXCoordinates.forEach((coordinate) => {
        let square = document.createElement('div');
        square.classList.add('leftSquare');
        square.textContent = coordinate;
        container.appendChild(square);
    });
    return container;
}
function playerCoordinatedBoardLoader(board) {
    let container = document.createElement('div');
    container.classList.add('singleBoardContainer')
    let subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
        subcontainer.appendChild(yCoordinateLoader());
        subcontainer.appendChild(boardLoader(board, "player"));
        container.appendChild(xCoordinateLoader());
        container.appendChild(subcontainer);
    return container;
}
function aiCoordinatedBoardLoader(board) {
    let container = document.createElement('div');
    container.classList.add('singleBoardContainer')
    let subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
        subcontainer.appendChild(yCoordinateLoader());
        subcontainer.appendChild(boardLoader(board));
        container.appendChild(xCoordinateLoader());
        container.appendChild(subcontainer);
    return container;
}
function twoBoardContentGenerator(playerBoard, opponentBoard) {
    let container = document.createElement('div');
    container.classList.add('doubleBoardContainer');
    container.appendChild(playerCoordinatedBoardLoader(playerBoard));
    container.appendChild(aiCoordinatedBoardLoader(opponentBoard));
    return container;
}
function twoBoardDOMLoader(playerBoard, opponentBoard) {
    let container = document.getElementById('container');
    container.appendChild(twoBoardContentGenerator(playerBoard, opponentBoard)); 
}
function scoreKeeperGenerator(player, input) {
    let container = document.createElement('div');
    container.classList.add('singleBoardScoreContainer')
    let label = document.createElement('h2');
    let score = document.createElement('h2');
    label.textContent = player + " Score: "
    container.appendChild(label);
    container.appendChild(score);
    score.textContent = input + "/5";
    return container
}
function doubleScoreKeeperGenerator(player1, input1, player2, input2) {
    let scoreContainer = document.createElement('div');
    scoreContainer.classList.add('scoreKeeperContainer');
    scoreContainer.appendChild(scoreKeeperGenerator(player1, input1));
    scoreContainer.appendChild(scoreKeeperGenerator(player2, input2));
    let container = document.getElementById('container');
    container.prepend(scoreContainer)
}
function announceWinnerCard(text) {
    let card = document.createElement('div');
    card.classList.add('winnerCard');
    card.appendChild(announceWinnerText(text));
    card.appendChild(restartGameButton());
    container.firstChild.appendChild(card);
}
function announceWinnerText(text) {
    let announcement = document.createElement('h1');
    announcement.classList.add('winnerAnnouncementText');
    announcement.textContent = text;
    return announcement;
}
function restartGameButton() {
    let button = document.createElement('button');
    button.textContent = "Restart Game";
    button.classList.add("placementButton");
    button.addEventListener('click', restartBoard)
    return button;
}



class gameBoardLoader {
    constructor(playerBoard, player, aiBoard, ai) {
        this.playerBoard = playerBoard;
        this.player = player;
        this.aiBoard = aiBoard;
        this.ai = ai
    }
    reloadBoards() {
        this.playerBoard = new Gameboard();
        this.aiBoard = new Gameboard();
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    populatePlayer(size, x, y, direction) {
        this.playerBoard.populateShip(size, x, y, direction);
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    depopulatePlayer(size, x, y, direction) {
        this.playerBoard.depopulateShip(size, x, y, direction);
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    simplePopulate() {
        this.playerBoard.populateShip(2, 'I', 4, "east");
        this.playerBoard.populateShip(4, 'C', 5, "east");
        this.playerBoard.populateShip(3, 'J', 6, "south");
        this.playerBoard.populateShip(3, 'B', 8, "south");
        this.playerBoard.populateShip(2, 'E', 9, "east");
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
    attackAI(x, y) {
        this.aiBoard.receiveAttack(x, y);
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
        this.keepScore()
    }
    attackPlayer(x, y) {
        this.playerBoard.receiveAttack(x, y);
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
        this.keepScore()
    }
    produceArrayOfPlayerShips() {
        let playerShips = []
        this.playerBoard.grid.forEach((square) => {
            if (square.ship != null) {
                playerShips.push(square.ship);
            }
        })
        //playerShips contains duplicates of each ship, so I filter the array below
        let playerShipsFiltered = [];
        playerShips.forEach(ship => {
            if (!playerShipsFiltered.includes(ship)) {
                playerShipsFiltered.push(ship);
            }
        })
        return playerShipsFiltered;
    }
    produceArrayOfAiShips() {
        let aiShips = []
        this.aiBoard.grid.forEach((square) => {
            if (square.ship != null) {
                aiShips.push(square.ship);
            }
        })
        //playerShips contains duplicates of each ship, so I filter the array below
        let aiShipsFiltered = [];
        aiShips.forEach(ship => {
            if (!aiShipsFiltered.includes(ship)) {
                aiShipsFiltered.push(ship);
            }
        })
        return aiShipsFiltered;
    }
    keepScore() {
        let playerShips = this.produceArrayOfPlayerShips();
        let aiShips = this.produceArrayOfAiShips();
        let playerTally = 0
        let aiTally = 0
        playerShips.forEach((ship) => {
            if (ship.hits.length == ship.size) {
                playerTally += 1
            }
        })
        aiShips.forEach((ship) => {
            if (ship.hits.length == ship.size) {
                aiTally += 1;
            }
        });
        container.removeChild(container.firstChild);
        doubleScoreKeeperGenerator("Player", aiTally, "AI", playerTally);
        console.log("aiTally = " + aiTally);
        console.log("playerTally =" + playerTally);
        if (aiTally == 5) {
            announceWinnerCard("You win!");
        }
        if (playerTally == 5) {
            announceWinnerCard("AI wins!");
        }
        let aiSquares = document.querySelectorAll('.aiSquare');
        console.log(aiSquares);


        //construct a list of gameboard.grid ships
        //for any ship, if ship.hits == size, add +1 to score
        //input score in doubleScoreKeeperGenerator
    }
    copyAIgrid() {
        let array = this.aiBoard.grid.slice();
        return array;
    }
    randomParameterSelector(array, size) {
        let random = array[Math.floor(Math.random() * array.length)];
        let x = random.X;
        let y = random.Y;
        let index = array.indexOf(random);
        console.log(index);
        console.log(random);
        let direction = this.randomDirectionProducer();
        array.splice(index, 1);
        array.splice(index + 1, 1);
        array.splice(index - 1, 1);
        array.splice(index + 10, 1);
        array.splice(index - 10, 1);
        if (size > 1 && direction == "south") {
            array.splice(index + 2, 1);
        }
        if (size > 1 && direction == "north") {
            array.splice(index - 2, 1);
        }
        if (size > 1 && direction == "east") {
            array.splice(index + 20);
        }
        if (size > 1 && direction == "west") {
            array.splice(index - 20, 1);
        }
        if (size > 2 && direction == "south") {
            array.splice(index + 3, 1);
        }
        if (size > 2 && direction == "north") {
            array.splice(index - 3, 1);
        }
        if (size > 2 && direction == "east") {
            array.splice(index - 30, 1);
        }
        if (size > 2 && direction == "west") {
            array.splice(index + 30, 1);
        }
        if (this.aiBoard.populateShip(size, x, y, direction) == 'overflow!') {
            this.randomParameterSelector(array, size);
        }
        else {
            this.aiBoard.populateShip(size, x, y, direction);
        }
    }
    findAdjacentXCoordinates(x, y, array) {
        if (x == 'A') {
            let a = "overflow";
            let b = array.find(square => (square.X == 'B' && square.Y == y));
            return [a, b];
        }
        if (x == 'B') {
            let a = array.find(square => (square.X == 'A' && square.Y == y));
            let b = array.find(square => (square.X == 'C' && square.Y == y));
            return [a, b];
        }
        if (x == 'C') {
            let a = array.find(square => (square.X == 'B' && square.Y == y));
            let b = array.find(square => (square.X == 'D' && square.Y == y));
            return [a, b];
        }
        if (x == 'D') {
            let a = array.find(square => (square.X == 'C' && square.Y == y));
            let b = array.find(square => (square.X == 'E' && square.Y == y));
            return [a, b];
        }
        if (x == 'E') {
            let a = array.find(square => (square.X == 'D' && square.Y == y));
            let b = array.find(square => (square.X == 'F' && square.Y == y));
            return [a, b];
        }
        if (x == 'F') {
            let a = array.find(square => (square.X == 'E' && square.Y == y));
            let b = array.find(square => (square.X == 'G' && square.Y == y));
            return [a, b];
        }
        if (x == 'G') {
            let a = array.find(square => (square.X == 'F' && square.Y == y));
            let b = array.find(square => (square.X == 'H' && square.Y == y));
            return [a, b];
        }
        if (x == 'H') {
            let a = array.find(square => (square.X == 'G' && square.Y == y));
            let b = array.find(square => (square.X == 'I' && square.Y == y));
            return [a, b];
        }
        if (x == 'I') {
            let a = array.find(square => (square.X == 'H' && square.Y == y));
            let b = array.find(square => (square.X == 'J' && square.Y == y));
            return [a, b];
        }
        if (x == 'J') {
            let a = array.find(square => (square.X == 'I' && square.Y == y));
            let b = "overflow";
            return [a, b];
        }
    }
    randomDirectionProducer() {
        let num = Math.random();
        if (num >= .75) { return "east" }
        if (num <= .25) {return "west"}
        if (num > .25 && num < .5) { return "south" }
        else { return "north" }
    }
    simplePopulateAI() {
        let array = this.copyAIgrid();
        this.randomParameterSelector(array, 2);
        console.log(array);
        this.randomParameterSelector(array, 2);
        console.log(array);
        this.randomParameterSelector(array, 3);
        console.log(array);
        this.randomParameterSelector(array, 3);
        console.log(array);
        this.randomParameterSelector(array, 4);
        console.log(array);
        let container = document.getElementById('container');
        container.removeChild(container.firstChild.nextSibling);
        twoBoardDOMLoader(this.playerBoard, this.aiBoard);
    }
}

//suite for loading carrier placement module before game begins

let placementContainer = document.createElement('div');
placementContainer.classList.add('placement-module-container');
placementContainer.setAttribute('id', 'placementContainer');
let placementBoard = new Gameboard();
let shipCount = [];
function placementModuleLoader() {
    placementContainer.appendChild(topTextLoader());
    placementContainer.appendChild(placementModuleMiddleSubContainerLoader());
    placementContainer.appendChild(bottomSubcontainerLoader());
    document.body.appendChild(placementContainer);
}
function topTextLoader() {
    let container = document.createElement('div');
    container.classList.add('placementTextBox');
    container.appendChild(topTextContentLoader('Place Your Ships!'))
    return container;
};
function topTextContentLoader(text) {
    let h = document.createElement('h1');
    h.classList.add('placementTextContent');
    h.setAttribute('id', 'placementHeading');
    h.textContent = text;
    return h;
}
function placementModuleMiddleSubContainerLoader() {
    let container = document.createElement('div');
    container.classList.add('middleSubcontainer')
    container.appendChild(placementBoardLoader());
    container.appendChild(rightInfoLoader());
    return container;
}
function rightInfoLoader() {
    let container = document.createElement('div');
    container.classList.add('rightInfoSubcontainer');
    container.appendChild(buttonsIntegrator());
    container.appendChild(textBoxLoader());
    return container
};
function buttonsIntegrator() {
    let container = document.createElement('div');
    container.classList.add('rightInfoButtonsContainer')
    container.appendChild(resetShipBtnLoader());
    container.appendChild(beginGameBtnLoader());
    return container;
}
function resetShipBtnLoader() {
    let resetShipBtn = document.createElement('button');
    resetShipBtn.classList.add('placementButton');
    resetShipBtn.textContent = "Reset Ships";
    resetShipBtn.addEventListener('click', resetShips)
    return resetShipBtn;
};
function beginGameBtnLoader() {
    let beginBtn = document.createElement('button');
    beginBtn.classList.add('placementButton');
    beginBtn.textContent = "Begin Game";
    beginBtn.addEventListener('click', checkifShipsAreAllPlaced);
    return beginBtn;
};
function textBoxLoader() {
    let textBox = document.createElement('div');
    textBox.classList.add('placementInstructionBox');
    textBox.appendChild(textBoxHeadingLoader());
    textBox.appendChild(textBoxContentLoader("Place your ships by dragging them to your desired location."));
    textBox.appendChild(textBoxContentLoader("Click the Rotate button to change orientation of ships waiting to be placed."));
    textBox.appendChild(textBoxContentLoader("You can also rotate ships after placing them on the board by clicking on them."));
    textBox.appendChild(textBoxContentLoader("Once you have placed all five ships, press the Begin Game button to start."));
    return textBox;
}
function textBoxHeadingLoader() {
    let container = document.createElement('div');
    container.classList.add('headingContainer');
    let heading = document.createElement('h3');
    heading.textContent = "Instructions";
    container.appendChild(heading);
    return container;
}
function textBoxContentLoader(text) {
    let content = document.createElement('p');
    content.classList.add('instructionContent');
    content.textContent = text;
    return content;
}
function selectShipSquareLoader(coordinate) {
    let square = document.createElement('div');
    square.classList.add('square');
    if (coordinate.containsShip == true) {
        square.style.backgroundColor = "red";
        square.addEventListener('click', function () {
            let id = square.id;
            let data = id.split("");
            let startingSquare = placementBoard.grid.find(square => (square.X == data[0] && square.Y == data[1]));
            let size = startingSquare.ship.size;
            let x = startingSquare.ship.xStart;
            let y = startingSquare.ship.yStart;
            if (startingSquare.ship.direction == "east") {
                placementBoard.depopulateShip(size, x, y, "east");
                depopulatePlayer(size, x, y, "east");
                //write depopulate player function
                placementBoard.populateShip(size, x, y, "south");
                populatePlayer(size, x, y, "south");
            } else if (startingSquare.ship.direction == "south") {
                placementBoard.depopulateShip(size, x, y, "south");
                depopulatePlayer(size, x, y, "south");
                placementBoard.populateShip(size, x, y, "east");
                populatePlayer(size, x, y, "east");
            }
            removeAllChildNodes(placementContainer);
            document.body.removeChild(placementContainer);
            placementModuleLoader();
        })
    }
    square.setAttribute('id', coordinate.X + coordinate.Y);
    square.addEventListener("dragover", function (ev) {
        console.log("dragOver");
        ev.preventDefault();
    });
    square.addEventListener("drop", function (ev) {
        console.log("Drop");
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let source = document.getElementById(data);
        let coordinate = ev.target.id;
        let size = data;
        let x = coordinate[0];
        let y = coordinate[1];
        if (coordinate[2] == 0) {
            let array = [coordinate[1], coordinate[2]]
            y = array.join('');
        }
        let startingSquare = placementBoard.grid.find(square => (square.X == x && square.Y == y));
        if (startingSquare.containsShip == true) {
            return
        }
        if (rotationTracker == 0) {
            populatePlayer(size, x, y, "east");
            placementBoard.populateShip(size, x, y, "east");
        } else {
            populatePlayer(size, x, y, "south");
            placementBoard.populateShip(size, x, y, "south");
        }
        removeAllChildNodes(placementContainer);
        document.body.removeChild(placementContainer);
        shipCount.push(size);
        placementModuleLoader();
    })
    return square;
}
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
function selectShipBoardLoader(board) {
    let arrayOfGridCoordinates = board.grid;
    let container = document.createElement('div');
    container.classList.add('grid-container');
    arrayOfGridCoordinates.forEach((coordinate) => {
        let square = selectShipSquareLoader(coordinate);
        container.appendChild(square);
    })
    return container;
};
function selectShipPlayerCoordinatedBoardLoader(board) {
    let container = document.createElement('div');
    container.classList.add('singleBoardContainer')
    let subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
        subcontainer.appendChild(yCoordinateLoader());
        subcontainer.appendChild(selectShipBoardLoader(board));
        container.appendChild(xCoordinateLoader());
        container.appendChild(subcontainer);
    return container;
};
function placementBoardLoader() {
    return selectShipPlayerCoordinatedBoardLoader(placementBoard);
};
const source = "";
function rotateShipButtonLoader() {
    let button = document.createElement('button');
    button.textContent = "Rotate";
    button.classList.add('placementButton');
    button.setAttribute('id', 'rotateShipButton');
    button.addEventListener('click', () => {
        rotateOnClick()
    });
    return button;
}
function rotateOnClick() {
    //let classContainers = document.querySelectorAll("div.singleShipClassContainer");
    let individualShipContainers = document.querySelectorAll("div.ship");
    individualShipContainers.forEach(function (node) {
        if (node.style.flexDirection == "column") { node.style.flexDirection = "row"; rotationTracker = 0; }
        else { node.style.flexDirection = "column"; rotationTracker = 1; }
    });
    //classContainers.forEach(function (node) {
        //if (rotationTracker == 1) { node.style.flexDirection = "row"; }
        //else { node.style.flexDirection = "column"; }
    //})
    checkClassContainerOrientation();
}
//this function checks whether to arrange ships in rows or columns within their class containers
function checkClassContainerOrientation() {
    let classContainers = document.querySelectorAll("div.singleShipClassContainer");
    classContainers.forEach(function (node) {
        if (rotationTracker == 1) { node.style.flexDirection = "row"; }
        else { node.style.flexDirection = "column"; }
    });
}
//This rotationTracker tells the shipMaker() whether to position ships vertically or horizontally.
    //0 commands shipMaker() to position ships horizontally, 1 vertically.
    //It tracks whether / when rotateOnClick() has rotated ships vertically or horizontally.
let rotationTracker = 0;
function shipMaker(size) {
    let container = document.createElement('div');
    container.classList.add('ship');
    container.setAttribute('draggable', 'true');
    container.setAttribute('id', size);
    if (rotationTracker == 1) {
        container.style.flexDirection = "column";
    }
    if (rotationTracker == 0) {
        container.style.flexDirection = "row";
    }
    while (size >= 1) {
        let square = document.createElement('div');
        square.classList.add('placementSquare');
        container.appendChild(square);
        size = size - 1;
    }
    container.addEventListener('dragstart', transferDataOnDragstart);
    return container;
}
function transferDataOnDragstart(ev) {
     // Change the source element's background color
        // to show that drag has started
        ev.currentTarget.classList.add("dragging");
        // Clear the drag data cache (for all formats/types)
        ev.dataTransfer.clearData();
        ev.dataTransfer.setData("text/plain", ev.target.id);
        const data = ev.dataTransfer.getData("text");
        source = document.getElementById(data);
        ev.currentTarget.removeEventListener("dragend", transferDataOnDragstart);
}
function bottomSubcontainerLoader() {
    let container = document.createElement('div');
    container.classList.add('bottomSubcontainer');
    container.appendChild(rotateShipButtonLoader());
    container.appendChild(shipCounter());
    return container;
}
function shipCounter() {
    let shipContainer = document.createElement('div');
    shipContainer.classList.add('shipAllClassesContainer');
    let sizeTwo = document.createElement('div');
    sizeTwo.classList.add('singleShipClassContainer');
    let sizeThree = document.createElement('div');
    sizeThree.classList.add('singleShipClassContainer');
    let sizeFour = document.createElement('div');
    sizeFour.classList.add('singleShipClassContainer');
    if (rotationTracker == 1) {
        sizeTwo.style.flexDirection = "row";
        sizeThree.style.flexDirection = "row";
        sizeFour.style.flexDirection = "row";
    }
    if (shipCount.filter(x => x == 2).length == 0) {
        sizeTwo.appendChild(shipMaker(2));
        sizeTwo.appendChild(shipMaker(2));
        shipContainer.appendChild(sizeTwo);
    }
    else if (shipCount.filter(x => x == 2).length == 1) {
        sizeTwo.appendChild(shipMaker(2));
        shipContainer.appendChild(sizeTwo);
    }
    if (shipCount.filter(x => x == 3).length == 0) {
        sizeThree.appendChild(shipMaker(3));
        sizeThree.appendChild(shipMaker(3));
        shipContainer.appendChild(sizeThree);
    } else if (shipCount.filter(x => x == 3).length == 1) {
        sizeThree.appendChild(shipMaker(3));
        shipContainer.appendChild(sizeThree);
    }
    if (shipCount.filter(x => x == 4).length == 0) {
        sizeFour.appendChild(shipMaker(4));
        shipContainer.appendChild(sizeFour);
    }
    return shipContainer;
}
function checkifShipsAreAllPlaced() {
    if (shipCount.length == 5) {
        simplePopulateAI();
        removeAllChildNodes(placementContainer);
        document.body.removeChild(placementContainer);
    }
    else {
        let h = document.getElementById('placementHeading');
        h.textContent = "Place All Ships Before Starting the Game!"
        h.style.color = "#ef4444";
    }
}
function resetShips() {
    placementBoard = new Gameboard();
    clearShipCount();
    removeAllChildNodes(placementContainer);
    document.body.removeChild(placementContainer);
    reloadBoards();
    placementModuleLoader();
}
function clearShipCount() {
    while (shipCount.length >= 1) {
        shipCount.pop();
    }
}


let playerBoard = new Gameboard();
let aiBoard = new Gameboard();
let player = "taylor"
let ai = "computer"
let boards = new gameBoardLoader(playerBoard, player, aiBoard, ai);

function loadBoards() {
    twoBoardDOMLoader(boards.playerBoard, boards.aiBoard);
    doubleScoreKeeperGenerator("Player", 0, "AI", 0);
}

const playerPopulateButton = document.createElement('button');
playerPopulateButton.addEventListener('click', simplePopulate);
playerPopulateButton.classList.add('populateButton');
playerPopulateButton.textContent = "Populate Player";
const aiPopulateButton = document.createElement('button');
aiPopulateButton.addEventListener('click', simplePopulateAI);
aiPopulateButton.classList.add('populateButton');
aiPopulateButton.textContent = "Populate AI";
const attackAIButton = document.createElement('button');
attackAIButton.addEventListener('click', attackAI);
attackAIButton.classList.add('populateButton');
attackAIButton.textContent = "Attack AI";
const attackPlayerButton = document.createElement('button');
attackPlayerButton.addEventListener('click', attackPlayer);
attackPlayerButton.classList.add('populateButton');
attackPlayerButton.textContent = "Attack Player"

function restartBoard() {
    let container = document.getElementById('container');
    removeAllChildNodes(container);
    generateHUD();
    resetShips();
}
function generateHUD() {
    playerBoard = new Gameboard();
    aiBoard = new Gameboard();
    player = "taylor";
    ai = "computer";
    doubleScoreKeeperGenerator("Player", 0, "AI", 0);
    twoBoardDOMLoader(boards.playerBoard, boards.aiBoard);
    placementModuleLoader();
    playerArray = boards.playerBoard.grid.slice();
}
function generateButtons() {
    let container = document.createElement('div');
    container.classList.add('buttonContainer');
    container.appendChild(playerPopulateButton);
    container.appendChild(aiPopulateButton);
    container.appendChild(attackPlayerButton);
    container.appendChild(attackAIButton);
    return container;
}
    function simplePopulate() {
        boards.simplePopulate();
    }
    function simplePopulateAI() {
        boards.simplePopulateAI();
    }
function populatePlayer(size, x, y, direction) {
    boards.populatePlayer(size, x, y, direction);
};
function depopulatePlayer(size, x, y, direction) {
    boards.depopulatePlayer(size, x, y, direction);
}
//this function is used with the ship placement module
    //whenever you reset ship placement, you also need to reload player & ai boards
    //to delete any ships placed during prior ship placement phase
function reloadBoards() {
    boards.reloadBoards();
}


//aiArray below contains globally available copy of playerBoard grid, for use by AI
//every time the AI attacks player, selects one element at random from the array and then removes it
//so that future invocations cannot attack the same location
const aiArray = boards.playerBoard.grid.slice();
function attackAI(x, y) {
    let found = boards.aiBoard.grid.find(square => (square.X == x && square.Y == y));
    if (found.isHit == true) { alert("You have already attacked that square! Try another.") }
    if (found.isHit == false) {
        let index = boards.aiBoard.grid.indexOf(found);
        aiArray.splice(index, 1);
        boards.attackAI(x, y);
        setTimeout(() => {
            attackPlayer();
        }, "500");
    }
}

//playerArray below contains globally available copy of playerBoard grid, for use by AI
//every time the AI attacks player, selects one element at random from the array and then removes it
//so that future invocations cannot attack the same location
let playerArray = boards.playerBoard.grid.slice();
function attackPlayer() {
    if (playerArray.length == 0) return alert('game over!')
    let random = playerArray[Math.floor(Math.random() * playerArray.length)];
    let x = random.X;
    let y = random.Y;
    let index = playerArray.indexOf(random);
    playerArray.splice(index, 1);
    boards.attackPlayer(x, y);
}
//scripting forms for inputting coordinates
let xLabel = document.createElement('label');
xLabel.classList.add('attackLabel');
xLabel.textContent = "Input X Coordinate: "
let xInput = document.createElement('input');
xInput.setAttribute("type", "text");
let yLabel = document.createElement('label');
yLabel.classList.add('attackLabel');
yLabel.textContent = "Input Y Coordinate: "
let yInput = document.createElement('input');
yInput.setAttribute("type", "text");

function returnXForm() {
    let container = document.createElement('div');
    container.classList.add('formContainer')
    container.appendChild(xLabel);
    container.appendChild(xInput);
    return container
}
function returnYForm() {
    let container = document.createElement('div');
    container.classList.add('formContainer')
    container.appendChild(yLabel);
    container.appendChild(yInput);
    return container
}
function generateForm() {
    let container = document.createElement('div');
    container.classList.add('formContainer')
    container.appendChild(returnXForm());
    container.appendChild(returnYForm());
    return container
}

let repeatBlocker = ""

function loadBattleshipApp() {
    if (repeatBlocker == 1) {
        console.log('fuck')
        return
    } else {
        placementModuleLoader();
        loadBoards();
        repeatBlocker = 1;
        console.log('battleship test');
    }
}

export { loadBattleshipApp }