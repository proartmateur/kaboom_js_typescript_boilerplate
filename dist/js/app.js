"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kaboom_1 = __importDefault(require("kaboom"));
console.log("Hola mundo3");
var cnf1 = {
    width: 320,
    height: 240,
    scale: 2,
    clearColor: [0, 0, 0, 1], // background color (default is
};
var k = kaboom_1.default(cnf1);
var helloScn = function () {
    console.log('hello world');
    k.add([
        k.text("Hello!", 16),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.origin('center')
    ]);
};
k.scene('hello', helloScn);
k.scene('main', function () {
    k.go('hello');
});
k.start('main');
