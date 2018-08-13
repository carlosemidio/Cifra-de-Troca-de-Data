var alfaBeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function descifrar(msg, data) {
    var number = data.split("/").join("");
    var words = msg.split(" ");
    var cifra = "";

    var msgCifrada = "";

    var index =  0;

    // Gera a cifra numérica    
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            cifra += number[index];

            if(index < number.length-1) {
                index++;
            } else {
                index = 0;
            }
        }

        // Separa as palavras com espaço
        cifra += " ";
    }

    // Traforma a String de número em um array de números
    cifra = cifra.split(" ");

    // Itera por cada número da cifra e por cada número da mensagem
    // e desfaz as trocas de letras com base nos seus respectivos números
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            index = alfaBeto.indexOf(words[i][j].toUpperCase());
            
            if (index-parseInt(cifra[i][j]) >= 0) {
                if(words[i][j].charCodeAt(0) >= 65 && words[i][j].charCodeAt(0) <= 90) {
                    msgCifrada += alfaBeto[index-parseInt(cifra[i][j])];
                } else {
                    msgCifrada += alfaBeto[index-parseInt(cifra[i][j])].toLowerCase();
                }	
            } else {
                if(words[i][j].charCodeAt(0) >= 65 && words[i][j].charCodeAt(0) <= 90) {
                    msgCifrada += alfaBeto[26+(index-parseInt(cifra[i][j]))];
                } else {
                    msgCifrada += alfaBeto[26+(index-parseInt(cifra[i][j]))].toLowerCase();
                }
            }
        }

        // Separa as palavras descifradas com espaço
        msgCifrada += " ";
    }

    // Retorna a mensagem descifrada
    return msgCifrada;
}