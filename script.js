const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  const plusMinus = faq.querySelector('.plus-minus');
  const answer = faq.querySelector('.answer');
  plusMinus.addEventListener('click', () => {
    if (plusMinus.textContent === '+') {
      plusMinus.textContent = '-';
      answer.style.display = 'block';
    } else {
      plusMinus.textContent = '+';
      answer.style.display = 'none';
    }
});
});