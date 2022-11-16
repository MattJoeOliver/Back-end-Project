const request = require('supertest');
const app = require('../app')
const db = require('../db/connection.js')
const data = require('../db/data/test-data/index')
const seed = require('../db/seeds/seed.js')

beforeEach(() => {
    return seed(data)
})

afterAll(() => {
    return db.end()
})

describe('GET /api/categories', () => {
    test('status:200, responds with an array of category objects', () => {
        return request(app)
        .get('/api/categories')
        .expect(200)
        .then(({ body }) => {
            const { categories } = body
            expect(categories).toBeInstanceOf(Array);
            categories.forEach((category) => {
                expect(category).toMatchObject({
                    slug: expect.any(String),
                    description: expect.any(String),
                })                
            });
        })
    })
});