import Like from "./Like";

export default class Liker {
  constructor() {
    this._element;
    this.#createElements();
    this.#listener();
  }

  #createElements() {
    this.container = document.createElement('div');
    this.container.classList.add('liker');

    this.likeBtn = document.createElement('button');
    this.likeBtn.classList.add('liker_btn');
    this.likeBtn.textContent = 'Like';

    this.container.append(this.likeBtn);

    this._element = this.container;
  }

  #listener() {
    this.likeBtn.addEventListener('click', () => {
      const like = new Like().element;
      this.container.append(like);
      
      like.addEventListener('animationend', () => {
        like.remove();
      }, { once: true });
    });
  }

  get element() {
    return this._element;
  }
}