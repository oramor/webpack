import path from 'path';

interface Obj {
    name: string;
}

function fn(): Obj {
    const obj: Obj = {
        name: 'Some',
    };
    return obj;
}

console.log(fn());
