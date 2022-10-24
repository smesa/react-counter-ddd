import { useState } from 'react';
import Button from '../components/button';
import Count from '../components/counter';
import Spinner from '../components/spinner';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
          loading...
        </>
      ) : (
          <>
            <Button disabled={!count} onClick={decrement}>
              dec
            </Button>
            <Count>
              {count}
            </Count>
            <Button disabled={false} onClick={increment}>
              inc
            </Button>
          </>
          
      )}
    </>
  )
}
