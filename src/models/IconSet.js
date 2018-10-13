import { RES } from "../constants/RES";

export class IconSet {
  constructor() {
    this.icons = [];
    this.discount = [];
  }

  addIcons(num, res) {
    for (let i = 0; i < num; i++) this.icons.push(res);
    return this;
  }

  removeIcon(res) {
    let idx = this.icons.indexOf(res);
    if (idx > -1) {
      this.icons.splice(idx, 1);
    }
    return this;
  }

  addDiscount(res) {
    this.discount = [res];
    return this;
  }

  get() {
    return this.icons.map(icon => RES.toString(icon));
  }

  getDiscount() {
    return RES.toString(this.discount);
  }
}
