import React             from "react";
import { useAppContext } from "../../../contexts";


/* =============================================================================

============================================================================= */


export const Counter = (props) => {
  const { count, incrementCount, decrementCount, resetCount } = useAppContext();

  return (
    <div className="text-center">
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-outline-gray" onClick={() => decrementCount(10)}>Decrement</button>
        <button type="button" className="btn btn-outline-gray" onClick={() => resetCount()}>Reset</button>
        <button type="button" className="btn btn-outline-gray" onClick={() => incrementCount(10)}>Increment</button>
      </div>

      <div className="text-center text-gray" style={{ fontSize: 32 }}>{count}</div>
    </div>
  );
};