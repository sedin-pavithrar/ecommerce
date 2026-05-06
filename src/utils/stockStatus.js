export const getStockStatus = (stock) => {
    if(stock > 5){
        return "In Stock";

    }
    if(stock >=2 && stock <=5){
        return "Only few items left";
    }
    if(stock <2){
        return "Only one left";
    }
    return "Out of Stock";
}