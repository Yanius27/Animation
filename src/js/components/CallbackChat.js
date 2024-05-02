export default class CallbackChat {
  constructor() {
    this._element;
    

    this.#createElement();
    this.#listener();
  }

  #createElement() {
    const container = document.createElement('div');
    container.classList.add('callbackChat');

    this.popup = document.createElement('div');
    this.popup.classList.add('callbackChat_popup');

    this.popupHeader = document.createElement('div');
    this.popupHeader.classList.add('callbackChat_popup-header');

    this.title = document.createElement('span');
    this.title.classList.add('callbackChat_popup-title');
    this.title.textContent = 'Напишите нам';

    this.closeIcon = document.createElement('div');
    this.closeIcon.classList.add('callbackChat_popup-close');

    this.popupHeader.append(this.title, this.closeIcon);

    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('callbackChat_popup-textarea');
    this.textarea.rows = 10;

    this.btn = document.createElement('button');
    this.btn.classList.add('callbackChat_popup-btn');
    this.btn.textContent = 'Отправить';

    this.popup.append(this.popupHeader, this.textarea, this.btn);


    this.redIcon = document.createElement('div');
    this.redIcon.classList.add('redIcon');

    container.append(this.popup, this.redIcon);

    this._element = container;
  }

  #listener() {
    this.redIcon.addEventListener('click', () => {
      this.redIcon.classList.remove('redIcon_open');
      this.redIcon.classList.add('redIcon_folding');
      setTimeout(() => {
        this.popup.style.display = 'flex';
        this.redIcon.classList.remove('redIcon_folding');
        this.redIcon.style.display = 'none';
      }, 200);
    });


    this.closeIcon.addEventListener('click', () => {
      this.popup.classList.add('callbackChat_popup-folding');
      this.redIcon.classList.add('redIcon_open');
      setTimeout(() => {
        this.popup.style.display = 'none';
        this.popup.classList.remove('callbackChat_popup-folding');
        this.redIcon.style.display = 'block';
      }, 60);
    })
  };

  get element() {
    return this._element;
  }
}