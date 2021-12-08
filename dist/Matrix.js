// a file to hold your base Matrix data structure
class Matrix {
    constructor() {
        this.matrix = []
    }

    print() {
        for (let r = 0; r < this.matrix.length; r++) {
            let str = ''
            for (let c = 0; c < this.matrix[r].length; c++) {
                str += this.matrix[r][c] + '\t'
            }
            console.log(str);
        }
    }

    alter(r, c, v) {
        this.matrix[r][c] = v
    }
}