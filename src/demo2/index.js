import React from 'react';

import { GetRequest } from './GetRequest';
import { GetRequestHooks } from './GetRequestHooks';
import { GetRequestAsyncAwait } from './GetRequestAsyncAwait';
import { GetRequestErrorHandling } from './GetRequestErrorHandling';
import { GetRequestSetHeaders } from './GetRequestSetHeaders';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h3 className='p-3 text-center'>React HTTP GET Requests with Axios</h3>
        <GetRequest />
        <GetRequestHooks />
        <GetRequestAsyncAwait />
        <GetRequestErrorHandling />
        <GetRequestSetHeaders />
      </div>
    );
  }
}
