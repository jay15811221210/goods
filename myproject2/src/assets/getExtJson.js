import wepy from 'wepy';
const getExtJson = function () {
    if (wepy.getExtConfigSync) {
        const extConfig = wepy.getExtConfigSync();
        this.flag = extConfig.flag;
        this.api_host = extConfig.api_host;
        this.img_host = extConfig.img_host;
        this.config_id = extConfig.config_id;
        this.merchant_id = extConfig.merchant_id;
        this.swiper = extConfig.swiper;
        this.style = extConfig.style;
        this.menu = extConfig.menu;
        this.menu = extConfig.menu;
        this.router = extConfig.router;
        this.sectionImg = extConfig.sectionImg;
        this.openid = wepy.getStorageSync('openid');
        this.goodsClass = extConfig.goodsClass;
    }
};
export default getExtJson;