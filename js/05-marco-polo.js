var limit =100;
for(var i = 1; i <= limit; i++){
	if(((i % 4)== 0) && ((i % 7)== 0)){
		console.log("marco!polo!");
	}else if((i % 4)== 0){
		console.log("marco!");
	}else if((i % 7)== 0){
		console.log("polo!");
	}else{
		console.log(i);
	}
}