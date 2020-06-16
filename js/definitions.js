// Mapping of Chess Pieces
const PIECES = {
    EMPTY: 0,
    WHITE_PAWN: 1,
    WHITE_KNIGHT: 2,
    WHITE_BISHOP: 3,
    WHITE_ROOK: 4,
    WHITE_QUEEN: 5,
    WHITE_KING: 6,
    BLACK_PAWN: 7,
    BLACK_KNIGHT: 8,
    BLACK_BISHOP: 9,
    BLACK_ROOK: 10,
    BLACK_QUEEN: 11,
    BLACK_KING: 12
};

// Length of the Data Structure to represent the board
const BOARD_SQUARES_NUMBER = 120;

// Mapping of Files (A-H)
const FILES = {
    FILE_A: 0,
    FILE_B: 1,
    FILE_C: 2,
    FILE_D: 3,
    FILE_E: 4,
    FILE_F: 5,
    FILE_G: 6,
    FILE_H: 7,
    FILE_None: 8,
};

// Mapping of Ranks (1-8)
const RANKS = {
    RANK_1: 0,
    RANK_2: 1,
    RANK_3: 2,
    RANK_4: 3,
    RANK_5: 4,
    RANK_6: 5,
    RANK_7: 6,
    RANK_8: 7,
    RANK_None: 8
}

// Mapping of Colours of Pieces
const COLORS = {
    WHITE: 0,
    BLACK: 1,
    BOTH: 2
}

// Mapping of Square Labels
const SQUARES = {
    // First 8 squares
    A1: 21,
    B1: 22,
    C1: 23,
    D1: 24,
    E1: 25,
    F1: 26,
    G1: 27,
    H1: 28,
    // Last 8 squares
    A8: 91,
    B8: 92,
    C8: 93,
    D8: 94,
    E8: 95,
    F8: 96,
    G8: 97,
    H8: 98,
    // Exceptions
    NO_SQUARE: 99,
    // Padding
    OFF_BOARD: 100
};

// Mapping of Boolean Literals
const BOOLEAN = {
    FALSE: 0,
    TRUE: 1
}


const FilesBoard = new Array(BOARD_SQUARES_NUMBER);
const RanksBoard = new Array(BOARD_SQUARES_NUMBER);


function fileRank2Square(file, rank) {
    return file + 21 + rank * 10;
}