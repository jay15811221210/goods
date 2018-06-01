import wepy from 'wepy';
const getExtJson = function () {
    if (wepy.getExtConfigSync) {
        const extConfig = wepy.getExtConfigSync();
        this.flag = {
            display: extConfig.flag_display,
            data: extConfig.flag
        };

        this.api_host = extConfig.api_host;
        this.img_host = extConfig.img_host;
        this.config_id = extConfig.config_id;
        this.merchant_id = extConfig.merchant_id;
        for (let i in extConfig.swiper){
            this.swiper = this.swiper || {}
            this.swiper[i] = extConfig.swiper[i]
        }
        this.swiper = {
            display: extConfig.swiper.display,
            dots: extConfig.swiper.dots,
            imgUrls: extConfig.swiper.list.map( item => item.link),
            urls: extConfig.swiper.list.map(item => item.page),
            maskText: extConfig.swiper.list.map(item => item.name),
            dotsColor: extConfig.swiper.dotsColor,
            dotsActiveColor: extConfig.swiper.dotsActiveColor,
            maskStatus: extConfig.swiper.maskStatus,
            autoplay: typeof extConfig.swiper.autoplay == 'undefined' ? true : extConfig.swiper.autoplay,
            loop: extConfig.swiper.loop,
            interval: extConfig.swiper.interval || 3000,
            duration: extConfig.swiper.duration || 500 ,
            dotsPosition: extConfig.swiper.dotsPosition || 'center'
        }
        this.menu = extConfig.menu;
        this.router = extConfig.router;
        this.openid = wepy.getStorageSync('openid');
        this.couponDisplay = extConfig.discounts;
        this.menuDisplay = extConfig.menu_display;
        this.banner = extConfig.banner;
        this.photos = extConfig.photos;
        this.video = extConfig.video;
        this.flagDisplay = extConfig.flag_display
    }
};
export default getExtJson;