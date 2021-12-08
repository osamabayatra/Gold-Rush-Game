class Renderer {
    constructor() {
        this.doc = $('#board')
    }

    renderBoard(matrix) {
        this.doc.empty()
        //display the matrix on the screen
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                this.addItem(matrix[i][j])
            }
        }
    }

    addItem(item) {
        if (item == 1) {
            this.doc.append(`<img class="player1" src="pics/1.modi.png">`)
        } else if (item == 2) {
            this.doc.append(`<img class="player2" src="pics/2.modi.png">`)
        } else if (item == 'c') {

            this.doc.append(`<img class="coin" src="pics/coin.modi.png">`)

        } else {
            this.doc.append(`<div class="empty"> </div>`)
        }
    }

    renderScore(players) {
        $('.score').empty().append(`<h2>Player1 : ${players.player1}</h2> <h2>Player2 : ${players.player2}</h2>`)
    }
}