/**
 * A circle that bounces around within a parent dom element
 * can be stopped and started again if you click on it
 */
class BounceBall {
  private parent: Element;
  private circle: Element;
  private size: number = 25;
  private colorBg: string = '#990000';
  private speed: number = 5;

  constructor(parentName: string) {
    this.parent = document.querySelector(parentName);
    console.log('parent', this.parent);
    this.createCircle();
  }

  startMoving() {
    console.log('startMoving()');
  }

  stopMoving() {
    console.log('stopMoving()');
  }

  private createCircle() {
    this.circle = document.createElement('span');
    this.circle.setAttribute(
      'style',
      `background: ${this.colorBg}; 
      width: ${this.size}px;
      height: ${this.size}px;
      display: inline-block;
      border-radius: 50%;
      position: absolute;`,
    );
    this.parent.appendChild(this.circle);
  }
}

export default BounceBall;
