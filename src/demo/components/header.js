const logo = new URL('../logo.png', import.meta.url);

export default class Header extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      const template = document.createElement('template');

      template.innerHTML = `
        <style>
          :host {
            text-align: center;
          }

          h1 {
            display: inline;
            color: var(--color-primary);
          }

          img {
            width: 25px;
          }
        </style>
        <header>
          <img alt="logo"></img>
          <h1>Hello CloudRI!</h1>
        </header>
      `;
      const node = template.content.cloneNode(true);

      node.querySelector('img').setAttribute('src', logo.pathname)
      
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(node);
    }
  }
}

customElements.define('app-header', Header);