module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    // 强制箭头函数的箭头前后使用一致的空格（规范）
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 代码块括号里不允许有空格，历史原因，暂时设置为1（规范）
    'block-spacing': [1, 'never'],
    // 强制在代码块中使用一致的大括号风格，历史原因，暂时设置为1（规范）
    'brace-style': [1, '1tbs', {
      'allowSingleLine': true
    }],
    // 强制在 switch 的冒号左右有空格 （规范）
    'switch-colon-spacing': [2, {
      'after': true,
      'before': false
    }],
    // 禁止在函数标识符和其调用之间有空格 （规范）
    'func-call-spacing': [2, 'never'],
    // 使用骆驼拼写法命名约定，历史原因，暂时设置为1（规范）
    'camelcase': [1, {
      'properties': 'always'
    }],
    // 禁止使用拖尾逗号（规范）
    'comma-dangle': [2, 'never'],
    // 强制使用一致的逗号风格（规范）
    'comma-style': [2, 'last'],
    // 强制在逗号前后使用一致的空格（规范）
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 禁止在计算属性中使用空格（规范）
    'computed-property-spacing': 2,
    // 要求在构造函数中有 super() 的调用，暂时没用到的规则
    'constructor-super': 2,
    // 强制所有控制语句使用一致的括号风格，允许单行省略大括号（有待商榷）（规范）
    'curly': [2, 'multi-line'],
    // 强制在点号之前或之后换行
    'dot-location': [2, 'property'],
    // 要求文件末尾保留一行空行（规范）
    'eol-last': 2,
    // 要求使用 === 和 !==（规范）
    'eqeqeq': [2, 'allow-null'],
    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 强制回调错误处理（有待商榷）
    'handle-callback-err': [2, '^(err|error)$'],
    // 强制使用一致的缩进（规范）
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 强制在对象字面量的键和值之间使用一致的空格（规范）
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 强制关键字周围空格的一致性
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'no-loop-func': 2,
    // 要求构造函数首字母大写
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    // 要求调用无参构造函数时带括号
    'new-parens': 2,
    // 禁用 Array 构造函数
    'no-array-constructor': 2,
    // 禁用 caller 或 callee
    'no-caller': 2,
    // 不禁用 console 
    'no-console': 0,
    // 不允许修改类声明的变量
    'no-class-assign': 2,
    // 禁止在条件语句中出现赋值操作符
    'no-cond-assign': 2,
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 不禁止在正则表达式中使用控制字符
    'no-control-regex': 0,
    // 禁止删除变量（规范）
    'no-delete-var': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁用 eval()（规范）
    'no-eval': 2,
    // 禁止对 catch 子句中的异常重新赋值 
    'no-ex-assign': 2,
    // 禁止扩展原生类型
    'no-extend-native': 2,
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 2,
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 2,
    // 禁止冗余的括号
    'no-extra-parens': [2, 'functions'],
    // 禁止 case 语句落空 
    'no-fallthrough': 2,
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 2,
    // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-inner-declarations': [2, 'functions'],
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 2,
    // 禁用迭代器 (no-iterator)
    'no-iterator': 2,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁用标签语句
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    // 禁用不必要的嵌套块 
    'no-lone-blocks': 2,
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止出现多个空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串
    'no-multi-str': 2,
    // 禁止出现多行空行,最多一行
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    // eslint不建议的配置
    // 'no-native-reassign': 2,
    // 'no-negated-in-lhs': 2,
    // 禁止使用 Object 构造函数
    'no-new-object': 2,
    // 不允许 new require 
    'no-new-require': 2,
    // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-symbol': 2,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 2,
    // 禁止把全局对象作为函数调用
    'no-obj-calls': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 2,
    // 禁用__proto__
    'no-proto': 2,
    // 禁止重新声明变量
    'no-redeclare': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁止在返回语句中出现赋值语句，除非使用括号把它们括起来
    'no-return-assign': [2, 'except-parens'],
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 不允许使用逗号操作符
    'no-sequences': 2,
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 'no-spaced-func': 2,
    // 禁用稀疏数组
    'no-sparse-arrays': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 限制可以被抛出的异常
    'no-throw-literal': 2,
    // 禁用行尾空格（规范）
    'no-trailing-spaces': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 不允许初始化变量值为 undefined
    'no-undef-init': 2,
    // 禁止使用令人困惑的多行表达式(没看懂)
    'no-unexpected-multiline': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止可以表达为更简单结构的三元操作符(没看懂)
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unreachable': 2,
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 2,
    // 禁止出现未使用过的变量（规范）
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    // 如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号（规范）
    'quote-props': [2, 'consistent-as-needed'],
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止在对象中使用不必要的计算属性(没看懂)
    'no-useless-computed-key': 2,
    // 禁用不必要的构造函数
    'no-useless-constructor': 2,
    // 禁用不必要的转义字符
    'no-useless-escape': 0,
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 禁用 with 语句（规范）
    'no-with': 2,
    // 强制函数中的变量在一起声明或分开声明
    'one-var': [2, {
      'initialized': 'never'
    }],
    // 强制操作符使用一致的换行符风格
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 要求块内填充
    'padded-blocks': [2, 'never'],
    // 尽可能使用一致的单引号，允许字符串使用反勾号或者字符串内使用双引号
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    // 禁止使用分好代替ASI
    'semi': [2, 'never'],
    // 分号前后空格设置
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 要求语句块之前的空格
    'space-before-blocks': [2, 'always'],
    // 禁止函数圆括号之前有一个空格
    'space-before-function-paren': [2, 'never'],
    // 禁止或强制圆括号内的空格（规范）
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格（规范）
    'space-infix-ops': 2,
    // 要求或禁止在一元操作符之前或之后存在空格（规范）
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    // 要求在注释前有空白（规范）(没看懂)
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 禁止模板字符串中空格的使用
    'template-curly-spacing': [2, 'never'],
    // 要求调用 isNaN()检查 NaN
    'use-isnan': 2,
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,
    // 需要把立即执行的函数包裹起来
    'wrap-iife': [2, 'any'],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    // 要求或者禁止Yoda条件
    'yoda': [2, 'never'],
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    // 禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制在花括号中使用一致的空格(这种配置和之前的有冲突)（规范）
    'object-curly-spacing': [1, 'never'],
    // 强制数组方括号中使用一致的空格（规范）
    'array-bracket-spacing': [2, 'never']
  }
};
