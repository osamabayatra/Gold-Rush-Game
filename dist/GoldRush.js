//here you’ll create your new matrix, it should extend from Matrix
class GoldRush extends Matrix {
    constructor() {
        super()
        this.dimintion = 5
        this.matrix = []
        this.loadDeminsions(this.dimintion)

        this.alter(0, 0, 1)
        this.alter(this.dimintion - 1, this.dimintion - 1, 2)

        this.player1 = { r: 0, c: 0, score: 0 }
        this.player2 = { r: this.dimintion - 1, c: this.dimintion - 1, score: 0 }
        this.putCoins()

    }

    setDimintion(num) {
        this.dimintion = num;
        this.loadDeminsions(this.dimintion)
        this.alter(0, 0, 1)
        this.alter(this.dimintion - 1, this.dimintion - 1, 2)

        this.player1 = { r: 0, c: 0, score: 0 }
        this.player2 = { r: this.dimintion - 1, c: this.dimintion - 1, score: 0 }
        this.putCoins()
    }

    getPlayersScore() {
        return { player1: this.player1.score, player2: this.player2.score }
    }

    loadDeminsions(dim) {
        this.matrix = []
        for (let r = 0; r < dim; r++) {
            let row = []
            for (let c = 0; c < dim; c++) {
                row.push('.')
            }
            this.matrix.push(row)
        }
    }

    movePlayer(player, direction) {
        // console.log(`player 2 : ${this.player2.score}`);
        switch (direction) {
            case 'down':
                if (player == 1) {
                    if (!this.checkBoundries({ r: this.player1.r, c: this.player1.c }, 'down'))
                        return

                    this.isCoin(this.player1.r + 1, this.player1.c, player)
                    this.alter(this.player1.r, this.player1.c, '.')
                    this.alter(this.player1.r + 1, this.player1.c, player)
                    this.player1.r++
                } else {
                    if (!this.checkBoundries({ r: this.player2.r, c: this.player2.c }, 'down'))
                        return

                    this.isCoin(this.player2.r + 1, this.player2.c, player)
                    this.alter(this.player2.r, this.player2.c, '.')
                    this.alter(this.player2.r + 1, this.player2.c, player)
                    this.player2.r++
                }
                break;
            case 'left':
                if (player == 1) {
                    if (!this.checkBoundries({ r: this.player1.r, c: this.player1.c }, 'left'))
                        return

                    this.isCoin(this.player1.r, this.player1.c - 1, player)
                    this.alter(this.player1.r, this.player1.c, '.')
                    this.alter(this.player1.r, this.player1.c - 1, player)
                    this.player1.c--
                } else {
                    if (!this.checkBoundries({ r: this.player2.r, c: this.player2.c }, 'left'))
                        return
                    this.isCoin(this.player2.r, this.player2.c - 1, player)
                    this.alter(this.player2.r, this.player2.c, '.')
                    this.alter(this.player2.r, this.player2.c - 1, player)
                    this.player2.c--
                }
                break;

            case 'right':
                if (player == 1) {
                    if (!this.checkBoundries({ r: this.player1.r, c: this.player1.c }, 'right'))
                        return

                    this.isCoin(this.player1.r, this.player1.c + 1, player)
                    this.alter(this.player1.r, this.player1.c, '.')
                    this.alter(this.player1.r, this.player1.c + 1, player)
                    this.player1.c++
                } else {
                    if (!this.checkBoundries({ r: this.player2.r, c: this.player2.c }, 'right'))
                        return

                    this.isCoin(this.player2.r, this.player2.c + 1, player)
                    this.alter(this.player2.r, this.player2.c, '.')
                    this.alter(this.player2.r, this.player2.c + 1, player)
                    this.player2.c++
                }
                break;

            case 'up':
                if (player == 1) {
                    if (!this.checkBoundries({ r: this.player1.r, c: this.player1.c }, 'up'))
                        return

                    this.isCoin(this.player1.r - 1, this.player1.c, player)
                    this.alter(this.player1.r, this.player1.c, '.')
                    this.alter(this.player1.r - 1, this.player1.c, player)
                    this.player1.r--
                } else {
                    if (!this.checkBoundries({ r: this.player2.r, c: this.player2.c }, 'up'))
                        return

                    this.isCoin(this.player2.r - 1, this.player2.c, player)
                    this.alter(this.player2.r, this.player2.c, '.')
                    this.alter(this.player2.r - 1, this.player2.c, player)
                    this.player2.r--
                }
                break;

        }

    }

    checkBoundries(currentPosition, direction) {
        console.log(currentPosition);
        if (direction == 'up') {
            if (currentPosition.r - 1 < 0)
                return false

        } else if (direction == 'down') {
            if (currentPosition.r + 1 >= this.dimintion)
                return false
        } else if (direction == 'left') {
            if (currentPosition.c - 1 < 0)
                return false
        } else if (direction == 'right') {
            if (currentPosition.c + 1 >= this.dimintion)
                return false
        }

        return true
    }

    isCoin(r, c, player) {
        if (this.matrix[r][c] == 'c') {
            if (player == 1) {
                this.player1.score += 10
            } else if (player == 2) {
                this.player2.score += 10
            }
        }
    }

    putCoins() {
        let coinsNum = 5;
        for (let i = 0; i < coinsNum; i++) {
            let x = this.randomizeNumber(this.dimintion),
                y = this.randomizeNumber(this.dimintion)

            if (this.matrix[x][y] == 1 || this.matrix[x][y] == 2 || this.matrix[x][y] == 'c') {
                i--
            }
            else {
                this.alter(x, y, 'c')
            }
        }
    }

    randomizeNumber(max) {
        return Math.floor(Math.random() * max);
    }

    print() {
        super.print()
    }
}