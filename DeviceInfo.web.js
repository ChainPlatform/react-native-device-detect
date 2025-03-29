import * as DeviceInfo from 'react-device-detect';

let os = "browser";
if (typeof window.APP_INFOS != "undefined" && typeof window.APP_INFOS.os != "undefined") {
    os = window.APP_INFOS.os;
}
DeviceInfo.os = os;
export default DeviceInfo;
