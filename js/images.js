/**
 * class pour la manipulation des Rest
 */


const REST_ADR = 'http://localhost:5679'

class Images extends Array {

    #ressourcePath;
    /**
     * 
     * @param {string} ressourcePath chemin dans le REST des images 
     */
    constructor(ressourcePath='/images'){
        super();
        this.#ressourcePath = ressourcePath ;

    }

    /**
     * 
     */
    loadResources(){
        console.time('fetch')
        fetch(REST_ADR+ this.#ressourcePath)
        .then(r=>r.json())
        .then(arr=>{
            this.splice(0);
            this.push(...arr);
            console.table(this);
            console.timeEnd('fetch');
         
        });
    }
}

const images = new Images();
images.loadResources();






