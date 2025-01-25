/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    let n: number;
    let pr = new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
    return pr;
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    return Promise.all([mock(100), mock(200), mock(300)]).then(
        ([data1, data2, data3]) => {
            result.push(data1);
            result.push(data2);
            result.push(data3);
            return result;
        },
    );
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    return Promise.reject(new Error('my error')).catch((err) => {
        if (err instanceof Error) {
            return err.message;
        }
    });
}
