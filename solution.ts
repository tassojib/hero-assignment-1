function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    } else {
        throw new Error('plz give string,number or boolean');
    }
}

function getLength(value: string | unknown[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return 0;
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name:${this.name}, Age:${this.age}'`;
    }
}

function filterByRating(
    arr: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return arr
        .filter(function (item) {
            return item.rating >= 4 && item.rating <= 5;
        })
        .map(function (item) {
            return {
                ...item,
                rating: Number(item.rating.toFixed(1)),
            };
        });
}

function filterActiveUsers(
    arr: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
    return arr.filter(function (item) {
        return item.isActive;
    });
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const isBookAvailable = book.isAvailable ? 'Yes' : 'No';
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${isBookAvailable}`
    );
}

function getUniqueValues(
    arr1: Array<string | number>,
    arr2: Array<string | number>
): Array<string | number> {
    const result: Array<string | number> = [];

    function check(value: string | number): boolean {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }

    arr1.forEach(function (item) {
        if (!check(item)) {
            result[result.length] = item;
        }
    });

    arr2.forEach(function (item) {
        if (!check(item)) {
            result[result.length] = item;
        }
    });

    return result;
}

function calculateTotalPrice(
    products: {
        name: string;
        price: number;
        quantity: number;
        discount?: number;
    }[]
): number {
    if (products.length === 0) return 0;

    const result = products.reduce(function (acc, currentItem) {
        if (
            currentItem.discount != null &&
            (currentItem.discount < 0 || currentItem.discount > 100)
        ) {
            throw new Error(
                `Discount for product ${currentItem.name} must be between 0 and 100`
            );
        }

        const itemDiscount =
            currentItem.discount != null
                ? currentItem.price *
                  currentItem.quantity *
                  (currentItem.discount / 100)
                : 0;

        return acc + (currentItem.price * currentItem.quantity - itemDiscount);
    }, 0);

    return result;
}
