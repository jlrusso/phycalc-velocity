$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

var calculatorBtn = document.getElementById("calculator-btn");
calculatorBtn.setAttribute("data-toggle", "modal");
calculatorBtn.setAttribute("data-target", "#calculator-modal");

$(document).ready(function(){
  $("#contact-btn").add("#vert-contact-btn").remove();
  var $calcParentLi = $("#calculator-btn").parent("li");
  $calcParentLi.before("<li><a href='#' id='examples-btn'>Examples</a></li>");
  var $vertCalcParentLi = $("#vert-calculator-btn").parent("li");
  $vertCalcParentLi.before("<li><a href='#' id='vert-examples-btn'>Examples</a></li>");

  $("#conversion-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#conversion-container").offset().top
    }, "slow")
  });

  $("#vert-conversion-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#conversion-container").offset().top
    }, "slow")
  });

  $("#examples-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#practice-btns-container").offset().top
    }, "slow")
  });

  $("#vert-examples-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#practice-btns-container").offset().top
    }, "slow")
  });

  $("#go-up-btn").click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, "slow")
  });

})

var horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
verticalSearchBtn = document.getElementById("vertical-search-btn"),
searchSection = document.getElementById("search-section"),
searchBar = document.getElementById("search-bar"),
closeSearchBtn = document.getElementById("close-search-btn"),
caseList = document.getElementById("search-case-list"),
mainContent = document.getElementById("main-content");

horizontalSearchBtn.addEventListener("click", openSearchContainer);
verticalSearchBtn.addEventListener("click", openSearchContainer);
searchBar.addEventListener("input", showList);
closeSearchBtn.addEventListener("click", closeSearchContainer);


function openSearchContainer(){
	if(!searchSection.classList.contains("active-search")){
		searchSection.classList.toggle("active-search");
		mainContent.style.marginTop = "30px";
		searchBar.focus();
	} else {
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value = "";
		mainContent.style.marginTop = "0";
	}
}

function closeSearchContainer(){
	if(searchSection.classList.contains("active-search")){
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value  = "";
		mainContent.style.marginTop = "0";
	}
}

var searchClosers = [searchSection, mainContent];
for(let i = 0; i < searchClosers.length; i++){
  searchClosers[i].addEventListener("click", function(e){
    if(!e.target.matches("#search-bar")){
      closeSearchContainer();
    }
  })
}



function showList() {
	if (searchBar.value.length > 0){
		caseList.classList.add('show');
		showAnchors();
	} else {
		caseList.classList.remove('show');
	}
}

function showAnchors(){
	let inputValue = searchBar.value.toUpperCase();
	let anchors = caseList.getElementsByTagName('a');
	let newAnchors = document.createElement("a");
	for (var i = 0; i < anchors.length; i++){
		let a = anchors[i];
		if (a.textContent.toUpperCase().indexOf(inputValue) > -1){
			anchors[i].style.display = "";
		} else {
			anchors[i].style.display = "none";
		}
	}
}
/*--- Toggle Hamburger Menu ---*/
var clickBox = document.getElementById("click-box"),
		burgerIcon = document.getElementById("icon"),
		verticalNav = document.getElementsByClassName("vertical-nav")[0];
clickBox.addEventListener("click", openVerticalNav);

function openVerticalNav(e){
	if(e.target == clickBox){
		verticalNav.classList.toggle("show-vertical-nav");
		burgerIcon.classList.toggle("active");
	}
}

window.onclick = function(e){
	if(!e.target.matches("#click-box")){
		if(icon.classList.contains("active")){
			icon.classList.remove("active");
			verticalNav.classList.remove("show-vertical-nav");
		}
	}
}
/*--- Adding Units to the Input Fields ---*/
var firstUnits = document.getElementsByClassName("first-units"),
	meterBtn = document.getElementById("meter-radio-btn"),
	mileBtn = document.getElementById("mile-radio-btn"),
	feetBtn = document.getElementById("feet-radio-btn"),
	kilometerBtn = document.getElementById("kilometer-radio-btn");

