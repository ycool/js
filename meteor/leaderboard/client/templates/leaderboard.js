
Template.leaderboard.helpers({
    'player': function() {
        return PlayersList.find({}, {
            sort: {
                score: -1,
                name: 1
            }
        });
    },

    'selectedClass': function() {
        var playerId = this._id;
        var selectedPlayer = Session.get('selectedPlayer');
        if (playerId == selectedPlayer) {
            return "active";
        }
    },

    'showSelectedPlayer': function() {
        var selectedPlayer = Session.get('selectedPlayer');
        return PlayersList.findOne(selectedPlayer);
    }
});

Template.leaderboard.events({
    'mouseenter .player': function() {
        var playerId = this._id; // mango rowID
        Session.set('selectedPlayer', playerId);
    },
    'click .increment': function() {
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore', selectedPlayer, 5);
    },
    'click .decrement': function() {
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore', selectedPlayer, -5);
    },
    'click .remove': function() {
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('removePlayerData', selectedPlayer);
    }
});

