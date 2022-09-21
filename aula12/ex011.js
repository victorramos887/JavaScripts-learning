var idade = 66;

if(idade < 16) {
    console.log(`Você tem ${idade} anos.`);
    console.log('Menor de idade');

} else if(idade <18 || idade > 65) {
        console.log(`Você tem ${idade} anos.`);
        console.log('Voto facultativo');
} else {
    console.log(`Você tem ${idade} anos.`);
    console.log('Voto obrigatório');
}