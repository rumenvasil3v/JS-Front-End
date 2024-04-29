function solve(information) {
    const numberOfCharactersForPosse = Number(information[0]);
    let charactersArray = addCharacters(numberOfCharactersForPosse, information);

    const commandsArray = information.slice(numberOfCharactersForPosse + 1);
    let command = commandsArray.shift();

    while (command != 'Ride Off Into Sunset') {
        const commandInfo = command.split(' - ');
        const characterCurrentName = commandInfo[1];
        let findCharacter = charactersArray
                .find(({characterName, characterHitPoints, characterBullets}) => characterCurrentName === characterName);
                const target = commandInfo[2];

        switch (commandInfo[0]) {
            case 'FireShot':
                if (findCharacter['characterBulltes'] > 0) {
                    findCharacter['characterBulltes'] -= 1;

                    console.log(`${characterCurrentName} has successfully hit ${target} and now has ${findCharacter['characterBulltes']} bullets!`);
                } else {
                    console.log(`${characterCurrentName} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            case 'TakeHit':
                const damageAmount = Number(commandInfo[2]);
                const attacker = commandInfo[3];

                if (findCharacter['characterHitPoints'] - damageAmount > 0) {
                    findCharacter['characterHitPoints'] -= damageAmount;
                    console.log(`${characterCurrentName} took a hit for ${damageAmount} HP from ${attacker} and now has ${findCharacter['characterHitPoints']} HP!`);
                } else {
                    console.log(`${characterCurrentName} was gunned down by ${attacker}!`);

                    const index = charactersArray.indexOf(findCharacter);
                    delete charactersArray[index];

                    charactersArray = charactersArray.filter(character => character != undefined);
                }
                break;
            case 'Reload':
                if (findCharacter['characterBulltes'] === 6) {
                    console.log(`${characterCurrentName}'s pistol is fully loaded!`);
                } else if (findCharacter['characterBulltes'] < 6) {
                    const bulletsToReload = 6 - findCharacter['characterBulltes'];

                    findCharacter['characterBulltes'] = findCharacter['characterBulltes'] + bulletsToReload;

                    console.log(`${characterCurrentName} reloaded ${bulletsToReload} bullets!`);
                }
                break;
            case 'PatchUp':
                const amount = Number(commandInfo[2]);

                if (findCharacter['characterHitPoints'] === 100) {
                    console.log(`${characterCurrentName} is in full health!`);
                } else {
                    let recoveringAmount = amount;

                    if (findCharacter['characterHitPoints'] + amount > 100) {
                        recoveringAmount = 100 - findCharacter['characterHitPoints'];

                        findCharacter['characterHitPoints'] += recoveringAmount;
                    } else {
                        findCharacter['characterHitPoints'] += recoveringAmount;
                    }

                    console.log(`${characterCurrentName} patched up and recovered ${recoveringAmount} HP!`);
                }
                break;
        }

        command = commandsArray.shift();
    }

    for (const character of charactersArray) {
        console.log(character.characterName);
        console.log(` HP: ${character.characterHitPoints}`);
        console.log(` Bullets: ${character.characterBulltes}`);
    }

    function addCharacters(numberOfCharactersForPosse, informationArray) {
        const characterArray = [];
    
        for (let index = 1; index <= numberOfCharactersForPosse; index++) {
            const character = {};
    
            const characterInfo = informationArray[index].split(' ');
            const characterName = characterInfo[0];
            const characterHitPoints = characterInfo[1];
            const characterBullets = characterInfo[2];
    
            character['characterName'] = characterName;
            character['characterHitPoints'] = Number(characterHitPoints);
            character['characterBulltes'] = Number(characterBullets);
    
            characterArray.push(character);
        }
    
        return characterArray;
    }
}

// solve((["2",
//     "Gus 70 0",
//     "Walt 100 6",
//     "PatchUp - Gus - 40",
//     "Ride Off Into Sunset"])
// );

// solve((["2",
// "Jesse 100 4",
// "Walt 100 5",
// "FireShot - Jesse - Bandit",
//  "TakeHit - Walt - 30 - Bandit",
//  "PatchUp - Walt - 20" ,
//  "Reload - Jesse",
//  "Ride Off Into Sunset"])
// );

// solve((["2",
// "Gus 100 4",
// "Walt 100 5",
// "FireShot - Gus - Bandit",
// "TakeHit - Walt - 100 - Bandit",
// "Reload - Gus",
// "Ride Off Into Sunset"])
// );