//Using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    //Within each and every question we will be accessing all the buttons 
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',function(){

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }


        });
        question.classList.toggle.apply("show-text");
    })

});







//Traversing the DOM
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    //Accessing the event object
    btns.addEventListener('click', function(e){
        // point of this code os to access the children of the parents , since the  question text is enclosed within the question and the question is enclosed within  the article, so once we have access to certain classlist ...what does it do??
        const question = e.currentTarget.parentElement.parentElement;
        question.classlist.toggle('show-text');//The element we want ot toggle is the show-text


        
    });
});