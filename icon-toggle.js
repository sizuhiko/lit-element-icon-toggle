import {LitElement, html} from '@polymer/lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * `icon-toggle`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IconToggle extends LitElement {
  static get properties() {
    return {
      pressed: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },
      toggleIcon: {
        type: String
      },
    };
  }

  constructor() {
    super();
    this.addEventListener('click', async (e) => {
      this.pressed = !this.pressed;
    });
  }

  _render({toggleIcon}) {
    return html`
      <style>
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
      </style>

      <!-- local DOM goes here -->
      <iron-icon icon="${toggleIcon}">
      </iron-icon>`;
  }
  
  _shouldRender(props, changedProps, prevProps) {
    Object.keys(changedProps)
      .filter(property => this.constructor.properties[property].reflectToAttribute)
      .forEach(property =>
               this._propertyToAttribute(
                  property,
                  this.constructor.attributeNameForProperty(property),
                  changedProps[property]
                )
        )
    return super._shouldRender(props, changedProps, prevProps)
  }
}

window.customElements.define('icon-toggle', IconToggle);
