export const slug = (str: string): string => {
	return str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
};

export function ensure<T>(
	argument: T | undefined | null,
	message: string = "Data not found"
): T {
	if (argument === undefined || argument === null) {
		throw new TypeError(message);
	}
	return argument;
}