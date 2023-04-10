import apiService from './js/apiService';
import refs from './js/refs';
import galeryHendler from './js/galeryHandler';
import openModal from './js/modal';
import closeModal from './js/closeModal';






refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    refs.btn.classList.add('is-visible')

    refs.list.innerHTML = '';

    const searchName = e.currentTarget.query.value;

    apiService.name = searchName;;

    apiService.fetchQuery().then(res => {
        console.log(res);
        const arr = res.hits;

        arr.forEach(e => {
            refs.list.insertAdjacentHTML('beforeend', galeryHendler(e))
            refs.btn.classList.remove('is-visible')
        });

        refs.list.addEventListener('click', openModal);
    });
})


refs.btn.addEventListener('click', function (e) {
    apiService.incrementPage();

    apiService.fetchQuery().then(res => {
        const arr = res.hits;

        arr.forEach(e => {
            refs.list.insertAdjacentHTML('beforeend', galeryHendler(e))
        });
    });

});