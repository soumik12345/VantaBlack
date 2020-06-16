$(function () {
    init();
    console.log('Everything is Awesome');

    initializeFRBoard();
});

function initializeFRBoard() {
    var file = FILES.FILE_A;
    var rank = RANKS.RANK_1;
    var square = SQUARES.A1;

    // Set the whole board to offboard (100)
    for(var index = 0; index < BOARD_SQUARES_NUMBER; index++) {
        FilesBoard[index] = SQUARES.OFF_BOARD;
        RanksBoard[index] = SQUARES.OFF_BOARD;
    }

    // Set the playable portion of the board
    for(var file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
        for(var rank = RANKS.RANK_1; rank <= RANKS.RANK_8; rank++) {
            square_index = fileRank2Square(file, rank);
            FilesBoard[square_index] = file;
            RanksBoard[square_index] = rank;
        }
    }

    // // Unit Test
    // console.log(
    //     'FilesBoard[SQUARES.A1]:' + FilesBoard[SQUARES.A1] + '\tRanksBoard[SQUARES.A1]:' + RanksBoard[SQUARES.A1]
    // );
    // console.log(
    //     'FilesBoard[SQUARES.A8]:' + FilesBoard[SQUARES.A8] + '\tRanksBoard[SQUARES.A8]:' + RanksBoard[SQUARES.A8]
    // );
    // console.log(
    //     'FilesBoard[SQUARES.H1]:' + FilesBoard[SQUARES.H1] + '\tRanksBoard[SQUARES.H2]:' + RanksBoard[SQUARES.H1]
    // );
    // console.log(
    //     'FilesBoard[SQUARES.H8]:' + FilesBoard[SQUARES.H8] + '\tRanksBoard[SQUARES.H8]:' + RanksBoard[SQUARES.H8]
    // );
}

function init() {
    console.log('init() called');
}