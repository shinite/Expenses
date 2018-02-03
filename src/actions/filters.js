
//SET TEXT filters
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
//SORT BY date
export const sortByDate = () => ({
  type : 'SORT_BY_DATE'
})
//SORT BY amount
export const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT'
})

//SET startDate
export const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
})

//SET endDate
export const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
})
