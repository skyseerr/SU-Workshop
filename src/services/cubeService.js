const Cube = require('../models/cube');

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);

};

const search = (text, from, to) => (x => {

    let result = Cube.cubes;

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if(to) {
        result = result.filter(x => x.difficulty <= to);
    }

    return result;
});

const cubeServise = {
    create,
    getOne,
    getAll,
    search,
};

module.exports = cubeServise;