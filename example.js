define([
  'sms2/score_set',
  'sms2/Identity',
  'sms2/blosum62',
  'sms2/align_pair_linear'
],function(ScoreSet,Identity,Blosum62,AlignPairLinear) {
  return function(s1,s2,options) {
    scoringMatrix = new Blosum62()
    if(options.type||'dna' == 'dna') {
      scoringMatrix = new Identity();
      scoringMatrix.setMatch(options.matchScore||2);
      scoringMatrix.setMismatch(options.mismatchScore||-1);
    }
    scoreSet = new ScoreSet();
    scoreSet.setScoreSetParam(scoringMatrix,options.gapPenalty||2,options.beginGapPenalty||0,options.endGapPenalty||0);
    alignment = new AlignPairLinear();
    alignment.setAlignParam(s1,s2,scoreSet);
    alignment.align();
    return [alignment.getAlignedM(),a2:alignment.getAlignedN()];
  }
});
