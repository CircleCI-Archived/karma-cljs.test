(function(karma, window) {
 
var createClojureScriptTest = function (tc, runnerPassedIn) {
    return function () {
	circle.karma.run_tests_for_karma(tc);
    };
};
 
karma.start = createClojureScriptTest(karma);
})(window.__karma__, window);

