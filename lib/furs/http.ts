/**
 * POST JSON data to a URL and return status and parsed response.
 *
 * @param {string} url - The URL to send the request to.
 * @param {any} body - The JSON payload to include in the request.
 * @returns {Promise<{ status: number; data: T; raw: string }>} - The response from the server.
 */

export const postJson = async <T = any>(url: string, body: any) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		body: JSON.stringify(body),
	});
	const text = await res.text();
	// try parse JSON, otherwise return raw text

	let data: any;
	try {
		data = JSON.parse(text);
	} catch {
		data = text;
	}
	return { status: res.status, data: data as T, raw: text };
};
