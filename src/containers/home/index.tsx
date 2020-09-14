import React from "react";
import { useCallback, useState } from "react";
import { createModel } from "hox";
// enableMapSet();
export enum lock {
  "detailUnCloseable", // 不可关闭小详情
  "detailCloseable" // 可关闭小详情
}

function useBriefLock() {
  const [locks, setLocks] = useState(new Set());

  const addLock = useCallback(
    (e: lock) => {
      locks.add(e);
      setLocks(locks);
    },
    [locks, setLocks]
  );

  const releaseLock = useCallback(
    (e: lock) => {
      locks.delete(e);
      setLocks(locks);
    },
    [locks]
  );

  const checkLock = useCallback(
    (list: lock[]) => {
      // 如果有一个锁了，就返回true，否则返回false
      return list.some(e => !!locks.has(e));
    },
    [locks]
  );

  const clearLock = useCallback(() => {
    locks.clear();
    setLocks(locks);
  }, []);

  const lockStyle = (list: lock[]) => {
    return list.some(e => !!locks.has(e)) ? { cursor: "not-allowed" } : {};
  };

  console.log("locks", locks);
  return {
    locks,
    addLock,
    releaseLock,
    checkLock,
    clearLock,
    lockStyle
  };
}

const useLockModel = createModel(useBriefLock);

const Root = () => {
  const { locks, addLock, releaseLock } = useLockModel();
  const click = () => {
    releaseLock(lock.detailCloseable);
    addLock(lock.detailUnCloseable);
  };
  console.log("locks", locks);
  return (
    <div>
      <button
        onClick={() => {
          addLock(lock.detailCloseable);
        }}
      >
        addlock
      </button>
      <button onClick={click}>Increment</button>
    </div>
  );
};

export default Root;
