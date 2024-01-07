class DataStore {
    constructor() {
      this.stockCollection = [];
      this.stockByExchange = {};
    }
  
    addStock(stock) {
      try {
        if (!stock || !stock.exchange) {
          throw new Error("Invalid stock data");
        }
    
        this.stockCollection.push(stock);
    
        if (!this.stockByExchange[stock.exchange]) {
          this.stockByExchange[stock.exchange] = [];
        }
        this.stockByExchange[stock.exchange].push(stock);
      } catch (error) {
        alert(error.message);
      }
    }
    
  
    getStocksByExchange(exchange) {
      return this.stockByExchange[exchange] || [];
    }
  }
  