import React from "react";
import ErrorBoundary from "./ErrorBoundary";
function BuggyComponent() {
  throw new Error("I crashed!");
  return <div>This will never render.</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default App;
