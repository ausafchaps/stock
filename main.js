$(document).ready(function () {
    const dataStore = new DataStore();
  
const stocks = [
  new Stock("1010", "TDWL", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("1020", "TDWL", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("1090", "TDWL", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("2040", "TDWL", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("1040", "TDWL", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("EMAAR", "DFM", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("DFM", "DFM", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("DIB", "DFM", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("SHUAA", "DFM", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
  new Stock("UPP", "DFM", Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), new Date()),
];

stocks.forEach(stock => {
  dataStore.addStock(stock);
});

  
const exchangeDropdown = $('#exchangeDropdown');
exchangeDropdown.empty();

Object.keys(dataStore.stockByExchange).forEach(exchange => {
  exchangeDropdown.append(`<option value="${exchange}">${exchange}</option>`);
});

  
    exchangeDropdown.change(function () {
      const selectedExchange = $(this).val();
      const stockObjects = dataStore.getStocksByExchange(selectedExchange);
      updateTable(stockObjects);
    });
  
    const initialExchange = exchangeDropdown.val();
    const initialStockObjects = dataStore.getStocksByExchange(initialExchange);
    updateTable(initialStockObjects);
  
    setInterval(function () {
      dataStore.stockCollection.forEach(stock => {
        stock.open = Math.random();
        stock.high = Math.random();
        stock.low = Math.random();
        stock.close = Math.random();
        stock.bid = Math.random();
        stock.ask = Math.random();
        stock.tradeDate = new Date();
      });
  
      const selectedExchange = exchangeDropdown.val();
      const updatedStockObjects = dataStore.getStocksByExchange(selectedExchange);
      updateTable(updatedStockObjects);
    }, 3000);
  
    function updateTable(stockObjects) {
      const tbody = $('#stockTable tbody');
      tbody.empty();
  
      stockObjects.forEach(stock => {
        tbody.append(`<tr>
          <td>${stock.symbol}</td>
          <td>${stock.open}</td>
          <td>${stock.high}</td>
          <td>${stock.low}</td>
          <td>${stock.close}</td>
          <td>${stock.bid}</td>
          <td>${stock.ask}</td>
          <td>${stock.tradeDate}</td>
        </tr>`);
      });
    }
  });
  