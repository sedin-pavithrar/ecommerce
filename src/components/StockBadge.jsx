import { getStockStatus } from "../utils/stockStatus";

function StockBadge({ stock }) {
  const status = getStockStatus(stock);

  return (
    <span className={`stock-badge ${status.replaceAll(" ", "-")}`}>
      {status} ({stock})
    </span>
  );
}

export default StockBadge;