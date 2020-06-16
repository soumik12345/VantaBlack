var GameBoard = {};

GameBoard.pieces = new Array(BOARD_SQUARES_NUMBER);
GameBoard.side = COLORS.WHITE;
GameBoard.fiftyMove = 0;
GameBoard.historyPlay = 0;                      // Number of half moves made in the Game
GameBoard.play = 0;                             // Number of half moves made in the search tree
GameBoard.castlePermission = 0;                 // Status of King-side and Queen-side Castling Permission
GameBoard.material = new Array(2);    // Material (White/Black) of the pieces