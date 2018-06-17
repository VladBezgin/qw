class options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    css() {
        var div = document.createElement('div');
        div.innerHTML = '123';
        div.style.cssText = `display:  inline-block; height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
        document.body.appendChild(div);
    }
}
let newOpt = new options('100', '50', 'green', '700', 'center');
newOpt.css();

class main {
    obj() {
        var div2 = document.createElement('div');
        document.body.appendChild(div2);
    }
}

let newObj = new main();
newObj.obj();