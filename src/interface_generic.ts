// interface Items<T> {
//     list: T[];
// }

// interface Items<T> {
//     list: T;
// };
//
// const items: Items<number> = {
//     list: 2
// };

type Items<T> = {
    list: T[];
}

const items: Items<string> = {
    list: ['a','b','c']
};
