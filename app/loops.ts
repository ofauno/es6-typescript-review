function lps() {
	var arr = []
    for (var i = 1; i <= 4; i++) {
        arr.push(function inner() { console.log("i: " + i); })
    }
	return arr;
}

function lps2() {
    var arr = [];
    for (var i = 1; i <= 4; i++) {
		(function (i) { 
        arr.push(
			
				function inner() { console.log("i: " + i); }
  	  		
		);
		}(i))
    }
    return arr;
}

// own isolated scope
function lps3() {
    var arr = [];
    for (let i = 1; i <= 4; i++) {
        arr.push(function inner() { console.log("i: " + i); });
    }
    return arr;
}


function lps_in() {
	const arr =  ['one', 'two', 'three']
	for (let index in arr) {
		console.log(index);
	}
}

export function lps_of() {
	const arr =  ['one', 'two', 'three']
	for (let item of arr) {
		console.log(item);
	}
}
