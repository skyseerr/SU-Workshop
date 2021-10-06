const Cube = require('../models/cube');

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'Some description',
        imageUrl: 'https://m.media-amazon.com/images/I/61xKF56d15L._SL1000_.jpg',
        difficulty: '5'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);

};

const cubeServise = {
    create,
    getAll,
};


module.exports = cubeServise;

