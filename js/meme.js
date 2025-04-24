
const REST_SERVER = 'http://localhost:5679' ;

export class Meme {
    
    static #resourcePath = '/memes'
    id= undefined;
    titre= '';
    text= '';
    x= 100;
    y= 20;
    fontWeight= '500';
    fontSize = 100;
    underline= false;
    italic= false;
    imageId= -1;
    color= '#000000';
    frameSizeX= 0;
    frameSizeY= 0
      



    save(){
        const adr = `${REST_SERVER}${Meme.#resourcePath}${this.id !== undefined ? '/'+this.id : ''}`;
        fetch(adr,{
            method : this.id !== undefined ? 'PUT' : 'POST',
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify(this)
        })
        .then(r => r.json())
        .then( m => {
            Object.assign(this,m);
            return this;
        });
    }


}