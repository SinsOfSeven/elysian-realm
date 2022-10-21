import { supabase } from "./supabase";

interface Valkyrie {
	name: string;
	image: string;
	extension: string;
	slug: string;
	type: string;
	position: string;
	keywords: string;
}

interface ValkyrieDetails extends Valkyrie {
  imageSource: string;
	builds: Build[];
};

interface Data extends Omit<ValkyrieDetails, "builds"> {
	id: string;
	builds: string;
	created_at: string;
};

interface Form extends Omit<ValkyrieDetails, ["slug", "image"]> {
	slug?: string;
	position: string;
	image: string;
};

type Build = {
  name: string,
  supports: SupportBuild[];
  sigils: SigilBuild[];
  ref: string;
  boss: string;
  informations: string;
  signets: SignetObject[];
  exclusives: Exclusive[];
};

type Flamechaser = { name: string; signets: FlamechaserSignet[]; };

type FlamechaserSignet = { basic: Array<SignetItem>; first: ExclusiveSignet[]; second: ExclusiveSignet[]; };

interface SignetItem {
	name: string;
	description: string;
	priority: string;
};

interface SignetObject {
	name: string;
	informations?: string;
	lists: SignetItem[];
};

type SupportBuild = {
	time: string;
	first: string;
	second: string;
};

type SigilBuild = SupportBuild

