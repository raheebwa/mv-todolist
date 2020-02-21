const database = {
    store(table, content) {
        window.localStorage.table = content.innerHTML;
    },

    retrieve(table){
        return window.localStorage.table;
    }
};


export default database;