var secondUnits = document.getElementsByClassName("second-units"),
	secBtn = document.getElementById("sec-radio-btn"),
	minBtn = document.getElementById("min-radio-btn"),
	hourBtn = document.getElementById("hour-radio-btn"),
	dayBtn = document.getElementById("day-radio-btn");

var partOneInputFields = document.getElementsByClassName("part-one-fields"),
	velocityFieldOne = document.getElementById("velocity-field-one"),
	timeIntervalFieldOne = document.getElementById("time-interval-field-one"),
	displacementFieldOne = document.getElementById("displacement-field-one"),
	sigFigsField = document.getElementById("sig-figs-field");

var solveBtns = document.getElementsByClassName("solve-btns"),
	solveVelocityBtn = document.getElementById("solve-velocity-radio-btn"),
	solveDisplacementBtn = document.getElementById("solve-displacement-radio-btn"),
	solveTimeIntervalBtn = document.getElementById("solve-time-interval-radio-btn");

function reseTrigAndUnitSelectors(){
	currentSlideIndex = 0;
	switchToSlide();
}

	window.addEventListener("resize", function(){
		if(window.innerWidth < 992){
			$(window).scroll(function(){
				if($(window).scrollTop() > 600){
					$("#go-up-container").css("opacity", "1");
				} else {
					$("#go-up-container").css("opacity", "0");
				}
			})
		}
	})

	window.addEventListener("load", function(){
		if(window.innerWidth < 992){
			$(window).scroll(function(){
				if($(window).scrollTop() > 600){
					$("#go-up-container").css("opacity", "1");
				} else {
					$("#go-up-container").css("opacity", "0");
				}
			})
		}
	})


/*--- Using displacement unit checked for the calculation output ---*/
var chosenDispUnit;
for(let i = 0; i < firstUnits.length; i++){
	firstUnits[i].addEventListener("click", function(){
		if(firstUnits[i].checked){
			chosenDispUnit = firstUnits[i].getAttribute("units");
		}
	});
}

/*--- Using time unit checked for the calculation output---*/
var chosenTimeUnit;
for(let i = 0; i < secondUnits.length; i++){
	secondUnits[i].addEventListener("click", function(){
		if(secondUnits[i].checked){
			chosenTimeUnit = secondUnits[i].getAttribute("units");
		}
	});
}
/*--- End of above ---*/



/*--- Event Listener attached to all Solve Radio Btns ---*/
for(var i = 0; i < solveBtns.length; i++){
	solveBtns[i].addEventListener("click", solveForFunction);
}
/*--- End of above ---*/

/*--- Img Equations ---*/
var innerImageContainer = document.getElementById("inner-image-container"),
	slides = document.getElementsByClassName("slide"),
	currentSlideIndex = 0,
	width = 100,
	prevBtn = document.getElementById("prev-slide-btn"),
	nextBtn = document.getElementById("next-slide-btn"),
	slideBars = document.getElementsByClassName("slide-bar");

if(prevBtn){
	prevBtn.addEventListener("click", prevSlide);
}
if(nextBtn){
	nextBtn.addEventListener("click", nextSlide);
}

switchToSlide();
function switchToSlide(){
	for(let i = 0; i < slideBars.length; i++){
		if(slideBars[i].classList.contains("active-indicator")){
			slideBars[i].classList.remove("active-indicator");
		}
	}
	innerImageContainer.style.left = -width * currentSlideIndex + "%";
	slideBars[currentSlideIndex].classList.add("active-indicator");
}

function nextSlide(){
	currentSlideIndex++;
	if(currentSlideIndex >= slides.length){
		currentSlideIndex = 0;
	}
	switchToSlide();
}

