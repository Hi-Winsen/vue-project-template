import { isObject } from "@/utils";

// -----------------------------------------------
// -----------------------------------------------
// axios的默认配置项
// -----------------------------------------------
// -----------------------------------------------
const defaultOptions = {
  baseURL: "/",
  timeout: 60000,
  headers: {
    post: {
      "Content-Type": "application/json;"
    },
    common: {
      token: "123456999",
      source: "WX_APP"
    }
  }
};

// -----------------------------------------------
// -----------------------------------------------
// 每个接口都有的公共字段
// -----------------------------------------------
// -----------------------------------------------
const commonParams = {
  source: "这里是需要修改的每个接口都有的公共字段"
};
// 每个接口都可能需要一些默认请求参数
export function addCommonParams(params = {}) {
  return {
    ...commonParams,
    ...params
  };
}

// 设置 axios 的默认选项
export default function initDefaultConfig(target, options) {
  options = options || defaultOptions;
  Object.entries(options).forEach(([optionName, optionValue]) => {
    if (isObject(optionValue)) {
      if (!Reflect.has(target, optionName)) {
        return console.error(`不允许设置axios不支持的属性 ${optionName}`);
      }
      initDefaultConfig(target[optionName], optionValue);
    } else {
      target[optionName] = optionValue;
    }
  });
}
