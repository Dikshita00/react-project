
import React, { useEffect } from 'react';

const LifecycleCheck = () => {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component Rendered or Updated");
  });

  return (
    <div>
      <h2>Lifecycle Check (useEffect)</h2>
      <p>Open console to see lifecycle logs.</p>
    </div>
  );
};

export default LifecycleCheck;
