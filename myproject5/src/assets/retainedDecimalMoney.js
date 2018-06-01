const retainedDecimalMoney = (num, several) => {
    if (typeof num !== "string") num = num.toString();
    several = several || 2;
    const price = num.indexOf('.') > -1 ? `￥${parseFloat(num).toFixed(several)}` : num > 0 ? `￥${num}.00` : "￥0";
    return price;
};

export default retainedDecimalMoney;