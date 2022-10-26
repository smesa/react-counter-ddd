import Spinner from '../components/spinner';
import Button from '../components/button';
import Count from '../components/count';
import { useCounterStore } from '../../../../../shared/infrastructure/store/counter';
import { useCounterController } from '../../controllers';
import { useEffect } from 'react';

export const CounterScreen = () => {
  
  const store = useCounterStore();

  const { 
    count,
    isLoading,
    canDecrement,
    get,
    increment,
    decrement,
  } = useCounterController(store);

  useEffect(() => {
    get();
  }, [get]);

  return (
    <>
      { isLoading ? (
        <>
          <Spinner />
          loading...
        </>
      ) : (
          <>
            <Button onClick={decrement} disabled={canDecrement}>dec</Button>
            <Count>{ count?.value }</Count>
            <Button onClick={increment} disabled={false}>inc</Button>
          </>
      ) }
    </>
  )
}
