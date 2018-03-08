

// app.directive('dynamicColspan', ['$compile', dynamicColspanDirective]);

// function dynamicColspanDirective($compile) {
// return {
// // restrict: 'A',
// template: '',
// link: function(scope, elem, attr) {
//         function setColspan() {
//           var colsToSpan = scope.$eval(attr.dynamicColspan);
//           if(angular.isObject(colsToSpan)) {
//             angular.forEach(colsToSpan, function(condition, key) {
//               if(condition && isFinite(key)) {
//                 colsToSpan = key;
//               }
//             }); 
//           }
          
//           elem.attr('colspan', parseInt(colsToSpan, 10));
//         }
//         setColspan();
//         scope.$watch(attr.dynamicColspan, setColspan);
//       }
// };
// }