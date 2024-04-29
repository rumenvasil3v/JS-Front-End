function solve(heroesArray) {
    const heroes = [];

    for (const hero of heroesArray) {
        const heroInfo = hero.split(' / ');

        let [heroName, heroLevel, ...heroItems] = heroInfo;
        
        heroLevel = Number(heroLevel);

        const currentHero = {
            heroName,
            heroLevel,
            heroItems,
        }

        heroes.push(currentHero);
    }

    const temporaryArray = [];
    for (const hero of heroes) {
        const array = Object.entries(hero);

        temporaryArray.push(array);
    }

    const sorted = temporaryArray.sort(([heroNameA, levelA, itemsA], [heroNameB, levelB, itemsB]) => {
        const [keyLevelA, heroLevelA] = levelA;
        const [keyLevelB, heroLevelB] = levelB;

        return heroLevelA - heroLevelB;
    });

    for (const hero of sorted) {
        console.log(`Hero: ${hero[0][1]}`);
        console.log(`level => ${hero[1][1]}`);
        console.log(`items => ${hero[2][1].join(', ')}`);
    }
}

// solve([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
//     ]
//     );

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    );