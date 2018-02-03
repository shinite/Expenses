import {createStore}  from 'redux';

//Action generators -  functions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type : 'INCREMENT',
    incrementBy
  });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type:'DECREMENT',
  decrementBy
});

const setCount = ({count = 1} = {}) => ({
  type : 'SET',
  count
});

const resetCount = () =>({
  type:'RESET'
})

//REDUCERS
//1. Reducers are pure functions(O/p determined only by i/p)
//2. Never change state or action

const countReducer = (state = {count:0},action)=>{
  switch(action.type){
    case 'INCREMENT':
  //  const incrementBy =typeof action.incrementBy ==='number' ? action.incrementBy: 1;
      return {
        count:state.count + action.incrementBy
      };
      case 'DECREMENT':
      return{
        count: state.count - action.decrementBy
      }
      case 'RESET':
      return{
        count: 0
      }
      case 'SET':
      return{
        count:action.count
      }
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe=store.subscribe(()=>{
  console.log(store.getState());
})

// store.dispatch({
//   type:'INCREMENT',
//   incrementBy: 5
// });
//
// s

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount());

// store.dispatch({
//   type:'RESET'
// });

store.dispatch(resetCount());

store.dispatch(decrementCount());
// store.dispatch({
//   type:'DECREMENT',
//   decrementBy:10
// });
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch (setCount({count:101}));
// store.dispatch({
//   type:'SET',
//   count:101
// });
