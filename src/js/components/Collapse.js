export default class Collapse {
  constructor(text) {
    this.text = text;
    this._element;
    this.collapseBtn;
    this.collapseText;
    this.#createElement();
    this.#listener();
  }

  #createElement() {
    const container = document.createElement('div');
    container.classList.add('collapse');

    this.collapseBtn = document.createElement('button');
    this.collapseBtn.classList.add('collapse_btn');
    this.collapseBtn.textContent = 'Collapse';

    this.collapseText = document.createElement('span');
    this.collapseText.classList.add('collapse_text');
    this.collapseText.textContent = this.text;

    container.append(this.collapseBtn, this.collapseText);
    this._element = container;
  }

  #listener() {
    this.collapseBtn.addEventListener('click', () => {
      this.collapseBtn.classList.add('collapse-clicked');

      if (this.collapseBtn.parentNode.classList.contains('collapse_close')) {
        this.collapseBtn.parentNode.classList.remove('collapse_close');
        this.collapseBtn.parentNode.classList.add('collapse_open');
        return;
      }
      this.collapseBtn.parentNode.classList.remove('collapse_open');
      this.collapseBtn.parentNode.classList.add('collapse_close');
    });
  }

  get element() {
    return this._element;
  }
}