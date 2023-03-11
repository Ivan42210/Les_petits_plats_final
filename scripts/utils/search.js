export function advancedFilters(arrays, value, output) {


    const result = arrays.filter(function(arr) { return arr.name.toLowerCase().indexOf(value.toLowerCase()) != -1 })

    output.push(result)


}