
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

  // var iconv = require('mrt:iconv-lite');
  // console.log("iconv", iconv);
  // console.log(iconv.encode("abc", 'GBK'));
  // var iconv = new Iconv('GBK', 'UTF-8//TRANSLIT//IGNORE');

  Template.hello.events({
    'keyup .ads' : function (event, template) {
      // var bidword = $('#bidword').val();
      var bidword = event.target.value;
      console.log('bidword:', bidword);
      // console.log(iconv);
      // var bidword_gbk = iconv.encode(bidword, 'gbk');
      var s = sign_fs64(bidword); 
      Session.set('sign1', s[0]);
      Session.set('sign2', s[1]);
    },
  });

  getPackageName = function() {
    var p = Package['mrt:iconv-lite'];
    console.log(p);
    console.log(p.encode("abc", 'GBK'));
    for(var packageName in Package) {
        console.log(packageName);
    } 
}

Meteor.startup(function() {
    getPackageName(); 
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
