
const apiKey = '35001387-39eff442400f6eb88f2a6844e';
export default

{
page:1,
searchQuery:'',

fetchQuery(){
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=9&key=${apiKey}`;
    
        return fetch(url)
            .then(res => res.json())
            
        
    },


resetPage(){
    this.page = 1;
},

incrementPage() {
    this.page += 1;
  },

  get name(){
    return this.searchQuery;
  },

  set name(value){
    this.searchQuery = value;
  },


}