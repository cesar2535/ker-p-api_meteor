Meteor.startup(function () {
  // code to run on server at startup
});

var api_key = 'kp53f713e09d1469.34305937';
var api_url = 'http://api.kptaipei.tw/v1/'

Meteor.methods({
  getApi: function (apiType, paramsObj) {
    // apiType is a string about the type of API URL, such as 'category', 'albums', 'videos', and 'musics'
    // paramsObj is an object of string that is parameters of API URL
    // Just have two params fot this API, 'page' and 'page_size'
    check(apiType, String);
    check(paramsObj, Object);
    apiType = apiType + '/';
    paramsObj.accessToken = api_key;
    console.log('The type of API: ' + apiType);
    console.log(paramsObj);
    this.unblock();
    var infoObj = HTTP.call('GET', api_url + apiType, {
      params: paramsObj
    });
    console.log(infoObj);
    return infoObj.data;
  }
});