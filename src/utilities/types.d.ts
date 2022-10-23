interface Valkyrie {
	name: string;
	image: string;
	slug: string;
	type: string;
	position: string;
	keywords: string;
}

interface ValkyrieDetails extends Valkyrie {
	imageSource: string;
	builds: Array<ValkyrieBuild>;
};

interface SupabaseAPI extends Omit<ValkyrieDetails, "builds"> {
	id: string;
	builds: string;
};

interface ValkyrieForm extends Omit<ValkyrieDetails, "slug"> {
	slug?: string;
};

interface ValkyrieBuild {
	name: string,
	supports: Array<SupportBuild>;
	sigils: Array<SigilBuild>;
	ref: string;
	boss: string;
	informations: string;
	signets: Array<SignetObject>;
	exclusives: Array<Exclusive>;
};

interface Flamechaser {
	name: string;
	signets: Array<FlamechaserSignet>;
};

interface FlamechaserSignet {
	basic: Array<SignetItem>;
	first: Array<SignetItem>;
	second: Array<SignetItem>;
};

type Exclusive = SignetItem;

interface SignetObject {
	name: string;
	informations: string;
	lists: Array<SignetItem>;
};

interface SignetItem {
	name: string;
	description: string;
	priority: string;
};

interface Setup {
	time: string;
	first: string;
	second: string;
};
