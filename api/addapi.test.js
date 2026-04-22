import request from 'supertest';

describe('Add Color API Integration Test', () => {
    test('returns valid JSON structure', async () => {
        const response = await request('http://localhost:8000/addColor.php')
            .post('')
            .send({
                color: "blue",
                userId: "123"
            })
            .set('Content-Type', 'application/json');

        const json = JSON.parse(response.text);

        expect(json).toHaveProperty('error');
        expect(typeof json.error).toBe('string');
    });
});
