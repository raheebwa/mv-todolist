const database = {
    store(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    retrieve(key){
        return JSON.parse(localStorage.getItem(key));
    }
};


export default database;