function prevSlide(){
	currentSlideIndex--;
	if(currentSlideIndex < 0){
		currentSlideIndex = slides.length - 1;
	}
	switchToSlide();
}

//pick slide from slide bars
for(let i = 0; i < slideBars.length; i++){
	slideBars[i].addEventListener("click", function(){
		currentSlideIndex = i;
		switchToSlide();
	})
}





//pick slide from radio btns
for (let iterator = 0; iterator < solveBtns.length; iterator++){
	solveBtns[iterator].addEventListener("click", function(){
		currentSlideIndex = iterator;
		switchToSlide();
	}, false);
}
/*--- End of Image Equation ---*/



/*--- Change Input Fields Based on Solve Btn Checked ---*/
function solveForFunction(){
	for(let i = 0; i < partOneInputFields.length; i++){
		partOneInputFields[i].value = "";
		if(partOneInputFields[i].type = "text"){
			partOneInputFields[i].type = "number";
		}
		if(partOneInputFields[i].disabled){
			partOneInputFields[i].disabled = false;
		}
		if(partOneInputFields[i].classList.contains("yellow-outline")){
			partOneInputFields[i].classList.remove("yellow-outline");
		}
	}
	velocityFieldOne.placeholder = "velocity";
	displacementFieldOne.placeholder = "displacement" + " (\u0394x)";
	timeIntervalFieldOne.placeholder = "time interval" + " (\u0394t)";

	switch(true){
		case (solveVelocityBtn.checked):
			velocityFieldOne.classList.add("yellow-outline");
			velocityFieldOne.placeholder = "Calculating Vel...";
			velocityFieldOne.disabled = true;
		break;
		case (solveDisplacementBtn.checked):
			displacementFieldOne.classList.add("yellow-outline");
			displacementFieldOne.placeholder = "Calculating Disp...";
			displacementFieldOne.disabled = true;
		break;
		case (solveTimeIntervalBtn.checked):
			timeIntervalFieldOne.classList.add("yellow-outline");
			timeIntervalFieldOne.placeholder = "Calculating Time...";
			timeIntervalFieldOne.disabled = true;
		break;
	}
}
/*--- END OF ABOVE ---*/


/*--- Declaring , Initializing, adding Event Listeners to Calculate and Clear Btns ---*/
var calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculatePartOne);
var clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearPartOne);
/*--- End of Calculate and Clear Btn Initialization and event Attachment ---*/


/*--- Calculate Input Based in Checked Radio Btn and User Inputs ---*/
function calculatePartOne(){
	switch(true){
		case (solveVelocityBtn.checked):
			velocityFieldOne.type = "text";
			let tempVelocityValue = (displacementFieldOne.value / timeIntervalFieldOne.value);
			if(tempVelocityValue.toString().length > 5){
				velocityFieldOne.value = tempVelocityValue.toPrecision(sigFigsField.value || 5) + " " + chosenDispUnit + "/" + chosenTimeUnit;
			} else {
				velocityFieldOne.value = tempVelocityValue.toPrecision(sigFigsField.value || tempVelocityValue.toString().length) + " " + chosenDispUnit + "/" + chosenTimeUnit;
			}
		break;
		case (solveDisplacementBtn.checked):
			displacementFieldOne.type = "text"
			let tempDispValue = (velocityFieldOne.value * timeIntervalFieldOne.value);
			if(tempDispValue.toString().length > 5){
				displacementFieldOne.value = tempDispValue.toPrecision(sigFigsField.value || 5) + " " + chosenDispUnit;
			} else {
				displacementFieldOne.value = tempDispValue.toPrecision(sigFigsField.value || tempDispValue.toString().length) + " " + chosenDispUnit;
			}
		break;
		case (solveTimeIntervalBtn.checked):
			timeIntervalFieldOne.type = "text";
			let tempTimeValue = (displacementFieldOne.value / velocityFieldOne.value);
			if(tempTimeValue.toString().length > 5){
				timeIntervalFieldOne.value = tempTimeValue.toPrecision(sigFigsField.value || 5) + " " + chosenTimeUnit;
			} else {
				timeIntervalFieldOne.value = tempTimeValue.toPrecision(sigFigsField.value || tempTimeValue.toString().length) + " " + chosenTimeUnit;
			}
		break;
		default:
			alert("Choose a variable to solve for.");
	}
}
/*--- END OF ABOVE ---*/



