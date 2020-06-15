import { Component, h } from 'preact';

import { Address } from '../common/address';

export class App extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <div>
        hi there, 123
        <Address />
      </div>
    );
  }
}
