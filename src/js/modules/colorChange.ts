/**
 * Change the color of a element on click.
 * Not really usefull, just to show how TS can be used in this blueprint.
 */
class ColorChange {
  private domElements: NodeListOf<HTMLElement>;
  private colorList = ['blue', 'green', 'red'];

  constructor(elementName: string) {
    this.domElements = document.querySelectorAll(elementName);
    this.domElements.forEach((element) => {
      element.addEventListener('click', this.onPressElement.bind(this));
      element.style.cursor = 'pointer';
    })
  }

  private onPressElement(event) {
    const randomNumber = Math.floor(Math.random() * this.colorList.length);
    event.target.style.color = this.colorList[randomNumber];
  }

}

export default ColorChange;