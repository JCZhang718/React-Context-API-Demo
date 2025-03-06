import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  return (
    <>
      <h4 className="text-center mt-3 text-5xl color-red">JC's React Context Demo</h4>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Parent Component</h2>
        <small>Not using the count state</small>
      </div>

      <Child/>
    </>
  );
};

export default Parent;