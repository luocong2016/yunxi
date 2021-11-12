/** @format */

module.exports = {
  eslintIntegration: true, // 让prettier使用eslint的代码格式进行校验
  printWidth: 120, // 指定代码换行的行长度。单行代码宽度超过指定的最大宽度，将会换行，默认为80，官方建议设100-120其中一个数
  tabWidth: 2, // 一个tab代表几个空格数，默认就是2
  useTabs: false, // 使用tab（制表位）缩进而非空格，默认为false
  semi: false, // 在语句末尾添加分号，默认为true
  singleQuote: true, // 使用单引号而非双引号，默认为false，即使用双引号，建议设true，即单引号
  quoteProps: "as-needed", // 给对象里的属性名是否要加上引号，默认为as-needed，即根据需要决定，如果不加引号会报错则加，否则不加
  jsxSingleQuote: true, // 在jsx里是否使用单引号，你看着办
  trailingComma: "none", // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  jsxBracketSameLine: false, // 在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）,默认值false
  arrowParens: "always", // 为单行箭头函数的参数添加圆括号，默认值always
  insertPragma: false, // 在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了，默认值false
  vueIndentScriptAndStyle: false, // 缩进Vue文件中的脚本和样式标签
  endOfLine: "auto", // 设置统一的行结尾样式
  htmlWhitespaceSensitivity: "ignore", // html对空格敏感的格式，默认值css
};
