//小鸟类
//记得是循环渲染小鸟的三种状态，图片的三个部分
import {Sprite} from "../base/Sprite.js";

export class Birds extends Sprite {
    constructor() {
        const image = Sprite.getImage('birds')
        super(image, 0, 0, image.width, image.height,
            0, 0, image.width, image.height);

        //小鸟的三种状态需要一个数组来存储
        //小鸟的宽度是34，小鸟的高度是24，上下间距是10，左右间距是9
        this.clippingX = [9,
            9 + 34 + 18,
            9 + 34 + 18 + 34 + 18];
        this.clippingY = [10, 10, 10];
        this.clippingWidth = [34, 34, 34];
        this.clippingHeight = [24, 24, 24];

        const birdX = window.innerWidth / 4;
        this.birdsX = [birdX, birdX, birdX];
        const birdY = [window.innerHeight / 2];
        this.birdsY = [birdY, birdY, birdY];
        const birdWidth = 34;
        this.birdsWidth = [birdWidth, birdWidth, birdWidth];
        const birdHeight = 24;
        this.birdsHeight = [birdHeight, birdHeight, birdHeight];

        this.y = [birdY, birdY, birdY];

        this.index = 0;
        this.count = 0;
        this.time = 0;
    }

    draw() {
        //切换三只小鸟
        const speed = 0.2;
        this.count = this.count + speed;
        if (this.index >= 2) {
            this.count = 0
        }
        //减速小鸟的速度
        this.index = Math.floor(this.count);

        //向上偏移
        const offsetUp =30;
        //加速度
        const g = 0.98 / 2.4;
        //小鸟的重力作用下的位移；
        const offsetY = (g * this.time * (this.time-offsetUp)) / 2;

        for (let i = 0; i <= 2; i++) {
            this.birdsY[i] = Number(this.y[i]) + Number(offsetY);


        }

        this.time++;

        super.draw(
            this.img,
            this.clippingX[this.index], this.clippingY[this.index],
            this.clippingWidth[this.index], this.clippingHeight[this.index],
            this.birdsX[this.index], this.birdsY[this.index],
            this.birdsWidth[this.index], this.birdsHeight[this.index]
        );
    }
}