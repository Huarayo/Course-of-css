(function(){

const title =[...document.querySelectorAll(".questions_title")];

title.forEach(question => {
	question.addEventListener("click",()=>{
		let height = 0;
		let answer = question.nextElementSibling

		question.children[0].classList.toggle("questions_arrow-rotate")

		let addPadding = question.parentElement.parentElement;

		addPadding.classList.toggle("questions_add-padding")

		if(answer.clientHeight === 0){
			height = answer.scrollHeight;
		}
		answer.style.height = `${height}px`
})

})

})()