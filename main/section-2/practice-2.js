'use strict';

module.exports = function countSameElements(collection) {
  var sort = 1,
	result = [];
		for (var i = 0; i < collection.length; i++) {
			if (collection[i].length>1) {
				var value1 = collection[i].replace(/[^0-9]/ig,""); 
				var value2 = collection[i].replace(/[^a-z]/ig,"");
				value1=Number(value1);
				if (i) {
					math(value2,value1);
				} else {
					result.push({key:value2,count:value1});
				}
			} else {
				if (i) {
					math(collection[i],1);
				} else {
					result.push({key:collection[i],count:1});
				}
				
			}
			
		}
		function math(string,number){
			result.push({key:string,count:number});
			for (var j= 0; j < sort; j++) {
				if( result[j].key == string){
					result.splice(sort,1);
					result[j].count+=number;
					break;
				}else{
					if ( j == sort-1 ) {
						sort++;
						break;
					}
				}
			}
		}
	return result;
}
