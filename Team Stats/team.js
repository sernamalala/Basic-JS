const team = {
    _players: [
      {firstName: 'Cristiano',
      lastName: 'Ronaldo',
      age: 38 },
      {firstName: 'Serena',
      lastName: 'Williams',
      age: 42 },
      {firstName: 'Coco',
      lastName: 'Gauff',
      age: 19}]
      ,
    _games:[
      {
        opponent: 'Manchester United',
        teamPoints: 12,
        opponentPoints: 4
      }
      ,
              {
        opponent: 'Real Tennis',
        teamPoints: 22,
        opponentPoints: 16
      }
      ,
              {
        opponent: 'Bangtan Run',
        teamPoints: 40,
        opponentPoints: 39
      }
    ],

    get players(){
      return this._players;
    },
          get games(){
      return this._games;
    },

    addPlayer(newFirstName,newLastName,newAge){

      const player = {
        firstName :newFirstName,
        lastname: newLastName,
        age: newAge
      };
      this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints,newOpponentPoints){
      const game = {
         
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      
      }

      this._games.push(game);
    }
}

team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans',100,98);
console.log(team._players);
console.log(team._games);
