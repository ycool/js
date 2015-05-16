
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
      Meteor.call("server_sign_fs64", bidword, function(error, result) {
        console.log("server return:", result); //s[0], ":", s[1]);
        Session.set('sign1', result[0]);
        Session.set('sign2', result[1]);
      });
      // console.log(iconv);
      // var bidword_gbk = iconv.encode(bidword, 'gbk');
      // var bw_gbk = new Buffer(bidword, 'GBK');
      // var s = sign_fs64(bw_gbk); 
      // Session.set('sign1', s[0]);
      // Session.set('sign2', s[1]);
    },
  });

}

if (Meteor.isServer) {
  var iconv = Meteor.npmRequire('iconv-lite');
  Meteor.methods({
    server_sign_fs64: function (bidword) {
      var bw_gbk = iconv.encode(bidword, 'GBK');
      console.log("bidword:", bidword);
      console.log("bw gbk len:", bw_gbk.length);
      var s = sign_fs64(bw_gbk); 
      console.log(s[0], ":", s[1]);
      return s;
    }
  });

  Meteor.startup(function () {
  });
}
