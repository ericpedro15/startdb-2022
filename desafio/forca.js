class Forca {

  constructor(palavraSecreta){
    this._palavraSecreta = palavraSecreta.toLowerCase();
    this._letrasChutadas = [];
    this._vidas = 6;
    this._palavra = []
    this._estado = 'aguardando chute'
    this.inicializaPalavra();
  }

  inicializaPalavra(){
    for (let i = 0; i < this._palavraSecreta.length; i++) {
      this._palavra[i] = '_';
    }
  }

  chutar(letra) {
    letra = letra.toLowerCase()
    if(this._palavraSecreta.includes(letra)){

      for(let i = 0; i < this._palavraSecreta.length; i++){

        if(this._palavraSecreta[i] == letra && this._palavra[i] == '_' && letra.length == 1){
          this._palavra[i] = letra;
        }
        
      }
      
    } else {
      if(!this._letrasChutadas.includes(letra) && letra.length == 1){
        this._vidas -= 1;
      }
    }

    if(!this._letrasChutadas.includes(letra) && letra.length == 1){
      this._letrasChutadas.push(letra)
      this._letrasChutadas.sort()
    }

  }

  buscarEstado() {
    if(this._vidas > 0 && !this._palavra.includes('_')){
      this._estado = 'ganhou'
      return this._estado;
    }

    if(this._vidas == 0){
      this._estado = 'perdeu'
      return this._estado;
    }
      this._estado = 'aguardando chute'
      return this._estado;


  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this._letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this._vidas, // Quantidade de vidas restantes
          palavra: this._palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

}

module.exports = Forca;