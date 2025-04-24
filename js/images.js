/**
 * class pour la manipulation des Rest
 */


const REST_ADR = 'http://localhost:5679'

class Images extends Array {

    #ressourcePath ;
     /**
     * @type Promise<Images>
     */
    #loadPromise = undefined;
    /**
     * 
     * @param {string} ressourcePath chemin dans le REST des images 
     */
    constructor(ressourcePath='/images'){
        super();
        this.#ressourcePath = ressourcePath ;

    }
   
    get promiseImages(){
        if( undefined === this.#loadPromise){
            this.loadResources() ;
        }
        return this.#loadPromise;
    
    }

    set promiseImages(value){
        
        this.#loadPromise = value ;

    }
    /**
     * 
     */
    loadResources(){
        
        if(undefined === this.#loadPromise ){
            this.#loadPromise = fetch(REST_ADR + this.#ressourcePath)
            .then(r=>r.json())
            .then(arr=>{
                this.splice(0);
                this.push(...arr);
                return this;
            
            })
            return this.#loadPromise ;
        }
        
    }
}

export const images = new Images();
images.loadResources();






