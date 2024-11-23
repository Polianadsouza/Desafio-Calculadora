let derrotas = 1;
let vitorias = 15; 
let nameHeroi = "Oliver"
const resultado = calcularNivel(vitorias, derrotas);

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = (vitorias - derrotas);
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
}   else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
}   else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
}   else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
}   else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
}   else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
}   else {
        nivel = "Imortal"
}
  return ("O Heroi " + nameHeroi + " tem um saldo de " + saldoVitorias + " e está no nivel de " + nivel);
}
console.log(resultado);
