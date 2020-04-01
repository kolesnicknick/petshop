const { Op } = require("sequelize");

const _ = require('lodash');

class ProductsQueryMapper {
        static get Builder() {
            class Builder {
                constructor() {
                    this.query = {where:{}, order: []};
                }

                startFrom(reqQuery) {
                    if (typeof reqQuery.sorting !== "undefined") { this.withSort( reqQuery.sorting ) }
                    if (typeof reqQuery.breed !== "undefined"){ this.withBreed(reqQuery.breed) }
                    if (typeof reqQuery.categories !== "undefined"){ this.withCategories(reqQuery.categories) }
                    return this;
                }

                withSort(sortParams) {
                    let order = [];
                    sortParams.includes('age:ASC') ? order.push(['birth_date', 'ASC']) : order.push(['birth_date', 'DESC']);
                    sortParams.includes('price:DESC') ? order.push(['price', 'DESC']) : order.push(['price', 'ASC']);
                    console.log(order.length);
                    order.forEach(i => this.query.order.push(i));
                    return this;
                }

                withIsSold(shouldBeSold) {
                    this.query.where.isSold = shouldBeSold;
                    return this;
                }

                withPageAndLimit(page, limit) {
                    this.query.limit = limit ? limit : 10;
                    this.query.offset = (page ? page - 1 : 0) * this.query.limit;
                    return this;
                }

                withBreed(breed) {
                    this.query.where.breed = {[Op.like]: `%${breed}%`};
                    return this;
                }

                withCategories(categories) {
                    this.query.where.breed = {[Op.like]: `%${categories}%`};
                    return this;
                }

                build() {
                    let tempQuery = this.query;
                    this.query = {where: {}, order: []};
                    return tempQuery;
                }
            }

            return Builder;
    }

}
const queryMapper = new ProductsQueryMapper.Builder();
module.exports =  queryMapper;
