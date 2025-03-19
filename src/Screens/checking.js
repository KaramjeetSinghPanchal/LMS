const arr=[
    { id: 1, timeRange: '10:00 - 10:10' },
    { id: 2, timeRange: '10:10 - 10:20' },
    { id: 3, timeRange: '10:20 - 10:30' },
    { id: 4, timeRange: '10:30 - 10:40' },
    { id: 5, timeRange: '10:40 - 10:50' },
    { id: 6, timeRange: '10:50 - 11:00' },
    { id: 7, timeRange: '11:00 - 11:10' },
    { id: 8, timeRange: '11:10 - 11:20' },
    { id: 9, timeRange: '11:20 - 11:30' },
    { id: 10, timeRange: '11:30 - 11:40' },
  ]

const result = arr.map((itm)=>{return(itm.timeRange)})
  console.warn('arrrd',result);
  