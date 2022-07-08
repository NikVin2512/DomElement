'use strict';



const DomElement = function (selector, height, width, bg, border, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.border = border;
  this.fontSize = fontSize;

  DomElement.prototype.createElement =  () => {
    const cssText = `background: ${this.bg}; font-size: ${this.fontSize};;
    height: ${this.height}; width: ${this.width}; border: ${this.border}`;
    const elemFirst = this.selector.slice(1);
    if(this.selector[0] == '.'){
      const newDiv = document.createElement('div');

      newDiv.className = elemFirst;
      newDiv.textContent = "It's new Div";
      newDiv.style.cssText = cssText;

      document.body.append(newDiv);

    } else if (this.selector[0] == '#') {
      const newPar = document.createElement('p');

      newPar.id = elemFirst;
      newPar.textContent = "It's new Paragraph";
      newPar.style.cssText = cssText;

      document.body.append(newPar);

    }
  };
};




const boxClass = new DomElement('.class', '100px', '150px', 'green', '1px solid red', '18px');
const boxId = new DomElement('#id', '100px', '150px', 'green', '1px solid red', '18px');

boxClass.createElement();
boxId.createElement();