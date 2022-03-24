var phone = document.getElementById('phoneno');
const error = document.getElementById('form-field-error');
const success = document.getElementById('form-field-success');
const btnToShowToast = document.querySelector(".show-toast-example-btn");
const btnToCloseToast = document.querySelector("#toast-close-btn");
const  toastSuccessExample = document.querySelector("#toast-success");
const toastSuccessDemo = document.querySelector("#toast-success-demo");
console.log(" Toast Success Demo "+toastSuccessDemo );
const ratingForm = document.querySelector(".rating-form");
const showRating = document.querySelectorAll(".rating-example-number-show");

if(phone.checkValidity()){
    error.textContent = "";
    error.style.display = 'none';
    
}

phone.addEventListener("input", function (event) {
    if (!phone.checkValidity()) {
        error.textContent = 'The phone number is invalid';
        error.style.display = 'block';
        error.style.color="red";
    } else {
        error.style.display = 'none';
    }
});

timerIdForToast = setTimeout(()=>{
    toastSuccessDemo.style.display = "none";  
},2000)

btnToCloseToast.addEventListener("click", ()=>{
clearTimeout(timerIdForToast);
toastSuccessDemo.style.display = "none"; 
})

btnToShowToast.addEventListener("click",()=>{
	console.log(" button click event done");
	toastSuccessDemo.style.display="block";
	timedIdForToast= setTimeout(()=>{
		toastSuccessDemo.style.display="none";
	},2000)
})

function showToastMessage() {
    toastSuccessDemo.className = "show";
    setTimeout(function(){toastSuccessDemo.className = toastSuccessDemo.className.replace("show", ""); }, 5000);
}

 
const ratingStars = document.querySelectorAll(
	'.example-rating-form .rating-star-input',
);
const ratingStarsForm = document.querySelector('.example-rating-form');
const ratingExampleShowRating = document.querySelector(
	'.rating-example-number-show'
);

ratingStars.forEach((star, id) => {
	star.addEventListener('change', () => checkAllTheBelowStars(id));
});

function checkAllTheBelowStars(idx) {
	if (ratingStars[idx].checked) {
		for (let j = idx - 1; j >= 0; j--) {
			ratingStars[j].checked = true;
		}
	} else {
		for (let j = idx + 1; j < ratingStars.length; j++) {
			ratingStars[j].checked = false;
		}
	}
}

ratingStarsForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let sum = 0;
	ratingStars.forEach((star) => {
		if (star.checked) sum += 1;
	});
    console.log("Sum "+sum);
	ratingExampleShowRating.innerText = `You have submitted ${sum} rating`;
});

var modal = document.getElementById("myModal");

// Modal

var modalCloseBtn = document.getElementById("modal-close-btn");
var modalOpenBtn =  document.getElementById("openModal");
var modal = document.getElementById("rating-demo-modal");

 
modalCloseBtn.onclick = function() {
	modal.style.display = "none";
}

modalOpenBtn.onclick = function() {
	modal.style.display = "block";
}
