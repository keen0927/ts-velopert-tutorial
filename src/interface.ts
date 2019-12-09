interface Person {
    name: string | undefined;
    age?: number;
}

interface Developer extends Person{
    skills: string[];
}

const person: Person = {
    name: '킨',
    age: 20
}

const expert: Developer = {
    name: undefined,
    age: 22,
    skills: ['JS', 'HTML']
}
