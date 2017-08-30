
import { think } from 'thinkjs';
export default class extends think.Controller {
  indexAction() {
    return this.display();
  }
};