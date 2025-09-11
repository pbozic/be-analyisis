// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postJson = async <T = any>(url: string, body: any) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		body: JSON.stringify(body),
	});
	const text = await res.text();
	// try parse JSON, otherwise return raw text
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let data: any;
	try {
		data = JSON.parse(text);
	} catch {
		data = text;
	}
	return { status: res.status, data: data as T, raw: text };
};
