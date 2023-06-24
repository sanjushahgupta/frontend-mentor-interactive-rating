var rateContainer = document.querySelector('.rate');
var submitBtn = document.querySelector('.submit');
var thankyouContainer = document.querySelector('.thankYou')
var ratings = document.querySelectorAll('ul li button')
var rateNum = document.querySelector('span');

ratings.forEach(rating => {
    rating.addEventListener('click', e => {
        rateNum.innerText = rating.innerText;
        console.log(rating.innerText);

    })
})

submitBtn.addEventListener('click', e => {
    rateContainer.classList.add('hide');
    thankyouContainer.classList.remove('hide');
})