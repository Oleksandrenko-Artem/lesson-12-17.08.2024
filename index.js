const questions = document.querySelectorAll('#faq .faq-question');
const answers = document.querySelectorAll('#faq .faq-answer');
const pluses = document.querySelectorAll('#faq .faq-question span');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answerCurrent = question.nextElementSibling;
        const plus = question.lastChild;
        const isOpen = answerCurrent.classList.contains('open');
        answers.forEach((answer) => {
            answer.classList.remove('open');
            answer.style.maxHeight = 0 + 'px';
        });
        pluses.forEach((pl) => {
            pl.textContent = '+';
        });
        if (isOpen === false) {
            plus.textContent = '-';
        answerCurrent.classList.add('open');
        answerCurrent.style.maxHeight = answerCurrent.scrollHeight + 'px';
        }
    });
});
