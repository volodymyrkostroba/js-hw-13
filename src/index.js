// import apiService from './js/apiService';
import fetchQuery from "./js/fetchQuery"

const listRef = document.querySelector('.list');


fetchQuery().then(res => console.log(res.hits));

