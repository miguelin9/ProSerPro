function counter () {
var n = 0;
return {
function () { return n ++; }
};
}
var c = counter () , d = counter () ; // Create two counters
console . log ( c  () ) ; // = >0
console . log ( d  () ) ; // = >0 they count independently
//c . reset () ; // reset () and count () methods share state
console . log ( c  () ) ; // = > 0: because we reset c
console . log ( d  () ) ; // = > = > 1: d was not reset
