
var stations = {
	RGS:{
		dist:0,
		next:"VPS",
		prev:""
	},

	VPS:{
		dist:5,
		next:"BHW",
		prev:"RGS"
	},

    BHW:{
		dist:11,
		next:"HLK",
		prev:"VPS"
	},

    HLK:{
		dist:17,
		next:"NVL",
		prev:"BHW"
	},

    NVL:{
		dist:19,
		next:"",
		prev:"HLK"
	},
}

var src = "HLK"
var dst =  "VPS"

var srcInfo = stations[src]
var dstInfo = stations[dst]

var isContigeous = srcInfo.next == dst || srcInfo.prev == dst

var travelDist = dstInfo.dist - srcInfo.dist

travelDist = travelDist < 0 ? -1*travelDist : travelDist

var fare = 0

if(isContigeous){
    fare = 5
}else{
    fare = 5
    var additionalDst = travelDist-3

    if(additionalDst > 0){
        fare += 1.5*additionalDst
    }
}
console.log(src, dst, isContigeous, travelDist, fare)

// var course = {
//     courseName:"mern stack",
//     couurseContent:[],
    
// }
// var cn = "courseName"    