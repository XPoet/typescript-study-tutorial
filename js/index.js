"use strict";
var testFn = function () {
    console.log('test');
};
var str = 'hello typescript';
console.log(str);
/*
vscode配置自动编译

1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",

2、第二步 任务 - 运行任务  监视tsconfig.json

*/ 
