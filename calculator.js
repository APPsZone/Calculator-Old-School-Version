var button = document.querySelector(".container-btn");
var screen = document.querySelector("#screen");
var resetScreen = false;
var allowCalculate = false;
var tmpVal = "";
var operator = "";

button.addEventListener("click", function (e) {
	var btnClick = e.target;
	var valueBtn = btnClick.innerText;

	// Concatenate in JS
	//"String" + VARIABLE + "String (again)"
	//"String" + FUNCTION()
	//VARIABLE + FUNCTION()

	if (valueBtn == "C") {
		screen.value = "";
	} else if (valueBtn == "<") {
		screen.value = screen.value.slice(0, -1);
	} else if (valueBtn == "=") {
		if (allowCalculate == true) {
			screen.value = eval(tmpVal + operator + screen.value);
			allowCalculate = false;
		}
	} else if (btnClick.classList.contains("operator")) {
		if (allowCalculate == true) {
			screen.value = eval(tmpVal + operator + screen.value);
			allowCalculate = false;
		}
		tmpVal = screen.value;
		operator = valueBtn;
		resetScreen = true;
	} else {
		if (resetScreen == true) {
			screen.value = valueBtn;
			resetScreen = false;
			allowCalculate = true;
		} else {
			screen.value = screen.value + valueBtn;
		}
	}
});
