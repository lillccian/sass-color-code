var vm = new Vue({
	el: "#app",
	data: {
		colorsetting: "//顏色變數\n$white: #FFFFFF\n$test_1: #F8EDD1\n$test_2: #D88A8A\n$test_3: #474843\n$test_4: #9D9D93\n$test_5: #C5CFC6",
		// color_card: {
	 // 		name: "$black",
	 // 		colorcode: "#303030",
	 // 		colorcss: {
	 // 			"background-color" : "#303030"
	 // 		}
		// }
	},
	computed: {
		colorcards: function(){
			var result =[];
			var cut_string = this.colorsetting.split('\n');
			for (var i=0;i<cut_string.length;i++){
				var name = cut_string[i].split(':')[0];
				var color = cut_string[i].split(' ')[1];
				if (name.indexOf('$') != -1){
					result.push ({
						name: name,
						colorcode: color,
						colorcss: {
							"background-color": color
						} 
					})
				}
			}	
			return result;
		}
	} 
});  