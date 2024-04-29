

function solve(catInfoArray) {
    class Cat {
        constructor(name, age) {
            this.catName = name;
            this.catAge = age;
        }
    
        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    const arrayOfCats = [];

    for (const cat of catInfoArray) {

        const catInfo = cat.split(' ');
        const [catName, catAge] = catInfo;
        const currentCat = new Cat(catName, catAge);

        arrayOfCats.push(currentCat);
    }

    const printCats = function(arrayOfCats) {
        for (const cat of arrayOfCats) {
            cat.meow();
        }
    }

    printCats(arrayOfCats);
}

solve(['Mellow 2', 'Tom 5']);

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);