const a = [23, 45, 32];

const b = [12, 67, 75];



const encontrarGanador = function (a, b) {

  let puntosPrimerParticipante = 0;

  let segundoParticipante = 0;

  for (let i = 0; i < 3; i++) {

    if (a[i] > b[i]) {

      puntosPrimerParticipante++;

    } else if (a[i] < b[i]) {

      segundoParticipante++;

    }

  }

  if (puntosPrimerParticipante > segundoParticipante) {

    return 'primer';

  } else {

    return 'segundo';

  }

}; // primera etapa

console.log('El ganador es el: ' + encontrarGanador(a, b) + ' participante');