define(['sms2/score_set'],function(ScoreSet){

//------------------------------------ ScoringMatrix abstract class
//ScoringMatrix getScore method
function scoringMatrix_getScore(r1, r2) {
	r1 = r1.toLowerCase();
	r2 = r2.toLowerCase();
	if (r1 == r2) {
		return this.match;
	}
	else {
		return this.mismatch;
	}
}

//ScoringMatrix class
function ScoringMatrix() {
	this.mismatch;
	this.match;
}

//create and throw away a prototype object
new ScoringMatrix();

//define object methods
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;

//------------------------------------ Identity class extends ScoringMatrix Class
//Identity class setMismatch method
function setMismatch(mismatchScore) {
	this.mismatch = mismatchScore;
}

//Identity class setMatch method
function setMatch(matchScore) {
	this.match = matchScore;
}

//Identity class
function Identity () {
}

Identity.prototype = new ScoringMatrix();
Identity.prototype.setMismatch = setMismatch;
Identity.prototype.setMatch = setMatch;

return Identity;
});

