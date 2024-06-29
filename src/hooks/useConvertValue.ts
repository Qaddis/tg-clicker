export const useConvertValue = (value: number): string => {
	const valueLen: number = value.toString().length
	let finalValue: string

	if (valueLen >= 4 && valueLen < 7) {
		finalValue = `${Math.floor(value * 10) / 10000}<span>k</span>`
	} else if (valueLen >= 7 && valueLen < 10) {
		finalValue = `${Math.floor(value * 10) / 10000000}<span>m</span>`
	} else {
		finalValue = value.toString()
	}

	return finalValue
}
