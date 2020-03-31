
export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name

    if(!Stepan.Error.isValidTagname(element)){
      throw "Invalid tagname";
    }

    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

}
Stepan.Component = class {
  constructor(parent) {

    // TODO: 1. Create StepanError class to define all framework errors
    //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
    if(!Stepan.Error.isValidDOMobject(parent)){
      throw "Invalid DOM object";
    }
    this.parent = parent;
  }

  // TODO (Bonus): Ensure that every component returns a top-level root element
};

Stepan.Error = class{
  static isValidTagname(element) {
    return document.createElement(element).toString() != "[object HTMLUnknownElement]";
  }

  static isValidDOMobject(obj){
    return obj !== undefined && obj !== null &&  obj instanceof Element;
  }

};
