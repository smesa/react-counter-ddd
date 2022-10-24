import Spinner from '../components/spinner';
import Button from '../components/button';
import Count from '../components/count';

export const CounterScreen = () => {
  const count = 0;
  const isLoading = true;

  return (
    <>
      { isLoading ? (
        <>
          <Spinner />
          loading...
        </>
      ) : (
          <>
            <Button disabled={true}>dec</Button>
            <Count>{ count }</Count>
            <Button disabled={true}>inc</Button>
          </>
      ) }
    </>
  )
}
