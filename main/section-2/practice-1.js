'use strict';

module.exports = function countSameElements(collection) {
  var sort = 1,
    result = [];
		for (var i = 0; i < collection.length; i++) {
			result.push({key:collection[i],count:1});
			if(i){
			    for (var j= 0; j < sort; j++) {
    				if( result[j].key === collection[i]){
    					result[j].count++;
    					result.splice(sort,1);
    					break;
    				}else{
    					if ( j === sort-1 ) {
    						sort++;
    						break;
    					}
    				}
    			}
			}

		}
	return result;
}
