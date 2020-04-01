const { Op } = require("sequelize");

const _ = require('lodash');

class ProductsQueryMapper {
        static get Builder() {
            class Builder {
                constructor() {
                    this.qObject = {};
                    this.query = {where:{}, order: []};
                }

                // _mapInnerFrom(query){
                //    return  _.chain(query)
                //         .replace('?', '') // a=b454&c=dhjjh&f=g6hksdfjlksd
                //         .split('&') // ["a=b454","c=dhjjh","f=g6hksdfjlksd"]
                //         .map(_.partial(_.split, _, '=', 2)) // [["a","b454"],["c","dhjjh"],["f","g6hksdfjlksd"]]
                //         .fromPairs() // {"a":"b454","c":"dhjjh","f":"g6hksdfjlksd"}
                //         .value();
                // }

                startFrom(reqQuery) {
                    if (typeof reqQuery.shouldAddSold !== "undefined" ){ this.withSold(reqQuery.shouldAddSold) }
                    if (typeof reqQuery.sorting !== "undefined") { this.withSort( reqQuery.sorting ) }
                    this.withPageAndLimit(reqQuery.page, reqQuery.limit);
                    if (typeof reqQuery.breed !== "undefined"){ this.withBreed(reqQuery.breed) }
                    if (typeof reqQuery.categories !== "undefined"){ this.withCategories(reqQuery.categories) }

                    return this;
                }

                withSold(shouldAddSold){
                    this.query.where.isSold = shouldAddSold ? 1 : 0;
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

                withPageAndLimit(page, limit) {
                    this.query.limit = limit ? limit : 10;
                    this.query.offset = (page ? page-1 : 0)*this.query.limit;
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
                    this.query = "";
                    return tempQuery;
                }
            }

            return Builder;
    }

}
const queryMapper = new ProductsQueryMapper.Builder();
module.exports =  queryMapper;
