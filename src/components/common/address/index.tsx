import { Component, Fragment, h } from 'preact';

import style from './styles.css';

export class Address extends Component {
  render() {
    return (
      <div>
        <div class={style.ffield}>
          <input type="text" name="address-line1" />
        </div>
        <div class={style.ffield}>
          <input type="text" name="address-line1" />
        </div>
      </div>
    );
  }
}
