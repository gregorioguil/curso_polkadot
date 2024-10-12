let contadorSimulador = 0;
let historicoSimulacoes = [];

document.getElementById('calcular').addEventListener('click', function () {
  // Captura os valores inseridos pelo usuário
  let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
  let complexidade = document.getElementById('complexidade').value;
  let moeda = document.getElementById('moeda').value;
  let precoGas;

  // Definição de preço do gas por complexidade
  switch (complexidade) {
    case 'baixa':
      precoGas = 0.01;
      break;
    case 'media':
      precoGas = 0.05;
      break;
    case 'alta':
      precoGas = 0.1;
      break
  }

  // Calcula o custo total do gas
  let custoGas = valorTransacao * precoGas;

  // Exibe o resultado
  if (valorTransacao > 0) {
    document.getElementById('resultado').innerHTML = `
  <p>Valor da Transação: ${valorTransacao} ${moeda}</p>
  <p>Complexidade: ${complexidade.charAt(0).toUpperCase() +
      complexidade.slice(1)}</p>
  <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} ${moeda}</strong></p>
  `;
    let transacao = {
      valorTransacao: valorTransacao,
      complexidade: complexidade,
      moeda: moeda,
      custoGas: custoGas
    }

    historicoSimulacoes.push(transacao);

    document.getElementById('historico').innerHTML = '';

    let table = document.createElement('table');
    table.setAttribute('border', '1');
    table.appendChild(document.createElement('tr'));
    table.rows[0].appendChild(document.createElement('th'));
    table.rows[0].cells[0].textContent = 'Valor da Transação';
    
    table.appendChild(document.createElement('tr'));
    table.rows[0].appendChild(document.createElement('th'));
    table.rows[0].cells[1].textContent = 'Complexidade';

    table.appendChild(document.createElement('tr'));
    table.rows[0].appendChild(document.createElement('th'));
    table.rows[0].cells[2].textContent = 'Moeda';

    table.appendChild(document.createElement('tr'));
    table.rows[0].appendChild(document.createElement('th'));
    table.rows[0].cells[3].textContent = 'Custo Estimado do Gas';

    historicoSimulacoes.forEach(transacao => {
      let row = document.createElement('tr');
      let valorTransacaoCell = document.createElement('td');
      let complexidadeCell = document.createElement('td');
      let moedaCell = document.createElement('td');
      let custoGasCell = document.createElement('td');

      valorTransacaoCell.textContent = transacao.valorTransacao;
      complexidadeCell.textContent = transacao.complexidade;
      moedaCell.textContent = transacao.moeda;
      custoGasCell.textContent = transacao.custoGas;

      row.appendChild(valorTransacaoCell);
      row.appendChild(complexidadeCell);
      row.appendChild(moedaCell);
      row.appendChild(custoGasCell);

      table.appendChild(row);
    });
    document.getElementById('historico').appendChild(table);

    contadorSimulador += 1;
    document.getElementById('contadorSimulador').innerHTML = `
  <p>Número de simulações: ${contadorSimulador}</p>
  `;

  setTimeout(limparTransacoes, 60000);
  } else {
    document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira um valor de transação válido.</p > ';
  }
});

function limparTransacoes() {
  historicoSimulacoes = [];
  contadorSimulador = 0;

  document.getElementById('historico').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('contadorSimulador').innerHTML = '';
}


