class hangletGame {
    constructor(p1,p2){
        this._players=[p1,p2];
        this._turns =[null,null];
        this._sendToPlayers('HangLet Game Starts!');
         this._saveUsername(this._players);//showName
        this._saveGuessWord(this._players);
        this._saveGuessWordHint(this._players);
        this._players.forEach((player, idx) => {
            player.on('playerScore', (score) => {//turn==score
              this._onTurn(idx, score);
            });
          });
    }
_sendToPlayers(msg){
this._players.forEach((player) => player.emit('msg',msg));
}
_sendToPlayersFinalResult(msg){
    this._players.forEach((player) => player.emit('scoreResult',msg));
}
_sendToPlayer(playerIndex,msg){
    this._players[playerIndex].emit('msg',msg);
    }
_onTurn(playerIndex, score) {
         this._turns[playerIndex] = score;
            this._checkGameOver();
}
_saveUsername(players){
//save opponent name
    players[0].on('opponent',(txt)=>players[1].emit('opponent',txt));//txt
    players[1].on('opponent',(txt)=>players[0].emit('opponent',txt));
}
 _saveGuessWord(players){
    //save word
    players[1].on('playerWord',(txt)=>players[0].emit('playerWord',txt));//txt
    players[0].on('playerWord',(txt)=>players[1].emit('playerWord',txt));
 }
 _saveGuessWordHint(players){
      players[1].on('playerHintWord',(txt)=>players[0].emit('playerHintWord',txt));
      players[0].on('playerHintWord',(txt)=>players[1].emit('playerHintWord',txt));
   }

 _checkGameOver(){
const turns = this._turns;
    if (turns[0] && turns[1]) {
      this._sendToPlayers('Game over ' + turns.join(' : '));
      this._sendToPlayers('gameover');
      this._getGameResult();
      this._turns = [null, null];
    }
}

_getGameResult() {
    const p0 = this._turns[0];
    const p1 = this._turns[1];
    const difference = p0 - p1;

   if(difference==0){
        this._sendToPlayersFinalResult('Draw! '+p0+' : '+p1+"&#128528");
}
      else if(difference>0){
      //  this._sendWinMessage(this._players[0], this._players[1]);
    this._players[0].emit('scoreResult', 'You won! '+p0+' : '+p1+"&#128512;");
    this._players[1].emit('scoreResult', 'You lost! '+p1+' : '+p0+"&#128532");
}
else{
       // this._sendWinMessage(this._players[1], this._players[0]);
        this._players[1].emit('scoreResult', 'You won! '+p1+' : '+p0+"&#128512;");
        this._players[0].emit('scoreResult', 'You lost! '+p0+' : '+p1+"&#128532");
       }  
  }
  _sendWinMessage(winner, loser) {
    const p0 = this._turns[0];
    const p1 = this._turns[1];
    winner.emit('scoreResult', 'You won! '+p0+' : '+p1);
    loser.emit('scoreResult', 'You lost! '+p1+' : '+p0);
  }

}
module.exports = hangletGame;