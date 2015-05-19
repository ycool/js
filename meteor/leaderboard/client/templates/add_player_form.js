
Template.addPlayerForm.events({
    'submit form': function(event) {
        event.preventDefault();
        var playerNameVar = event.target.playerName.value;
        Meteor.call('insertPlayerData', playerNameVar);
    }
});

