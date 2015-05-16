PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  console.log("Hello world");


  Template.leaderboard.helpers({
    player: function () {
      return PlayersList.find({}, {sort: {score: -1, name: 1} });
    },
    'selectedClass': function(){
        var playerId = this._id;
        var selectedPlayer = Session.get('selectedPlayer');
        if(playerId == selectedPlayer){
            return "selected";
        }
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id; // mango rowID
      Session.set('selectedPlayer', playerId);
    }, 
    'click .increment': function(){
     var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: 5} });
    },
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: -5} });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
