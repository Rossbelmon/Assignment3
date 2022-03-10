let number = 100
function marcoPoloFunc(number){
	var printResult ='';
	for(var i=1; i<=number;i++){
		if(i%3==0 && i%5==0) // if number is divisible by both 3 and 5
			printResult+='marco!polo!'
		else if(i%3==0)  // if number is divisible by 3
			printResult+='marco!'
		else if(i%5==0) // if number is divisible by 5
			printResult+='polo!'
		else
			printResult+=i;
		printResult+=',';
		}
		printResult =printResult.substring(0,printResult.length-1);
		console.log(printResult); // show result in console.
	return printResult; // print the string result
}