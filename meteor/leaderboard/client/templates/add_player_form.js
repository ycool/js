
Template.addPlayerForm.events({
    'click .add': function(event) {
        console.log("click add button");        
        var playerNameVar = $('#playerName').val();
        Meteor.call('insertPlayerData', playerNameVar);
    }
});

