var piecesArray = [];
var colorArray = [];

var blackContentArray = [];
var whiteContentArray = [];

var makeInitialBoard = function() {
    var theHTML = '<table style="border: 1px solid #e67e22;" class="center-horizontal">';
    var black = true;
    for(var i = 0; i < 8; i++) {
        theHTML += '<tr>';
        for(var j = 0; j < 8; j++) {
            if(black) {
                theHTML += '<td id="' + i + '-' + j + '" class="' + 'chess-td chess-td-black' + '"></td>';
                colorArray[i+'-'+j] = 'black';
            }
            else {
                theHTML += '<td id="' + i + '-' + j + '" class="' + 'chess-td chess-td-white' + '"></td>';
                colorArray[i+'-'+j] = 'white';
            }
            black = !black;
        }
        black = !black;
        theHTML += '</tr>';
    }
    theHTML += '</table>';
    document.getElementById("table-holder").innerHTML = theHTML;
    for(var j = 0; j < 8; j++) {
        document.getElementById("1-"+j).innerHTML="<center><i class='fas fa-chess-pawn' style='font-size:38px;color: black;'></i></center>";
        piecesArray["1-"+j] = 'pawn';
    }
    for(var j = 0; j < 8; j++) {
        document.getElementById("6-"+j).innerHTML="<center><i class='fas fa-chess-pawn' style='font-size:38px;color: #7f8c8d;'></i></center>";
        piecesArray["6-"+j] = 'pawn';
    }
    document.getElementById("0-0").innerHTML="<center><i class='fas fa-chess-rook' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("0-7").innerHTML="<center><i class='fas fa-chess-rook' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("7-0").innerHTML="<center><i class='fas fa-chess-rook' style='font-size:38px;color: #7f8c8d;'></i></center>";
    document.getElementById("7-7").innerHTML="<center><i class='fas fa-chess-rook' style='font-size:38px;color: #7f8c8d;'></i></center>";
    piecesArray["0-0"] = 'rook';
    piecesArray["0-7"] = 'rook';
    piecesArray["7-0"] = 'rook';
    piecesArray["7-7"] = 'rook';
    document.getElementById("0-1").innerHTML="<center><i class='fas fa-chess-bishop' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("0-6").innerHTML="<center><i class='fas fa-chess-bishop' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("7-1").innerHTML="<center><i class='fas fa-chess-bishop' style='font-size:38px;color: #7f8c8d;'></i></center>";
    document.getElementById("7-6").innerHTML="<center><i class='fas fa-chess-bishop' style='font-size:38px;color: #7f8c8d;'></i></center>";
    piecesArray["0-1"] = 'bishop';
    piecesArray["0-6"] = 'bishop';
    piecesArray["7-1"] = 'bishop';
    piecesArray["7-6"] = 'bishop';
    document.getElementById("0-2").innerHTML="<center><i class='fas fa-chess-knight' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("0-5").innerHTML="<center><i class='fas fa-chess-knight' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("7-2").innerHTML="<center><i class='fas fa-chess-knight' style='font-size:38px;color: #7f8c8d;'></i></center>";
    document.getElementById("7-5").innerHTML="<center><i class='fas fa-chess-knight' style='font-size:38px;color: #7f8c8d;'></i></center>";
    piecesArray["0-2"] = 'knight';
    piecesArray["0-5"] = 'knight';
    piecesArray["7-2"] = 'knight';
    piecesArray["7-5"] = 'knight';
    document.getElementById("0-4").innerHTML="<center><i class='fas fa-chess-king' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("0-3").innerHTML="<center><i class='fas fa-chess-queen' style='font-size:38px;color: black;'></i></center>";
    document.getElementById("7-4").innerHTML="<center><i class='fas fa-chess-king' style='font-size:38px;color: #7f8c8d;'></i></center>";
    document.getElementById("7-3").innerHTML="<center><i class='fas fa-chess-queen' style='font-size:38px;color: #7f8c8d;'></i></center>";
    piecesArray["0-4"] = 'king';
    piecesArray["0-3"] = 'queen';
    piecesArray["7-4"] = 'king';
    piecesArray["7-3"] = 'queen';
}

makeInitialBoard();