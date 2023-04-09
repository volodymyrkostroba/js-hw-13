export default
function galeryHendler(obj){
    return `
  <li class="item photo-card">
    <img class="photo-card__img"
    src="${obj.webformatURL}" alt="" />
  
    <div class="stats">
      <p class="stats-item">
        <i class="material-icons">thumb_up</i>
        ${obj.likes}
      </p>
      <p class="stats-item">
        <i class="material-icons">visibility</i>
        ${obj.views }
      </p>
      <p class="stats-item">
        <i class="material-icons">comment</i>
        ${obj.comments}
      </p>
      <p class="stats-item">
        <i class="material-icons">cloud_download</i>
        ${obj.downloads}
      </p>
    </div>
  </li>
  `
}