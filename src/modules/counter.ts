import {
  createStandardAction,
  ActionType,
  createReducer
} from 'typesafe-actions';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = 'counter/INCREASE_BY';

// export const increase = () =>({type: INCREASE});
// export const decrease = () =>({type: DECREASE});
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff
// });

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();


const action = { increase, decrease, increaseBy };

type CounterAction = ActionType<typeof action>;

type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

// function counter(state: CounterState = initialState, action: CounterAction) {
//   switch(action.type) {
//     case INCREASE:
//       return {
//         count: state.count + 1
//       }
//     case DECREASE:
//       return {
//         count: state.count - 1
//       }
//     case INCREASE_BY:
//       return {
//         count: state.count + action.payload
//       }
//     default:
//       return state
//   }
// }

const counter = createReducer<CounterState, CounterAction>(initialState,{
  [INCREASE]: state => ({count: state.count + 1}),
  [DECREASE]: state => ({count: state.count - 1}),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
})

export default counter;