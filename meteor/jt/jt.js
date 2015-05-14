
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('sign1', 0);
  Session.setDefault('sign2', 0);

  Template.hello.helpers({
    sign1: function () {
      return Session.get('sign1');
    },
    sign2: function () {
      return Session.get('sign2');
    }
  });

  Template.hello.events({
    'keyup .ads' : function (event, template) {
      // var bidword = $('#bidword').val();
      var bidword = event.target.value;
      console.log('bidword:', bidword);
      var s = sign_fs64(bidword);
      Session.set('sign1', s[0]);
      Session.set('sign2', s[1]);
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