/*--- Clears Section Inputs and Checked Radio Btns ---*/
function clearPartOne(){
	reseTrigAndUnitSelectors();
	for(let i = 0; i < solveBtns.length; i++){
		if(solveBtns[i].checked){
			solveBtns[i].checked = false;
		}
	}
	for(let i = 0; i < firstUnits.length; i++){
		if(firstUnits[i].checked){
			firstUnits[i].checked = false;
		}
	}
	for(let i = 0; i < secondUnits.length; i++){
		if(secondUnits[i].checked){
			secondUnits[i].checked = false;
		}
	}
	for(let i = 0; i < partOneInputFields.length; i++){
		partOneInputFields[i].value = ""
		partOneInputFields[i].disabled = false;
		partOneInputFields[i].type = "number";
		if(partOneInputFields[i].classList.contains("yellow-outline")){
			partOneInputFields[i].classList.remove("yellow-outline");
		}
	}
  velocityFieldOne.placeholder = "velocity";
	displacementFieldOne.placeholder = "displacement" + " (\u0394x)";
	timeIntervalFieldOne.placeholder = "time interval" + " (\u0394t)";
	currentSlideIndex = 0;
	switchToSlide()
}
/*--- END OF ABOVE ---*/


/*--- Open and Close Accordion Panels in the Modal ---*/
var accordions = document.getElementsByClassName("accordion");
for(var i = 0; i < accordions.length; i++){
	accordions[i].addEventListener("click", function(e){
    e.preventDefault();
  	this.classList.toggle("active");
  	var innerPanel = this.nextElementSibling;
  	if(innerPanel.style.maxHeight){
  		innerPanel.style.maxHeight = null;
  	} else {
  		innerPanel.style.maxHeight = innerPanel.scrollHeight + "px";
  	}
  })
}

/*--- END OF ABOVE ---*/

/*--- Close all accordion panels on "X" btn click or Modal Window click ---*/
var modalCloseBtns = document.getElementsByClassName("glyphicon-remove");
var modalPanels = document.getElementsByClassName("modal-panel");
for(let i = 0; i < modalCloseBtns.length; i++){
  modalCloseBtns[i].addEventListener("click", function(){
    for(let i = 0; i < modalPanels.length; i++){
      if(modalPanels[i].style.maxHeight != null){
        modalPanels[i].style.maxHeight = null;
      }
    }
    var $modalContent = $(this).parents(".modal-content");
    var $accordions = $modalContent.find(".accordion");
    $accordions.removeClass("active");
  })
}
$(".example-modal").click(function(e){
  var $closeBtn = $(this).find(".glyphicon-remove");
  if(e.target.matches(".example-modal")){
    $closeBtn.click();
  }
})
/*--- End of Closing all Accordion and Panels ---*/

/*--- Close Modals ---*/
var closeModalBtns = document.querySelectorAll(".close-modal-btn");
closeModalBtns.forEach(function(btn){
  btn.addEventListener("click", function(){
    var $modalParent = $(this).parents(".modal");
    $modalParent.click();
  })
})

/*--- Toggle Img Caption Show/Hide ---*/
var imgCaptions = document.getElementsByClassName("img-caption");
var thirdPageImgs = document.querySelectorAll(".third-page-pics > img");
thirdPageImgs.forEach(function(image){
  image.addEventListener("click", function(e){
    var imgCaption = this.nextElementSibling;
    if(!e.target.matches(".img-caption")){
      imgCaption.classList.toggle("hide-caption");
    }
  })
})

