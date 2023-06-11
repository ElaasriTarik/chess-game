const chessBoard =document.querySelector('.chessBoard')
let colorCase = true;
let piecePlace = 1;
const alphas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const row_w = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 
'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2']

const row_b = ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 
'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7']

const pieces_w = ['pieces/w/rook.png', 'pieces/w/knight.png', 
'pieces/w/bishop.png', 'pieces/w/king.png', 'pieces/w/queen.png', 'pieces/w/bishop.png', 
'pieces/w/knight.png', 'pieces/w/rook.png', 'pieces/w/pawn.png'];

const pieces_b = ['pieces/b/rook_b.png', 'pieces/b/knight_b.png', 
'pieces/b/bishop_b.png', 'pieces/b/king_b.png', 'pieces/b/queen_b.png', 'pieces/b/bishop_b.png', 
'pieces/b/knight_b.png', 'pieces/b/rook_b.png', 'pieces/b/pawn_b.png'];
 
playground()

function playground() {
    let territoryName;
    let pieceTerritory;
    let allSpots = 0;
    for (let piecePlace = 1; piecePlace < 9;) {
         
        for (let i = 0; i < alphas.length; i++) {
            
            territoryName = alphas[i] + piecePlace;
            pieceTerritory  = document.createElement('div')
            pieceTerritory.classList.add('tr')
            pieceTerritory.classList.add(`${territoryName}`);
            pieceTerritory.textContent = territoryName;
            if (piecePlace % 2 === 0) {
                if (i % 2 !== 0) {
                    pieceTerritory.classList.add('white')
                }  pieceTerritory.classList.add('black')       
            } else if (i % 2 == 0) {
                pieceTerritory.classList.add('white')
            } pieceTerritory.classList.add('black')
            
            chessBoard.append(pieceTerritory)
            allSpots++;          
        }
        piecePlace++;           
    }     
    setPieces() 
}

function setPieces(terr, spot) {
    const arr_pieces = [row_w, row_b]
    for (let x = 0; x < arr_pieces.length; x++) {
        for (let i = 0; i < 16; i++) {
            if (i < 16) {
                const onBoardPiece = document.querySelector(`.${arr_pieces[x][i]}`)
                let indexOfPiece;
                i >= 8 ?indexOfPiece = 8:indexOfPiece = i;
                const img = document.createElement('img')
                img.classList.add('piece')
                img.src = x == 0 ? pieces_w[indexOfPiece]:pieces_b[indexOfPiece]
                onBoardPiece.append(img)
            }   
        }
    } 
            const all_pieces = document.querySelectorAll('.piece');  
            all_pieces.forEach(item => {
                item.addEventListener('click', (e) => {
                    getPossibleMoves(e.target);
                })
            });
}


function possible_moves_knight(item_to_track) {
   const item_ground = item_to_track.parentElement.classList[0];
   const item_g_letter = item_ground[0];
   const item_g_number = parseInt(item_ground[1]);
   const possible_up_left = alphas[alphas.indexOf(item_g_letter) - 1] + (item_g_number - 2);
   const possible_up_right = alphas[alphas.indexOf(item_g_letter) + 1] + (item_g_number - 2);
   const possible_down_left = alphas[alphas.indexOf(item_g_letter) - 1] + (item_g_number + 2);
   const possible_down_right = alphas[alphas.indexOf(item_g_letter) + 1] + (item_g_number + 2);
   console.log(possible_up_left, possible_up_right, possible_down_left, possible_down_right);
    
   const possible1 = document.querySelector(`.${possible_up_left}`)
   //console.log(possible1);
   possible1.style.backgroundColor = 'pink';

}