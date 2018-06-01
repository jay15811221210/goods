
import wepy from 'wepy'

function payMethod(data = {}){
    wepy.request({
		url: `${this.api_host}/restapi/goods-orders`,
		method: "POST",
		data: data.data,
		success: res => {
			if (!res.data.success) {
				this.$invoke("toast", "show", {
					title: res.data.data.message,
					imgClassName: "iconfont icon-shibaibiaoqing icon_size"
				});
				return;
			}
			wepy.requestPayment({
				timeStamp: res.data.data.timeStamp,
				nonceStr: res.data.data.nonceStr,
				package: res.data.data.package,
				signType: res.data.data.signType,
				paySign: res.data.data.paySign,
				success: data.success ? data.success : res => {
					wepy.showToast({
						title: "支付成功",
						icon: "success",
						duration: 1000
					});
					// paySuccess;
					wepy.navigateTo({ 
						url: "paySuccess?text=1",

					});
				},
				fail: data.fail ? data.fail : res => {
					// err_desc
					this.$invoke("toast", "show", {
						title: "支付失败",
						imgClassName: "iconfont icon-shibaibiaoqing",
						fontSize: 188
					});
				},
				complete: data.complete
			});
		}
    });
}
export default payMethod;
