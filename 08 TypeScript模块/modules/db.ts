
const url = 'https://itpoet.cn'


export function getData(): {}[] {
    console.log('getData...');
    return [
        { name: 'A', age: 10 },
        { name: 'B', age: 11 }
    ]
}

export function saveData(): boolean {
    console.log('saveData...');
    return true
}


// 或者通过此方法暴露
export {
    url
}