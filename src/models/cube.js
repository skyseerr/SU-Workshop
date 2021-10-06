const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'agftqwefasdadsad',
            name: 'Mirror Cube',
            description: 'Some description',
            imageUrl: 'https://m.media-amazon.com/images/I/61xKF56d15L._SL1000_.jpg',
            difficulty: '5'
        },
        {
            id: '1j17v2b4kufjj8nq',
            name: 'Ice Cube',
            description: 'Rapper',
            imageUrl: 'https://api.time.com/wp-content/uploads/2015/08/ice-cube-straight-outta-compton1.jpg?quality=85&w=1024&h=512&crop=1',
            difficulty: '4'
          },
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static get cubes() { 
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;