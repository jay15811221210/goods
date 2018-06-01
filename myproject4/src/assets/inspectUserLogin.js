
import wepy from 'wepy'

function inspectUserLogin() {
    wepy.getSetting({
        success: res => {
            if (res.authSetting["scope.userInfo"]) {
                this.inspectUserLogin = true;
            } else {
                this.inspectUserLogin = false;
            }
        }
    })
}

export default inspectUserLogin