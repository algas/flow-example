// @flow
/* flow-include import _ from 'underscore' */
(function(){
  var _ = require('underscore');
  var xs: Array<number> = [3,2,1];
  console.log(xs);
  var fs: Array<number> = _.first(xs, 2);
  console.log(fs);
  var x: number = _.first(xs);
  console.log(x);
})();
