
let board = new GoldRush()
let renderer = new Renderer()
// board.print()
// console.log('-----------------------------------');
function render() {
    renderer.renderBoard(board.matrix)
    renderer.renderScore(board.getPlayersScore())
}
render()

// $(document).keypress(function (e) {
$(document).keypress(function (e) {
    if (e.which == 119) {
        board.movePlayer(1, "up")
    } else if (e.which == 97) {
        board.movePlayer(1, "left")
    } else if (e.which == 115) {
        board.movePlayer(1, "down")
    } else if (e.which == 100) {
        board.movePlayer(1, "right")
    }

    else if (e.which == 105) {
        board.movePlayer(2, "up")
    } else if (e.which == 106) {
        board.movePlayer(2, "left")
    } else if (e.which == 107) {
        board.movePlayer(2, "down")
    } else if (e.which == 108) {
        board.movePlayer(2, "right")
    }

    render()
    // renderer.renderBoard(board.matrix)

})


$('select[name=dimintions]').change(function () {
    let dimin = Number.parseInt($(this).val())
    board.setDimintion(dimin)
    $('#board').css('grid-template-columns', `repeat(${dimin},1fr)`)
    $('#board').css('grid-template-rows', `repeat(${dimin},1fr)`)
    render()
});




//     if (e.which == 119) {
//         board.movePlayer(2, "up")
//     }
//     // renderer.renderBoard(board.matrix)

// }

