import apiService from './js/apiService';
import refs from './js/refs';
import galeryHendler from './js/galeryHandler';






refs.form.addEventListener('submit',(e) => {
e.preventDefault();

refs.list.innerHTML = '';

const searchName = e.currentTarget.query.value;

apiService.name = searchName;;

apiService.fetchQuery().then(res => {
    const arr = res.hits;

    arr.forEach(e => {
        refs.list.insertAdjacentHTML('beforeend', galeryHendler(e))
    });
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