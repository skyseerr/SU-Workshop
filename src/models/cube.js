class Cube {

    static cubes = [
        {
            name: 'Mirror Cube',
            description: 'Some description',
            imageUrl: 'https://m.media-amazon.com/images/I/61xKF56d15L._SL1000_.jpg',
            difficulty: '5'
        },
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static getAll() { 
        return Cube.cubes.slice();
    }

    static add(cube) {
        Cube.cubes.push(cube);
    }
}

module.exports = Cube;