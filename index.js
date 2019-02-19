/*

https://www.youtube.com/watch?v=eps-J_p4eQY&feature=youtu.be
https://nitayneeman.com/posts/a-taste-from-ecmascript-2019/
*/


/*
    Problema del array multinivel
*/
const flatArray_previous = () => {
    const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

    console.log(arr)
}

/*
    flatten and flatMap on arrays
    https://github.com/tc39/proposal-flatMap
    Hace flat un nivel del array
*/
const flatArray_es2019_level1 = () => {
    const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

    console.log(arr.flat())
}

/*
    flatten and flatMap on arrays
    https://github.com/tc39/proposal-flatMap
    Hace flat dos niveles del array
*/
const flatArray_es2019_level2 = () => {
    const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

    console.log(arr.flat().flat())
}

/*
    flatten and flatMap on arrays
    https://github.com/tc39/proposal-flatMap
    Hace flat todos los niveles del array
*/
const flatArray_es2019_infinity = () => {
    const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

    console.log('arr.flat(Infinity)', arr.flat(Infinity))
}

/*
    flatten and flatMap on arrays
    https://github.com/tc39/proposal-flatMap
    Función map que genera un array con dos niveles que deben ser "aplanados"
*/
const flatMapArray_previous = () => {
    const res = [1, 2, 3, 4].map(x => [x, x*2])

    console.log('[1, 2, 3, 4].map(x => [x, x*2])', res)
}

/*
    flatten and flatMap on arrays
    https://github.com/tc39/proposal-flatMap
    Función map que genera un array con dos niveles pero ahora "flat"
*/
const flatMapArray_es2019 = () => {
    const res = [1, 2, 3, 4].flatMap(x => [x, x*2])

    console.log('[1, 2, 3, 4].flatMap(x => [x, x*2])', res)
}

/*
    Generar un objeto desde sus "entries"
    https://tc39.github.io/proposal-object-from-entries/
    https://github.com/tc39/proposal-object-from-entries
*/
const entries_toObj = () => {
    const obj = {
        key1: 'Value1',
        key2: 'value2',
        key3: 'value3'
    }

    const entries = Object.entries(obj)

    const originalObj = Object.fromEntries(entries)

    console.log('Object.fromEntries(entries)', originalObj)
}

/*
    left and right trim of whitespace to strings
    https://github.com/tc39/proposal-string-left-right-trim
*/
const trimming = () => {
    const string = '    spaces    ';

    console.log('trimStart', JSON.stringify(string.trimStart()))
    console.log('trimEnd', JSON.stringify(string.trimEnd()))
    console.log('trim', JSON.stringify(string.trim()))    
}

/*
    Optional Catch Binding

    Throw and catch with no values
*/
const catchWithNoValue = () => {
    try {
        throw new Error('Hey!')
    } catch {
        console.log("Error!")
    }
}

/*   
    Function “toString” Revision
*/
const logOfFunction = () => {
    function myFunction() {
        // El comentario permanece
    }

    console.log('myFunction.toString()', myFunction.toString())
}

/*
    Symbol Description Accessor
*/
const symbol = () => {
    const desc = 'my symbol'
    const sym = Symbol(desc)

    console.log('sym',sym)
    console.log('sym.description', sym.description)
}