/*--- Conversion Table JS ---*/
var userInput = document.getElementById('unit-input-field');
var unitOutput = document.getElementById('unit-output-field');
var unitC = document.getElementById('unit-converter');

if(userInput){
	userInput.addEventListener('input', convertUnit);
}
if(unitC){
	unitC.addEventListener('change', convertUnit);
}

function convertUnit()
{
	if (userInput.value < 0){
		alert("Please enter a value greater or equal to zero");
		userInput.value = "";
	} else {
		switch(true)
		{
			case document.getElementById('millimetersToCentimeters').selected:
				unitOutput.value = (userInput.value / 10) + " cm";
				break;
			case document.getElementById('centimetersToMillimeters').selected:
				unitOutput.value = (userInput.value * 10) + " mm";
				break;
			case document.getElementById('centimetersToMeters').selected:
				unitOutput.value = (userInput.value / 100) + " m";
				break;
			case document.getElementById('metersToCentimeters').selected:
				unitOutput.value = (userInput.value * 100) + " cm";
				break;
			case document.getElementById('metersTokilometers').selected:
				unitOutput.value = (userInput.value / 1000) + " km";
				break;
			case document.getElementById('kilometersToMeters').selected:
				unitOutput.value = (userInput.value * 1000) + " m";
				break;
			case document.getElementById('metersToMiles').selected:
				unitOutput.value = (userInput.value / 1609.34) + " mi";
				break;
			case document.getElementById('milesToMeters').selected:
				unitOutput.value = (userInput.value * 1609.34) + " m";
				break;
			case document.getElementById('milesToKilometers').selected:
				unitOutput.value = (userInput.value * 1.60934) + " km";
				break;
			case document.getElementById('kilometersToMiles').selected:
				unitOutput.value = (userInput.value * 0.621371) + " mi";
				break;
			case document.getElementById('feetToYards').selected:
				unitOutput.value = (userInput.value / 3) + " yds";
				break;
			case document.getElementById('yardsToFeet').selected:
				unitOutput.value = (userInput.value * 3) + " ft";
				break;
			case document.getElementById('feetToMeters').selected:
				unitOutput.value = (userInput.value * 0.3048) + " m";
				break;
			case document.getElementById('metersToFeet').selected:
				unitOutput.value = (userInput.value * 3.28084) + " ft";
				break;
			case document.getElementById('centimetersToInches').selected:
				unitOutput.value = (userInput.value * 0.393701) + " in";
				break;
			case document.getElementById('inchesToCentimeters').selected:
				unitOutput.value = (userInput.value * 2.54) + " cm";
				break;
			case document.getElementById('milligramsToGrams').selected:
				unitOutput.value = (userInput.value / 1000) + " g";
				break;
			case document.getElementById('gramsToMilligrams').selected:
				unitOutput.value = (userInput.value * 1000) + " mg";
				break;
			case document.getElementById('gramsToKilograms').selected:
				unitOutput.value = (userInput.value / 1000) + " kg";
				break;
			case document.getElementById('kilogramsToGrams').selected:
				unitOutput.value = (userInput.value * 1000) + " g";
				break;
			case document.getElementById('poundsToKilograms').selected:
				unitOutput.value = (userInput.value / 2.20462) + " kg";
				break;
			case document.getElementById('kilogramsToPounds').selected:
				unitOutput.value = (userInput.value * 2.20462) + " lbs";
				break;
			case document.getElementById('squareMetersToKilometersSquared').selected:
				unitOutput.value = (userInput.value / 1000000).toExponential(2) + " km²";
				break;
			case document.getElementById('kilometerSquaredToSquareMeters').selected:
				unitOutput.value = (userInput.value * 1000000).toExponential(2) + " m²";
				break;
		}
	}
}
/*--- End of Conversion Table ---*/
