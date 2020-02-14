function conv(){
	var num = Math.trunc(document.getElementById("int").value);
	var arr = [];
	var temp = num;
	var store;
	
while (temp!=0){
	store = temp%2;
	temp = Math.trunc(temp / 2);
	arr.push(store);
}
document.getElementById("convertednum").innerHTML = "Decimal Form: " + num + "<br> Binary Form: ";
while(arr.length !=0)
document.getElementById("convertednum").innerHTML += arr.pop();
	
	}