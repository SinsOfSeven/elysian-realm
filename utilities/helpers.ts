export function slug(str: string): string {
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
export function teamBuild(valk: string, rank: string, weap: string, stigmata: Array<string>): string {
	const url = "https://www.arustats.com/en-us/hi3/team-builder";
	return `${url}?team_1_valkyrie=${valk}&team_1_valkyrie_rank=${rank}&team_1_weapon=${weap}&team_1_stigma_top=${stigmata[0]}&team_1_stigma_mid=${stigmata[1]}&team_1_stigma_bottom=${stigmata[2]}&elf=&elf_stars=2.0`;
}