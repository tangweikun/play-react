import React from 'react';

import { PostRequest } from './PostRequest';
import { PostRequestAsyncAwait } from './PostRequestAsyncAwait';
import { PostRequestHooks } from './PostRequestHooks';
import { PostRequestSetHeaders } from './PostRequestSetHeaders';
import { PostRequestErrorHandling } from './PostRequestErrorHandling';

export default class Demo1 extends React.Component {
  render() {
    return (
      <div>
        <h3 className='p-3 text-center'>React HTTP POST Requests with Fetch</h3>
        <PostRequest />
        <PostRequestAsyncAwait />
        <PostRequestHooks />
        <PostRequestSetHeaders />
        <PostRequestErrorHandling />
      </div>
    );
  }
}
