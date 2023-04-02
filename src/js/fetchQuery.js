const apiKey = '35001387-39eff442400f6eb88f2a6844e';
export default
function fetchQuery(){
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${'bird'}&page=${1}&per_page=12&key=${apiKey}`;

    return fetch(url)
        .then(res => res.json())
    

}