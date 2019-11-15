export const _typeof = function(type) {
  type = `[object ${type}]`
  return function(value) {
    return Object.prototype.toString.call(value) === type
  }
}

export const isSet = _typeof('Set')
export const isMap = _typeof('Map')
export const isNull = _typeof('Null')
export const isArray = _typeof('Array')
export const isObject = _typeof('Object')
export const isSymbol = _typeof('Symbol')
export const isWeakMap = _typeof('WeakMap')
export const isWeakSet = _typeof('WeakSet')
export const isFunction = _typeof('Function')

/**
 * 合并两个对象，返回新的对象，同名属性以第一个对象为主
 * @param {object} options
 * @param {object} defaultOptions
 */
export function mergeOptions(options, defaultOptions) {
  options = deepCopy(options)
  defaultOptions = deepCopy(defaultOptions)
  if (!options) return defaultOptions
  if (!isObject(options) && !isObject(defaultOptions)) {
    console.error(`入参格式必须都是 object`)
    return {}
  } else if (!isObject(options) && isObject(defaultOptions)) {
    console.error(`第一个入参格式不是 object`)
    return defaultOptions
  } else if (isObject(options) && !isObject(defaultOptions)) {
    console.error(`第二个入参格式不是 object`)
    return options
  }
  Object.entries(options).forEach(([optionName, optionValue]) => {
    if (isObject(optionValue) && Reflect.has(defaultOptions, optionName)) {
      defaultOptions[optionName] = mergeOptions(
        optionValue,
        defaultOptions[optionName]
      )
    } else {
      defaultOptions[optionName] = optionValue
    }
  })
  return defaultOptions
}

/**
 * 深拷贝
 * @param {any} target 需要深拷贝的目标
 */
export function deepCopy(target) {
  if (/string|number|Undefined/.test(typeof target) || isNull(target)) {
    return target
  }
  if (isObject(target)) {
    return Object.entries(target).reduce((result, entryItem) => {
      const [key, value] = entryItem
      result[key] = deepCopy(value)
      return result
    }, {})
  } else if (isArray(target)) {
    return target.reduce((result, item) => {
      result.push(deepCopy(item))
      return result
    }, [])
  }
}
