const boom = require("@hapi/boom");

class CategoryService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    return [];
  }

  async findById() {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
