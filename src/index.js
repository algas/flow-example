// @flow
/* flow-include import _ from 'underscore' */
(function(){
  var _ = require('underscore');
  /* :: declare var xs: Array<number>;  */
  var xs = [3,2,1];
  console.log(xs);
  var fs /* : number[] */ = _.first(xs, 2);
  console.log(fs);
  var x /* : number */ = _.first(xs);
  console.log(x);
})();
