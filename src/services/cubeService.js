const Cube = require('../models/cube');

const cubeDb = [];

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);

};

const cubeServise = {
    create
};


module.exports = cubeServise;

