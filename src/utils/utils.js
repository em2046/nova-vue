export default class Utils {
  /**
   * @param el DOM
   * @param stopEl Stop calc parent
   * @returns {{top: number, left: number}}
   */
  static getElementOffset(el, stopEl) {
    let left = 0;
    let top = 0;

    while (el) {
      left += el.offsetLeft;
      top += el.offsetTop;
      el = el.offsetParent;
      if (el === stopEl) {
        break;
      }
    }

    return {
      left: left,
      top: top
    };
  }

  static isParentsOrSelf(ele, parent) {
    for (let i = 0; i < 1024; i++) {
      if (ele === parent) {
        return true;
      }
      if (!ele) {
        return false;
      }
      ele = ele.parentElement;
    }

    return false;
  }

  static mergeOptions(to, from) {
    for (const key in from) {
      if (!Object.prototype.hasOwnProperty.call(from, key)) {
        continue;
      }
      if (typeof from[key] === 'object') {
        if (typeof to[key] !== 'object') {
          to[key] = {};
        }
        Utils.mergeOptions(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
    return to;
  }

  /**
   * @param ele DOM
   * @param className
   */
  static hasClassName(ele, className) {
    if (!ele || !className) {
      return false;
    }

    let targetClassName = ele.getAttribute('class');
    if (!targetClassName) {
      return false;
    }

    return targetClassName
      .split(' ')
      .some(singleClassName => singleClassName === className);
  }
}
