const Cube = require('../models/Cube');

const getAll = () => {
    let cubes = Cube.find({}).lean();

    return cubes;
}

const getOne = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty,
    });

    return cube.save();
};

const search = (text, from, to) => (x => {

    let result = getAll();

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