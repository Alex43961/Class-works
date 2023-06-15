const group = [
	{
		firstName: "John",
		age: 23,
		skills: ["HTML", "CSS", "JS"],
		pocket: {
			left: ["keys", "food"],
			right: ["docs", "snikers"],
		},
	},
	{
		firstName: "John",
		age: 23,
		skills: ["HTML", "CSS"],
		pocket: {
			left: ["docs", "food"],
			right: ["keys", "snikers"],
		},
	},
	{
		firstName: "John",
		age: 23,
		skills: ["JS"],
		pocket: {
			left: ["lighter", "cigarettes"],
			right: ["rat", "cheese"],
		},
	},
];

 // 1) If even one of group have a ligher return "good sheet"
 // 2) Sum of age into the group
 // 3) Divide group on three groups : "Who knows JS" , "Who dont's know JS" , "Who knows CSS"
