import kaboom from "kaboom";

console.log("Hola mundo3");

const cnf1 = {
    width: 320, // width of canvas
    height: 240, // height of canvas
    scale: 2,
    clearColor: [0, 0, 0, 1], // background color (default is
};

const k =  kaboom(
    cnf1
);

const helloScn = () => {
    console.log('hello world')
    k.add([
        k.text("Hello!", 16),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.origin('center')
    ]);
}
k.scene('hello', helloScn);
k.scene('main', () => {
    k.go('hello');
});

k.start('main');
