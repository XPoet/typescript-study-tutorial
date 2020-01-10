export namespace C {

    interface Animal {
        name: string;
        run(): void;
    }

    class Dog implements Animal {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        run() {
            console.log('命名空间C' + this.name + '狗:' + 'run....');
        }
    }


    export class Pig implements Animal {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        run() {
            console.log('命名空间C' + this.name + '猪🐷 ' + '--run....');
        }
    }
    
}