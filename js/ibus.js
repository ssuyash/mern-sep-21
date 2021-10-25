
var stations = {
	RGS:{
		dist:0,
		next:"VPS",
		prev:""
	},

	VPS:{
		dist:1,
		next:"BHW",
		prev:"RGS"
	},


}

var src = "RGS"
var dst = "VPS"

var srcInfo = stations[src]
var dstInfo = stations[dst]

var srcRltDst = srcInfo.dist

console.log(srcInfo, dstInfo)
