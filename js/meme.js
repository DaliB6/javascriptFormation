
const REST_SERVER = 'http://localhost:5679' ;

class Meme {
    
    static #resourcePath = '/memes'
    id= undefined;
    titre= '';
    text= '';
    x= 100;
    y= 20;
    fontWeight= '500';
    underline= false;
    italic= false;
    imageId= 0;
    color= '#000000';
    frameSizeX= 0;
    frameSizeY= 0
      



    save(){
        const adr = `${REST_SERVER}${Meme.#resourcePath}${this.id !== undefined ? '/'+this.id : ''}`;
        fetch(adr,{
            method : this.id !== undefined ? 'PUT' : 'POST',
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify(this)
        });
    }


}