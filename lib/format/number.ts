const formatter = new Intl.NumberFormat('en-US', {
	style: 'decimal',
	maximumFractionDigits: 2
})

const formatNumber = (number: number) => formatter.format(number)

export default formatNumber
