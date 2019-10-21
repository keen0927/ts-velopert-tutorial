import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { increaseBy, increase, decrease } from '../modules/counter';
import { useCallback } from 'react';

export default function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count) ;
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
  }
}