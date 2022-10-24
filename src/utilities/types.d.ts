export interface Valkyrie {
	name: string;
	image: string;
	slug: string;
	type: string;
	position: string;
	keywords: string;
}

export interface ValkyrieDetails extends Valkyrie {
	imageSource: string;
	builds: Array<ValkyrieBuild>;
};

export interface SupabaseAPI extends Omit<ValkyrieDetails, "builds"> {
	id: string;
	builds: string;
};

export interface ValkyrieForm extends Omit<ValkyrieDetails, "slug"> {
	slug?: string;
};

export interface ValkyrieBuild {
	name: string,
	supports: Array<Setup>;
	sigils: Array<Setup>;
	ref: string;
	boss: string;
	informations: string;
	signets: Array<SignetObject>;
	exclusives: Array<Exclusive>;
};

export interface Flamechaser {
	name: string;
	signets: Array<FlamechaserSignet>;
};

export interface FlamechaserSignet {
	basic: Array<SignetItem>;
	first: Array<SignetItem>;
	second: Array<SignetItem>;
};

export type Exclusive = {
	id: number;
	name: string;
	signets: string;
};

export interface SignetObject {
	name: string;
	informations: string;
	lists: Array<SignetItem>;
};

export interface SignetItem {
	name: string;
	description: string;
	priority: string;
};

export interface Setup {
	time: string;
	first: string;
	second: string;
};
