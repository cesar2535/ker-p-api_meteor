// counter starts at 0
Session.setDefault("counter", 0);
var categoryArray = [];
Meteor.apply('getApi', ['category/', {}], {wait: true}, function (error, result) {
  console.log(result);
  categoryArray = result.data;
  console.log(categoryArray[0].id);
  return categoryArray;
});

Template.home.helpers({
  counter: function () {
    return Session.get("counter");
  }
});

Template.home.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
    Meteor.apply('getCategoryContent', [categoryArray[1].id, {}], function (error, result) {
      console.log(result);
    });
    console.log('under meteor apply');
    console.log('below');
  }
});