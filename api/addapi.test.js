import request from 'supertest';

describe('Add Color API Integration Test', () => {
    test('API responds and contains JSON with an error field', async () => {
        const response = await request('http://localhost:8000/AddColor.php')
            .post('')
            .set('Content-Type', 'application/json')
            .send(JSON.stringify({
                color: "blue",
                userId: "123"
            }));

        console.log("RAW RESPONSE:", response.text);

        // API must respond with something
        expect(response.text.length).toBeGreaterThan(0);

        let json = null;

        // Try to parse JSON safely
        try {
            json = JSON.parse(response.text);
        } catch (e) {
            // Extract JSON from inside HTML if present
            const match = response.text.match(/\{.*\}/s);
            if (match) {
                json = JSON.parse(match[0]);
            }
        }

        // Ensure JSON was found
        expect(json).not.toBeNull();

        // Validate structure
        expect(json).toHaveProperty('error');
        expect(typeof json.error).toBe('string');
    });
});
