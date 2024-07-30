import icons from 'url:../../img/icons.svg';

export default class View {
    _clear() {
        this._parentElement.innerHTML = '';
    }

    render(data) {
      if (!data || (Array.isArray(data) && data.length === 0)) {
        return this.renderError();
      }
      this.data = data;
      const markup = this._generateMarkup();
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}