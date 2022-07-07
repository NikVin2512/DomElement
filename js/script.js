'use strict';

const DomElement = function (selector) {
  this.selector = selector;
  this.height = '50px';
  this.width = '150px';
  this.bg = 'white';
  this.border = '1px solid red';
  this.fontSize = '18px';
};

DomElement.prototype.createElement = function () {
  if(this.selector[0] == '.'){
    const elemClass = this.selector.slice(1);
    const newDiv = document.createElement('div');

    newDiv.className = elemClass;
    newDiv.textContent = "It's new Div";
    newDiv.style.cssText = 
    `background: ${this.bg}; font-size: ${this.fontSize};;
    height: ${this.height}; width: ${this.width}; border: ${this.border}`; 

    document.body.append(newDiv);

  } else if (this.selector[0] == '#') {
    const elemId = this.selector.slice(1);
    const newPar = document.createElement('p');

    newPar.id = elemId;
    newPar.textContent = "It's new Paragraph";
    newPar.style.cssText = 
    `background: ${this.bg}; font-size: ${this.fontSize};;
    height: ${this.height}; width: ${this.width}; border: ${this.border}`;

    document.body.append(newPar);

  }
};

const boxClass = new DomElement('.class');
const boxId = new DomElement('#id');

boxClass.createElement();
boxId.createElement();