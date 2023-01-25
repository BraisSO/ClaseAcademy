import axios from 'axios';

class BookService{

    BASE_URL='https://localhost:7211/api/book';

    getAll(){
        return axios.get(this.BASE_URL+'/list');
    }

    save(title,author){
        return axios.post(this.BASE_URL+"/save",{
            title:title,
            author:author
        })
    }
}

export default new BookService;