export default class Card extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'thumbnail'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      const heading = this.shadowRoot.querySelector('h3');
      const img = this.shadowRoot.querySelector('img');

      heading.textContent = newValue;
      img.setAttribute('alt', newValue);
    } else if (name === 'thumbnail') {
      const img = this.shadowRoot.querySelector('img');

      img.setAttribute('src', newValue);
    }
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      const template = document.createElement('template');

      template.innerHTML = `
        <style>
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            border: 1px solid;
            border-radius: 10px;
            padding: 2rem 1rem;
            height: 400px;
            justify-content: space-between;
            background-color: #fff;
            overflow-x: hidden;

            & img {
              max-width: 500px;
              min-width: 500px;
              width: 100%;
            }
            
            & h3 {
              color: var(--color-primary);
              font-size: 1.85rem;
            }
          }
        </style>
        <div>
          <h3></h3>
          <img loading="lazy" width="100%">
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('app-card', Card);