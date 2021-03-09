const month = new Intl.DateTimeFormat('en', { month: 'short' })
const day = new Intl.DateTimeFormat('en', { day: 'numeric' })

const formatDate = (date: Date) => `${month.format(date)} ${day.format(date)}`

export default formatDate
