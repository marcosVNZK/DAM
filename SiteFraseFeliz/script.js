function clica(){
    const frasesAlegres = [
        "Tenha um dia maravilhoso, ",
        "Que a alegria invada o seu coração, ",
        "Você é incrível, ",
        "Sorria e seja feliz, ",
        "Que a positividade te acompanhe, ",
        "Tenha um dia cheio de sorrisos, "
      ];
      
      const nome = document.getElementById("pessoa").value
      
      const fraseAleatoria = frasesAlegres[Math.floor(Math.random() * frasesAlegres.length)];
      const mensagem = fraseAleatoria + nome + "!";
      
      alert(mensagem); // Exibe a mensagem alegre no console
}