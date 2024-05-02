export default class Like {
  constructor() {
    this._element;
    this.#createElements();
  }

  #createElements() {
    const like = document.createElement('div');
    like.classList.add('like');

    const trajectory = this.#createTrajectory();
    
    like.classList.add('like_' + trajectory);
    
    this._element = like;
  }

  #createTrajectory() {
    const trajectories = ['flying1', 'flying2', 'flying3', 'flying4'];
    
    return trajectories[Math.floor(Math.random() * 4)];
  }

  get element() {
    return this._element;
  }
}