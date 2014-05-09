var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};
 
var initClojurescriptTest = function (files) {
    files.unshift(createPattern(__dirname + '/adapter.js'));
};
 
initClojurescriptTest.$inject = ['config.files'];
 
module.exports = {
  'framework:cljsTest': ['factory', initClojurescriptTest]
};
