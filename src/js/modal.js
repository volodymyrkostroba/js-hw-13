import refs from "./refs";

export default

function openModal(e){
    if(e.target.nodeName !== 'IMG' ){
        return
      }

    refs.modal.classList.remove('is-visible');

    refs.modalImg.src = e.target.dataset.url;
}