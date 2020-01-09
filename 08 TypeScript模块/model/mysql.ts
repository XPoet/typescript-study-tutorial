import { DB } from "./bd";

export class MySQL<T> implements DB<T> {
    constructor() {

    }

    add(info: T): boolean {
        console.log('add...');
        console.log(info);
        return true
    }

    update(info: T, id: number): boolean {
        console.log('update...');
        console.log(info);
        return true
    }

    delete(id: number) {
        console.log('delete...');
        return true
    }


    get(id: number) {
        console.log('get...');

        const list = [
            {
                name: 'AA',
                age: 10
            },
            {
                name: 'BB',
                age: 11
            }
        ]

        return list
    }

}
