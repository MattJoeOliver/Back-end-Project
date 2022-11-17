const request = require("supertest");
const app = require("../app");
const db = require("../db/connection.js");
const data = require("../db/data/test-data/index");
const seed = require("../db/seeds/seed.js");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});

describe("GET /api/categories", () => {
  test("status:200, responds with an array of category objects", () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then(({ body }) => {
        const { categories } = body;
        expect(categories).toBeInstanceOf(Array);
        categories.forEach((category) => {
          expect(category).toMatchObject({
            slug: expect.any(String),
            description: expect.any(String),
          });
        });
      });
  });
});

describe("GET /api/reviews", () => {
    test('status:200, responds with an array of review objects', () => {
        return request(app)
        .get("/api/reviews")
        .expect(200)
        .then(({ body }) => {
            const { reviews } = body
            expect(reviews).toBeInstanceOf(Array);
            reviews.forEach((review) => {
                expect(review).toMatchObject({
                    owner: expect.any(String),
                    title: expect.any(String),
                    review_id: expect.any(Number),
                    category: expect.any(String),
                    review_img_url: expect.any(String),
                    created_at: expect.any(String),
                    votes: expect.any(Number),
                    designer: expect.any(String),
                    comment_count: expect.any(String)
                })
            })
        })
    })
    test('status:200, respond with an array sorted by date in descending order', () => {
        return request(app)
        .get("/api/reviews")
        .expect(200)
        .then(res => {
            expect(res.body.reviews).toBeSortedBy('created_at', { descending: true })
        })
    })
})