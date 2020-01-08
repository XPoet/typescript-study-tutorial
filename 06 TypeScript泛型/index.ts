/* TypeScript 泛型 */
/**
 * 泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
 * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
 * 这样用户就可以以自己的数据类型来使用组件。
 * 通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
 */

// 只能返回string类型的数据
function getData0(value: string): string {
    return value;
}

// 同时返回 string类型 和number类型  （代码冗余）
function getData1(value: string): string {
    return value;
}

function getData2(value: number): number {
    return value;
}

// 同时返回 string类型 和number类型 any类型 可以解决这个问题
// any放弃了类型检查,传入什么 返回什么。比如：传入number类型必须返回number类型，传入string类型必须返回string类型
function getData3(value: any): any {
    return '哈哈哈';
}
getData3(123);
getData3('123');

// 泛型：可以支持不特定的数据类型   要求：传入的参数和返回的参数一致
// T 表示泛型，具体什么类型是由调用这个方法的时候决定的
function getData<T>(value: T): T {
    return value;
}

console.log(getData<number>(123456));
// console.log(getData<string>(123456)); // 报错
console.log(getData<string>('123456'));



// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a - z两种类型。通过类的泛型来实现。
class Min {
    public list: number[] = [];
    add(num: number) {
        this.list.push(num)
    }
    min(): number {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

const m = new Min();
m.add(2);
m.add(4);
m.add(6);
m.add(8);
console.log(m.min())


// 类的泛型
class Min2<T> {
    public list: T[] = []

    add(value: T) {
        this.list.push(value)
    }

    min(): T {
        let minValue = this.list[0]
        for (let i = 0; i < this.list.length; i++) {
            if (minValue > this.list[i]) minValue = this.list[i]
        }
        return minValue;
    }
}

// 实例化类，并且制定了类的T代表的类型是number
const m2 = new Min2<number>();
m2.add(1)
m2.add(3)
m2.add(5)
console.log(m2.min());

// 实例化类，并且制定了类的T代表的类型是number
const m3 = new Min2<string>();
m3.add('a')
m3.add('b')
m3.add('c')
console.log(m3.min());


// 把类作为参数来约束数据传入的类型 
class User {
    username: string | undefined;
    password: string | undefined;
}

class MySQLDB {
    add(user: User): boolean {
        console.log(user);
        return true;
    }
}

const u1 = new User();
u1.username = 'user1';
u1.password = 'pwd1';
const mysqldb1 = new MySQLDB();
mysqldb1.add(u1)


class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
}

// 定义操作数据库的泛型类
class MySQLDB2<T> {

    add(info: T): boolean {
        console.log(info);
        return true;
    }

    updated(info: T, id: number) {
        console.log(info);
        console.log(id);
        return true;
    }
}


class ArticleCate2 {

    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;

    constructor(
        params: { title: string | undefined; desc: string | undefined; status?: number | undefined; }
    ) {

        this.title = params.title
        this.desc = params.desc
    }

}


const a = new ArticleCate2({title: 't1', desc: 'd1'})
a.status = 0;
const mysqldb2 = new MySQLDB2<ArticleCate2>();
mysqldb2.updated(a, 1)
