import AJAXAdepter from "./index.js";
import { addCommonParams } from "./default-config";
import { isObject } from "@/utils";

const paramsNameReg = /^(_+)/;

// 1、先检查参数配置是否为简约的字符串形式，如果是，默认为get请求
// 2、如果是参数配置是对象的形式，则具体按照配置的行为进行

function createApiFn(config) {
  if (!isObject(config)) {
    // 非生产环境报错处理
    if (process.env.NODE_ENV !== "production")
      throw new Error(`参数${config}应该是一个对象`);
    // 生产环境返回空对象
    return {};
  }
  let apiResult = {};
  Object.entries(config).forEach(([key, value]) => {
    // -----------------------------------------------
    // ----------------    简约模式      --------------
    // -----------------------------------------------
    if (typeof value === "string") {
      apiResult[key] = async (data = {}) => {
        if (!isObject(config)) {
          // 非生产环境报错处理
          if (process.env.NODE_ENV !== "production")
            throw new Error(`参数${data}应该是一个对象`);
          // 生产环境重置为空对象
          data = {};
        }
        let axiosOptions = {
          url: value,
          params: addCommonParams(data)
        };
        return AJAXAdepter(axiosOptions, {});
      };

      // -----------------------------------------------
      // ----------------    对象模式      --------------
      // -----------------------------------------------
    } else if (isObject(config)) {
      apiResult[key] = async (data = {}) => {
        let dataType = Object.prototype.toString.call(data);
        if (
          !(dataType === "[object Object]" || dataType === "[object FormData]")
        ) {
          // 非生产环境报错处理
          if (process.env.NODE_ENV !== "production")
            throw new Error(`参数${data}应该是一个对象或者表单对象`);
          // 生产环境重置为空对象
          data = {};
        }
        let axiosOptions = {};
        let customOptions = {};
        Object.entries(value).forEach(([paramsKey, paramsVal]) => {
          if (!paramsNameReg.test(paramsKey)) {
            axiosOptions[paramsKey] = paramsVal;
          } else {
            paramsKey = paramsKey.replace(paramsNameReg, "");
            customOptions[paramsKey] = paramsVal;
          }
        });
        !axiosOptions.method && (axiosOptions.method = "get");
        !axiosOptions.headers && (axiosOptions.headers = {});

        if (/(get)/.test(axiosOptions.method.toLowerCase())) {
          axiosOptions.params = addCommonParams(data);
        } else {
          if (dataType === "[object FormData]") {
            axiosOptions.data = data;
          } else {
            axiosOptions.data = addCommonParams(data);
          }
        }
        return AJAXAdepter(axiosOptions, customOptions);
      };
      // -----------------------------------------------
      // ----------------  其他不符合规范模式  -----------
      // -----------------------------------------------
    } else {
      // 非生产环境报错处理
      if (process.env.NODE_ENV !== "production")
        throw new Error(`接口配置信息${value}应该是一个url字符串或者对象`);
    }
  });
  return apiResult;
}

export default function(config) {
  let apiResult = createApiFn(config);
  return Object.keys(apiResult).reduce((actionFnArr, apiName) => {
    actionFnArr[apiName] = async (context, params = {}) =>
      apiResult[apiName].call(null, params);
    return actionFnArr;
  }, []);
}
