(function(karma, window) {
  var createClojureScriptTest = function (tc, runnerPassedIn) {
    return function () {
      if (goog && goog.dependencies_ && goog.dependencies_.nameToPath) {
        for(var namespace in goog.dependencies_.nameToPath)
          goog.require(namespace);
      }

      circle.karma.run_tests_for_karma(tc);
    };
  };

  karma.start = createClojureScriptTest(karma);
})(window.__karma__, window);

