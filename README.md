## 1⃣️制作
1. 安装node及npm，之后新建一个文件夹，在终端中打开，执行命令npm init,一路回车然后输入yes即可，生成一个package.json， ` {
  "name": "swTest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}`,其中name就是插件的名称，默认是文件夹名字；version为版本号，注意每次发布新版本的时候需要手动更新版本号；description是描述；main是入口文件，加载这个插件时读的文件，这个也是最重要的属性，这个属性是别人引用你的插件时，读取的入口文件，在这个文件里，需要你向外暴露接口；author是作者，可以是npm注册的名字。

2. 在根目录下新建src文件夹，里面存放的就是自己的代码片段。
3. 在根目录下新建个 .npmignore（注意要有个.），里面就是npm在发布时会忽略项目中的文件。
4. 在根目录下新建README.md，里面时发布到npm时项目介绍。

## 2⃣️babel转义
因为很多语法都是ES6及以上，所以需要转义成ES5。
1. 全局安装Babel:    `npm install -g babel-cli`
2. ES6转码规则:   `npm install babel-preset-es2015 --save-dev`
3. react转码规则:    `npm install babel-preset-react --save-dev`
4. ES7不同阶段语法提案的转码规则:  `npm install babel-preset-stage-0 --save-dev` (0 - 3都可以)
5. 根目录下新建.babelrc（同样有.）；加入规则 `{
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }`
6. 一般我们是将代码写在src里面，然后将整个src转义成es5，根目录下运行代码 `babel src --out-dir lib` ，得到lib文件夹，就是src转义之后的文件了。
7. 修改package.json，里面main修改为`lib/index`
8. 修改.npmignore文件，增加`src/  
node_modules/    
package-lock.json`

## 3⃣️发布
1. 没有npm账号的先去npm官网注册，官方网站是：`https://www.npmjs.com/`;
2. 先修改package.json中的name，修改成你的插件名,然后在npm官网查询是否已经被注册了这个名字，有的话修改一下；
3. 项目根目录下执行`npm adduser  `,输入npm的账号密码还有邮箱，缺一不可；
4. 可以运行`npm whoami`查看当前用户是否是自己；
5. 运行代码`npm publish`进行发布；
6. 可以在npm官网右上角点击packages查看自己发布的，有的话发布就成功啦；
7. 在项目之中可以引进自己的插件`npm install xxx --save-dev`进行使用啦；

## 4⃣️维护
1. 对插件代码功能进行了拓展或者修改，需要重新发布新版本，除了改代码之外，需要每次手动把package.json中的version进行修改，这是版本号，代表版本改动了。npm使用的版本号规则是semver语义化版本，初始化是1.0.0，依次是主版号.次版号.修订号，主版号是不相容的API修改，次版号是功能性新增，修订号是问题修正。
2. 修改了之后再运行一次`npm publish`进行发布；
3. 发布之后在运用的项目如何更新呢？（1）如果是npm，由于是自己的插件，可以知道自己的版本修改成了什么，在项目中package.json里面找到依赖包版本，手动改成最新的版本号，然后项目运行`npm install --force`就可以了；（2）如果是yarn，运行`yarn upgrade`也ok；（3）由于项目中的依赖包会发生更新，所以有时候我们会安装第三方插件进行查看，`npm install -g npm-check-updates`,运行`ncu` 查看可更新包,`ncu -u`更新package.json,`npm install`升级到最新版本即可。