import axios from "axios";
import initDefaultConfig from "./default-config";
import initInterceptors from "./interceptors";
import showToast from "./show-toast";

initDefaultConfig(axios.defaults);
initInterceptors(axios);

export default function(axiosParams, customParams = {}) {
  return new Promise((resolve, reject) => {
    axios(axiosParams)
      .then(response => {
        const { data } = response;
        // 只要是 200 状态码，请求都会进入这里
        // 但是，对于业务而言，不是所有的请求结果都是成功的
        // 例如：查询一条记录，但是参数传递错误，此时接口请求是成功的(200)，但在业务层面是失败的
        // 不同的公司后台，对于业务代码的成功与否都有自己的字段去控制
        // 这里默认以 resultCode 为准：1--成功，0--失败

        if (+data.resultCode === 1) {
          resolve(data.data);
        } else {
          // 业务层面而言，此请求失败了
          if (customParams.showErrorToast) {
            showToast("warn", "接口请求失败了");
          }
          reject(data);
        }
      })
      .catch(error => {
        if (customParams.showErrorToast) {
          showToast("error", "接口请求失败了");
        }
        reject(error);
      })
      .finally(() => {
        // 口调用完成
      });
  });
}
