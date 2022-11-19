export interface Valkyrie {
	name: string;
	type: "BIO" | "MECH" | "PHY" | "QUA" | "IMG";
	keyword: string;
    builds: Array<Build>;
}
interface Build {
    name: string;
    note: string;
    danger?: string;
    boss: {
        info: string;
        note?: string;
    },
    setup: {
        lists: Array<Setup>,
		danger?: string;
		note?: string;
    },
    buff: {
        lists: Array<Buff>;
		note?: string;
		danger?: string;
    },
    sigil: {
		lists: Array<Sigil>;
		note?: string;
	},
	support: {
		lists: Array<Support>;
		note?: string;
		danger?: string;
	},
	signet: {
		note?: string;
		danger?: string;
		lists: Array<Signet>;
	}
}
export interface Setup {
    rank: string;
    difficult: string;
    weap: string;
    stigmata: Array<string>;
    time: string;
    ref: string;
}
export interface Buff {
    description: string;
    load: number;
}
export interface Sigil {
	time: string;
	first: string;
	second: string;
}
export type Support = Sigil
interface Signet {
	name: string;
	note?: string;
	danger?: string;
	lists: Array<SignetList>;
}
interface SignetList {
	name: string;
	description: string;
	priority: string;
}
export interface Description extends Omit<SignetList, "priority"> {
	charging?: string;
	skill?: string;
	abbr?: string;
	cooldown?: string;
}