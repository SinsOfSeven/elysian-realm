export interface Valkyrie {
    name: string;
    builds: Array<Build>;
}
interface Build {
    name: string;
    note?: string | Array<string>;
    danger?: string | Array<string>;
    boss: {
        info: string;
        note?: string;
    },
    setup?: {
        lists: Array<Setup>,
		danger?: string | Array<string>;
		note?: string;
    },
    buff?: {
        lists: Array<Buff>;
		note?: string;
		danger?: string;
    },
    sigil?: {
		lists: Array<Sigil>;
		note?: string | Array<string>;
	},
	support: {
		lists: Array<Support>;
		note?: string | Array<string>;
		danger?: string;
	},
	signet: {
		note?: string;
		danger?: string;
		lists: Array<Signet>;
	}
}
interface Setup {
    rank: string;
    difficult: string;
    gear: string;
    time: string;
    ref: string;
}
interface Buff {
    description: string;
    load: number;
}
interface Sigil {
	time: string;
	first: string;
	second: string;
}
interface Support extends Sigil { }
interface Signet {
	name: string;
	note?: string | Array<string>;
	danger?: string;
	lists: Array<SignetList>;
}
interface SignetList {
	name: string;
	description: string;
	priority: string;
}