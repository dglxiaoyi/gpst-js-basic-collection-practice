'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	var sort = 1,
			result = [];
		for (var i = 0; i < collectionA.length; i++) {
			if (collectionA[i].length>1) {
				var value1 = collectionA[i].replace(/[^0-9]/ig,""); 
				var value2 = collectionA[i].replace(/[^a-z]/ig,"");
				value1=Number(value1);
				if (i) {
					math(value2,value1);
				} else {
					result.push({key:value2,count:value1});
				}
			} else {
				if (i) {
					math(collectionA[i],1);
				} else {
					result.push({key:collectionA[i],count:1});
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
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < objectB.value.length; j++) {
				if( result[i].key == objectB.value[j]){
					result[i].count -= parseInt(result[i].count/3);
				}
			}
		}
	return result;
}
