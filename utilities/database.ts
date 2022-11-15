import { Valkyrie } from "../utilities/types";
export const valkyries: Array<Valkyrie> = [
	{
		name: "Argent Knight: Artemis",
		type: "BIO",
		keyword: "ice rita rossweisse argent knight artemis aka jojo",
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. AKA is yet another one of these valkyries that needs quite the particular investment for comfily using in ER. She wants a minimum rank of S2, and she also wants her pri-arm, without which she struggles quite noticeably. However, there's also something else that adds up into her performance at ER. She's also a highly difficult mechanical valk to optimally play with, as she does have quite a lot of tricks going for her. Most notably, animation cancels, which arguably do provide quite a big and drastic DPS increase for her, both inside and outside ER.",
				boss: {
					info: "Husk, then Vill-V or Kalpas",
					note: "Aponia is just easier. Kosma is not recommended due to FR lacking enough hitcount potential which would take her too long during the hitcount phases.",
				},
				setup: {
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "Skadi Pri & 3-set Ana",
							time: "10:08m (6.1)",
							ref: "https://youtu.be/8DI2mKbHxNY",
						},
					],
					danger:
						"In downscalability terms, she's downright bad below SS rank. At a minimum of S2 rank however, she isn't as bad, but one problem still remains, she needs her signature Pri. With weaker stigmatas, expect her performance to decrease. Choose difficulty accordingly.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Forbidden Seed / Memory / Rainbow of Absence",
							second: "Because of You / Boundless Logos",
						},
						{
							time: "Late",
							first: "The First Scale",
							second: "Boundless Logos",
						},
					],
					note: "With Willows and assuming same rank (SS), it's possible for AKA to instead start with Because of You and get her 2 Ego signets for F7, which will then open the opportunity to get Boundless Logos by F9.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "HB",
						},
					],
					note: "Remember to switch out LE for BKE at F9/F10 before Heimdall fight. As for LE, you can switch her out once you get yourself a SP regen source like Aponia's. HB on the other hand is better after Heimdall fight, as she will provide highest damage. BR is not recommended due to AKA wanting to stay at more than 70% HP.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start into Aponia SP Regen F3, finish Aponia 2nd Core by F4, go shop F5 and swap The Lonely Moon for Because of You, buy Aponia's Penance if possible, otherwise get Mobius' Lip Poison [E] and Hua's Elem Breach. Can upgrade Aponia's Ultimate. Grab Aponia door F6 for Breach and finish Mobius 1st Core by F7 with Entwined [P] and Rodent [V].",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Frost Scythe",
									description:
										"Tap [ATK] after evasion to hurl Frost Guisarmier which spins for 5s, gathers enemies nearby, and deal 5400% ATK of Ice DMG. CD: 10s",
									priority: "Start",
								},
								{
									name: "Blessing of Stellar Trials",
									description:
										"Inflicting Ice Cell also creates a Frost Ring centered around the target lasting 2s which deals 480% ATK of Ice DMG per 0.3s to enemies nearby",
									priority: "1st",
								},
								{
									name: "Blessing of Winter Harvest",
									description:
										"Enemies recovering from Ice Cell are inflicted with 1 stack of Hypothermia",
									priority: "2nd",
								},
								{
									name: "Blessing of Cold Moon",
									description:
										"Inflicting Ice Cell also creates a self-centered Frost Ring lasting 6s which deals 180% ATK of Ice DMG per 0.3s to enemies nearby",
									priority: "3rd",
								},
								{
									name: "Blessing of Uranian Mirror",
									description:
										"Burst mode consumes 100% more SP and Valkyrie deals 90% bonus Total DMG in burst mode",
									priority: "No",
								},
							],
							note: "This build mainly relies on 2 Ego signets with 2 other serving as a huge powerspike: Starting with Frost Scythe + Stellar Trails. Frost Scythe will act as your means of reliable gather, being a strong one at that, and also providing pretty decent amounts of damage on a 8s CD. Be mindful of this to spam it every 8 seconds. The other 2 Ego Signets to get are Winter Harvest + Cold Moon. Do NOT get Uranian Mirror.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Mobius - Signet of Infinity (2nd Core)",
							lists: [
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "1st",
								},
								{
									name: "Entwined [P]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "2nd",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "3rd",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description:
										"Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
									priority: "Optional 2nd",
								},
							],
							note: "Lip Poison gives a good damage increase to AKA's Crescent Harvest (her Summoned Entity). Dead [X] is also strongly recommended to get as a sharp damage increase for AKA.",
						},
						{
							name: "Hua - Signet of Vicissitude (3rd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "If you don't get any better options for doors, you can try and gamble for Broken Dream",
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Bright Knight: Excelsis",
		type: "MECH",
		keyword:
			"dudu bianca durandal astagina bright knight: excelsis bright knight excelsis bkek jojo goose",
		builds: [
			{
				name: "Jojo Fan",
				note: "Updated 6.1. Dudu got her own stand, and she's on her way to become a real Jojo of her own. Truly built different! Will her stand be as powerful as Jojo's Star Platinum? Oh, an enemy is approaching! How dare they approach her? They must be destroyed by Abyss Flower! Wait... it did really destroy them easily. She's... a monster! Anyway, her damage ceiling is astronomically high. She's a pretty straightforward valkyrie that doesn't have much problems clearing it, however, her requirement for this is to have 3-set Dante and AF is a given.",
				boss: {
					info: "Hephaestus, then Aponia",
					note: "Aponia really was sent into the afterlife from standing in BKE's way. There's no stopping her. Oh no.",
				},
				setup: {
					danger:
						"Truthfully, you shouldn't even bother with this Valkyrie if you don't have BOTH of the shit she needs, which is basically AF and 3-set Dante. AF is a given, and evne more so in the current weather since it is what enables BKE to abuse the 20% TDT on Timestop Load Buff. As for the 3-set Dante? There's just... no replacement for it. Other than maybe coping with 3-set Dirac. But, again, let's be honest... that's, uh, pretty awkward to cope with. BKE really needs the impair right from the get go.",
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "Abyss Flower & 3-set Dante",
							time: "9:51m (6.1)",
							ref: "https://youtu.be/Ja3yyEc2mQI",
						},
					],
				},
				buff: {
					note: "Effective for 6.1.",
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
				},
				sigil: {
					note: "The Lonely Moon is a must to get F4 Double guaranteed. Also, regarding Because of You, BKE honestly doesn't even need a 4th Ego signet... so, if by F5 or F6 doors you see an Ego door, then by any means go ahead and take it. This way, you won't have to use Because of You.",
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Forget-Me-Not / Gold Goblet / Rainbow of Absence",
							second: "Because of You",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon / Dreamful Gold",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "SN",
						},
						{
							time: "Mid",
							first: "SS",
							second: "SA",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "SN is mainly to deal with the early Quantum mobs as they are too tanky for her without being collapsed. Afterwards, SN is swapped out for SA or BR, depends on your preference (gather and damage vs pure stonks damage)",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Gambit + Paragon) into Aponia's Ultimate by F3, finish Aponia 2nd Core by F4 Doubles, go shop F5 and put Because of You, buy Griseo's Red Paint and Sakura's TDM Taken or 1 extra UE Charge signets, grab Aponia's Breach at F6 and finish Sakura's 1st Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Gambit",
									description:
										"Triggering Retaliation or Ultimate Evasion boosts Physical DMG by 25% for 8s. If triggered outside Burst mode, Valkyrie gains Iron Body for 8s; if triggered in Burst mode, Valkyrie additionally unleashes a counterattack cross strike before Phantom Cleave to deal 1200% ATK of Physical DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Paragon",
									description:
										"Ultimate grants 5 stacks of Paragon, each of which boosts Total DMG by 4% for 15s",
									priority: "1st",
								},
								{
									name: "Blessing of Glory",
									description:
										"In Burst mode, Weapon Active has 70% shorter CD and can deal 2400% ATK of bonus Physical DMG at the cost of 12 SP. Weapon Active gains 4% Total DMG boost per second, and the boost resets when Burst mode is activated again",
									priority: "2nd",
								},
								{
									name: "Blessing of Formation",
									description:
										"Basic ATK SEQ 5 creates a 3-sec Grav Singularity that pulls in surrounding enemies and deals 2100% ATK of Physical DMG to them. Basic ATK SEQ 4 & 5 and the explosion of the Grav Singularity boost Valkyrie's Total DMG by 3% for 40s (15 stacks max)",
									priority: "Optional 3rd",
								},
								{
									name: "Blessing of Holy Lance",
									description:
										"During Basic ATK SEQ 4, tap [ATK] repeatedly to thrust the lance at enemies in an increasingly violent manner to deal a total of 6000% ATK of Physical DMG, and Valkyrie is immune to frontal and flank attacks. When Valkyrie's SEQ 4 attack reaches its peak, Basic ATK SEQ 5 will be enhanced to deal 3500% ATK of bonus Physical DMG to enemies in a large area",
									priority: "No",
								},
							],
							note: "Gambit and Paragon are her must-start signets. Those are the 2 main signets that will carry BKE throughout the whole run. A 3rd Ego signet is strongly recommended to get for Glory. BKE honestly doesn't even need the remaining 2 Ego signets, but you can take Formation as your 4th Ego.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							note: "Ultimate is a must priority to upgrade to +3. It will not only enormously boost BKE's damage in Burst Mode but will also affect AF's damage.",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (2nd Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "4th",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "The signet that gives extra ATK Speed can give a really comfy transition between BKE's whole combo rotation.",
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Optional 4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental MG (cannot stack). Triggering it again resets the duration",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Dea Anchora",
		type: "BIO",
		keyword:
			"fire dudu fire bianca durandal astagina dea anchora leg bow one hand da goose",
		builds: [
			{
				name: "Tap B, Watch Youtube",
				note: "Updated 6.1. You thought there could be no Tap B, Watch Youtube counterpart to SW's Tap A? Well, I'm here to prove you wrong! Here you go, a valk whose infamous ER gameplay revolves to just spam B like there's no end! Well, except... this valk really sucks. She has so many problems. Not advised to use for Weekly Clear unless your DA is built different.",
				boss: {
					info: "Husk, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Saggitarius & Shakes Adrift",
							time: "13:42m (6.1)",
							ref: "https://youtu.be/WtStotdHLfg",
						},
					],
					danger:
						"This valkyrie's downscalability is beyond terrible. She badly needs Shakes Adrift B's SP Regen. She also needs the T piece's ignite effect. Or better put, not only she needs her signature weapon but also needs her own signature stigmata set.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Burden / Gold Goblet / Rainbow of Absence",
							second: "Because of You / Dreamful Gold",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Dreamful Gold",
						},
					],
					note: "The Lonely Moon is absolutely necessary to help barely guarantee F4 Double.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "MA / BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "MA",
						},
					],
					note: "LE is essential for DA's early game, otherwise she may face SP problems. By F5 Shop, you can swap her out for MA to help DA's damage. BR is not recommended due to DA's long animation sequence for her Ultimate. Also, remember to bring BKE before Heimdall fight.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Stars & Gale) into Aponia Ultimate F3, unlock Aponia 2nd Core by F4, go shop F5 and swap TLM for Because of You, grab Kevin's Elem Breach and TDM from Shop and upgrade Aponia's Ultimate to +1 if possible, then grab Aponia Breach by F6, finish Kevin 1st Core by F7 Double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Stars",
									description: "Ultimate deals 50% bonus Total DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Gale",
									description:
										"In Astral Hamess, all attacks ignite enemies hit and ignited enemies take 25% bonus Total DMG for 10s",
									priority: "1st",
								},
								{
									name: "Blessing of Sheen",
									description:
										"Voidstar Anchor EX and Astral Flares EX do not suspend Astrum cosumption, but Seirios Ballista doesnt end Astral Harness and clear Astrum. Seirios Ballista costs 65 SP at most",
									priority: "2nd",
								},
								{
									name: "Blessing of Halo",
									description:
										"Voidstar Anchor, Voidstar Anchor EX, Astral Flares, and Astral Flares EX deal 2000% ATK of Fire DMG to enemies within 8 meters of the target hit, gather them, and restore 50 Astrum. CD: 10s",
									priority: "3rd",
								},
								{
									name: "Blessing of Brilliance",
									description:
										"Voidstar Anchor and Astral Flares EX cost no SP and restore 3 SP. Every 30 SP restored deals 800% ATK of Fire DMG to enemies within 10 meters. CD: 6s",
									priority: "No",
								},
							],
							note: "DA requires 2 Ego signets for a comfortable early start, being Stars and Gale. Afterwards, Because of You at F5 Shop is necessary due to her dependency on her own Ego signets. You really want to aim at getting the combo of Sheen + Halo by F11.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "Ultimate is strictly necessary by F4, as it's the highest damage bonus that DA can get early on providing 60% TDM to her Ultimate which is all her damage. It is also a priority to +3. ",
						},
						{
							name: "Kevin - Signet of Deliverance (2nd Core)",
							lists: [
								{
									name: "Artifact of the Inhibitor",
									description: "Ultimate boosts Elemental Breach by 20% for 5s",
									priority: "1st",
								},
								{
									name: "Goblet of the Giver",
									description: "Ultimate boosts Total DMG by 35% for 5s",
									priority: "2nd",
								},
								{
									name: "Brand of the Undead",
									description: "Ultimate boosts Elemental DMG by 30% for 5s",
									priority: "3rd",
								},
								{
									name: "Rochet of the Pilgrim",
									description: "Ultimate restores 3 SP per second for 5s",
									priority: "4th",
								},
								{
									name: "Blade of the Deliverer",
									description: "",
									priority: "Core",
								},
								{
									name: "Crusade of the Deliverer",
									description:
										"After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%",
									priority: "1st",
								},
								{
									name: "Flock of the Deliverer",
									description:
										"Final Battle is also considered burst mode. Total DMG increases by 20% in burst mode.",
									priority: "2nd",
								},
							],
							note: "Flock is an independent 20% TDM modifier, making it a really good option to take.",
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
									priority: "1st",
								},
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boost Total DMG by 3.0%",
									priority: "2nd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30",
									priority: "3rd",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Silent Night",
									description:
										"After lasting over 7s, reduce ATK, DEF, ele resists of enemies nearby",
									priority: "YES",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental MG (cannot stack). Triggering it again resets the duration",
									priority: "Optional 3rd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer",
									priority: "Optional 4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							note: "Yellow is a must to upgrade to +3. Also, due to DA's long weapon active animation and also CD of its active, it is really not necessary to finish Griseo's 2nd Core as she can't effectively utilize Red Paint. The other cores are a far better priority.",
						},
						{
							name: "Kalpas - Signet of Decimation (Felis Shop Signets)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "Kalpas signets are best taken from Shop and then unlocked with just one door later on.",
						},
					],
				},
			},
		],
	},
	{
		name: "Disciplinary Perdition",
		type: "BIO",
		keyword: "aponia nun disciplinary perdition dpe dip",
		builds: [
			{
				name: "Recommended",
				note: "Updated 6.1. Aponia being one of the strongest Flamechasers available to do ER with, is also a valk that doesn't really demands much mechanical play. There's really not much to explain about her. Aponia in ER is basically a get 100 sp, use Ultimate, hold A for Thunderstorm and move or just watch a video while enemies die. Then gain SP again and repeat the same process. More explanation on her is given in the description of the video runs.",
				boss: {
					info: "Husk, then Aponia",
					note: "Yeah. Fighting herself. That's how things should be. Right?",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Lost Conviction & 3-set Handel",
							time: "7:47m (6.1)",
							ref: "https://youtu.be/250mouXMexk",
						},
					],
					danger:
						"In downscalability terms, Aponia does seem pretty decent as seen on the above run using Handel instead of Zeno. However, do expect worse performance with lower gears, but she can scale accordingly without problems.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "Boundless Feeling / The Lonely Moon",
						},
						{
							time: "Mid",
							first:
								"Rainbow of Absence / Mad King's Mask / Feast of Emptiness",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "Boundless Feeling is used for the +1 to Aponia signets. You can alternatively start with The Lonely Moon instead, to guarantee 4F double.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "AE is not switched out. LE is for early game, and can later be switched out at F5 shop and above once you have Aponia's SP Regen. Other additional SP regen sources can be obtained to be more comfortable, but not recommended. BKE is recommended to bring against Heimdall.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Admonition into Shelter, then Inclusiveness) into Aponia QTE F3, unlock Aponia 2nd Core with SP Regen and Ultimate, grab Aponia's Breach from F5, go shop F6 and buy Griseo's Red, Yellow and Black from Shop. Can also take Sakura's TDM Taken and TDM and Kalpas signets. Grab Aponia door for F7 and unlock the remaining 2 Enhanceds",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Admonition",
									description:
										"Aponia gains 40% Total DMG Reduction. In Predictor's Sentence form, Lightning DMG increases 30% every 0.5s for a maximum of 180%. Inhibitor's Adjudication deals an additional 400% Lightning DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Shelter",
									description:
										"In Predictor's Sentence form, Redemption cost per second reduced by 55%; Total DMG dealt by Thunderstorm and Inhibitor's Adjudication increases 70% and count as Ultimates",
									priority: "Start",
								},
								{
									name: "Blessing of Inclusiveness",
									description:
										"Restores 12 SP and reduces Ultimate CD by 6s when illusion uses QTE. Increases Ultimate's Total DMG by 60%. Ultimate restores up to 100% Redemption when used",
									priority: "1st",
								},
								{
									name: "Blessing of Rescue",
									description:
										"Illusory Summoned Entity will deal Paralyse Trauma alongside DMG. DMG dealt by your Ultimate Evasion Skill increases 120%. Lightning DMG dealt by you or your illusion increases 70%",
									priority: "Optional",
								},
								{
									name: "Blessing of Atonement",
									description:
										"Aponia illusory Summoned Entity wherever she does, dealing 385% Lightning DMG every second to surrounding enemies. The illusion's Total DMG increases 100% and restores 12 SP after leaving Predictor's Sentence form",
									priority: "No",
								},
							],
							note: "Aponia only needs 3 Ego signets; Admonition, Shelter and Inclusiveness. A 4th Ego signet can be picked for Rescue, only if you want, as it hasn't given a lot of impact from getting picked. Its almost negligible.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Sixth, No Decadence",
									description:
										"Boosts Valkyrie Total DMG by 20% and keeps Exhortation from reducing for 15s upon QTE hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "All 3 Enhanceds are good to get for Aponia. Also, Basic ATK is not taken because the Admonition Ego signet modifies the Thunderstorm and its finisher to count as Ultimate DMG.",
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
							note: "After getting Petals in the Wind, can proceed to finish Kalpas 2nd Core.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "Throughout the Wep Active spam, Aponia recovers so much HP upon many repeated uses that she can easily fill Bloodboil Garment to the max in a decent amount of time.",
						},
						{
							name: "Pardofelis - Signet of Reverie (4th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Flexible P&C",
									description:
										"Every 100 Shiny Silvers obtained this round restore 1 HP and 0.1 SP. Taking DMG disables this effect for 5s.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (Felis Shop Signets)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Fallen Rosemary",
		type: "QUA",
		keyword: "rita rossweisse fallen rosemary fr",
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. Do note that FR needs her Pri-arm if you want to use her for ER. Due to the complex mechanics that FR has, she's one of the harder valks to properly play into ER. In fact, much like certain other valks, her performance won't only depend on her gears and ranks, but also will depend on how optimally you can play her. As long as you can consistently and properly do her Evade cancels (especially taking note of Strix-the bird rune- getting off CD to spam him) into Charged ATKs one after another, you can expect things to go well. Her greatest dps is between her ult and the successive Charged ATK chain. ",
				boss: {
					info: "Hephaestus, then Aponia or Kosma",
					note: "Aponia is just easier. Kosma is not recommended due to FR lacking enough hitcount potential which would take her too long during the hitcount phases.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Iris Pri & Handel",
							time: "6:21m (6.1)",
							ref: "https://youtu.be/xppTS-q5ll4",
						},
					],
					danger:
						'In downscalability terms, even below SS2 where FR unlocks her "DPS" potential outside ER, she should be fine here. With lower gears as well. However, do note that FR is a valk that requires her Pri-weapon in order to be used in ER, simply due to the instant Valfreyja Form.',
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "Because of You / The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Memory / Mad King's Mask / Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "If your FR is struggling to get through 4F double, you can instead start with The Lonely Moon and delay your 4 Ego powerspike until F11.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "SN",
						},
						{
							time: "Mid",
							first: "AE / BKE",
							second: "SN",
						},
						{
							time: "Late",
							first: "AE / BR",
							second: "SN",
						},
					],
					note: "Remember to swap AE out for BKE before Heimdall fight. As for the late floors, you can use BR because by then you'll already have more than enough breach with Aponia's and Hua's combined. For this very same reason. You don't take SN out because of 2nd Load Buff.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start into Aponia Ultimate F3, finish Aponia 2nd Core by F4 with SP Regen & 70 Load, grab Aponia's Breach at F5, go shop F6, grab Aponia's Basic ATK if missing, get Kalpas' both DMG boosts or one and Hua's Elem Breach, then use Because of You to grab Nocturne and God Eater from F7 Double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Soul Siphon",
									description:
										"In Valfreyja form basic ATK siphons extra Disir",
									priority: "Start",
								},
								{
									name: "Blessing of Valfreyja",
									description: "In Valfreyja form Lightning DMG is increased",
									priority: "1st",
								},
								{
									name: "Blessing of Nocturne",
									description: "Using God Eater increases Charge ATK TDM",
									priority: "2nd",
								},
								{
									name: "Blessing of God Eater",
									description:
										"When God Eater hits, a lightning bolt hits and fully recharges Strix",
									priority: "3rd",
								},
								{
									name: "Blessing of Spirit Servants",
									description:
										"When Garmr/Strix/Linnorm hits, increases Lightning DMG",
									priority: "No",
								},
							],
							note: "This build mainly relies on 2 Ego signets that are necessary to start with: Soul Siphon into Valfreyja. Soul Siphon is the signet that will allow FR to chain unlimited Charged ATKs. Valfreyja will be your other main source of big damage. Then, the other 2 Ego signets that become a huge powerspike for FR are Nocturne and God Eater, gotten through Because of You.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "If you don't get any better options for doors, you can try and gamble for Broken Dream",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd/4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							note: "It is NOT necessary to finish Kalpas2's Core. FR has no in-built healing so she can permanently stay at below 100 HP and won't be recovering any HP diminishing Kalpas' buffs. This also means you can just continue towards Griseo while getting Kalpas signets from shop.",
						},
						{
							name: "Griseo - Signet of Stars (3rd/4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
						{
							name: "Eden - Signet of Gold (Felis Shop Signets)",
							lists: [
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second",
									priority: "1st",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Fervent Tempo",
		type: "PHY",
		keyword: "rozaliya olenyeva twins fervent tempo delta ft",
		builds: [
			{
				name: "FT General Build 7D",
				note: "Updated 6.1. In terms of downscalability, this build sucks for that. It's linked to the valk herself. What does this mean? Basically, you'd rather be using another valk instead of FT if your FT is a bit too downscaled. Needs Sleeper's Dream as minimum, otherwise her ER gameplay is really painful.",
				boss: {
					info: "Husk, then Vill-V",
					note: "Why not Hephaestus? Because, despite FT type-countering Heph and even with Griseo2, she's actually awfully horrible against Heph. It also doesn't help that her personal single damage against Bosses is dogshit despite everything. Husk is way easier. Also simpler to parry his attacks.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Sleeper's Dream & Michelangelo TB Dante M",
							time: "8:55m (6.0A)",
							ref: "https://youtu.be/0od_2xpXFcI",
						},
					],
					danger:
						"Sleeper's Dream is the minimum requirement, otherwise FT is really painful to play. In stigmatas, she's kinda flexible being able to use 3-set BiankaT, Ely TB, Polo TM Attila B. However the performance of these stigmatas are expected to be really varied. Don't expect impressive results from them.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Rainbow of Absence",
							second: "The Lonely Moon / Because of You / It Will Be Written",
						},
						{
							time: "Mid",
							first: "Veil of Tears / Mad King's Mask / Memory",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "It Will Be Written can be used for guaranteeing F7 double by oneshotting the Smelter Zombie.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "LE",
						},
						{
							time: "Mid",
							first: "SS",
							second: "LE / BR",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "You want to swap LE out once you're settled down on SP regen sources, which is very important for FT. ",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego start into Griseo Red or Yellow F3, get Griseo 2nd Core by F4 with Yellow & Black, grab Griseo's A Flame Extinguished or White for F5 or F6, shop, get an Aponia signet and finish Aponia 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Silence",
									description:
										"Ultimate's CD is reduced by 30% and Ultimate's Total DMG is increased by 300%. Weapon Active CD is reduced by 2s each time Ultimate deals DMG. Strike Back EX is usable during the entirety of Fortress Mode.",
									priority: "Start",
								},
								{
									name: "Blessing of Mixing",
									description:
										"Charged ATK and Ultimate pull enemies in a large area and increase their Total DMG taken by 30% for 8s. Triggering it again refreshes the duration.",
									priority: "1st",
								},
								{
									name: "Blessing of Thorns",
									description:
										"Basic ATK and Charged ATK deal 20% more Physical DMG and restore 1 SP on every hit. At 150 SP or higher, casting Ultimate costs an extra 50 SP, and during this Ultimate enemies take 20% more Total DMG.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Solitude",
									description:
										"In Fervent Mode, Basic ATK deals an extra 20% Physical DMG. Ultimate last SEQ deals an extra 200% Physical DMG.",
									priority: "Optional 3rd",
								},
								{
									name: "Blessing of Fervor",
									description:
										"In Fervent Mode, nearby enemies take 20% more Physical DMG and Fervent Juice is consumed 50% faster (cannot stack).",
									priority: "Optional 4th",
								},
							],
							note: "This build works with 2 Ego signets mainly: Silence + Mixing. Those 2 are essential. FT without gather is absolutely horrible. No Mixing means FT is unplayable. Regarding other Ego signets, she really loves the opportunity to take a 3rd and 4th; Thorns and Solitude are your best choices respectively.",
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "White & Bright",
									description:
										"Every time an enemy is tainted, Valkyrie restores 12 SP. CD: 5s.",
									priority: "Optional",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "Note: White is essential due to FT's severe lack of SP regen without Thorns and particularly during Fervent Mode (which incentivizes you to just let Fervent Mode end so you can regen SP again), so if you get Thorns beforehand, you basically ignore White. Also, due to no on-demand UE, you'll want to intentionally let enemies attack you and evade so you can proc Blue paint, and along with it, Fallen Leaves and Petals in the Wind. Especially Fallen Leaves as it gives a really noticeable shitload of dmg buff to FT.",
						},
						{
							name: "Aponia - Signet of Discipline (2nd Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Filler",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Eden - Signet of Gold (4th Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (5th Core)",
							lists: [
								{
									name: "No One To Share",
									description:
										"Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "2nd",
								},
								{
									name: "Days Gone",
									description:
										"Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Golden Diva",
		type: "IMG",
		keyword: "eden golden diva gd",
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. As far as testing goes, this is the current best build for Eden, and other variations with different signets are either weaker, or just don't really work as well as they would seem to do in paper. Take Eden2 for instance, which supposedly GD would be perfectly fine with. Issue? It actually isn't that great. Only acceptable as a versatile option when you don't have any other better alternatives for doors, but otherwise, not recommended to do as early start, as it's garbage.",
				boss: {
					info: "Husk or Hephaestus, then Aponia or Vill-V",
					note: "Hephaestus is only recommended if you actually have both DoI & Handel to go with. Eden has the capability to kill Hephaestus before he goes into Overheat mode. If you do not have the confidence to kill it before it goes Overheat mode, then just go with Husk.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoI & Handel",
							time: "9:03m (6.0B)",
							ref: "https://youtu.be/iWKlVGS9wnU",
						},
					],
					danger:
						"In terms of downscalability, as long as you have Handel, GD won't be as painful to use, particularly because the atk difference does play in quite a big manner for her damage. It's also due to DoI's buffs difference.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears / Fragile Friend",
							second: "Boundless Feeling / Out of Reach",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Rainbow of Absence / Home Lost",
							second: "Out of Reach",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Out of Reach",
						},
					],
					note: "This build has 2 starter variations. You either choose Aponia or Kosma. The difference between both will be explained further below. Look out for reading if you want to know.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE / BKE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
				},
				signet: {
					danger:
						"Regarding 2 diff Startup importance: Aponia which includes her Boundless Feeling support skill is weaker for F4 Double, but is a bit stronger start after getting her core. Kosma on the other hand provides easily accessible and comfortable gather, while also being stronger for F4 Double and can very likely guarantee it. This run will assume Aponia start. For Kosma start, you just switch the priority order between the two. (Kosma 1st, Aponia 3rd)",
					note: "Ideal course of build up: 3 Ego start into Aponia's Basic or Ultimate F3, unlock Aponia 2nd Core by F4, go shop F5, buy 2 of either Kosma or Kalpas signets and reroll for either door accordingly to unlock their core by F6, otherwise Aponia door for enhanced. If you CAN get Kalpas 2nd Core by F6 over Kosma2, then grab Aponia for F7 double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Arioso",
									description:
										"During Sound of Nature, each note consumed increases Total DMG by 12% with a max stack of 10. This is reset when Sound of Nature ends",
									priority: "Start",
								},
								{
									name: "Blessing of Fugue",
									description:
										"Ensemble combo sequence is increased by 6. Hurling pistols Total DMG increases 140%",
									priority: "Start",
								},
								{
									name: "Blessing of Cadenza",
									description:
										"Chord and Variation launch sound waves dealing 550% Lightning DMG. Each wave increases Total DMG reduction by 30% and slightly raises Ignore Interrupt for 10s while restoring 2 or 4 SP respectively. Triggering it again resets the duration",
									priority: "1st",
								},
								{
									name: "Blessing of Concerto",
									description:
										"Each Combo ATK grants 1 Charge. At 4 Charge, Basic and Combo ATKs' Total DMG increase by 60% for 15s. Charge consumed on use and cannot be restored during use. Restores 12 SP after use",
									priority: "Optional",
								},
								{
									name: "Blessing of Symphony",
									description:
										"Hurl pistols when using Ensemble Playing for 12 SP and dealing 350% Lightning DMG",
									priority: "No",
								},
							],
							note: "This build requires only 3 Ego signets to function: Arioso + Fugue into Cadenza. You can also additionally take a 4rd Ego door for Concerto, or if you plan on using Eden2, take Symphony, but otherwise NEVER take Symphony, as it heavily relies on minimum 2 SP regen sources (Aponia2 and Eden2).",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "1st",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (2nd Core)",
							lists: [
								{
									name: "Blade, Grave, and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%",
									priority: "1st",
								},
								{
									name: "Bone, Blood, and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune, and Written Fate",
									description: "Max HP increases by 25%",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Kosma - Signet of Daybreak (3rd Core)",
							lists: [
								{
									name: "Talons that Desecrate the Sanctuary",
									description:
										"Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description:
										"Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description:
										"Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "3rd",
								},
								{
									name: "Heart that Commited Seven Crimes",
									description: "Rend lasts 5s longer.",
									priority: "4th",
								},
								{
									name: "Daybreak, Lone Beacon",
									description: "",
									priority: "Core",
								},
								{
									name: "Heart, Unshakable Character",
									description:
										"Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Dawn, Perpetual Wait",
									description:
										"While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
									priority: "2nd",
								},
								{
									name: "Choice, Ensuing Regret",
									description:
										"When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional",
								},
							],
							note: "If you want to be able to maximize Kalpas2's Bloodboil Garment, then you take Kosma's healing (the 3000% Adaptive DMG). It will further boost the amount of buffs you can get from Kalpas.",
						},
						{
							name: "Griseo - Signet of Stars 4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
						},
						{
							name: "Pardofelis - Signet of Reverie 5th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
							],
						},
						{
							name: "Eden - Signet of Gold 6th Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Goushinnso Memento",
		type: "MECH",
		keyword: "goushinnso mementos yae sakura vergil ice gm ua",
		builds: [
			{
				name: "Motivated Vergil",
				note: "Updated 6.1. Memento with Muramasa Bloodlust? What's that? We don't use that here! Instead, we give some real motivation to Sakura by giving her a nice gift to carve her path towards becoming a real Vergil! Who needs Naraka? Why craft it and pri-arm it when you can instead give 7T to Memento? That's much better! Trust me!",
				boss: {
					info: "Hephaestus, then Aponia or Kalpas",
					note: "Make sure to avoid being at less than 900 HP when going against Hephaestus. In this run I had forgotten about the fact and proceeded to go against him with less than 100 HP. I had to retry a lot until I managed to beat him lmao.",
				},
				setup: {
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "7T & 3-set Ana",
							time: "10:18m (6.1)",
							ref: "https://youtu.be/2jg-_BezVv8",
						},
					],
					danger:
						"Other sets like Bastet can work for Memento, but you can expect it to be weaker probably, due to it giving nothing more than just TDM becoming diluted on her as opposed to Ana Schariac having a lot of different multipliers. Naraka can work for weapon.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Forget-Me-Not / Gold Goblet / Rainbow of Absence",
							second: "The Lonely Moon / Dreamful Gold",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Dreamful Gold",
						},
					],
					note: "The Lonely Moon is a must to get F4 Double guaranteed. Dreamful Gold can be picked after F13 or however you see it fit.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "AE will be your main means of gather aside of her other bonuses. BR will be your bread and butter necessary to get past Early floors with enough damage. Remember to bring BKE to Heimdall fight. Afterwards, you swap BKE out for BR again.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Whiteout + Flourish + Haste) into Aponia Basic ATK F3, finish Aponia 2nd Core by F4 Double, go shop F5 and grab Griseo's Red and Yellow Paint or Red and Sakura's TDM Taken signet, grab Aponia's Breach at F6 and get the remaining 2 Aponia Enhanceds at F7 Double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Whiteout",
									description:
										"Zankeki deals an extra 100% ATK of Ice DMG in a large area. Each stack of Deep Freeze increases Zankeki's Ice DMG by 1%.",
									priority: "Start",
								},
								{
									name: "Blessing of Flourish",
									description:
										"Zankeki's rush sequence restores KE to 200 and 1 Ultimate Evasion attempt on hitting an enemy. Triggering Ultimate Evasion Skill restores 1000 KE. When KE falls below 0, Ultimate Evasion Skill is auto-triggered.",
									priority: "Start",
								},
								{
									name: "Blessing of Haste",
									description:
										"Triggering Ultimate Evasion or Ultimate Evasion Skill deals 300% of ATK of Ice DMG to nearby enemies. This attack counts as Zankeki and deals an extra 100% ATK of Ice DMG for each exclusive signet owned.",
									priority: "1st",
								},
								{
									name: "Blessing of Icy Sakura",
									description:
										"With 20 stacks of Deep Freeze, Ultimate clears all stacks of Deep Freeze to deal 1500% + number of stacks × 40% ATK of Ice DMG, refresh 3 Ultimate Evasion Skill attempts, and make Zankeki deal 20% bonus Total DMG and consume 600 KE for 10s. Triggering it again refreshes the duration.",
									priority: "No",
								},
								{
									name: "Blessing of Frozen Cloud",
									description:
										"Raises the cap on Deep Freeze to 40 stacks. At the start of battle, gain 20 stacks of Deep Freeze and 50 SP. Whenever Deep Freeze stacks are gained or consumed, Total DMG increases by 0.2% untile capping at 40%. Hitting the cap increases Total DMG by another 20%.",
									priority: "No",
								},
							],
							note: "Whiteout and Florish are the must start for Memento. It is strongly recommended and advised to reset for F2 Ego start to grab Haste, as it's a signet that will become pretty strong and act as a good powerspike for Memento later on as she starts scaling towards the late floors. The other 2 are just no.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "Optional 4th (See note)",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Whilst not necessary, the Ultimate signet is not a bad idea to get for 2 reasons mainly. One, it will increase the load per second to 30, which is good to consider for Memento due to the rate at which she halvens Aponia's Load. Second, it will also increase your Ultimate's DMG. However, do note that this will modify your playstyle into using 7T Active only whenever you have to reapply Griseo's Red Paint. On the other hand, Basic ATK is priority to upgrade to +3.",
						},
						{
							name: "Sakura - Signet of Setsuna (2nd Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description:
										"Triggering Ultimate Evasion Skill restores 12.0 bonus SP.",
									priority: "3rd",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "You need the SP signet to enable the synergy with Eden2 afterwards.",
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							note: "Both enhanceds are really good to take. Memento synergizes extremely well with Eden2 due to her capability to spam her low-cd Ult to keep refreshing Eden2. Silent Night is also really good as it will act as another form of breach aside from Aponia's. ",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Optional 4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "1st",
								},
								{
									name: "Echo of Silent Night",
									description:
										"After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends.",
									priority: "2nd",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
							note: "Red paint is a must priority to +3. Yellow is also good to +3. Do make sure to get them alongside Black if you get them in Shop. Petals will also further skyrocket Memento's damage.",
						},
						{
							name: "Kalpas - Signet of Decimation (Felis Shop Signets)",
							lists: [
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "1st",
								},
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "2nd",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core (Optional)",
								},
							],
							note: "Kalpas is mostly just a core that you can consider getting if you manage to get 2 of his signets from Shop and can proceed to unlock his 2nd Core from a door. Either that, or if you don't want to risk Memento's survivality against F17 boss fight, you can choose not to take Kalpas at all.",
						},
					],
				},
			},
			{
				name: "(Muramasa) Vergil plays on Easy difficulty",
				note: "Updated 6.1. Memento didn't had enough fun with 7T and thought it was too simple and easy for her, so she got rid of it and decided to go to a back alley, proceeded to buy a 3* weapon of doubtful quality from a merchant by the name of Senti, got back home and chose the highest difficulty to prove she isn't any weaker and can also do it herself. Was it worth the 500,000,000 yen that the 3* weapon cost her? Did she get scammed by Senti? Or does that not matter? Turns out even the highest difficulty couldn't stop her and she became an unstoppable force of nature! What an absolute madlad!",
				danger:
					"Do note that the best start for this build is Griseo's Red Paint at F2, so it's strongly recommended to mald for it instead of Ego signet.",
				boss: {
					info: "Hephaestus, then Aponia or Kalpas",
					note: "Between Aponia or Kalpas, you can bully either of the two. Pick your preference.",
				},
				setup: {
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "Muramasa Bloodlust & Ana Schariac",
							time: "10:30m (6.1)",
							ref: "https://youtu.be/r-KRIK4AfB8",
						},
					],
					danger:
						"Other sets like Bastet can work for Memento, however Ana Schariac is not only her BiS here but also the best set that she can be paired together with Muramasa as she wants to have the best buffs possible here.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Pseudo Miracle",
							second: "Falling in Past Light",
						},
						{
							time: "Mid",
							first: "Veil of Tears / Gold Goblet / Rainbow of Absence",
							second: "Falling in Past Light",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Falling in Past Light",
						},
					],
					note: "In order to have the best chances at getting F4 Double, you need the skills to time the charging every 6s aside from getting into the F4 with FPL fully charged already. Doing this right will net you 3 FPL's that you can use in total for the floor. For later floors, you can choose to go with TLM or Dreamful Gold based on your preference.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "AE will be your main means of gather aside of her other bonuses. BR will be your bread and butter necessary to get past Early floors with enough damage. Remember to bring BKE to Heimdall fight. Afterwards, you swap BKE out for BR again.",
				},
				signet: {
					note: "Ideal course of build up: Griseo Red Paint start (mald for it F2), then grab Vill-V's Pendulum or Conflict at F3, finish Vill-V 2nd Core by F4 Double, get Vill-V's Puppetry or Drama at F5, go shop F6 and buy Aponia's SP Regen and Sakura's TDM Taken or TDM, or upgrade Red to +3 and Puppetry/Drama to +3. Then grab V-V door at F7 Double for the remaining priority signets",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Whiteout",
									description:
										"Zankeki deals an extra 100% ATK of Ice DMG in a large area. Each stack of Deep Freeze increases Zankeki's Ice DMG by 1%.",
									priority: "Start",
								},
								{
									name: "Blessing of Flourish",
									description:
										"Zankeki's rush sequence restores KE to 200 and 1 Ultimate Evasion attempt on hitting an enemy. Triggering Ultimate Evasion Skill restores 1000 KE. When KE falls below 0, Ultimate Evasion Skill is auto-triggered.",
									priority: "Start",
								},
								{
									name: "Blessing of Haste",
									description:
										"Triggering Ultimate Evasion or Ultimate Evasion Skill deals 300% of ATK of Ice DMG to nearby enemies. This attack counts as Zankeki and deals an extra 100% ATK of Ice DMG for each exclusive signet owned.",
									priority: "No",
								},
								{
									name: "Blessing of Icy Sakura",
									description:
										"With 20 stacks of Deep Freeze, Ultimate clears all stacks of Deep Freeze to deal 1500% + number of stacks × 40% ATK of Ice DMG, refresh 3 Ultimate Evasion Skill attempts, and make Zankeki deal 20% bonus Total DMG and consume 600 KE for 10s. Triggering it again refreshes the duration.",
									priority: "No",
								},
								{
									name: "Blessing of Frozen Cloud",
									description:
										"Raises the cap on Deep Freeze to 40 stacks. At the start of battle, gain 20 stacks of Deep Freeze and 50 SP. Whenever Deep Freeze stacks are gained or consumed, Total DMG increases by 0.2% untile capping at 40%. Hitting the cap increases Total DMG by another 20%.",
									priority: "No",
								},
							],
							note: "Whiteout and Florish are the must start for Memento. For this build, she doesn't need anything more.",
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act VI: Sneer",
									description:
										"Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
								{
									name: "Saga: Overlapping Needles",
									description:
										"Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG.",
									priority: "Filler",
								},
							],
							note: "Sneer has very good synergy in this build due to increasing the frequency in which Memento can make use of and abuse V-V's buffs, aside from granting her some nice SP Regen which in turn will also synergize very well later with Eden2. Puppetry and Drama are priority to +3.",
						},
						{
							name: "Aponia - Signet of Discipline (2nd Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "Basic ATK is priority to +3 after Red and V-V's enhanceds.",
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Optional 4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "1st",
								},
								{
									name: "Echo of Silent Night",
									description:
										"After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends.",
									priority: "2nd",
								},
							],
							note: "If you can get Withered Soil, go for it, it's a really strong option for Memento.",
						},
						{
							name: "Sakura - Signet of Setsuna (4th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description:
										"Triggering Ultimate Evasion Skill restores 12.0 bonus SP.",
									priority: "3rd",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "Sakura's signets are better taken from Shop and finish her Core on a door.",
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
							],
							note: "Red is absolute priority to +3. Yellow is also good choice to +3. There is no need to finish Griseo's Core, as the other Cores have higher priority.",
						},
					],
				},
			},
		],
	},
	{
		name: "Helical Contraption",
		type: "QUA",
		keyword: "vill-v vill v vv helical contraption hc",
		builds: [
			{
				name: "Not Helical Cripple",
				note: "Updated 6.1. All in all, HC is one of the easiest valks to play in ER, and her gameplay doesn't involve anything complicated. The only thing of note to be mindful of is that she greatly values gather as it's better for her to be hitting every mob due to her AoE damage being pretty damn strong. ",
				boss: {
					info: "Hephaestus, then Aponia or Kosma",
					note: "While HC can take Kosma and deal with the hitcount phases the easiest, you can also instead take Aponia, but do keep in mind to manually end your Burst Mode before transition phases to save SP and ult again.",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "Tower of Past & 3-set Collodi",
							time: "5:15m (6.1)",
							ref: "https://youtu.be/cwbYxS_h_VE",
						},
					],
					note: "With lower ranks, you can expect HC to perform worse, however her strength is probably more dependant on her stigma set, and more importantly, her own weapon. Without her weapon, she probably struggles aside from gameplay changes.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Pseudo Miracle",
							second: "Falling in Past Light",
						},
						{
							time: "Mid",
							first: "Forbidden Seed / Memory / Rainbow of Absence",
							second: "Boundless Logos",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Boundless Logos",
						},
					],
					note: "It Will Be Written can be used for guaranteeing F7 double by oneshotting the Smelter Zombie.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE / BKE / VKE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "In the SS1 run, I picked VKE as she gives 20% Fire Taken. However, do note that VKE is harder to use for the purpose of denying Heimdall's Red Mode. This is because VKE applies mid Heavy Trauma throughout many successive hits that NEED to connect with Heimdall. If you do not want to be resetting the fight until VKE successfully does her job, then just pick BKE instead.",
				},
				signet: {
					note: "Ideal course of build up: 3 Ego Start (Facade + Sleight into Reversal), V-V's Spider Web or Pendulum F3, then finish V-V 2nd Core by F4, grab V-V's Puppetry by F5, go shop and swap Falling in Past Light for Boundless Logos, get Drama (if possible) or get Mobius' Entwined [P] or Lip Poison [E] and Hua's Elem Breach & Kalpas TDM, proceed to finish Mobius 1st Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Facade",
									description:
										"Within 15s of entering Special Weapon: No. 9 or Weapon Mode, Valkyrie deals 40% more Fire DMG, and Target Lock hits 1 more time and recovers 0.3 more SP.",
									priority: "Start",
								},
								{
									name: "Blessing of Sleight",
									description:
										"Target Lock becomes an AoE attack and deals 100% ATK more of Fire DMG. If Target Lock hits, Valkyrie deals 30% more Total DMG for 5s. Triggering it again refreshes the duration.",
									priority: "Start",
								},
								{
									name: "Blessing of Reversal",
									description:
										"Weapon active deals 25% more Total DMG. In burst mode, casting weapon active restores 20 Chariot Heat Value, Total DMG increases by 30%, and hitting an enemy inflicts Target Lock on all eneimes once; CD: 5s.",
									priority: "1st",
								},
								{
									name: "Blessing of Assemblage",
									description:
										"Once Loud Armaments is destroyed, enter burst mode. Can summon a Blazing Spiral that lasts for 5s. It will continuously pull enemies and make them take 30% more Total DMG. A Blazing Spiral deals 500% ATK of Fire DMG when created, which increases by 300% ATK for every Loud Armaments destroyed.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Transmission",
									description:
										"In Special Weapon: No. 9, Interlude Salute and Evasion deal 50% more Total DMG. Casting Interlude Salue restores 5 SP. Every 3 casts of Interlude Salute refreshes weapon active CD, but exiting the combat vehicle resets the counter.",
									priority: "No",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
						},
						{
							name: "Mobius - Signet of Infinity (2nd Core)",
							lists: [
								{
									name: "Entwined [P]",
									description:
										":For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "3rd",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description:
										"Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
									priority: "Optional",
								},
							],
							note: "Dead [X] is a pretty nice powerspike for HC, so strongly recommended to try and get.",
						},
						{
							name: "Hua - Signet of Vicissitude (3rd or 4th Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "3rd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "2nd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "If you don't get any better options for doors, you can try and gamble for Broken Dream",
						},
						{
							name: "Griseo - Signet of Stars (3rd or 4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (5th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "It is NOT necessary to finish Kalpas Core, as HC has no in-built healing in her kit so she can permanently stay at low HP, however you can stay at around 700 for better survival odds, especially against Heimdall.",
						},
					],
				},
			},
		],
	},
	{
		name: "Herrscher of Flamescion",
		type: "PHY",
		keyword: "fire tuna fk fire kiana kaslana hofs hfs",
		builds: [
			{
				name: "Starfire Build",
				note: "Updated 6.1. So far, this is the strongest build. Simple explanation; Starfire is stronger early game, but can fall off a bit later in the game without Reburn and Tempered Warrior, which is also fixed. And then, as a result, you have a stronger general build that's ideally a stronger and perhaps more comfortable start, especially when you have the damage for it.",
				boss: { info: "Hephaestus, then Aponia or Vill-V." },
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "DoI & 3-set Himeko",
							time: "4:18m (6.0B)",
							ref: "https://youtu.be/-fVlZ3l135k",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. LWH TB Thales M efficiency with this build is yet to be tested.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Mad King's Mask",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Memory / Forget-Me-Not / Rainbow of Absence",
							second: "Because of You",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "An Old Pal's Legacy",
						},
					],
					note: "You want to go shop F5 to get Because of You ASAP. After Heimdall fight, it's recommended to go shop right away to swap Because of You for An Old Pal's Legacy.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "VKE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "You want to save BR specifically for after entering Herrscher Mode on the first snap. Basically, when you're about to use your first Blackhole in Herrscher Form for the maximum output of damage possible. Combine this with Sirin and Kalpas Support Skill and you end up dealing a shitton of damage.",
					danger:
						"VKE for Heimdall fight is recommended in order to fill his Heavy Bar Trauma. Do note that this is specifically for getting him out of Red Mode forcibly once its filled.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego Start (Heatflow + Starfire), Kalpas' TDM by F3, Kalpas 2nd Core by F4, F5 Shop for switching The Lonely Moon for Because Of You and grab 2 Hua Signets and Sakura's TDM Taken or TDM, get Hua door by F6 and unlock 2nd Core, then proceed to get Sakura 1st Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Heatflow",
									description:
										"Black holes generated by the Herrscher of Flamescion deal 75% bonus Fire DMG. Triggering Ultimate Evasion Skill creates an additional black hole",
									priority: "Start",
								},
								{
									name: "Blessing of Starfire",
									description:
										"When a black hole created by the Herrscher of Flamescion ends, a smaller black hole lasting 5s is generated to deal 300% ATK of Fire DMG per second. CD: 3s",
									priority: "1st",
								},
								{
									name: "Blessing of Reburn",
									description:
										"Triggering Ultimate Evasion Skill removes Overheat and clears Heat",
									priority: "2nd",
								},
								{
									name: "Blessing of Tempered Warrior",
									description:
										"Aerial Combo ATKs reduce Ultimate Evasion Skill CD by 9s",
									priority: "3rd",
								},
								{
									name: "Blessing of Flamescion",
									description:
										"For every black hole created by the Herrscher of Flamescion, Valkyrie restores 25 HP per second and deals 30% bonus Total DMG",
									priority: "No",
								},
							],
							note: "This build uses Heatflow as start, followed by Starfire. Giving a stronger early game than Heatflow + Reburn combo, this build aims to have a far comfier clear in the early game and guaranteeing the F4 double, while also opening the way for getting both Reburn + Tempered Warrior later in the run by F11, making for all 4 Ego signets that HoFS wants.",
						},
						{
							name: "Kalpas - Signet of Decimation (1st Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description:
										"The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
									priority: "Optional (Priority only by F9 afterwards)",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description:
										"The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional (Not necessary)",
								},
							],
							danger:
								"2 important things. Kalpas TDM on F3 is an absolute must, as it's the strongest buff HoFS can get that will also guarantee you'll have an easy time clearing F4 for the double reward. The other DMG buff doesn't come close, and the other 2 are a no. And you leave Kalpas enhanceds for later on. 2 reasons. Getting Hua 2nd Core finished by F6 and Sakura 1st Core by F7 is a way stronger ramp up than getting Kalpas Breach which doesn't have much effect early on. And trying to get one after finishing his 2nd core is a massive slowdown on the pace, as it feels like it's not really doing anything to help u. This is the reason getting other signets instead is better. So, leave this for after you get 2nd core.",
							note: "I also strongly recommend upgrading Kalpas' Max HP after both of his DMG boosts if you're using Himeko. Himeko M giving 25% max HP paired with Kalpas 40% Max HP from +3 and Pardofelis Max HP signet makes it possible to reach up to 16k or 17k HP which gives Kalpas an absolutely massive scaling on his +3 DMG Boosts.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "3rd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "2nd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Getting 2nd Core asap is a really big boost for the remainder of the run for HoFS damage.",
						},
						{
							name: "Sakura - Signet of Setsuna (3rd Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description:
										"Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
									priority: "Optional",
								},
								{
									name: "Sakura-ni-Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "It's absolutely essential to ensure you get Sakura1 by the time you reach F11, as it will be a massive powerspike alongside getting Reburn and Tempered Warrior from F11. As for the SP on UE signet, it's hugely helpful and beneficial due to allowing you to Ult early into your Herrscher Mode start for the purposes of applying Griseo's Yellow paint and Fallen Leaves later once you have them.",
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
							note: "Red & Hot is the absolute first priority, followed by Black & Dark. One important thing to note here: You'll want to make sure to get Yellow next if you happen to get Fallen Leaves from a Griseo door. Or in the case you get A Flame Extinguished, then pick Yellow over it.",
						},
						{
							name: "Pardofelis - Signet of Reverie (5th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
								{
									name: "Empty Illusions, Empty Fantasies",
									description: "",
									priority: "Core",
								},
							],
							note: "Your highest priority should be getting the Max HP/SP signet, instead of getting Pardo's core.",
						},
					],
				},
			},
			{
				name: "Burger King Tuna 7D",
				note: "Updated 6.1. The strength of this build noticeably goes up in Kalpas +2 weathers.",
				boss: { info: "Hephaestus, then Elysia, Aponia (easiest) or Vill-V." },
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "DoI & 3-set Himeko",
							time: "5:26m (6.0A)",
							ref: "https://youtu.be/YRwcFNoFUWk",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "DoI & Shelley T Himeko M Scott B",
							time: "10:36m (6.0B)",
							ref: "https://youtu.be/l5wUpammzF0",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. However, you preferentially want Himeko M to be present for this build, as it makes it stronger.",
				},
				buff: {
					lists: [
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Mad King's Mask",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Memory / Rainbow of Absence / Forget-Me-Not",
							second: "An Old Pal's Legacy",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "An Old Pal's Legacy",
						},
					],
					note: "This build prefers to go Felis shop early in F5 so you can swap The Lonely Moon for An Old Pal's Legacy right away before further continuing.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "VKE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "You want to save BR specifically for after entering Herrscher Mode on the first snap. Basically, when you're about to use your first Blackhole in Herrscher Form for the maximum output of damage possible. Combine this with Sirin and Kalpas Support Skill and you end up dealing a shitton of damage.",
					danger:
						"VKE for Heimdall fight is recommended in order to fill his Heavy Bar Trauma. Do note that this is specifically for getting him out of Red Mode forcibly once its filled.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego Start, Kalpas' TDM by F3, Kalpas 2nd Core by F4 w/Max HP, F5 Shop for switching The Lonely Moon for An Old Pal's Legacy and grab Sakura's Fuji or Hua's Elem Breach, get Sakura or Hua door F6, finish Hua 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Heatflow",
									description:
										"Black holes generated by the Herrscher of Flamescion deal 75% bonus Fire DMG. Triggering Ultimate Evasion Skill creates an additional black hole",
									priority: "Start",
								},
								{
									name: "Blessing of Reburn",
									description:
										"Triggering Ultimate Evasion Skill removes Overheat and clears Heat",
									priority: "1st",
								},
								{
									name: "Blessing of Tempered Warrior",
									description:
										"Aerial Combo ATKs reduce Ultimate Evasion Skill CD by 9s",
									priority: "2nd",
								},
								{
									name: "Blessing of Starfire",
									description:
										"When a black hole created by the Herrscher of Flamescion ends, a smaller black hole lasting 5s is generated to deal 300% ATK of Fire DMG per second. CD: 3s",
									priority: "Optional",
								},
								{
									name: "Blessing of Flamescion",
									description:
										"For every black hole created by the Herrscher of Flamescion, Valkyrie restores 25 HP per second and deals 30% bonus Total DMG",
									priority: "No",
								},
							],
							note: "The minimum requirement of Tuna is to have Heatflow and Reburn as her starting signets. Without Reburn, she feels awful to play. Without Heatflow, she doesn't feel like she has much damage. So, a double Ego start is essential for Tuna. Afterwards, getting a 3rd Ego door is very good, taking Tempered Warrior to make the entire run easier and feel better. 4th is also taken for Starfire, adding even more damage but it's not really necessary.",
						},
						{
							name: "Kalpas - Signet of Decimation (1st Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description:
										"The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
									priority: "Optional (Priority only by F9 afterwards)",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description:
										"The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional (Not necessary)",
								},
							],
							danger:
								"You leave Kalpas enhanceds for later on. 2 reasons. Getting a Sakura signet or being able to finish Hua 2nd Core by F7 double or even getting Tempered Warrior is higher value. And trying to get one after finishing his 2nd core is a massive slowdown on the pace, as it feels like it's not really doing anything to help u. This is the reason getting other signets instead is better. So, leave this for after you get 2nd core.",
							note: "I also strongly recommend upgrading Kalpas' Max HP after both of his DMG boosts if you're using Himeko. Himeko M giving 25% max HP paired with Kalpas 40% Max HP from +3 and Pardofelis Max HP signet makes it possible to reach up to 16k or 17k HP which gives Kalpas an absolutely massive scaling on his +3 DMG Boosts. When using Shelley T Himeko M Scott B variation, it's even more of a priority as it reaches up to 22.5k HP.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "2nd",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "The breach right away is a really big boost in HoFS damage for the remainder of the run.",
						},
						{
							name: "Sakura - Signet of Setsuna (3rd or 4th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "Optional",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "Optional",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description:
										"Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
									priority: "Optional",
								},
								{
									name: "Sakura-ni-Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "Fuji, Koyo and Botan are preferred to pick up from Felis Shop, with Fuji being the absolute first priority, especially when missing Tempered Warrior. Read the danger for further explanation.",
							danger:
								"Sakura's Core is not necessary to complete. After getting Fuji, you can proceed to focus on getting Griseo and finishing Sakura 1st core on later floors, particularly after Mech Land. Also, Ayame is good to consider taking for the purposes of getting Yellow applied through early Ultimate so you can get your maximum damage output as soon as possible, however you can also instead pick Eden's Initial/Max SP for this.",
						},
						{
							name: "Griseo - Signet of Stars (4th or 3rd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "Due to HoFS' problem of using Ult right away to apply Yellow, you'll usually want to leave at least one charge of UE for the purposes of being able to reset Overheat meter right after using Ultimate. Also one important thing to note here: You'll want to make sure to get Yellow next if you happen to get Fallen Leaves from a Griseo door. Or in the case you get A Flame Extinguished, then pick Yellow over it.",
						},
						{
							name: "Pardofelis - Signet of Reverie (5th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
							note: "Max HP/SP is what we're mainly looking for.",
						},
						{
							name: "Eden - Signet of Gold (6th Core)",
							lists: [
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "1st",
								},
							],
							note: "This is strongly recommended to take as soon as you can, due to it enabling HoFS to instantly ult before starting her herrscher mode, thus being able to apply Yellow paint, and along with it, Fallen Leaves right away for the biggest damage bonuses possible right off the bat.",
						},
					],
				},
			},
			{
				name: "HoFS General Build 7D",
				note: "Updated for 6.1. Your normal, standard Tuna build that has only 3 necessary Cores. Has downscaling problems, however.",
				boss: { info: "Hephaestus, then Elysia (fastest times) or Aponia" },
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "DoI & 3-set Himeko",
							time: "7:19m (6.0A)",
							ref: "https://youtu.be/sBqs_DAPdAk",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "DoI & Leuween TB Thales M",
							time: "9:44m (6.0A)",
							ref: "https://youtu.be/6vlIJ4hAKT8",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. However, do note that Leuween TB Thales M has some serious problems to be taken into account that will be noted down in some of the signets info.",
				},
				buff: {
					lists: [
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Mad King's Mask",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Forget-Me-Not / Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "VKE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "You want to save BR specifically for after entering Herrscher Mode on the first snap. Basically, when you're about to use your first Blackhole in Herrscher Form for the maximum output of damage possible.",
					danger:
						"VKE for Heimdall fight is recommended in order to fill his Heavy Bar Trauma. Do note that this is specifically for getting him out of Red Mode forcibly once its filled.",
				},
				signet: {
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Heatflow",
									description:
										"Black holes generated by the Herrscher of Flamescion deal 75% bonus Fire DMG. Triggering Ultimate Evasion Skill creates an additional black hole",
									priority: "Start",
								},
								{
									name: "Blessing of Reburn",
									description:
										"Triggering Ultimate Evasion Skill removes Overheat and clears Heat",
									priority: "1st",
								},
								{
									name: "Blessing of Tempered Warrior",
									description:
										"Aerial Combo ATKs reduce Ultimate Evasion Skill CD by 9s",
									priority: "2nd",
								},
								{
									name: "Blessing of Starfire",
									description:
										"When a black hole created by the Herrscher of Flamescion ends, a smaller black hole lasting 5s is generated to deal 300% ATK of Fire DMG per second. CD: 3s",
									priority: "Optional",
								},
								{
									name: "Blessing of Flamescion",
									description:
										"For every black hole created by the Herrscher of Flamescion, Valkyrie restores 25 HP per second and deals 30% bonus Total DMG",
									priority: "No",
								},
							],
							note: "The minimum requirement of Tuna is to have Heatflow and Reburn as her starting signets. Without Reburn, she feels awful to play. Without Heatflow, she doesn't feel like she has much damage. So, a double Ego start is essential for Tuna. Afterwards, getting a 3rd Ego door is very good, taking Tempered Warrior to make the entire run easier and feel better. 4th is also taken for Starfire, adding even more damage but it's not really necessary.",
							danger:
								"If using Leuween TB Thales M, Tempered Warrior becomes an absolute must. Either you get it early, or you hope to get it later; if you don't get it early, Setsuna's Fuji will become a priority to get as soon as possible, preferentially in F5 or F6 shop.",
						},
						{
							name: "Kalpas - Signet of Decimation (1st Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description:
										"The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
									priority: "Optional (Priority only by F9 afterwards)",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description:
										"The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional (Not necessary)",
								},
							],
							danger:
								"Kalpas Enhanceds, no matter if you're running Himeko or Leuween Thales, are never good to take right after completing his core. Instead of wasting one door for F5 or F6 with Kalpas, use it for either Sakura or Griseo, or go shop and get Fuji, then proceed with Griseo signets.",
							note: "I also strongly recommend upgrading Kalpas' Max HP after both of his DMG boosts if you're using Himeko. Himeko M giving 25% max HP paired with Kalpas 40% Max HP from +3 and Pardofelis Max HP signet makes it possible to reach up to 16k or 17k HP which gives Kalpas an absolutely massive scaling on his +3 DMG Boosts.",
						},
						{
							name: "Sakura - Signet of Setsuna (2nd Core)",
							lists: [
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description:
										"Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
									priority: "Optional",
								},
								{
									name: "Sakura-ni-Maku",
									description: "",
									priority: "Core",
								},
							],
							danger:
								"Fuji is a first priority if the next 2 conditions are met: Using Leuween TB Thales M and no Tempered Warrior before F7. In Himeko's case, it won't matter if you get it without Tempered Warrior, but will do a big favor for you, so it's still good to take. ",
							note: "After getting Fuji, you can then proceed to leave completing Sakura by F11 onwards, with Griseo taking the priority. Also, Ayame is good to consider taking for the purposes of getting Yellow applied through early Ultimate so you can get your maximum damage output as soon as possible.",
						},
						{
							name: "Griseo - Signet of Stars (3rd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "Due to HoFS' problem of using Ult right away to apply Yellow, you'll usually want to leave at least one charge of UE for the purposes of being able to reset Overheat meter right after using Ultimate. ",
						},
						{
							name: "Pardofelis - Signet of Reverie (4th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
							note: "Pardofelis has amazing synergy with Kalpas for the purposes of increasing the max HP and thus getting more boosts out of his buffs.",
						},
						{
							name: "Hua - Signet of Vicissitude (5th Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "2nd",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Hua is not necessary to complete.",
						},
					],
				},
			},
		],
	},
	{
		name: "Herrscher of Human: Ego",
		type: "PHY",
		keyword: "hohe hoe h2o herrscher of human ego elysia ellie",
		builds: [
			{
				name: "Ultimate Build",
				note: "Updated for 6.1. The stronger variation that also clears faster.",
				boss: {
					info: "Hephaestus, then Elysia for fastest time. The rest are also easy choices.",
				},
				setup: {
					lists: [
						{
							rank: "S1",
							difficult: "Finality",
							gear: "DoEgo & 3-set Pristine",
							time: "3:47m (6.0A)",
							ref: "https://youtu.be/Fgkcml9kPLw",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. Even with complete cope gears such as Call of Crescent and full Ana Schariac or just Light String, HoH can still clear Finality.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Memory / Pseudo Miracle / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE / BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "LE / BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "LE / BR",
						},
					],
					note: "LE gives you instant ult, also comfier, whereas BR is preferred if you might be lacking damage, especially for early floors.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Reroll start into Griseo Red Paint by 2F, Griseo 2nd Core with Black & Dark and Yellow & Warm, shop by F5 or F6 and try to grab Petals in the Wind (purple). Then Vill-V 2nd Core by F7 double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of First Bloom",
									description:
										"In Herrscher of Origin Form, Ice DMG increases by 50%. In Herrscher of Human Form, using Charged ATKs reduces Ultimate CD by 1s and restores 20 SP.",
									priority: "Start",
								},
								{
									name: "Blessing of First Awakening",
									description:
										"In Herrscher of Origin Form, triggering Ultimate Evasion Skill restores 400 Herrscher Charge and Charged ATKs and special weapon skill deal an additional 1500% ATK of Ice DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of First Journey",
									description:
										"When switching to Herrscher Form, increase DMG taken by all enemies by 40% for 5s and gain 4 Pristine Crystals. Charged ATKs in Herrscher of Human Form and Ultimate Evasion Skill in Herrscher of Origin Form will clear all Pristine Crystals to deal 1200% x 4 ATK of Ice DMG.",
									priority: "1st",
								},
								{
									name: "Blessing of First Encounter",
									description:
										"Charged ATKs in Herrscher of Human Form pull enemies on both sides of the arrow slightly towards the center. Charged ATKs deal an additional 1200% ATK of Ice DMG. If a Charged ATK hits more than 10 times, enemies take 10% more Total DMG from Charged ATKs for every Nexus Signet owned (cannot stack).",
									priority: "No",
								},
								{
									name: "Blessing of First Yearning",
									description:
										"In Herrscher of Human Form, Charged ATK Speed increases by 30% for 5s after triggering Ultimate Evasion Skill. When using Charged ATK, shooting speed continously increases, up to a maximum of 80%. Move Speed while using Charged ATKs increases by 100%. Resets when Charged ATK ends. When Charged ATK hits, Ultimate Evasion CD decreases by 2.5s and weapon skill CD decreases by 1s. Gain 1 stack of Crystal Ice Mirror for every Charged ATK that hits an enemy. Every stack of Crystal Ice Mirror increases DMG from Charged ATK's by 10%.",
									priority: "No",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "Optional 4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "1st",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "2nd",
								},
							],
							note: "You can leave the Enhanceds for later doors, as once you get the 2nd Core, you'll want to have either Kalpas or Hua's cores unlocked.",
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "All 3 Enhanceds are priority to take, but can leave A Flame Extinguished for a later floor Griseo door, because Vill-V 2nd core is important to take by F7.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (4th Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description:
										"Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description:
										"Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
									priority: "Optional",
								},
							],
							note: "Broken Dream best taken from Felis shop, as gambling for it on a door might not pay off.",
						},
						{
							name: "Sakura - Signet of Setsuna (5th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "Optional",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Shinra Bansho",
									description: "",
									priority: "Core",
								},
							],
							note: "The choice between both Cores doesn't matter. 1st will be more impactful if you for some reason don't kill in the last seconds of Ult duration.",
						},
						{
							name: "Pardofelis - Signet of Reverie (6th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
							note: "Felis signets are better taken from shop.",
						},
					],
				},
			},
			{
				name: "Ballista Build",
				note: "Updated for 6.1. The slightly weaker variant with slightly less clear time, but nevertheless at the same strength as Ult build.",
				boss: {
					info: "Hephaestus, then Elysia for fastest time. The rest are also easy choices.",
				},
				setup: {
					lists: [
						{
							rank: "S1",
							difficult: "Finality",
							gear: "DoEgo & 3-set Pristine",
							time: "4:12m (6.0A)",
							ref: "https://youtu.be/OdJ-aHcehW0",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Mad King's Mask",
							second: "Falling in Past Light",
						},
						{
							time: "Mid",
							first: "Pseudo Miracle / Veil of Tears / Home Lost",
							second: "Falling in Past Light",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Falling in Past Light",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "Use BR right from the start of the run. Then proceed to use her every other floor to reduce your HP as much as possible.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Kalpas 1F, Vill-V or Aponia 2F, Kalpas 1 Core by F4, shop by F5 or F6, complete V-V and Aponia 2nd Cores by F7 double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of First Yearning",
									description:
										"In Herrscher of Human Form, Charged ATK Speed increases by 30% for 5s after triggering Ultimate Evasion Skill. When using Charged ATK, shooting speed continously increases, up to a maximum of 80%. Move Speed while using Charged ATKs increases by 100%. Resets when Charged ATK ends. When Charged ATK hits, Ultimate Evasion CD decreases by 2.5s and weapon skill CD decreases by 1s. Gain 1 stack of Crystal Ice Mirror for every Charged ATK that hits an enemy. Every stack of Crystal Ice Mirror increases DMG from Charged ATK's by 10%.",
									priority: "Start",
								},
								{
									name: "Blessing of First Encounter",
									description:
										"Charged ATKs in Herrscher of Human Form pull enemies on both sides of the arrow slightly towards the center. Charged ATKs deal an additional 1200% ATK of Ice DMG. If a Charged ATK hits more than 10 times, enemies take 10% more Total DMG from Charged ATKs for every Nexus Signet owned (cannot stack).",
									priority: "Start",
								},
								{
									name: "Blessing of First Bloom",
									description:
										"In Herrscher of Origin Form, Ice DMG increases by 50%. In Herrscher of Human Form, using Charged ATKs reduces Ultimate CD by 1s and restores 20 SP.",
									priority: "No",
								},
								{
									name: "Blessing of First Awakening",
									description:
										"In Herrscher of Origin Form, triggering Ultimate Evasion Skill restores 400 Herrscher Charge and Charged ATKs and special weapon skill deal an additional 1500% ATK of Ice DMG.",
									priority: "No",
								},
								{
									name: "Blessing of First Journey",
									description:
										"When switching to Herrscher Form, increase DMG taken by all enemies by 40% for 5s and gain 4 Pristine Crystals. Charged ATKs in Herrscher of Human Form and Ultimate Evasion Skill in Herrscher of Origin Form will clear all Pristine Crystals to deal 1200% x 4 ATK of Ice DMG.",
									priority: "No",
								},
							],
							note: "Ballista build only requires 2 Ego signets. As such, this doesn't use the double reroll start. ",
						},
						{
							name: "Kalpas - Signet of Decimation (1st Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Fight, Struggle, and Decimation",
									description: "",
									priority: "Core",
								},
							],
							note: "Why Kalpas 1? Simply because it has the small added bonus of Fire DMG to aid a little with your already shitton overloaded damage. Kalpas2 doesn't really give anything.",
						},
						{
							name: "Vill-V - Signet of Helix (2nd Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
								{
									name: "Saga: Overlapping Needles",
									description:
										"Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG.",
									priority: "Filler",
								},
							],
						},
						{
							name: "Aponia - Signet of Discipline (3rd Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (4th Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description:
										"Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description:
										"Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
									priority: "Optional",
								},
							],
							note: "Broken Dream best taken from Felis shop, as gambling for it on a door might not pay off.",
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
							],
							note: "Take this or Sakura",
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Shinra Bansho",
									description: "",
									priority: "Core",
								},
							],
							note: "Take this or Griseo. The choice between both Cores doesn't matter. 1st will be more impactful if you for some reason don't kill in the last seconds of Ult duration.",
						},
					],
				},
			},
		],
	},
	{
		name: "Herrscher of Reason",
		type: "MECH",
		keyword: "bronya zaychik hor hr herrscher of reason",
		builds: [
			{
				name: "[SoE-Only] Ultimate Build",
				note: "Updated 6.1. Do note that SoE feels a bit weak compared to DoR. Nevertheless, this is the strongest build done up until now from testing.",
				boss: {
					info: "Hephaestus, then Aponia",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "SoE:W & 3-set Ana Schariac",
							time: "7:57m (6.1)",
							ref: "https://youtu.be/WtWG29ySI7s",
						},
					],
					note: "In downscalability terms, this build might be weaker the lower your stigmatas are. It's advised to go with a better valk instead. Also, Willows is still much better.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Memory / Mad King's Mask / Forget-Me-Not",
							second: "Because of You / The Lonely Moon",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "The Lonely Moon will help guaranteeing F4 double. After, switch it out for Because of You at F5 Shop. Then, switch it back for The Lonely Moon after F12.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "Remember to switch BKE in by F10 just before Heimdall fight. Without BKE, you'll have a really hard time against Heimdall otherwise. Then, you can switch her out for BR if you already have SP Regen covered.",
				},
				signet: {
					note: "Ideal order from F1-F7: Reset F2 for Griseo Red Paint start, then take Aponia's SP Regen by F3, unlock Aponia 2nd Core by F4 with Ultimate & 70 Load, go shop F5 and put Because of You, buy Aponia's Breach or Penance if you get them, otherwise take Hua's Elem Breach, Sakura's TDM Taken and TDM or Black & Dark from Griseo. Grab Aponia door F6, then unlock Hua 2nd Core by F7 double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Wisdom",
									description:
										"In bike mode, Charged ATK inflicts a Structural Impact on enemies hit and deals 2250% ATK of Ice DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Truth",
									description:
										"Triggering Ultimate Evasion Skill fully restores Konstruktyom. When Konstruktyom is below 120, any evasion can trigger Ultimate Evasion Skill",
									priority: "1st",
								},
								{
									name: "Blessing of Inspiration",
									description:
										"Triggering an Ultimate Evasion by any means inflicts a Structural Impact on enemies hit and deals 3750% ATK of Ice DMG",
									priority: "2nd",
								},
								{
									name: "Blessing of Reason",
									description:
										"Every hit from hover guns reduces weapon active CD by 0.7s",
									priority: "No",
								},
								{
									name: "Blessing of Creation",
									description:
										"In non-bike mode, Charged ATKs create 4 hover guns to attack, each dealing 160% ATK of Ice DMG on hit",
									priority: "No",
								},
							],
							note: "This build mainly relies on 3 main Ego signets: Starting with Wisdom, this signet will carry you through your entire early game up until F11 where you need the double reward to get both Truth + Inspiration. The other signets are worthless.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "Optional 3rd",
								},
							],
							note: "Punish Evil's spot can instead be used for completing Hua2.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description:
										"Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description:
										"Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
									priority: "Optional",
								},
							],
							note: "If you have no better choices for doors, you can try to take Broken Dream.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (4th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
					],
				},
			},
			{
				name: "[DOR-Only] Weapon Active Spam Build",
				note: "Updated 6.1. This is the strongest and easiest build for HoR compared to other options. Also, please note that this is DoR-only, as SoE has a substantial difference from this.",
				boss: {
					info: "Hephaestus, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 DoR & 3-set Ana Schariac",
							time: "6:49 (6.0A)",
							ref: "https://youtu.be/uA5SCbf7Pcs",
						},
					],
					note: "The easier, stronger and faster variation. However, this build relies mainly on DoR's existence.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Rainbow of Absence / Forget-Me-Not / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "You can take Because of You as start, or by F5 shop for getting the remainder of Ego signets.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "LE",
						},
						{
							time: "Late",
							first: "AE",
							second: "LE",
						},
					],
					note: "You never take LE out.",
				},
				signet: {
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Wisdom",
									description:
										"In bike mode, Charged ATK inflicts a Structural Impact on enemies hit and deals 2250% ATK of Ice DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Reason",
									description:
										"Every hit from hover guns reduces weapon active CD by 0.7s",
									priority: "1st",
								},
								{
									name: "Blessing of Truth",
									description:
										"Triggering Ultimate Evasion Skill fully restores Konstruktyom. When Konstruktyom is below 120, any evasion can trigger Ultimate Evasion Skill",
									priority: "2nd",
								},
								{
									name: "Blessing of Inspiration",
									description:
										"Triggering an Ultimate Evasion by any means inflicts a Structural Impact on enemies hit and deals 3750% ATK of Ice DMG",
									priority: "Optional",
								},
								{
									name: "Blessing of Creation",
									description:
										"In non-bike mode, Charged ATKs create 4 hover guns to attack, each dealing 160% ATK of Ice DMG on hit",
									priority: "No",
								},
							],
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional 4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (3rd Core)",
							lists: [
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act VI: Sneer",
									description:
										"Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
								{
									name: "Saga: Overlapping Needles",
									description:
										"Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG.",
									priority: "Filler",
								},
							],
							note: "Sneer is nice to take but preferentially from Felis shop. It helps spam even further. ",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (5th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd or 1st",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "Fuji takes priority if you manage to get a 3rd Ego Door for Truth. ",
						},
					],
				},
			},
			{
				name: "Ultimate Build",
				note: "Updated 6.1. The weaker build version. This is only to be considered if you want to for some reason play HoR, but you do not possess either DoR or SoE.",
				boss: {
					info: "Hephaestus, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 DoR & 3-set Ana Schariac",
							time: "9:14 (6.0A)",
							ref: "https://youtu.be/cgnVNUf8Ye0",
						},
					],
					note: "This build is not very strong in downscaling terms with lower clear times and lower gear requirement.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Rainbow of Absence / Forget-Me-Not / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Stained Sakura / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "LE",
						},
						{
							time: "Late",
							first: "AE",
							second: "LE",
						},
					],
				},
				signet: {
					note: "Ideal order from F1-F7: Double Ego start into Aponia door F3, Aponia 2nd Core by F4, grab Aponia's Breach enhanced from F5 or F6 and get Griseo 2nd Core by F7 doubles.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Truth",
									description:
										"Triggering Ultimate Evasion Skill fully restores Konstruktyom. When Konstruktyom is below 120, any evasion can trigger Ultimate Evasion Skill",
									priority: "Start",
								},
								{
									name: "Blessing of Wisdom",
									description:
										"In bike mode, Charged ATK inflicts a Structural Impact on enemies hit and deals 2250% ATK of Ice DMG",
									priority: "1st",
								},
								{
									name: "Blessing of Inspiration",
									description:
										"Triggering an Ultimate Evasion by any means inflicts a Structural Impact on enemies hit and deals 3750% ATK of Ice DMG",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Reason",
									description:
										"Every hit from hover guns reduces weapon active CD by 0.7s",
									priority: "Optional 3rd",
								},
								{
									name: "Blessing of Creation",
									description:
										"In non-bike mode, Charged ATKs create 4 hover guns to attack, each dealing 160% ATK of Ice DMG on hit",
									priority: "No",
								},
							],
							note: "This build requires 2 minimum, 3 at best, Ego signets in order: Truth, Wisdom and Inspiration. The best start is with a Triple Ego start taking Inspiration as your 3rd Ego signet if you're lucky enough to manage to get it in your run. Can also take a 4th for Reason, however it's not necessary.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional 4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (3rd Core)",
							lists: [
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "3rd",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Setsuna Blade: Ame-Shiko",
									description:
										"Activating Sakura Screen resets Ultimate CD and weapon active CD",
									priority: "Optional",
								},
							],
							note: "Can try to take Ame-Shiko, however it's often not really worth to grab a Sakura door just for trying to get it.",
						},
						{
							name: "Hua - Signet of Vicissitude (4th Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description:
										"Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description:
										"Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (2nd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "Take this or Pardofelis",
						},
						{
							name: "Pardofelis - Signet of Reverie (6th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
							note: "Take this or Kalpas",
						},
					],
				},
			},
		],
	},
	{
		name: "Herrscher of Sentience",
		type: "BIO",
		keyword: "fu hua fuhua hos hs herrscher of sentience",
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1.",
				boss: {
					info: "Husk, then Vill-V (easiest) or Aponia",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Senpri & Shattered Swords",
							time: "7:47m (6.0A)",
							ref: "https://youtu.be/jalMiRdgqEw",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Senpri & Ely TB PoloM",
							time: "8:29m (6.0A)",
							ref: "https://youtu.be/7OyB4IOkjGA",
						},
					],
					note: "This build is downscaleable with lower clear time based on stats/gears/rank and lower difficulties. Double Clear is not necessary but is nice, you can perfectly clear with this build, especially in 6.0 weather. The one important thing to note from this build is that, especially if you're downscaling in gears but not on difficulty, you want to learn to time The Lonely Moon perfectly into clearing a new wave of mobs right away. Even 1 or 2 seconds later is still fine. Griseo's skill is monstruously op when used this way, due to how easily it can delete waves instantly and apply all your unlocked paints if they're somehow alive still. ",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Rainbow of Absence / Gold Goblet / Mad King's Mask",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Good Old Days / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "BR",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BR / BKE",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Reroll into Apo2 Core by F4, then 1 Griseo door before F7, then finish Griseo by F7 double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Victory",
									description:
										"In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of Dark Plumes",
									description:
										"Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
									priority: "1st",
								},
								{
									name: "Blessing of Supremacy",
									description:
										"Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Ego",
									description:
										"Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
									priority: "No",
								},
								{
									name: "Blessing of Legion",
									description:
										"Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
									priority: "No",
								},
							],
							note: "This build only requires 2, Victory and Dark Plumes. Rerolling for double start with Dark Plumes is essential as you otherwise will have to deal with SP regen problems without it. If you get a 3rd Ego door during your run, you can take Supremacy for an even smoother run.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "Optional 2nd or 3rd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "Optional 2nd or 3rd",
								},
							],
							note: "After Apo2 core, Griseo core is the best one to go after next.",
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "The moment you get any of the basic paints of Griseo, the gameplay changes. It's essential to save the weapon active and UE skill to time them together with her Ultimate, having all 3 paints. Taint Extension is also very crucial for this, as the +0 alone will increase the duration from 8s to 13s, making up for an entire ult duration of 2 complete series of Victory Slashes.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Kosma - Signet of Daybreak (4th Core)",
							lists: [
								{
									name: "Talons that Desecrate the Sanctuary",
									description:
										"Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description:
										"Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description:
										"Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "3rd",
								},
								{
									name: "Heart that Commited Seven Crimes",
									description: "Rend lasts 5s longer.",
									priority: "4th, YES",
								},
								{
									name: "Daybreak, Lone Beacon",
									description: "",
									priority: "Core",
								},
								{
									name: "Heart, Unshakable Character",
									description:
										"Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Choice, Ensuing Regret",
									description:
										"When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional",
								},
								{
									name: "Dawn, Perpetual Wait",
									description:
										"While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
									priority: "Filler",
								},
							],
							note: "Ensuing Regret takes priority only and only if you get Kalpas2 and you're going to get his Enhanceds, mainly his breach or the adaptive dmg. Otherwise Perpetual Wait is always the choice over this as it'll be more consistent and Kalpas2 is usually left for later floors. Be advised though, that these are not recommended to look after unless you have no choice due to RNG.",
						},
						{
							name: "Eden - Signet of Gold (5th Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Filler",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
							],
						},
					],
				},
			},
			{
				name: "Mobius Build",
				note: "Load buffs adjusted and up to date for 6.1.",
				boss: {
					info: "Husk, then Vill-V or Aponia",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Senpri & Shattered Swords",
							time: "8:30m (5.9B)",
							ref: "ttps://youtu.be/j_UFFAe3yWI",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement.",
					danger:
						"Also, through testing, 3-set Sirin Ascendant has about the same clear time as Shattered Swords. SSwords remains the better contender in general.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Forbidden Seed",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Veil of Tears / Gold Goblet / Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Good Old Days",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "BR",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BR / BKE",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Reroll into 5 max Mobius signets, then 1 Aponia door before F7, then finish Aponia for F7 double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Victory",
									description:
										"In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of Ego",
									description:
										"Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
									priority: "1st",
								},
								{
									name: "Blessing of Dark Plumes",
									description:
										"Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
									priority: "Optional",
								},
								{
									name: "Blessing of Supremacy",
									description:
										"Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
									priority: "Filler",
								},
								{
									name: "Blessing of Legion",
									description:
										"Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
									priority: "No",
								},
							],
							note: "This build only requires 2, Victory and Ego. Double start is strictly necessary as Ego and Mobius are the main core of this build. You can also take Dark Plumes as 3rd but no more, which will massively help with the SP regen and make the build smoother, especially before F7 as it will be lacking.",
						},
						{
							name: "Mobius - Signet of Infinity (1st Core)",
							lists: [
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%.",
									priority: "1st",
								},
								{
									name: "Lodging [C]",
									description:
										"ELF Ultimates and Support Valkyries' support skills have 20% reduced CD.",
									priority: "2nd",
								},
								{
									name: "Entwined [P]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max).",
									priority: "3rd",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "4th",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync.",
									priority: "1st",
								},
								{
									name: "Newborn [X]",
									description:
										"Triggering Mind Sync again during Mind Sync no longer resets the duration but extends the duration by 4.0s instead. With any summoned entity present, the duration is extended by 5s additionally.",
									priority: "Optional",
								},
							],
							note: "Lip Poison start is the most meaningful, as it has more noticeable damage increase. Also, Lodging is far more valuable than Rodent for finishing 1st core, allowing you to use SN for F7 on Smelter Zombie making it easier to get the double on time. Regarding Newborn, it's only considered if you want to upgrade Dead [X].",
						},
						{
							name: "Aponia - Signet of Discipline (2nd Core)",
							lists: [
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "YES",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "Filler",
								},
							],
							note: "SP Regen takes the priority here for this build as start, as without Dark Plumes, Senti will have noticeable SP problems by F7.",
						},
						{
							name: "Griseo - Signet of Stars (3rd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "The moment you get any of the basic paints of Griseo, the gameplay changes. It's essential to save the weapon active and UE skill to time them together with her Ultimate, having all 3 paints. Taint Extension is also very crucial for this, as the +0 alone will increase the duration from 8s to 13s, making up for an entire ult duration of 2 complete series of Victory Slashes.",
						},
						{
							name: "Eden - Signet of Gold (4th Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Filler",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Silent Night",
									description:
										"After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends.",
									priority: "Optional",
								},
							],
						},
					],
				},
			},
			{
				name: "Kosma Build",
				note: "Updated to 6.1. Strength is pretty close to General Build, but otherwise still loses to it.",
				boss: {
					info: "Hephaestus, then Elysia or Vill-V (easiest)",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Senpri & 3-Set Shattered Swords",
							time: "8:34 (6.0A)",
							ref: "https://youtu.be/YjfVFkgrusA",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement. This is also the 3rd in ranking of strength, only do it for fun.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Fragile Friend",
							second: "Out of Reach",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Out of Reach",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "BR",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BR / BKE",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Victory",
									description:
										"In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of Dark Plumes",
									description:
										"Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
									priority: "1st",
								},
								{
									name: "Blessing of Supremacy",
									description:
										"Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
									priority: "Optional",
								},
								{
									name: "Blessing of Ego",
									description:
										"Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
									priority: "No",
								},
								{
									name: "Blessing of Legion",
									description:
										"Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
									priority: "No",
								},
							],
							note: "This build only requires 2, Victory and Dark Plumes. Rerolling for double start with Dark Plumes is essential as you otherwise will have to deal with SP regen problems without it. If you get a 3rd Ego door during your run, you can take Supremacy for an even smoother run.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "YES",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "Filler",
								},
							],
							note: "After Apo2 core, what follows is Kosma and Kalpas cores. Explanation in their respective sections.",
						},
						{
							name: "Kosma - Signet of Daybreak (2nd Core)",
							lists: [
								{
									name: "Talons that Desecrate the Sanctuary",
									description:
										"Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description:
										"Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description:
										"Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "3rd",
								},
								{
									name: "Heart that Commited Seven Crimes",
									description: "Rend lasts 5s longer.",
									priority: "4th, YES",
								},
								{
									name: "Daybreak, Lone Beacon",
									description: "",
									priority: "Core",
								},
								{
									name: "Heart, Unshakable Character",
									description:
										"Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Choice, Ensuing Regret",
									description:
										"When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional",
								},
								{
									name: "Dawn, Perpetual Wait",
									description:
										"While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
									priority: "Filler",
								},
							],
							note: "Ensuing Regret takes priority only and only if you get Kalpas2 and you're going to get his Enhanceds, mainly his breach or the adaptive dmg. Otherwise Perpetual Wait is always the choice over this as it'll be more consistent and Kalpas2 is usually left for later floors. Be advised though, that these are not recommended to look after unless you have no choice due to RNG.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description:
										"The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description:
										"The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
									priority: "Filler",
								},
							],
							note: "Kalpas Enhanceds are only to pair together with Kosma's Ensuing Regret, otherwise don't bother.",
						},
						{
							name: "Pardofelis - Signet of Reverie (4th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
							note: "Pardofelis has amazing synergy with Kalpas for the purposes of increasing the max HP and thus getting more boosts out of his buffs.",
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
							],
							note: "Griseo signets are better bought from Felis shop. There's no need to finish 2nd Core. But nevertheless her signets provide a good help for this build.",
						},
					],
				},
			},
		],
	},
	{
		name: "Herrscher of Thunder",
		type: "PHY",
		keyword: "herrscher of thunder raiden mei hot ht",
		builds: [
			{
				name: "4-5 Revived Build",
				note: "Updated 6.1. This is the 3rd strongest build, and also competes with the others in being the most braindead to play... sort of. The strength of this build is that it is very solid and has damage on everything. 4-5, 7T actives, Dragon slam, Finisher, Shinzan. Overall, it's pretty good.",
				danger:
					"Do note though, that this build is not recommended if your HoT is not S1+. Narukami Finisher is stronger.",
				boss: {
					info: "Hephaestus, then Elysia or Mobius/Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 7T & Handel",
							time: "6:53 (6.0A)",
							ref: "https://youtu.be/hRm5kgih2ao",
						},
					],
					note: "This build's downscalability in terms of weapon and stigmatas has yet to be tested. I cannot say yet how it will do without 7T and Handel, especially 7T as it's what makes this build work, and Handel offers a massive damage boost compared to Benares Awakening or other cope stigmatas. However, if you do have them, even if underleveled, then you can downscale accordingly.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
					danger:
						"If not using 7T, then you should instead go with the 10 Load buff that gives 15% TDM as long as your valk doesn't take damage.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Rainbow of Absence / Pseudo Miracle / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego start into Aponia door F3, unlock Aponia 2nd Core by F4, grab Aponia Breach enhanced from F5 or F6, then get Griseo 2nd Core by F7 double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Tsukuyomi",
									description:
										"Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s",
									priority: "Start",
								},
								{
									name: "Blessing of Hazy Moon",
									description:
										"Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK Of Lightning DMG on hit",
									priority: "Start",
								},
								{
									name: "Blessing of Narukami",
									description:
										"Finisher unleashes 8 bolts of Thundering Sanction, each dealing 900% ATK of Lightning DMG on hit",
									priority: "Optional",
								},
								{
									name: "Blessing of Divine Penalty",
									description:
										"In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG",
									priority: "No",
								},
								{
									name: "Blessing of Mitama",
									description:
										"Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 100 bonus Herrscher Charge",
									priority: "No",
								},
							],
							note: "This build works with 2 Ego signets: Tsukuyomi into Hazy Moon start. These 2 form the core of the build. A 3rd Ego door for Narukami is strongly recommended, as it further enhances this build and makes it even stronger.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional 4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "Taint extension is better bought from Felis shop. Everything else is a get.",
						},
						{
							name: "Vill-V - Signet of Helix (3rd Core, Interchangeable w/ 5th)",
							lists: [
								{
									name: "Act VI: Sneer",
									description:
										"Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "**Must-take**",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
							note: "Vill-V is completely optional. The one signet you want from her at all costs is Sneer to reduce 7T's cooldown and have Ult available as soon as possible. You can still get her core in exchange for Hua.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (5th Core, interchangeable with 3rd)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Hua isn't as necessary. Even for the breach, you can take Vill-V's instead and you'll already have up to 92%~98% (S0~SS1 HoT) breach with V-V's breach sitting at +0 upgrade alone, assuming you get the max 50% breach from Aponia's enhanced.",
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "Optional",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Shinra Bansho",
									description: "",
									priority: "Core",
								},
							],
							note: "The choice between both cores doesn't matter. Up to you.",
						},
					],
				},
			},
			{
				name: "Bombard Build",
				note: "Updated and proper adjustments made for 6.1. The 2nd strongest build. This build also has a surprisingly good time with DoS & Benares Awakening. It also seems to prefer DoS, but nonetheless 7T still does really well.",
				danger:
					"This build can't work if your HoT isn't at least S2 rank. S2 is essential to make Bombard work.",
				boss: {
					info: "Hephaestus, then Elysia or Mobius/Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 7T & Handel",
							time: "4:53 (6.0A)",
							ref: "https://youtu.be/5Ivtllc8h1Y",
						},
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 DoS & Benares: Awakening",
							time: "6:25 (6.0A)",
							ref: "https://youtu.be/FD6YiTvLYnQ",
						},
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 DoS & Handel",
							time: "7:06 (6.0A)",
							ref: "https://youtu.be/XDaxl4Aesxw",
						},
					],
					note: "This build's downscalability is pretty surprising. DoS & Benares: Awakening also wins second spot in terms of strength over DoS & Handel. Basically, you can work with either DoS or 7T, however DoS should win over 7T due to the buffs that DoS provides overall.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Memory / Mad King's Mask / Pseudo Miracle / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "LE",
						},
						{
							time: "Late",
							first: "AE",
							second: "LE",
						},
					],
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego start into Griseo Red/Yellow Paint on F3, unlock Griseo 2nd Core by F4, grab Griseo's Blue paint by F5, get Fallen Leaves or Petals in the Wind F6, leave the unpicked enhanced for F7 and grab Grey & Empty.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Divine Penalty",
									description:
										"In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Mitama",
									description:
										"Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 100 bonus Herrscher Charge",
									priority: "1st",
								},
								{
									name: "Blessing of Narukami",
									description:
										"Finisher unleashes 8 bolts of Thundering Sanction, each dealing 900% ATK of Lightning DMG on hit",
									priority: "2nd",
								},
								{
									name: "Blessing of Hazy Moon",
									description:
										"Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK Of Lightning DMG on hit",
									priority: "No",
								},
								{
									name: "Blessing of Tsukuyomi",
									description:
										"Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s",
									priority: "No",
								},
							],
							note: "This build works with 2 Ego signets: Divine Penalty + Mitama. Taking 3rd Ego door is strongly recommended to make this build even stronger: Narukami (finisher). Remaining 2 are unnecessary.",
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "4th",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "Taint Extension is a must to grab in-between getting the 2 Enhanceds, all 3 basic paints and Black & Dark. The reason is that it will enable the paints to last through the entire ult duration, especially when missing Narukami, so your bombard will be buffed by Griseo paints buffs throughout its entire duration.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "If you have no better choices, grab Hua door to try and get Broken Dream.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Pardofelis - Signet of Reverie (4th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
								{
									name: "Empty Illusions, Empty Fantasies",
									description: "",
									priority: "Core",
								},
							],
							danger:
								"1st Core if you manage to get Kalpas 2nd core to synergize together with it. If you haven't managed to get Kalpas 2nd core otherwise, get Pardo 2nd core instead.",
						},
						{
							name: "Vill-V - Signet of Helix (5th Core)",
							lists: [
								{
									name: "Act VI: Sneer",
									description:
										"Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "1st",
								},
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
							],
							note: "Spider Web is ONLY taken when you manage to get Narukami as it boosts its damage by a shitton. Finishing core is also not necessary.",
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
							note: "You only want to grab these from Sakura, and preferentially from Shop.",
						},
					],
				},
			},
			{
				name: "Narukami Finisher Build",
				note: "Updated for 6.1. The strongest build out of all 3 that also strongly competes really closely with Bombard, but is the definite winner for any rank of HoT.",
				boss: {
					info: "Hephaestus, then Elysia or Mobius/Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 7T & Handel",
							time: "5:01 (6.0A)",
							ref: "https://youtu.be/WSNNT-c0wns",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "65 7T & Handel",
							time: "8:17 (6.0A)",
							ref: "https://youtu.be/3oqKVTRESns",
						},
					],
					note: "Expect the strength of this build to be a bit weaker with lower stigmatas.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.0 (2nd Half)",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Memory / Mad King's Mask / Pseudo Miracle / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "LE",
						},
						{
							time: "Late",
							first: "AE",
							second: "LE",
						},
					],
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego start into Griseo Red/Yellow Paint on F3, unlock Griseo 2nd Core by F4, grab Griseo's Blue paint by F5, get Fallen Leaves or Petals in the Wind F6, then grab Hua door or otherwise Griseo for F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Narukami",
									description:
										"Finisher unleashes 8 bolts of Thundering Sanction, each dealing 900% ATK of Lightning DMG on hit",
									priority: "Start",
								},
								{
									name: "Blessing of Tsukuyomi",
									description:
										"Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s",
									priority: "1st",
								},
								{
									name: "Blessing of Hazy Moon",
									description:
										"Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK Of Lightning DMG on hit",
									priority: "2nd",
								},
								{
									name: "Blessing of Mitama",
									description:
										"Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 100 bonus Herrscher Charge",
									priority: "No",
								},
								{
									name: "Blessing of Divine Penalty",
									description:
										"In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG",
									priority: "No",
								},
							],
							note: "This build works with 2 Ego signets: Narukami + Tsukuyomi. Double start is essential, as Tsukuyomi provides the SP regen needed to keep ulting throughout waves. A 3rd Ego door can be picked for Hazy Moon to have some damage window outside of Burst Mode.",
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "A Flame Extinguished is not essential, but can still be taken.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "If you have no better choices, grab Hua door to try and get Broken Dream.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (4th Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act VI: Sneer",
									description:
										"Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "2nd",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Special Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
							note: "V-V enhanceds aren't necessary to take, but you can if you want to.",
						},
						{
							name: "Pardofelis - Signet of Reverie (5th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
								{
									name: "Empty Illusions, Empty Fantasies",
									description: "",
									priority: "Core",
								},
							],
							danger:
								"1st Core if you manage to get Kalpas 2nd core to synergize together with it. If you haven't managed to get Kalpas 2nd core otherwise, get Pardo 2nd core instead.",
							note: "Spider Web is ONLY taken when you manage to get Narukami as it boosts its damage by a shitton. Finishing core is also not necessary.",
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
							note: "You only want to grab these from Sakura, and preferentially from Shop.",
						},
					],
				},
			},
		],
	},
	{
		name: "Herrscher of the Void",
		type: "BIO",
		keyword: "gk god kiana hov hv hotv herrscher of the void herrscher of void",
		builds: [
			{
				name: "Thanos Snap Build",
				note: "Updated for 6.1. Thanos Snap is the strongest build out of the two possible builds for HoV. Also, Mobius has been revived, and it is now used for the build.",
				boss: {
					info: "Husk or Hephaestus, then Elysia (fastest clear/speedrun) or Aponia",
					note: "Hephaestus is only ever taken if you want the fastest clear time for F17. If you aren't looking for that, then by any means, just stick with Husk instead, as it's the safer and more comfortable option.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Sirin Ascendant",
							time: "3:57m (6.0B)",
							ref: "https://youtu.be/fPhUSG4sug8",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Elysia",
							time: "6:33m (6.0A)",
							ref: "https://youtu.be/m9ODUGWtI-8",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Mich TB Polo M",
							time: "9:53m (5.9B)",
							ref: "https://youtu.be/5iB58b-fAQQ",
						},
						{
							rank: "S3",
							difficult: "Finality",
							gear: "Lv55 DoV & Sirin Ascendant",
							time: "7:26 (6.0A)",
							ref: "https://youtu.be/oMdHkVnh7bE",
						},
						{
							rank: "S3",
							difficult: "Finality",
							gear: "Lv55 DoV & 3-set Elysia",
							time: "10:08m (6.0A)",
							ref: "https://youtu.be/WkSisfkTyA0",
						},
					],
					danger:
						"These above are listed based on their potential strength. First listed is the strongest. Also, watch out for builds without SirinA M or Elysia M, as the playstyle changes a bit.",
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement. However, do note that this valkyrie requires at least Keys of Void to be played in ER. Without her signature weapon, she can't stay in permanent Herrscher Mode.",
				},
				buff: {
					lists: [
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Forget-Me-Not",
							second: "Tsukimi Himiko",
						},
						{
							time: "Mid",
							first: "Forbidden Seed / Pseudo Miracle / Rainbow of Absence",
							second: "Boundless Logos",
						},
						{
							time: "Late",
							first: "Stained Sakura / Key to the Deep",
							second: "Boundless Logos",
						},
					],
					note: "Tsukimi Himiko is swapped out for Boundless Logos at F5 Shop. When you reach F5 or F6 shop, you'll want to be looking for Kalpas TDM and Phys/Elem DMG boost or Max HP signets and switch VC for BR, additionally abusing the swap out spam trick for lowering your health to below 100 to abuse the most out of Kalpas buffs at this point easily, without having to get Kalpas2 beforehand. BR will stay for the remainder of the run.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "VC / BR",
							second: "SS",
						},
						{
							time: "Mid",
							first: "VC / BR / BKE",
							second: "SS",
						},
						{
							time: "Late",
							first: "VC / BR",
							second: "SS",
						},
					],
					note: "BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego Start, Sakura TDM by F3, finish Sakura 1st Core by F4, go shop F5 and grab either Kalpas' both DMG boosts or Max HP + DMG boost and one of the 3 desired signets from Mobius; swap Forget-Me-Not for Forbidden Seed and Tsukimi Himiko for Boundless Logos. Finish Mobius 1st Core by F7 and get Dead [X] in F8",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Innateness",
									description:
										"Reduces CD of Ultimate Evasion Skill, weapon skill and Ultimate by 6s each when summoning Space Core. In Herrscher Form, Basic ATKs directly connect to SEQ 3 for a short duration after triggering Ultimate Evasion.",
									priority: "Start",
								},
								{
									name: "Blessing of Coleus",
									description:
										"Physical DMG dealt by Space Core increases by 80%. Regain 30 Herrscher Charge and gain 20% more Total DMG for 5s upon summoning Space Core. Triggering it again resets the duration. In Herrscher Form, Space Core's area of explosion is expanded and can gather surrounding enemies.",
									priority: "1st",
								},
								{
									name: "Blessing of Annihilation",
									description:
										"In Herrscher Form, the 3rd SEQ of Basic ATK includes one blow of Charged ATK: Time Tremor that deals 200% ATK of Physical DMG.",
									priority: "Optional 2nd or 3rd",
								},
								{
									name: "Blessing of Virtuality",
									description:
										"Ultimate Evasion Skill can be triggered even without Ultimate Evasion conditions when there are no enemies along the path of Phase Shuttle. Time-slow area of effect triggered by Ultimate Evasion Skill expands and all enemies in range take 30% more Total DMG for 12s. Triggering it again resets the duration.",
									priority: "Optional 2nd or 3rd",
								},
								{
									name: "Blessing of Law",
									description:
										"Aerial explosion triggered after Ultimate ends deal 2000% ATK of Physical DMG. Gain Spatial Silence stacks after summoning Space Core. Triggering aerial explosion will clear all Spatial Silence stacks and deal additional number of Spatial Silence stacks x 150% ATK of Physical DMG while restoring number of Spatial Silence stacks x 5 SP.",
									priority: "No",
								},
							],
							note: "Innateness is a must, Coleus is needed, so double Ely start is the best. It's also strongly recommended to grab a 3rd and even 4th Ego door. Your choice is between Virtuality or Annihilation, and it comes down to personal preference as both are strong in their own with almost no noticeable difference whatsoever, however, if you don't like Virtuality's downsides (can make mobs have delayed spawn or lock some enemies in the air in a way that HoV can't target them and reduce her CD's with Innateness), then Annihilation is taken for smoother gameplay.",
						},
						{
							name: "Sakura - Signet of Setsuna (1st Core)",
							lists: [
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "Filler",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Setsuna Blade: Ino-Shika-Cho",
									description:
										"When Sakura Screen is active, moving around can pause its duration countdown for up to 3.0s.",
									priority: "Optional",
								},
							],
							note: "Fuji together with Sakura Screen are the notorius black goats of this build. Fuji is really nasty as it intensifies the cheese even further as it allows for a constant UE spam without any 1 sec delays whatsoever due to waiting its CD, allowing for maximum DPS output. However, this requires the 20% CDR from Elysia M or SirinA M. As for Ino-Shika-Cho, it's not necessary to take.",
						},
						{
							name: "Mobius - Signet of Infinity (2nd Core)",
							lists: [
								{
									name: "Entwined [P]",
									description:
										":For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "3rd",
								},
								{
									name: "Lodging [C]",
									description:
										"ELF Ultimates and Support Valkyries' support skills have 20% reduced CD",
									priority: "Optional",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description:
										"Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
									priority: "Optional",
								},
							],
							note: "Dead [X] is a massive upgrade to HoV's damage, especially for downscaling.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (4th Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
							note: "Puppetry is essential because otherwise you'll be lacking Breach. It's also priority to +3 upgrade.",
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st YES",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "Red & Hot is the absolute first priority, followed by Black & Dark. Petals in the Wind is a risky gamble to try and get unless you have no other better doors.",
						},
						{
							name: "Pardofelis - Signet of Reverie (6th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
							note: "Pardo's core is not necessary to get. You want to aim for her Max HP signet.",
						},
						{
							name: "Eden - Signet of Gold (Felis Shop Signets)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
			{
				name: "Gate of Babylon Build",
				note: "Updated for 6.1. Slower clear build, but in terms of strength, it's vastly superior.",
				boss: {
					info: "Husk or Hephaestus, then Elysia, Aponia or Vill-V",
					note: "Hephaestus is only ever taken if you want the fastest clear time for F17. If you aren't looking for that, then by any means, just stick with Husk instead, as it's the safer and more comfortable option.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Sirin Ascendant",
							time: "5:25 (6.0B)",
							ref: "https://youtu.be/0ZiDYsghgFM",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Sirin Ascendant",
							time: "6:40 (6.0A)",
							ref: "https://youtu.be/Oi9dDp6xo5A",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement. However, do note that this valkyrie requires at least Keys of Void to be played in ER. Without her signature weapon, she can't stay in permanent Herrscher Mode.",
				},
				buff: {
					lists: [
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Forbidden Seed",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Rainbow of Absence / Memory / Mad King's Mask",
							second: "Boundless Logos",
						},
						{
							time: "Late",
							first: "The First Scale / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "VC",
							second: "SS",
						},
						{
							time: "Mid",
							first: "VC / BKE",
							second: "SS",
						},
						{
							time: "Late",
							first: "VC / BR",
							second: "SS",
						},
					],
					note: "VC for the entirety of the run remains surprisingly strong and a consistent buffer for HoV. BR is only recommended to take if you get Coleus from a 3rd Ego door during your run, and for the Heph F17 fight. BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "2 Ego Start, Entwined [P] by F2, finish Mobius 1st Core by F4 with Rodent [V] and Lip Poison [E], go shop F5, grab Griseo's Red Paint and Sakura's TDM Taken, TDM or Fuji and swap Forbidden Seed to Rainbow of Absence, get Dead [X] by F6 and finish Griseo 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Innateness",
									description:
										"Reduces CD of Ultimate Evasion Skill, weapon skill and Ultimate by 6s each when summoning Space Core. In Herrscher Form, Basic ATKs directly connect to SEQ 3 for a short duration after triggering Ultimate Evasion.",
									priority: "Start",
								},
								{
									name: "Blessing of Law",
									description:
										"Aerial explosion triggered after Ultimate ends deal 2000% ATK of Physical DMG. Gain Spatial Silence stacks after summoning Space Core. Triggering aerial explosion will clear all Spatial Silence stacks and deal additional number of Spatial Silence stacks x 150% ATK of Physical DMG while restoring number of Spatial Silence stacks x 5 SP.",
									priority: "1st",
								},
								{
									name: "Blessing of Coleus",
									description:
										"Physical DMG dealt by Space Core increases by 80%. Regain 30 Herrscher Charge and gain 20% more Total DMG for 5s upon summoning Space Core. Triggering it again resets the duration. In Herrscher Form, Space Core's area of explosion is expanded and can gather surrounding enemies.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Virtuality",
									description:
										"Ultimate Evasion Skill can be triggered even without Ultimate Evasion conditions when there are no enemies along the path of Phase Shuttle. Time-slow area of effect triggered by Ultimate Evasion Skill expands and all enemies in range take 30% more Total DMG for 12s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
								{
									name: "Blessing of Annihilation",
									description:
										"In Herrscher Form, the 3rd SEQ of Basic ATK includes one blow of Charged ATK: Time Tremor that deals 200% ATK of Physical DMG.",
									priority: "No",
								},
							],
							note: "Innateness is a must, Law is the core of this build. You can also take 3rd and 4th Ego doors, which would respectively be Coleus and Virtuality. They aren't needed, however they are nice to have, especially Coleus for the gather. Virtuality on the other hand lets you play safely.",
						},
						{
							name: "Mobius - Signet of Infinity (1st Core)",
							lists: [
								{
									name: "Entwined [P]",
									description:
										":For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "3rd",
								},
								{
									name: "Lodging [C]",
									description:
										"ELF Ultimates and Support Valkyries' support skills have 20% reduced CD",
									priority: "Optional",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description:
										"Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
									priority: "Optional",
								},
							],
							note: "Dead [X] is an absolute must especially with downscaled gears as it makes up for a really significant buff to damage for the remainder of the run once you get it. Lodging and Unknown can be taken when downscaling or when no better options.",
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st YES",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "Red & Hot is the absolute first priority, followed by Yellow & Warm and Black & Dark. A Flame Extinguished is ideal 1st in this build due to ease of proc for finishing with Ultimate and because of the 40% Phys Def reduction, however if you end up missing one of the 3 paints, take one of the other 3 enhanceds according to which ones you have.",
						},
						{
							name: "Hua - Signet of Vicissitude (3rd Core)",
							lists: [
								{
									name: "No One to Share",
									description:
										"Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Days Gone",
									description:
										"Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
									priority: "Optional",
								},
							],
							note: "Hua here is mainly for the unconditional Breach which you'll want to prioritize to upgrade. It is also the safest way to play HoV thanks to her shield, and especially as Kalpas2 + BR is used for this. Virtuality helps to offset this to some extent however, if you don't manage to get Hua's 2nd core in the run. ",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "You can abuse the trick at Shop for switching one support to BR, use it, switch BR out and put her again, rinse and repeat to bring your HP down to 100 to use Kalpas buffs to the fullest even if you don't get Kalpas 2nd Core. ",
						},
						{
							name: "Sakura - Signet of Setsuna (5th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "Optional",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "Getting Sakura Core isn't required for this build. Only those signets from Felis shop if you have nothing else better to get.",
						},
						{
							name: "Pardofelis - Signet of Reverie (6th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
								{
									name: "Empty Illusions, Empty Fantasies",
									description: "",
									priority: "Core",
								},
							],
							note: "Pardo1 preferred if you have Kalpas and its Max HP. Pardo2 preferred if you don't, or you don't care about it.",
						},
					],
				},
			},
		],
	},
	{
		name: "Jade Knight",
		type: "PHY",
		keyword: "jade knight jk li sushang",
		builds: [
			{
				name: "Unlimited Blade Works Build - Aponia Variation",
				note: "Updated for 6.1. This build basically focuses on A spam. It's her strongest general build, taking into account ranks, downscaling and weather-related buffs & debuffs. On the other hand, however, it is heavily reliant on gather. The strongest variation of Sussy's UBW build, which fully utilizes Aponia signets' strength alongside Griseo, resulting in a really deadly and strong as fuck build that melts through enemies easily like a rain of millions of knives going through butter.",
				boss: {
					info: "Hephaestus, then Elysia, Mobius, Aponia or Vill-V",
					note: "There's no particular preference over each other in regards to the bosses. Aponia has the inconvenience of making Sushang's Sword Array dissapear so you have to fill Blade Mantra up to full to use it again as you won't have ult back by the time she transitions to P2. Mobius, on the other hand, is more comfortable with gather. V-V is easy, just lock on the turret until it's destroyed. Elysia, however, is the tankiest boss so if your damage isn't looking good enough, go with the other bosses instead.",
				},
				setup: {
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "Nocturnal & Shenzhou",
							time: "3:37 (6.1)",
							ref: "https://youtu.be/Pld1F3JfVbw",
						},
					],
					danger:
						"Sus is a pretty strong valkyrie in her own right, and her downscalability is one of the best amongst the available valkyries in ER.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Boundless Feeling",
						},
						{
							time: "Mid",
							first: "Rainbow of Absence / Gold Goblet / Mad King's Mask",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "You can choose to start with Boundless Feeling for the free +1 upgrade value on every Aponia signet picked. TLM's best value is by F9 after you're done getting all 3 Aponia's Enhanceds at which point you can proceed with Griseo signets.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "BR",
							second: "LE",
						},
						{
							time: "Mid",
							first: "BR",
							second: "LE / BKE",
						},
						{
							time: "Late",
							first: "BR",
							second: "LE",
						},
					],
					note: "LE allows you for instant ult at the beginning of every floor. With Nocturnal Sheath, she also allows you to get the 175sp cost down right away, for maximum buffs benefit from the extra 25 sp mechanic of Sussy. BKE, on the other hand, can be taken for Heimdall if you don't feel confident enough on your damage or your RNG with the signets gotten. VC is the best choice for comfortable gather if u want it.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start into Aponia Basic ATK F3, finish Aponia 2nd Core by F4 with Ultimate & 70 Initial Load, grab Aponia's Breach or Penance F5, go shop F6, buy Griseo's Red and Yellow or Red and Kalpas' TDM (abuse BR), upgrade Aponia's Basic ATK to +2 or +3, grab Aponia's other 2 Enhanceds from F7 double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Great Blade",
									description:
										"[ATK] will consume an additional 5 Blade Sanction in Sword Array, triggering [Cloud Cutter] twice, dealing DMG and 200% ATK of Ice DMG to enemies within 3m.",
									priority: "Start",
								},
								{
									name: "Blessing of Cloudwalker",
									description:
										"[Wild Swords] and [Heart Piercer] deal an additional 800% ATK of Ice DMG. [Heart Piercer] draws in enemies when triggered. [Heart Piercer] will be unleashed automatically when Blade Sanction reaches 0. Jade Knight will enter [Cloud Cut] mode when casting [Cloud Cutter]. Can stack 100 max, 8s duration. Triggering it again resets the duration. [Cloud Cutter] and [Heart Piercer]'s Ice DMG increases 1% per stack.",
									priority: "1st",
								},
								{
									name: "Blessing of Jade Moon",
									description:
										"Ultimate will deal an additional 2500% ATK of Ice DMG. Back Wind Slash reduces Ultimate CD by 8s. After casting Ultimate, Bolt Slash will not consume Blade Sanction and Ice DMG dealt increases by 40% for 5s. Triggering it again resets the duration.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Smoky Waft",
									description:
										"Blade Sanction built up by Basic ATKs increases by 100%. Restore 8 SP when [Bolt Slash] strikes an enemy. Special Combo [Back Wind Slash] deals an additional 100% ATK of Ice DMG.",
									priority: "No",
								},
								{
									name: "Blessing of Shaft",
									description:
										"[ULT] during Sword Array triggers [Bolt Slash], dealing an additional 400% ATK of Ice DMG. Back Wind Slash restores an additional 5 SP.",
									priority: "No",
								},
							],
							note: "This build only requires 2 Ego signets and doesn't need any more: Great Blade + Cloudwalker. You can take a 3rd Ego for Jade Moon, however it's not needed, and it's mostly just for more damage in her ult and reapplying Yellow if you do NOT get Griseo's Taint extension.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Basic ATK is high priority to +3, providing an insane powerspike in Sussy's damage.",
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "4th",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Optional 4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "Optional 1st",
								},
								{
									name: "Echo of Silent Night",
									description:
										"After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends.",
									priority: "Optional 2nd",
								},
							],
							note: "If you get Withered Soil, the best approach next would be to prioritize getting Su2 done alongside its SP regen to make the strongest synergy possible out of it with Eden2. Silent Night best taken as filler if didn't get Withered Soil.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							note: 
								"Pick this or Su or Pardofelis As Sussy has weak healing, she can stay at low HP enough to make use of most of Kalpas' buffs without his 2nd Core.",
							danger:
								"This means that you can complete any of these 3 based on the RNG for the remainder of your run. Kalpas signets can be completely picked off from Felis Shop, it does not need the Core unlock. Keep that in mind.",
						},
						{
							name: "Su - Signet of Bodhi (5th Core)",
							lists: [
								{
									name: "Motto of Dibba-Cakkhu",
									description:
										"Combo hits are reset at 150 to boost Total DMG taken by all enemies by 35% for 10s.",
									priority: "1st",
								},
								{
									name: "Motto of Pubbe-Nivasanussati",
									description:
										"Combo hits are reset at 150 to boost Total DMG by 55% for 10s.",
									priority: "2nd",
								},
								{
									name: "Motto of Asavakkhaya",
									description:
										"Attacks grant 25 bonus combo hits on hit. CD: 5s.",
									priority: "3rd",
								},
								{
									name: "Motto of Iddhi-Vidha",
									description:
										"Combo hits are increased to 60 when below 60. CD: 10s.",
									priority: "4th",
								},
								{
									name: "Motto of Ceto-Pariya-Nana",
									description: "Combo hits are reset at 150 to restore 30 SP.",
									priority: "5th",
								},
								{
									name: "Dictum of Bodhi",
									description: "",
									priority: "Core",
								},
							],
							danger:
								"This means that you can complete any of these 3 based on the RNG for the remainder of your run. Kalpas signets can be completely picked off from Felis Shop, it does not need the Core unlock. Keep that in mind.",
							note: "Pick this or Kalpas or Pardofelis",
						},
						{
							name: "Pardofelis - Signet of Reverie (6th Core)",
							lists: [
								{
									name: "Flexible P&C",
									description:
										"Every 100 Shiny Silvers obtained this round restore 1 HP and 0.1 SP. Taking DMG disables this effect for 5s.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8 %.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy ",
									description: "",
									priority: "Core",
								},
								{
									name: "Empty Illusions, Empty Fantasies ",
									description: "",
									priority: "Core",
								},
							],
							danger:
								"This means that you can complete any of these 3 based on the RNG for the remainder of your run. Kalpas signets can be completely picked off from Felis Shop, it does not need the Core unlock. Keep that in mind.",
							note: 
								"Pick this or Kalpas or Su. Doesn't matter which of these cores you pick between.",
						},
					],
				},
			},
			{
				name: "Unlimited Blade Works Build - Hua & Kosma Variation",
				note: "Updated for 6.1. This build basically focuses on A spam. It's her strongest general build, taking into account ranks, downscaling and weather-related buffs & debuffs. On the other hand, however, it is heavily reliant on gather. So, having as much means of reliable gather as possible is strongly recommended for this build. You can expect a sharp decline in the strength and efficiency if you're not hitting everyone. Without effective means of gather, this build effectively loses out by A LOT as its main effectiveness is through AoE hitting every monster which is achieved by gathering them. If you're hitting only one monster after the other, you'll notice really poor performance and results from this build.",
				boss: {
					info: "Hephaestus, then Mobius, Aponia or Vill-V (not recommended due to Hua)",
					note: "There's no particular preference over each other in regards to the bosses. Aponia has the inconvenience of making Sushang's Sword Array dissapear so you have to fill Blade Mantra up to full to use it again as you won't have ult back by the time she transitions to P2. Mobius, on the other hand, needs gather which Kosma should easily provide.",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Lv55 Nocturnal & 3-set Ana",
							time: "5:44 (6.1)",
							ref: "https://youtu.be/CYP9mv76lbU",
						},
					],
					danger:
						"Sushang is a strong valkyrie in terms of downscalability. Basically, her strength isn't that severely impacted from low gears, as long as the difference is not too massive and of course this will be less noticeable the lower the difficulty is. Basically, the impact from lower/cope gear relative to difficulty isn't as big.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Memory",
							second: "The Lonely Moon / Out of Reach",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Rainbow of Absence / Fragile Friend",
							second: "The Lonely Moon / Out of Reach",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "The Lonely Moon / Out of Reach",
						},
					],
					note: "With UBW build's weakness of being gather-reliant, Out of Reach provides you a really convenient means of gather. However, The Lonely Moon is more preferred as not only it helps guaranteeing double bonuses but also +1 to Griseo signets which you'll want to have at least 2 enhanceds before Heimdall fight.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE / VC / HB",
							second: "BR",
						},
						{
							time: "Mid",
							first: "BKE",
							second: "BR",
						},
						{
							time: "Late",
							first: "VC / HB",
							second: "BR",
						},
					],
					note: 
						"AE's Elemental Breach does NOT stack with Sussy's. Due to this, she's weaker as a support of choice for her, and VC & HB are better options. Now, regarding who to choose. AE's advantages are for Early only: gather, 30% Elem Taken, SP Regen. VC is for the purposes of reliable and consistent gather only. HB, on the other hand, has WAY more DMG boost during all stages of the run. TLDR; HB for maximum damage bonus, VC for easy and reliable gather, AE for gather/elem taken early on. BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start into Hua Elem Breach F3, finish Hua 2nd Core by F4, either gamble for Broken Dream F5 or take Griseo/Kalpas door, go shop F6 and get Griseo Red/Yellow/Black or Kalpas TDM/Phys & Elem DMG/TDM Taken. Sakura TDM Taken and TDM can also be considered, and upgrade Hua Breach. Finish Griseo 2nd Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Great Blade",
									description:
										"[ATK] will consume an additional 5 Blade Sanction in Sword Array, triggering [Cloud Cutter] twice, dealing DMG and 200% ATK of Ice DMG to enemies within 3m.",
									priority: "Start",
								},
								{
									name: "Blessing of Cloudwalker",
									description:
										"[Wild Swords] and [Heart Piercer] deal an additional 800% ATK of Ice DMG. [Heart Piercer] draws in enemies when triggered. [Heart Piercer] will be unleashed automatically when Blade Sanction reaches 0. Jade Knight will enter [Cloud Cut] mode when casting [Cloud Cutter]. Can stack 100 max, 8s duration. Triggering it again resets the duration. [Cloud Cutter] and [Heart Piercer]'s Ice DMG increases 1% per stack.",
									priority: "1st",
								},
								{
									name: "Blessing of Jade Moon",
									description:
										"Ultimate will deal an additional 2500% ATK of Ice DMG. Back Wind Slash reduces Ultimate CD by 8s. After casting Ultimate, Bolt Slash will not consume Blade Sanction and Ice DMG dealt increases by 40% for 5s. Triggering it again resets the duration.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Smoky Waft",
									description:
										"Blade Sanction built up by Basic ATKs increases by 100%. Restore 8 SP when [Bolt Slash] strikes an enemy. Special Combo [Back Wind Slash] deals an additional 100% ATK of Ice DMG.",
									priority: "No",
								},
								{
									name: "Blessing of Shaft",
									description:
										"[ULT] during Sword Array triggers [Bolt Slash], dealing an additional 400% ATK of Ice DMG. Back Wind Slash restores an additional 5 SP.",
									priority: "No",
								},
							],
							note: "This build only requires 2 Ego signets and doesn't need any more: Great Blade + Cloudwalker. You can take a 3rd Ego for Jade Moon, however it's not needed, and it's mostly just for more damage in her ult and reapplying Yellow and Kosma's Ultimate 15 Rend.",
						},
						{
							name: "Hua - Signet of Vicissitude (1st Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Getting Broken Dream is really helpful, as such, it's not a bad choice to try and gamble for her. You can also restart your run in order to get it if you don't mind.",
						},
						{
							name: "Kalpas - Signet of Decimation (2nd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							danger:
								"Two important things. One, it is NOT necessary to finish Kalpas 2nd Core. The reason is because Sushang has minor healing, which combined with BR, will ensure she'll stay at less than 1000 HP for the most part. Also, getting Kosma2 afterwards will make her permastay at 1 HP. You also want to abuse BR at shop the moment you get his DMG boosts. Always make sure to stay at less than 100 HP.",
						},
						{
							name: "Griseo - Signet of Stars (3rd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
							note: "Having Fallen Leaves and Petals in the Wind by Heimdall fight is HUGELY beneficial and strongly recommended to have the best chances at getting past him. ",
						},
						{
							name: "Kosma - Signet of Daybreak (4th Core)",
							lists: [
								{
									name: "Talons that Desecrate the Sanctuary",
									description:
										"Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description:
										"Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description:
										"Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "3rd",
								},
								{
									name: "Heart that Commited Seven Crimes",
									description: "Rend lasts 5s longer.",
									priority: "4th",
								},
								{
									name: "Daybreak, Lone Beacon",
									description: "",
									priority: "Core",
								},
								{
									name: "Heart, Unshakable Character",
									description:
										"Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Dawn, Perpetual Wait",
									description:
										"While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
									priority: "2nd",
								},
								{
									name: "Choice, Ensuing Regret",
									description:
										"When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional",
								},
							],
							note: "Finishing Kosma 2nd Core is a MUST and it is a huge powerspike right after Heimdall for the late floors. You can also swap The Lonely Moon out for Out of Reach to further strengthen this.",
						},
						{
							name: "Eden - Signet of Gold (Felis Shop Signets)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Optional 4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "Optional 1st",
								},
							],
							note: "Eden is really low priority because it isn't really that good on practice for Sushang on this build. Only consider to pick her signets from Felis Shop.",
						},
						{
							name: "Sakura - Signet of Setsuna (Felis Shop Signets)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
							note: "Sakura signets are better picked off from shop and nothing else.",
						},
					],
				},
			},
			{
				name: "Unlimited Blade Works Build [Eden & Su Variation]",
				note: "Updated for 6.1. This build basically focuses on A spam. It's her strongest general build, taking into account ranks, downscaling and weather-related buffs & debuffs. This particular variant focuses in the use of Eden & Su, abusing the synergy that both have between themselves. However, do expect this build's strength to fall off when Eden is no longer +2.",
				boss: {
					info: "Hephaestus, then Mobius, Aponia or Vill-V (not recommended due to Hua)",
					note: "There's no particular preference over each other in regards to the bosses. Aponia has the inconvenience of making Sushang's Sword Array dissapear so you have to fill Blade Mantra up to full to use it again as you won't have ult back by the time she transitions to P2. Mobius, on the other hand, needs gather which Kosma should easily provide.",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "GTX & 3-set Scott",
							time: "8:57m (6.1)",
							ref: "https://youtu.be/Z9kMkellZtU",
						},
					],
					danger:
						"Sushang is a strong valkyrie in terms of downscalability. Basically, as shown by the run above done with GTX & Scott, her strength isn't that severely impacted from low gears. On more unfavorable weathers, however, this will become a bit more noticeable.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Gold Goblet",
							second: "Dreamful Gold",
						},
						{
							time: "Mid",
							first:
								"Light as a Bodhi Leaf / Memory / Veil of Tears / Rainbow of Absence",
							second: "Empty Like Shala / The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "Empty Like Shala's purpose is just for getting +1 free upgrade on Su's signets. After which, it's swapped out for The Lonely Moon. ",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "BR",
							second: "HB / LE",
						},
						{
							time: "Mid",
							first: "BKE / BR",
							second: "BKE / LE",
						},
						{
							time: "Late",
							first: "BR",
							second: "HB / LE",
						},
					],
					note: 
						"AE's Elemental Breach does NOT stack with Sussy's. Regarding the other choices, LE is only used when you're using Sushang without her signature weapon, or when you don't have it, you instead swap her out the moment you get Eden's Initial/Max SP signet. Take this fact into consideration when switching out BR before Heimdall fight. Basically, keep LE if you don't have Nocturnal Stealth or once you get Eden's Initial/Max SP. BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start Eden's TDM F3, finish Eden 2nd Core by F4 with Phys/Elem DMG and Sp/s, grab Eden's Withered Soil at F5 and go shop F6, swap Dreamful Gold for Empty Like Shala, buy 2/3 Su Signets (TDM Taken, 25 Hits, 30 SP) and finish Su 2nd Core by F7 double, afterwards you can continue with Hua or Griseo.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Great Blade",
									description:
										"[ATK] will consume an additional 5 Blade Sanction in Sword Array, triggering [Cloud Cutter] twice, dealing DMG and 200% ATK of Ice DMG to enemies within 3m.",
									priority: "Start",
								},
								{
									name: "Blessing of Cloudwalker",
									description:
										"[Wild Swords] and [Heart Piercer] deal an additional 800% ATK of Ice DMG. [Heart Piercer] draws in enemies when triggered. [Heart Piercer] will be unleashed automatically when Blade Sanction reaches 0. Jade Knight will enter [Cloud Cut] mode when casting [Cloud Cutter]. Can stack 100 max, 8s duration. Triggering it again resets the duration. [Cloud Cutter] and [Heart Piercer]'s Ice DMG increases 1% per stack.",
									priority: "1st",
								},
								{
									name: "Blessing of Jade Moon",
									description:
										"Ultimate will deal an additional 2500% ATK of Ice DMG. Back Wind Slash reduces Ultimate CD by 8s. After casting Ultimate, Bolt Slash will not consume Blade Sanction and Ice DMG dealt increases by 40% for 5s. Triggering it again resets the duration.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Smoky Waft",
									description:
										"Blade Sanction built up by Basic ATKs increases by 100%. Restore 8 SP when [Bolt Slash] strikes an enemy. Special Combo [Back Wind Slash] deals an additional 100% ATK of Ice DMG.",
									priority: "No",
								},
								{
									name: "Blessing of Shaft",
									description:
										"[ULT] during Sword Array triggers [Bolt Slash], dealing an additional 400% ATK of Ice DMG. Back Wind Slash restores an additional 5 SP.",
									priority: "No",
								},
							],
							note: "This build only requires 2 Ego signets and doesn't need any more: Great Blade + Cloudwalker. You can take a 3rd Ego for Jade Moon, albeit not being necessary, it can be useful for reapplying Eden 2nd Core in case its charges gonna run out.",
						},
						{
							name: "Eden - Signet of Gold (1st Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "1st",
								},
								{
									name: "Echo of Silent Night",
									description:
										"After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends.",
									priority: "Optional 2nd",
								},
							],
							note: "Silent Night will be useful for the lack of breach from other signets.",
						},
						{
							name: "Su - Signet of Bodhi (2nd Core)",
							lists: [
								{
									name: "Motto of Dibba-Cakkhu",
									description:
										"Combo hits are reset at 150 to boost Total DMG taken by all enemies by 35% for 10s.",
									priority: "1st",
								},
								{
									name: "Motto of Pubbe-Nivasanussati",
									description:
										"Combo hits are reset at 150 to boost Total DMG by 55% for 10s.",
									priority: "2nd",
								},
								{
									name: "Motto of Asavakkhaya",
									description:
										"Attacks grant 25 bonus combo hits on hit. CD: 5s.",
									priority: "3rd",
								},
								{
									name: "Motto of Iddhi-Vidha",
									description:
										"Combo hits are increased to 60 when below 60. CD: 10s.",
									priority: "4th",
								},
								{
									name: "Motto of Ceto-Pariya-Nana",
									description: "Combo hits are reset at 150 to restore 30 SP.",
									priority: "5th",
								},
								{
									name: "Dictum of Bodhi",
									description: "",
									priority: "Core",
								},
							],
							note: "The SP Regen from Su is a vital and essential must-get in order to obtain the synergy with Eden2's Withered Soil. ",
						},
						{
							name: "Hua - Signet of Vicissitude (3rd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Getting Broken Dream is really helpful, as such, it's not a bad choice to try and gamble for her. You can also restart your run in order to get it if you don't mind.",
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (Felis Shop Signets)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
							],
						},
					],
				},
			},
			{
				name: "Dash ATK Build",
				note: "Updated for 6.1. This build focuses basically on B Spam. As a warning, this build is a bit more limited in usage, as it requires your Sushang to be strong enough as to have damage overflow, due to B spam consuming Blade Mantra. It can potentially beat or contest strongly with A spam build. It's also not gather-reliant.",
				boss: {
					info: "Hephaestus, then Vill-V, Mobius or Aponia",
					note: "You only consider Mobius if you have a reliable gather for the Miniature [X] dolls.",
				},
				setup: {
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "Nocturnal & Shenzhou",
							time: "To be Tested",
							ref: "To be Tested",
						},
					],
					danger:
						"This build variant's compatibility with downscalability might be worse than UBW build. Do take that into consideration when wanting to do this build over the other.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Dreamful Gold",
						},
						{
							time: "Mid",
							first: "Memory / Gold Goblet / Rainbow of Absence",
							second: "Dreamful Gold",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Dreamful Gold",
						},
					],
					note: "The Lonely Moon will guarantee you a Double bonus clear for 4F. Dreamful Gold, on the other hand, it's the more comfier option if you don't like The Lonely Moon for some reason.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE / BKE",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego Start for Shaft and Jade Moon, then Hua Elem Breach F3, finish Hua 2nd Core by F4, either gamble for Broken Dream F5 or take Eden/Griseo door, go shop F6 and get Griseo Red/Yellow/Black or Eden TDM and Phys & Elem DMG. Kalpas TDM and Phys/Elem DMG can also be considered, and upgrade Hua Breach. Finish Eden 2nd Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Shaft",
									description:
										"[ULT] during Sword Array triggers [Bolt Slash], dealing an additional 400% ATK of Ice DMG. Back Wind Slash restores an additional 5 SP.",
									priority: "Start",
								},
								{
									name: "Blessing of Jade Moon",
									description:
										"Ultimate will deal an additional 2500% ATK of Ice DMG. Back Wind Slash reduces Ultimate CD by 8s. After casting Ultimate, Bolt Slash will not consume Blade Sanction and Ice DMG dealt increases by 40% for 5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Blessing of Smoky Waft",
									description:
										"Blade Sanction built up by Basic ATKs increases by 100%. Restore 8 SP when [Bolt Slash] strikes an enemy. Special Combo [Back Wind Slash] deals an additional 100% ATK of Ice DMG.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Great Blade",
									description:
										"[ATK] will consume an additional 5 Blade Sanction in Sword Array, triggering [Cloud Cutter] twice, dealing DMG and 200% ATK of Ice DMG to enemies within 3m.",
									priority: "No",
								},
								{
									name: "Blessing of Cloudwalker",
									description:
										"[Wild Swords] and [Heart Piercer] deal an additional 800% ATK of Ice DMG. [Heart Piercer] draws in enemies when triggered. [Heart Piercer] will be unleashed automatically when Blade Sanction reaches 0. Jade Knight will enter [Cloud Cut] mode when casting [Cloud Cutter]. Can stack 100 max, 8s duration. Triggering it again resets the duration. [Cloud Cutter] and [Heart Piercer]'s Ice DMG increases 1% per stack.",
									priority: "No",
								},
							],
							note: "This build functions on 2 Ego signets: Shaft and Jade Moon. A 3rd Ego signet can be picked for Smoky Waft, and it's mainly for synergy with Eden2 to further have more SP Regen overflow and function alongside Withered Soil.",
						},
						{
							name: "Hua - Signet of Vicissitude (1st Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Getting Broken Dream is really helpful, as such, it's not a bad choice to try and gamble for her. You can also restart your run in order to get it if you don't mind.",
						},
						{
							name: "Eden - Signet of Gold (2nd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Optional 4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "1st",
								},
							],
							note: "Withered Soil is a good option to consider when you already have excessive SP Regen overflow, mainly with Apo2's SP Regen and Eden's Sp/s.",
						},
						{
							name: "Aponia - Signet of Discipline (3rd Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "(Jade Moon Only) 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
							note: "Basic ATK still wins in priority over Ultimate due to it being your main source of damage. Punish Evil is a good choice when u have Eden2 to further have SP regen overflow.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "Kalpas' TDM Taken on HP Loss should only be considered if you have BR.",
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "You can choose to go for Eden2 as your next core after you're finished with Griseo2's Core if you want to have her Core before further pursuing Griseo2's Enhanceds.",
						},
						{
							name: "Sakura - Signet of Setsuna (Felis Shop Signets)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
							note: "Sakura signets are better picked off from shop and nothing else.",
						},
					],
				},
			},
		],
	},
	{
		name: "Infinite Ouroboros",
		type: "MECH",
		keyword: "mobius io infinite ouroboros snek snake",
		builds: [
			{
				name: "Non-Kevin Build",
				note: "Updated for 6.1. This build has less dependancy on Kevin's short-lived buffs, instead having consistent buffs that stay present throughout whole floors, even outside of Ultimate.",
				boss: {
					info: "Hephaestus, then Aponia or Vill-V",
					note: "Aponia is preferred.",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Basilisk & Linnaeus",
							time: "4:57 (6.0B)",
							ref: "https://youtu.be/4XkouMCLSOc",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Basilisk & Linnaeus",
							time: "6:02 (6.0A)",
							ref: "https://youtu.be/A0fgY7_m4c4",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement. Even without Linnaeus, Mobius should be fine and able to clear in lower difficulties.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Forbidden Seed",
							second: "Boundless Logos",
						},
						{
							time: "Mid",
							first:
								"Memory / Mad King's Mask / Rainbow of Absence / Home Lost",
							second: "Boundless Logos",
						},
						{
							time: "Late",
							first: "The First Scale / Key to the Deep",
							second: "Boundless Logos",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR / LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR / LE / BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR / LE",
						},
					],
					note: 
						"BR if your damage is a little lacking, particularly in early floors before Mobius 1st Core. LE is the comfier option due to eliminating the possibility of dealing with downtime outside Ult. BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego Start for Ascension, grab Entwined [P] or Rodent [V] by F3, complete Mobius 1st Core by F4 with Entwined, Rodent, Lip Poison, take either Dead [X] or Unknown [X] by F5, then go shop, grab 2 Hua signets and 1 Kalpas signet and get a Hua door for F6 to complete her 2nd Core, swap Forbidden Seed out for Mad King's Mask, complete Kalpas 2nd Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Dark Assault",
									description:
										"Basic/Charged/Combo ATKs deal 40% bonus Lightning DMG. Linked enemies hit by Basic/Charged/Combo ATKs pass on 12% of the DMG to other linked enemies",
									priority: "Start",
								},
								{
									name: "Blessing of Ill Fortune",
									description:
										"Ultimate deals 240% bonus Lightning DMG. Every Genesis Seed consumed reduces Ultimate CD by 0.5s",
									priority: "Start",
								},
								{
									name: "Blessing of Ascension",
									description:
										"When Umbra of Ouroboros is active, enemies are struck by lightning once per second and take 600% ATK of Lightning DMG (DMG source: Basic ATK)",
									priority: "1st",
								},
								{
									name: "Blessing of Ravenousness",
									description:
										"Exiting submerged mode deals 1600% ATK of AOE Lightning DMG and enemies hit take 30% bonus Combo ATK DMG in the next 5s (independent effect)",
									priority: "2nd",
								},
								{
									name: "Blessing of Mirage",
									description:
										"In submerged mode, enemies in contact take 200% ATK of Lightning DMG per and take 35% bonus Total DMG for 8s",
									priority: "No",
								},
							],
							note: "Dark Assault + Ill Fortune is all Mobius needs to clear, however, to make her way stronger, you can do Double Ego start to take Ascension. Ravenousness is also a very good choice to consider taking if you get a 4th Ego door.",
						},
						{
							name: "Mobius - Signet of Infinity (1st Core)",
							lists: [
								{
									name: "Entwined [P]",
									description:
										":For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "3rd",
								},
								{
									name: "Lodging [C]",
									description:
										"ELF Ultimates and Support Valkyries' support skills have 20% reduced CD",
									priority: "Optional",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st or 2nd",
								},
								{
									name: "Unknown [X]",
									description:
										"Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
									priority: "1st or 2nd",
								},
							],
							note: "Dead [X]'s impact is mainly from being a ramping up buff, so it's not so much of a problem to not get it early on. Unknown [X] has good use due to being able to spam AE and most importantly VC.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Hua is the best 2nd Core to get from testing results, contesting very hard with Kalpas2. The reason is due to Mobius lacking breach, which becomes even more evident if you leave it for in exchange to getting Griseo done.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st, YES",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "Red & Hot is the absolute first priority. But also, be mindful of what paints you get. Blue is essential to be able to use Petals in the Wind and Fallen Leaves.",
						},
						{
							name: "Sakura - Signet of Setsuna (Felis shop signet)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							note: "Sakura signets are better picked off from shop and nothing else.",
						},
					],
				},
			},
		],
	},
	{
		name: "Luna Kindred",
		type: "BIO",
		keyword: "theresa apocalypse luna kindred lk",
		builds: [
			{
				name: "LK Abstinence Build",
				note: "",
				boss: {
					info: "Husk, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Abstinence",
							gear: "Hekate & Ely TB Dante M",
							time: "11:35m (6.0A)",
							ref: "https://youtu.be/sgAAftHZA4Y",
						},
					],
					note: "In terms of downscaling, LK probably doesn't have much options honestly. For cross, she can use Elysian Astra, 11th Leutorgia or maybe even cope with Basilisk, but in terms of stigmatas, it's even harder to say what works well with her. Honestly, you'd be better off just using someone else instead. Don't expect much from LK.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Rainbow of Absence / Mad King's Mask / Memory",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep / Proof of Good and Evil",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "LE",
						},
						{
							time: "Mid",
							first: "SS",
							second: "LE",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Reroll into Apo2 Core by F4, then 1 Griseo door before F7, then finish Griseo by F7 double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Penumbra",
									description:
										"Each Charged ATK only deals 140% ATK of Physical DMG, but every 4 consecutive Charged ATKs boost the speed of wielding the giant ax. Valkyrie gains a barrier with HP equal to 100% of her Max HP; when Sanguine Mark is below 50, every 3% Valkyrie HP will be converted to 1% barrier HP instead of Sanguine Mark cost",
									priority: "Start",
								},
								{
									name: "Blessing of Blood Feast",
									description:
										"Within the next 8s after Ultimate's final hit lands, each Charged ATK deals bonus Physical DMG equal to 1.5x the amount of current HP loss",
									priority: "1st",
								},
								{
									name: "Blessing of Imprint",
									description:
										"Every 2 Charged ATKs that consume Sanguine Mark will enable the next Charged ATK that consumes Sanguine Mark to deal bonus Physical DMG equal to 0.5x the amount of current HP loss",
									priority: "2nd",
								},
								{
									name: "Blessing of Immortality",
									description:
										"Triggered once at below 1% HP to deal Physical DMG equal to 1.5x the amount of current HP loss to surrounding enemies every 0.8s for 4s, during which Valkyrie will not die and restores 5% HP afterward. This effect's triggering chance will be reset after Valkyrie HP rises back to 33%",
									priority: "No",
								},
								{
									name: "Blessing of Thirst",
									description:
										"Lower HP enables higher HP recovery (max boost: 300%). If Valkyrie restores more than 10% HP within a short period of time, all enemies will be impaired for 10s (DEF -30%)",
									priority: "No",
								},
							],
							note: "Penumbra + Blood Feast. Those 2 are required to make LK work. Imprint can also be picked up as 3rd Ego signet to make the build stronger.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional 5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "A Flame Extinguished's priority declines a bit if you already get Aponia's breach and then later when you get Hua's breach. So in most cases, the other 2 Enhanceds win in priority over it.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (4th)",
							lists: [
								{
									name: "No One To Share",
									description:
										"Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Days Gone",
									description:
										"Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "1st",
								},
							],
							note: "Broken Dream remains a gamble to try and get from a door. Better taken from shop or unless you don't have other good door choices.",
						},
						{
							name: "Pardofelis - Signet of Reverie (5th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Midnight Absinthe",
		type: "IMG",
		keyword: "raven midnight absinthe natasha cioara ma",
		builds: [
			{
				name: "Who needs IMG Weather?",
				note: "Updated 6.1. Honestly, considering only base A ranks and non-Flame Chasers, Raven is probably one of the strongest valkyries to clear ER. At least, in weathers that are not so unfavorable for her. She's rather excellent, albeit a bit awkward and her gameplay pretty much just revolves around controlling the appropiate timings.",
				boss: {
					info: "Hephaestus, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoEgo & Aslaug",
							time: "12: 08m (6.1)",
							ref: "https://youtu.be/rkCnkA44e4s",
						},
					],
					danger:
						"There's no other set that will work better than Aslaug does for her, especially since Aslaug enormously increases her Mist's already skyhigh damage. DoEgo is her BiS weapon purely because of the ATK statstick.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Pseudo Miracle",
							second: "Falling in Past Light",
						},
						{
							time: "Mid",
							first: "Burden / Veil of Tears / Rainbow of Absence",
							second: "Falling in Past Light",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Falling in Past Light",
						},
					],
					note: "Falling in Past Light can be kept for the remainder of the run, as it is really helpful for Raven at any floor and especially against bosses. ",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR / BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "AE will be your main means of gather aside of her other bonuses. BR will also help to get past DPS check in the early floors. You can take BKE for Heimdall if you want to be extra sure. However, if you have hands and the skill for it, you can go without BKE and be fine for the fight. Raven can break Heimdall's shields easily through her Ultimate sequence. Breaking Heimdall's shields will keep him from going Red Mode until he's down to half HP",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Ominous Mist + Arrowhead) into V-V Spider Web or Pendulum F3, finish V-V 2nd Core by F4 Doubles, grab V-V's Drama or Puppetry at F5, go shop F6 and buy Griseo's Red and Yellow Paint or Red and Kevin's TDM/Elem DMG/Elem Breach, then grab V-V's remaining Enhanced except Saga from F7 and Sneer. Ideal Order from F1-F7: Double Reroll into Apo2 Core by F4, then 1 Griseo door before F7, then finish Griseo by F7 double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Ominous Mist",
									description:
										"Raven Cloud has a large range and deals 6500% DMG when it explodes. Raven Cloud vaporizes after the explosion",
									priority: "Start",
								},
								{
									name: "Blessing of Arrowhead",
									description:
										"Weapon actives restore 24 bonus SP and reduce Ultimate CD by 10s. Can only be triggered once per 8s",
									priority: "1st",
								},
								{
									name: "Blessing of Wild Hunt",
									description:
										"The follow-up of Basic ATK Sequence 5 is no longer limited by Night Roamer stacks. Basic ATK Sequence 5 and every hit of the follow-up consume 10 Night Roamer stacks to shoot 5 more arrows, each dealing 150% ATK of Fire DMG",
									priority: "No",
								},
								{
									name: "Blessing of Suppression",
									description:
										"Feather Arrows, Feather Blades, Feathers, and Night Roamer stacks cap at 30. Night Roamer boosts Fire DMG by 15%",
									priority: "No",
								},
								{
									name: "Blessing of Raven Plume",
									description:
										"Ultimate Evasion Skill reduces the ATK of enemies nearby by 60% and makes Valkyrie's attacks deal 25% ATK of bonus Fire DMG for 12s. Ultimate Evasion Skill has one extra charge",
									priority: "No",
								},
							],
							note: "Ominous Mist and Arrowhead is all Raven needs. She does not need any more than these 2. Double Ego start is the best start you can do.",
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act VI: Sneer",
									description:
										"Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd ",
								},
							],
							note: "Sneer is really good to have as it will significantly reduce the downtime that Raven has to deal with waiting for Ult and reducing its CD due to Arrowhead. It also synergizes in that you can use Active beforehand for the bonuses of Puppetry and Drama. ",
						},
						{
							name: "Kevin - Signet of Deliverance (2nd Core)",
							lists: [
								{
									name: "Artifact of the Inhibitor",
									description: "Ultimate boosts Elemental Breach by 25% for 5s",
									priority: "1st",
								},
								{
									name: "Goblet of the Giver",
									description: "Ultimate boosts Total DMG by 35% for 5s",
									priority: "2nd",
								},
								{
									name: "Brand of the Undead",
									description: "Ultimate boosts Elemental DMG by 30% for 5s",
									priority: "3rd",
								},
								{
									name: "Rochet of the Pilgrim",
									description: "Ultimate restores 3 SP per second for 5s.",
									priority: "Optional 4th",
								},
								{
									name: "Blade of the Deliverer",
									description: "",
									priority: "Core",
								},
								{
									name: "Crusade of the Deliverer",
									description:
										"After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%",
									priority: "1st",
								},
								{
									name: "Flock of the Deliverer",
									description:
										"Final Battle is also considered burst mode. Total DMG increases by 20% in burst mode.",
									priority: "Optional 2nd",
								},
							],
							note: "You have to make sure to always active right away after ulting. If you get interrupted, you will miss Crusade's window for the enormous buffs from Kevin.",
						},
						{
							name: "Aponia - Signet of Discipline (3rd Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Do prioritize getting Griseo's Red and Yellow Paint before pursuing Aponia's signets.",
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "Optional 3rd or 4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "Prioritize only Red, Yellow and Black. If you unlock 2nd Core, that's fine, it will open up the opportunity to grab Petals in the Wind, in which case make sure to.",
						},
					],
				},
			},
		],
	},
	{
		name: "Miss Pink Elf",
		type: "PHY",
		keyword: "mpe me miss pink elf elysia",
		builds: [
			{
				name: "General Build",
				note: "Updated for 6.1. Be advised that MPE becomes weaker the less ranks and gears she has. Basically, her downscalability issues are pretty big depending on the difficulty.",
				boss: {
					info: "Hephaestus, then Mobius or Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Whisper Pri & 3-set Elysia",
							time: "5:39 (6.0B)",
							ref: "https://youtu.be/vWv3zs66A0s",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Call of Crescent & Michelangelo TB Polo M",
							time: "12:05m (6.1)",
							ref: "https://youtu.be/H4C8tPJzbxk",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement, however the ceiling for downscaling is pretty tight as MPE's strength evidently goes down a bit too much without her weapon or even without her Elysia set.",
				},
				buff: {
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					danger:
						"Last 3 Buffs are specifically for CoC & Michelangelo TB Polo M F2P build",
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Pseudo Miracle",
							second: "Falling in Past Light",
						},
						{
							time: "Mid",
							first: "Veil of Tears / Mad King's Mask / Rainbow of Absence",
							second: "Falling in Past Light",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Falling in Past Light",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "VC",
							second: "SS / LE",
						},
						{
							time: "Mid",
							first: "BKE / VC",
							second: "SS / LE",
						},
						{
							time: "Late",
							first: "BR",
							second: "SS / LE",
						},
					],
					danger:
						"LE is picked if you want instant 100 SP Ultimate. This provides an advantage by further reducing the DMG Reduction that Elysia suffers in 6.1 weather for 3.6% less as opposed to 70 SP ult. LE is also swapped if you grab Eden's Initial/Max SP signet. However, if you don't feel confident on your damage and especially if you're downscaling hard, you can just swap her out for SS instead, as long as you have Aponia's SP regen backing you up.",
					note: "BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal Order from F1-F7: F2 Ego start for Beauty, then grab V-V's Conflict of Spider Web by F3, finish V-V 2nd core by F4, V-V F5 for either Puppetry or Drama, shop F6, swap Pseudo Miracle for Veil of Tears, get Griseo Red paint from Shop and Kalpas TDM or Phys/Elem DMG (If you get Kalpas DMG boosts, abuse trick with swapping BR, using her, removing her, rinse and repeat until you are below 300 HP to continue), and grab V-V F7 for missing Puppetry or Drama and get any missing priority basic signet from V-V.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Zenith",
									description:
										"While Ultimate is active, each ricochet deals 15% ATK of bonus Physical DMG on hit. Every wave of ricochet reduces weapon active's CD by 0.6s.",
									priority: "Start",
								},
								{
									name: "Blessing of Purity",
									description:
										"While Ultimate is active, a wave of ricochet occurs under Flawless Dome every second. The ricochets triggered in this way only ricochet 3 times but deal 130% ATK of Physical DMG. (DMG Source: Ultimate)",
									priority: "Start",
								},
								{
									name: "Blessing of Beauty",
									description:
										"Using weapon active restores 1 additional Ultimate Evasion charge. Enemies take 25% bonus Total DMG when a Crystalline Seed is attached to them.",
									priority: "1st",
								},
								{
									name: "Blessing of Love",
									description:
										"While Ultimate is active, Charged Shot: Cupid's Bolt consumes 100% bonus Infatuation and deals 700% ATK of bonus Physical DMG.",
									priority: "No",
								},
								{
									name: "Blessing of Benevolence",
									description:
										"Infatuation is fully restored when Ultimate Evasion Skill is triggered. If Infatuation drops below 100 after using Charged Shot: Cupid's Bolt, you can consume 1 Ultimate Evasion charge to trigger Ultimate Evasion Skill.",
									priority: "No",
								},
							],
							note: "This build requires only 2, Zenith and Purity. Beauty is not necessary, however it's free 35% TDM Taken to take, which is really strong for early and for the rest of the run, so it is strongly advised that you do F2 Ego start. Otherwise, prefer to go for a Griseo F2 start for taking her Red paint.",
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
								{
									name: "Saga: Overlapping Needles",
									description:
										"Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG.",
									priority: "Optional 3rd",
								},
							],
							note: "Magic is often better not taken, but otherwise great to have, as Whisper's weakspot hits are actually a lot of damage later on.",
						},
						{
							name: "Aponia - Signet of Discipline (2nd Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless, and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional 4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "If needed, you can choose to intentionally die and make use of Elysia's passive revival to immediately recharge Bloodboil Armor to the max so you can further get stronger and make sure to finish the run.",
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "Optional 3rd or 4th",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "Optional 3rd or 4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "Griseo2's Enhanceds are VERY optional to take. You generally would only want them if you don't get any other better door options during your run. If you do manage to get them, make sure to play around triggering Blue paint for Fallen Leaves and Petals in the Wind.",
						},
						{
							name: "Sakura - Signet of Setsuna (Felis Shop Signets)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
							note: "Better picked from Felis Shop. If you get them, make sure to play around them to properly use their boosts.",
						},
					],
				},
			},
		],
	},
	{
		name: "Palatinus Equinox",
		type: "IMG",
		keyword: "dudu goose bianca durandal astagina pe juan",
		builds: [
			{
				name: "Equinox Severance Build",
				note: "Updated to 6.1. This build is far stronger, superior and easier compared to Gallop build.",
				boss: {
					info: "Husk, then Aponia or Vill-V.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Midnight Ataegina & BiankaT",
							time: "9:41m (6.0A)",
							ref: "https://youtu.be/hVsZaDG7TVM",
						},
					],
					note: "In terms of downscaling, it's downscaleable with lower clear time based on stats/gears/rank and lower difficulties. With gears other than BiankaT, PE should be able to do this just fine.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Pseudo Miracle / Veil of Tears / Mad King's Mask",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep / Proof of Good and Evil",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "BR",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BR",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
				},
				signet: {
					note: "Ideal course of build up: 2 Ego Start, Griseo Red Paint by F3, Griseo 2nd Core by F4, grab Griseo's Fallen Leaves or Petals in the Wind by F5 or F6, then get Vill-V 2nd core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Exodus",
									description:
										"Last hit of Equinox Severance consumes Knight Guardian and impairs enemies",
									priority: "Start",
								},
								{
									name: "Blessing of Abyssal Chant",
									description:
										"Ultimate Evasion skill refreshed twice after casting Ultimate. ",
									priority: "1st",
								},
								{
									name: "Blessing of Commitment",
									description: "Increases Total DMG of weapon skills",
									priority: "2nd",
								},
								{
									name: "Blessing of Equinox",
									description:
										"Palatinus Equinox is enhanced when switching forms and using Ultimate",
									priority: "No",
								},
								{
									name: "Blessing of Gallop",
									description: "Consumes Knight Guardian to restore all ICHOR.",
									priority: "No",
								},
							],
							note: "Exodus and Abyssal Chant are vital so double start is essential. Exodus is the start, and Abyssal Chant is the 2nd Ego signet to take. The importance of it lies in that due to it recharging the UE charges instantly, PE really needs it to keep spamming Equinox Severance which will also give you a constant cycle of enough SP regen to keep using Ult anytime you need it and it comes back off CD. Commitment in the other hand increases PE's damage by a lot as it makes her Gunlance damage actually matter and be part of her big numbers. Additionally, Equinox Severance provides a small gather that might not be noticeable but it's actually very consistent and good. The radius of effect however isn't that big, so take note of that.",
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
							note: "Red & Hot is the absolute first priority, followed by Yellow and Blue. Black & Dark is best left for later or grabbing from shop because otherwise you could be missing Blue for Petals in the Wind or Fallen Leaves. ",
						},
						{
							name: "Vill-V - Signet of Helix (2nd Core)",
							lists: [
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "ACT I: Magic",
									description:
										"Using a weapon active boosts its Total DMG by 10%. 6 stacks max. Reset at the end of each battle.",
									priority: "Optional",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
							note: "Magic will be strong in combination with Commitment, as your gunlance will become an even more vital part of your damage rotations.",
						},
						{
							name: "Aponia - Signet of Discipline (3rd Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "1st",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "While in the run Hua2 is shown in place of Aponia2, this is no mistake. Aponia2 is way stronger and more preferred over Hua. As such, Aponia2 is taken instead.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Pardofelis - Signet of Reverie (5th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "Optional",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku* ",
									description: "",
									priority: "Core",
								},
							],
							note: "Sakura is best taken from Felis shop. She doesn't need core, as PE can't really abuse either of her cores that well.",
						},
					],
				},
			},
		],
	},
	{
		name: "Prinzessin der Verurteilung",
		type: "BIO",
		keyword: "pv fish fischl Prinzessin der Verurteilung",
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. This is her best build up to date.",
				boss: {
					info: "Husk, then Aponia",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoEgo & Zhenyi",
							time: "8:51m (6.0B)",
							ref: "https://youtu.be/t75HyvhKV6I",
						},
					],
					danger:
						"In terms of downscalability, this valkyrie can result a bit weak, so she prefers lower difficulties when otherwise not having a pri for her to use in place of Mitternachts. ",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears / Pseudo Miracle",
							second: "The Lonely Moon / Falling in Past Light",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Forbidden Seed / Rainbow of Absence",
							second: "Because of You / Falling in Past Light",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Falling in Past Light",
						},
					],
					note: "Because Of You is best taken by F5 shop: as early as possible, and it's only if you want to secure getting Midnight (see Ego signet section for more info). The Lonely Moon or Falling in Past Light as start depends on your preference; FPL preferred if you want to take the V-V start route, TLM for Aponia start route.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR / BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: 
						"You'll want to prioritize saving AE for gather sometimes if you are lacking in a ELF that has gather or while you don't have Vill-V's 2nd Core unlocked, as Fischl is straight up horrible without it. She's literally dependant on it due to her almost non-existent AoE damage, especially when lacking 3rd signet which is pretty much a requirement. BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal course of build up: 2/3 Ego Start, finish V-V 2nd Core by F4 or F6, shop at F5, then either finish Aponia 2nd Core by F7 or grab V-V2's both Drama and Puppetry. For Aponia2, grab both the Breach and TDM Taken",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Retribution",
									description:
										"Grants 1 stack of Blessing of Retribution every 7s. 2 stacks max. QTE consumes 1 stack to create a small lightning field which lasts 2s and deals 3x225% ATK of Lightning DMG per 0.4s to enemies within. Starts with 2 stacks",
									priority: "Start",
								},
								{
									name: "Blessing of Fate",
									description:
										"When hitting an enemy weakspot with a weapon active, Oz unleashes dark lightning to deal 2000% ATK of Lightning DMG",
									priority: "1st",
								},
								{
									name: "Blessing of Midnight",
									description:
										"During Ultimate, Oz lingers on for 7s after the arrow rain. Every 7 hits from Oz on enemies within the Ultimate range summons dark lightning to deal 1500% ATK of Lightning DMG",
									priority: "2nd",
								},
								{
									name: "Blessing of Nightfall",
									description:
										"Weapon actives deal 200% bonus Total DMG. Summoning Oz with Charged ATK or casting Ultimate refills 2 weapon active charges",
									priority: "No",
								},
								{
									name: "Blessing of Dark Wings",
									description:
										"When Ultimate Evasion Skill is triggered, Oz unleashes dark lightning to deal 4200% ATK of Lightning DMG",
									priority: "No",
								},
							],
							note: "Fischl requires 3 Ego signets: Retribution into Fate start, then Midnight. 3rd Ego signet is a MUST because Fischl's personal and AoE damage is genuinely horrible without Midnight. It forms such a big part of her build here in ER that Fischl without any of these 3 signets becomes one of the weakest and most dogshit ER valks in the game. As such, Because of You is recommended to secure this.",
							danger:
								"This build has 2 different startups to note: We're gonna assume V-V start. Aponia start is slightly stronger, but V-V start is more comfortable and preferred if you don't have any ELF that provides gather or don't want to bother too much resetting for spawn RNG and maintaining enemies in the circle for Retribution. That's the only importance of choice; whether you choose one or the other, their order of priority is just swapped up between them. (Aponia 1st, V-V 2nd)",
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [
								{
									name: "Act V: Spider Web",
									description:
										"Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
						},
						{
							name: "Aponia - Signet of Discipline (2nd Core)",
							lists: [
								{
									name: "Sixth, No Decadence",
									description:
										"Boosts Valkyrie Total DMG by 20% and keeps Exhortation from reducing for 15s upon QTE hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							note: "Fischl has no in-built healing, and due to the usage of BR, she doesn't need Kalpas cores. Instead, only aim for Kalpas' both DMG boosts and Max HP. Preferred to take from Felis Shop basically.",
						},
						{
							name: "Mobius - Signet of Infinity (4th Core)",
							lists: [
								{
									name: "Entwined [P]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max).",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%.",
									priority: "3rd",
								},
								{
									name: "Lodging [C]",
									description:
										"ELF Ultimates and Support Valkyries' support skills have 20% reduced CD.",
									priority: "Optional",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core (Important)",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync.",
									priority: "1st, YES",
								},
								{
									name: "Newborn [X]",
									description:
										"Triggering Mind Sync again during Mind Sync no longer resets the duration but extends the duration by 4.0s instead. With any summoned entity present, the duration is extended by 5s additionally.",
									priority: "2nd, YES",
								},
							],
							note: "Mobius is REALLY high priority to finish and get both Dead [X] and Newborn [X]. The reason is because of the way Oz works. Oz stays in field way too long, and Fischl's only means of recasting Oz to naturally refresh Mind Sync's duration is through the signet of Nightfall or through Ultimate Cast. This makes Newborn [X] as VERY essential and must-take alongside Dead [X]. Basically, Dead [X] won't be useful for long without Newborn [X] present.",
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
							],
						},
						{
							name: "Pardofelis - Signet of Reverie (6th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Reverist Calico",
		type: "IMG",
		keyword: "rc cat neko reverist calico pardofelis",
		builds: [
			{
				name: "Pardo1 Variation",
				note: "Updated to 6.1. More tailored towards late-game. Strength comes in close to Pardo2 variation.",
				boss: {
					info: "Hephaestus, then Kalpas or Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Purana & Bastet",
							time: "5:43m (6.1)",
							ref: "https://youtu.be/tkFqo9p6bd4",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Purana & Ana Schariac",
							time: "8:08m (6.0A)",
							ref: "https://youtu.be/EZNq6e74Wjc",
						},
					],
					note: "For downscalability purposes, Pardo is pretty amazing, being a valk that can reliably clear ER even on heavily downscaled gears.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
					],
					note: "Effective for 6.1",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "Falling in Past Light",
						},
						{
							time: "Mid",
							first: "Pseudo Miracle /  Mad King's Mask / Feast of Emptiness",
							second: "Falling in Past Light",
						},
						{
							time: "Late",
							first: "Key to the Deep / Proof of Good and Evil",
							second: "Falling in Past Light",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR / BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "Pardo doesn't really need anyone else honestly. If you're downscaling, you can bring BKE for Heimdall. If not, then she can easily bruteforce through Heimdall's Red Mode.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego Start (Hidden Claws + Cat's Eyes + Phantasma) into Aponia's QTE by F3, finish Aponia 2nd Core by F4 Doubles with Ultimate and Basic ATK, grab Aponia's Breach at F5 and go Shop F6, buy V-V's Pendulum and Conflict and Griseo's Red Paint from Shop. Then grab the remaining 2 enhanceds from Aponia at F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Hidden Claws",
									description:
										"When Combo ATK/Paw Barrage/Predation hits, the target drops 5 Shiny Silvers. It has 5 charges, which reset every floor (unaffected by other effects). It also increases Ice DMG by 45% for 10s. Triggering it again resets the duration",
									priority: "Start",
								},
								{
									name: "Blessing of Cat's Eyes",
									description:
										"In Runaway state, using Combo ATK/Paw Barrage/Predation increases Total DMG by 10%. It stacks 5 times, and exiting Runaway state removes all stacks",
									priority: "Start (Depends)",
								},
								{
									name: "Blessing of the Tailpiece",
									description:
										"Combo ATK deals 80% more Total DMG. When Combo ATK hits, reduces Megaton Furball's CD by 2s (CD: 5s)",
									priority: "Start (Depends)",
								},
								{
									name: "Blessing of Phantasma",
									description:
										"Metaton Furball deals 180% more Ice DMG. Runaway state lasts 5s longer",
									priority: "1st",
								},
								{
									name: "Blessing of Nighteye",
									description:
										"Paw Barrage/Predation deals 100% more Total DMG. Using Combo ATK reduces Paw Barrage's CD by 2s",
									priority: "No",
								},
							],
							note: "Double Ego start is not necessary, Phantasma will just further make it easier.",
							danger:
								"An very important thing to note here, if you don't have Purana, you shouldn't be taking Cat's Eyes at all. Purana is essential in that just by having it, you can then ignore Tailpiece. However, if you don't have it, as you'll be missing the 30% CD reduction on ultimate, you need Tailpiece because otherwise your ult will be on CD and Runaway state will run out. Tailpiece helps negate this.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Sixth, No Decadence",
									description:
										"Boosts Valkyrie Total DMG by 20% and keeps Exhortation from reducing for 15s upon QTE hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "Either Ultimate or Basic ATK are priority to +3. Don't forget about Griseo's Red paint taking highest priority to +3.",
						},
						{
							name: "Vill-V - Signet of Helix (2nd Core)",
							lists: [
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd ",
								},
							],
							note: "Drama is priority to +3.",
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
									priority: "2nd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30",
									priority: "3rd",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Pardofelis - Signet of Reverie (4th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
							],
							note: "Red is absolute priority to +3. Yellow can be upgraded to +3 too.",
						},
					],
				},
			},
			{
				name: "Pardo2 Variation",
				note: "",
				danger:
					"Updated to 6.1. Pardo2 variation basically just focuses on giving you a stronger headstart towards getting more signets and also getting more upgrades in comparison to Pardo1 variation. That's pretty much about it.",
				boss: {
					info: "Hephaestus, then Kalpas.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Purana & Bastet",
							time: "5:29m (6.1)",
							ref: "https://youtu.be/N9fb3zsGZjM",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Purana & Ana Schariac",
							time: "7:41m (6.0A)",
							ref: "https://youtu.be/jn0qc03V5WI",
						},
					],
					note: "For downscalability purposes, Pardo is pretty amazing, being a valk that can reliably clear ER even on heavily downscaled gears.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Feast of Emptiness",
							second: "The Lonely Moon / Falling in Past Light",
						},
						{
							time: "Mid",
							first:
								"Veil of Tears / Pseudo Miracle / Gold Goblet / Rainbow of Absence",
							second: "Falling in Past Light",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Falling in Past Light",
						},
					],
					note: "The Lonely Moon is purely to utilize against the F4's 2nd Wave. You just have to time it right. You can also alternatively start with the Pardo Gacha Machine, however that'd call for ultra balding, and I'm pretty sure you don't want to go bald. Do you?",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR / BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "Pardo doesn't really need anyone else honestly. If you're downscaling, you can bring BKE for Heimdall. If not, then she can easily bruteforce through Heimdall's Red Mode.",
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego Start (Hidden Claws + Cat's Eyes + Phantasma) into Pardo's 10% Coins by F3, finish Pardo 2nd Core by F4 Doubles with Shiny Silvers Drop and TDM, go shop F5 and grab Griseo's Red Paint, Aponia's QTE and Ultimate or V-V's Pendulum and Conflict. Then you can either unlock Aponia or Vill-V's 2nd Cores and proceed with getting the 2 important enhanceds of either.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Hidden Claws",
									description:
										"When Combo ATK/Paw Barrage/Predation hits, the target drops 5 Shiny Silvers. It has 5 charges, which reset every floor (unaffected by other effects). It also increases Ice DMG by 45% for 10s. Triggering it again resets the duration",
									priority: "Start",
								},
								{
									name: "Blessing of Cat's Eyes",
									description:
										"In Runaway state, using Combo ATK/Paw Barrage/Predation increases Total DMG by 10%. It stacks 5 times, and exiting Runaway state removes all stacks",
									priority: "Start (Depends)",
								},
								{
									name: "Blessing of the Tailpiece",
									description:
										"Combo ATK deals 80% more Total DMG. When Combo ATK hits, reduces Megaton Furball's CD by 2s (CD: 5s)",
									priority: "Start (Depends)",
								},
								{
									name: "Blessing of Phantasma",
									description:
										"Megaton Furball deals 180% more Ice DMG. Runaway state lasts 5s longer",
									priority: "1st",
								},
								{
									name: "Blessing of Nighteye",
									description:
										"Paw Barrage/Predation deals 100% more Total DMG. Using Combo ATK reduces Paw Barrage's CD by 2s",
									priority: "No",
								},
							],
							note: "Double Ego start is not necessary, Phantasma will just further make it easier. However, as a warning, if you don't have enough damage for double F4 clear, you're better off not trying this, as you want to get Pardo2 done by F4 and a double ego start won't let you if you can't get the double bonus.",
							danger:
								"Another very important thing to note here, if you don't have Purana, you shouldn't be taking Cat's Eyes at all. Purana is essential in that just by having it, you can then ignore Tailpiece. However, if you don't have it, as you'll be missing the 30% CD reduction on ultimate, you need Tailpiece because otherwise your ult will be on CD and Runaway state will run out. Tailpiece helps negate this. So in this route, Hidden Claws > Tailpiece > Cat's Eyes and Phantasma is left out.",
						},
						{
							name: "Pardofelis - Signet of Reverie (1st Core)",
							lists: [
								{
									name: "Merchant's Philosophy",
									description:
										"After finishing each floor, the number of currently owned Shiny Silvers grows by 10% for up to 100 (independent effect).",
									priority: "1st",
								},
								{
									name: "Shiny & Valuable",
									description:
										"Enemy kills grant bonus Shiny Silvers. Non-boss enemies grant 5 each. Boss enemies grant each (independent effect).",
									priority: "2nd",
								},
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "3rd",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "Optional 4th or 5th",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "Optional 4th or 5th",
								},
								{
									name: "Empty Illusions, Empty Fantasies",
									description: "",
									priority: "Core",
								},
								{
									name: "My Dreams Will Come True",
									description:
										"With 1/2/3 stacks of VIP Service, release Making Money every 15/10/5 seconds in an area around Valkyrie, dealing 800% ATK of Adaptive DMG and making enemies take 50% more Total DMG for 5s. This debuff will diminish to nothing over 5s.",
									priority: "1st",
								},
								{
									name: "Improv Magic: Zeroing",
									description:
										"10% off shop items. A newly gained stack of VIP Service increases Total DMG by another 10%.",
									priority: "2nd",
								},
							],
							note: "Due to how Pardo2 works, you want to make sure to ALWAYS go shop at every first or second floor of each stage transition. Basically, F5-F9-F13-F16.",
						},
						{
							name: "Aponia - Signet of Discipline (2nd Core)",
							lists: [
								{
									name: "Sixth, No Decadence",
									description:
										"Boosts Valkyrie Total DMG by 20% and keeps Exhortation from reducing for 15s upon QTE hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Either Ultimate or Basic ATK are priority to +3. Don't forget about Griseo's Red paint taking highest priority to +3.",
						},
						{
							name: "Vill-V - Signet of Helix (3rd Core)",
							lists: [
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
							note: "Drama is priority to +3.",
						},
						{
							name: "Eden - Signet of Gold (4th Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
									priority: "2nd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30",
									priority: "3rd",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "Optional 1st",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (5th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
							],
							note: "Red is absolute priority to +3. Yellow can be upgraded to +3 too.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "Kalpas signets are mostly picked off from Shop.",
						},
					],
				},
			},
		],
	},
	{
		name: "Ritual Imayoh",
		type: "MECH",
		keyword: "kallen kaslana ritual imayoh ir",
		builds: [
			{
				name: "Aponia Build",
				note: "Updated to 6.1 for load buffs. The strength of this build is weakened for 6.0. Don't expect the same results as the example run shown below.",
				boss: {
					info: "Hephaestus and Aponia",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Corruption",
							gear: "DoV & 3-Set Elysia",
							time: "13:25m (5.9B)",
							ref: "https://youtu.be/rFxInRhkEdo",
						},
					],
					note: "Downscaling would fit into lower difficulties with this one. Also 6.0 weather is really unfavorable for her.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Forbidden Seed / Memory / Burden / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Resolve / Shattered Shackles / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "VC",
							second: "SS",
						},
						{
							time: "Mid",
							first: "VC / BKE",
							second: "SS",
						},
						{
							time: "Late",
							first: "VC",
							second: "SS",
						},
					],
					note: "BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal course of build up: Double Ego start > Apo2 Core by F4 > Apo2 Breach by F5 > Hua or Kevin by F6 > Complete Hua or Kevin 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Prosperity",
									description:
										"Tap [ATK] after evasion to dash to enemies for an aerial kick, which can be connected into Basic ATK Sequence 4. Basic ATK Sequence 6 restores KE every time it lands.",
									priority: "Start",
								},
								{
									name: "Blessing of Dawn",
									description:
										"At full KE, the next Combo ATK consumes all of it to constitute 4 stacks and additionally fire 4 homing missiles dealing 3600% ATK of Physical DMG.",
									priority: "1st",
								},
								{
									name: "Blessing of Blossom",
									description:
										"Homing missiles restore 2 SP on hit. Basic ATK Sequence 6 additionally fires 4 homing missiles each dealing 200% ATK of Physical DMG.",
									priority: "2nd",
								},
								{
									name: "Blessing of Torch",
									description:
										"When a Combo ATK with KE consumed hits, all gun turrets fire a laser beam at the target to deal Combo ATK stacks × 1600% ATK of Physical DMG.",
									priority: "No",
								},
								{
									name: "Blessing of Fertility",
									description:
										"Ultimate replenishes 40 light bullets for every gun turret and boosts their Tech Level by 1 (caps at 3). Each turret restores Tech Level × 30 KE per second.",
									priority: "No",
								},
							],
							note: "If you don't get Blossom... well, Kevin's SP Regen becomes an absolute must to keep up with abusing him.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "Optional 1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Days Gone",
									description:
										"Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "No One to Share",
									description:
										"Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Lost and Found",
									description:
										"Total DMG taken decreases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "Filler",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
									priority: "1st",
								},
								{
									name: "Worldly Troubles",
									description:
										"With Soldier's Remembrance stacks, Total DMG increases by 50% of the Total DMG Reduction percentage from all Signets.",
									priority: "Filler",
								},
							],
							note: "If you don't want to suffer through this valk's insufferable non-existent I-frames, absolutely take Hua. She becomes almost unplayable without her, you need to be good at dodging without her shield. If you don't get her... well, you better be a masochist!",
						},
						{
							name: "Kevin - Signet of Deliverance (3rd Core)",
							lists: [
								{
									name: "Mark of the Predator",
									description: "Ultimate boosts Physical Breach by 25% for 5s.",
									priority: "1st",
								},
								{
									name: "Goblet of the Giver",
									description: "Ultimate boosts Total DMG by 35% for 5s",
									priority: "2nd",
								},
								{
									name: "Pendant of the Watcher",
									description: "Ultimate boosts Physical DMG by 30% for 5s.",
									priority: "3rd",
								},
								{
									name: "Rochet of the Pilgrim",
									description: "Ultimate restores 3 SP per second for 5s.",
									priority: "4th / 2nd",
								},
								{
									name: "Blade of the Deliverer",
									description: "",
									priority: "Core",
								},
								{
									name: "Crusade of the Deliverer",
									description:
										"After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%.",
									priority: "1st",
								},
							],
							note: "If you want to try and fit Crusade of the Deliverer's buff window into every combo, then using Ultimate first and then doing Prosperity's ATK to use Combo at 3 maxed bars would be the ideal to fit the laser into the remaining 2s window of buff. Also, Rochet of Pilgrim's priority changes based on whether or not you get Blossom.",
						},
						{
							name: "Mobius - Signet of Infinity (4th Core)",
							lists: [
								{
									name: "Entwined [P]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max).",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lodging [C]",
									description:
										"ELF Ultimates and Support Valkyries' support skills have 20% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%.",
									priority: "Filler",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description:
										"For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync.",
									priority: "1st",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (5th Signet)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st YES",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd YES",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd YES",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
							],
							note: "Getting the core is not necessary. You can just take all 3 signets from Felis Shop if you can.",
						},
					],
				},
			},
		],
	},
	{
		name: "Silverwing N-EX",
		type: "BIO",
		keyword: "silverwing nex silverwing n-ex sw bronya zaychik",
		builds: [
			{
				name: "Tap and Hold A, Watch Youtube",
				note: "Updated 6.1. SW is very straightforward. And a bit clunky too, but otherwise a strong non-Herrscher valkyrie for ER. However, I can't attest for her strength with downscaled gears. She's reliant on her signature weapon, and her own signature stigmata set provides too much stuff that she does utilize very well while other alternatives are sort of lacking. Nevermind Ana.",
				boss: {
					info: "Hephaestus, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "S2",
							difficult: "Finality",
							gear: "FFF & Bronya N-EX",
							time: "7:48m (6.1)",
							ref: "https://youtu.be/vK_stvbRv50",
						},
					],
					note: "It should be assumed that with lower gears, her performance can drop accordingly but otherwise can still do very well due to her strength.",
				},
				buff: {
					lists: [
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Light as a Bodhi Leaf / Gold Goblet / Rainbow of Absence",
							second: "The Lonely Moon / Dreamful Gold",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon / Dreamful Gold",
						},
					],
					note: "The Lonely Moon does help for guaranteeing F4 Double. You take Because of You at F5 Shop to get her other 2 Ego signets by F11 doubles.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "VC",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "VC / BR",
						},
					],
					note: "VC is a must due to not only her low 30s CD, essential for synergy with her Ego signet Phantom Plumes, but also because it provides a gather which is always appreciated for SW. Remember to bring BKE before Heimdall fight.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Phantom Plumes & Grey Falcon) into Aponia Basic ATK F3, unlock Aponia 2nd Core by F4 with QTE and SP Regen, go shop F5 and grab Because of You, get Su's SP Regen and TDM Taken. Grab Aponia's Breach at F6 and finish Su 2nd Core by F7 Double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Phantom Plumes",
									description:
										"After using support skills, tapping [ATK] triggers QTE. QTE boosts Ice DMG by 20% for 30s. 2 stacks max. Triggering it again resets the duration",
									priority: "Start",
								},
								{
									name: "Blessing of Grey Falcon",
									description:
										"Restores 2 SP per second. Scatter barrier enables Combo ATK and each cast grants 1 stack of Repeating Sequence which costs 7 SP and make Combo ATK deal 16% ATK of bonus Ice DMG. 4 stacks max. Stacks are reset when scatter barrier is removed or created",
									priority: "1st",
								},
								{
									name: "Blessing of Pale Feathers",
									description:
										"Attacks restore 50% bonus SP. Ultimate deals 2500% ATK of bonus Ice DMG. On hit, Ultimate boosts Elemental Breach by 10% and Total DMG by 45% for 10s. Triggering it again resets the duration",
									priority: "2nd",
								},
								{
									name: "Blessing of Silver Eagle",
									description:
										"The last sequence of Basic ATKs restores 2 SP and deals 120% of ATK as bonus Ice DMG. With scatter barrier present, Valkyrie deals 25% bonus Ice DMG and the last sequence of Basic ATKs reduces charging CD by 5s",
									priority: "3rd",
								},
								{
									name: "Blessing of Sharp Eyes",
									description:
										"For 10s after landing the Ultimate, Basic ATKs deal 30% of ATK as bonus Ice DMG and Valkyrie restores 25 HP plus 3 SP per second. Triggering it again resets the duration",
									priority: "No",
								},
							],
							note: "There are 2 Ego signets that SW starts with, and other 2 Ego signets that are strongly recommended for her to take. Phantom Plumes start into Grey Falcon is her strongest startup. Do note that Grey Falcon modifies her playstyle from spamming A button into holding A repeatedly for shotgun SW, which is her biggest damage alongside her ult after getting Pale Feathers. The other 2 Ego signets that SW strongly wants are Pale Feathers and Silver Eagle.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation",
									priority: "1st",
								},
								{
									name: "Sixth, No Decadence",
									description:
										"Boosts Valkyrie Total DMG by 20% and keeps Exhortation from reducing for 15s upon QTE hitting an enemy. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Basic ATK is strongly recommended to +3 due to providing massive amounts of damage to SW's personal damage.",
						},
						{
							name: "Su - Signet of Bodhi (2nd Core)",
							lists: [
								{
									name: "Motto of Ceto-Pariya-Nana",
									description: "Combo hits are reset at 150 to restore 30 SP.",
									priority: "1st",
								},
								{
									name: "Motto of Dibba-Cakkhu",
									description:
										"Combo hits are reset at 150 to boost Total DMG taken by all enemies by 35% for 10s.",
									priority: "2nd",
								},
								{
									name: "Motto of Pubbe-Nivasanussati",
									description:
										"Combo hits are reset at 150 to boost Total DMG by 55% for 10s.",
									priority: "3rd",
								},
								{
									name: "Motto of Asavakkhaya",
									description:
										"Attacks grant 25 bonus combo hits on hit. CD: 5s.",
									priority: "4th",
								},
								{
									name: "Motto of Iddhi-Vidha",
									description:
										"Combo hits are increased to 60 when below 60. CD: 10s.",
									priority: "Optional 5th",
								},
								{
									name: "Dictum of Bodhi",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30",
									priority: "Optional 4th",
								},
								{
									name: "Aria of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Aria of Soil",
									description:
										"Intoxicated enemies take only 10% bonus Total DMG but it can stack up to 3 times.",
									priority: "Not necessary",
								},
							],
							note: "It's not necessary to go after Eden1's enhanceds. Can instead just continue with Griseo.",
						},
						{
							name: "Griseo - Signet of Stars 4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "4th",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Spina Astera",
		type: "MECH",
		keyword: "rita rossweisse spa spina astera",
		builds: [
			{
				name: "Rita's Training Arc",
				note: "Updated 6.1. SpA had enough of sitting in the bench just warming it while watching other valkyries push ahead of her, so she decided to finally take matters into her hands and train to become a better valkyrie and catch up to the others! And she sure did went a bit overboard... by becoming even stronger than before! SpA's strength in favorable weathers is pretty strong and she also becomes a fairly easy valk to clear ER with. Although she struggles even more against Psy mobs.",
				boss: {
					info: "Hephaestus, then Aponia or Vill-V",
					note: "You should consider Hephaestus' Overheat mechanic. You might not be able to kill him. If you're not confident in doing so, you can instead go with Husk, but he's more annoying due to SpA's lack of i-frames which makes her be reliant on manual dodging even more, as she already uses Kosma.",
				},
				setup: {
					lists: [
						{
							rank: "SS",
							difficult: "Finality",
							gear: "Pisces & Ragna",
							time: "7:00m (6.1)",
							ref: "https://youtu.be/HvXbqtefzNA",
						},
					],
					note: "In terms of downscalability purposes, her weapon is pretty much a given and as for stigmatas she can do fine with Leuweenhoek TB Thales M.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Gold Goblet / Light as a Bodhi Leaf / Rainbow of Absence",
							second: "Because of You",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Dreamful Gold",
						},
					],
					note: "The Lonely Moon will help SpA guarantee the F4 double, while Because of You is a given to put at F5 shop so you can get double Ego at F11.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "Remember to bring BKE for Heimdall, especially since SpA gets interrupted really easily by Heimdall in Red Mode.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Wild Flare + Radiant Formation) into Aponia's Basic ATK F3, finish Aponia 2nd Core by F4 Double, go shop F5 and put Because of You, buy Griseo's Red and Yellow paints or Red and Eden's TDM, grab Aponia's Breach at F6 and get the remaining 2 Enhanceds from Aponia at F7 Double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Wild Flare",
									description:
										"Each hit of Astral Flare unleashes Astral Flare: Erupt, casting 1 Astral Rend in front that deals 200% of ATK as Fire DMG. Each cast of Astral Rend exits Astral Harness state, restoring 3 SP and 80 Astrum, with a maximum of 6 casts",
									priority: "Start",
								},
								{
									name: "Blessing of Radiant Formation",
									description:
										"Hits dealt by Astral Flare: Erupt +1. After unleashing Astral Flare: Erupt, the remaining Ultimate CD reduces by 10% and 300 Astrum is restored",
									priority: "1st",
								},
								{
									name: "Blessing of Alrescha",
									description:
										"Hits dealt by Astral Flare +1. When Astral Flare hits the target, its Fire DMG increases by 40% for 5s. This effect can be refreshed",
									priority: "2nd",
								},
								{
									name: "Blessing of Holy Flame",
									description:
										"Astral Flare deals an additional 500% ATK of Fire DMG to the target for every 6 hits and increases the Fire DMG to the hit target by 20% (independent effect) for 5s. Can be refreshed",
									priority: "3rd",
								},
								{
									name: "Blessing of Star Quillon",
									description:
										"When unleashing Astral Flare: Ignite, and Astral Flare: Combust, the 4th hit of Basic ATK in Astral Harness state deals 500% of ATK as Fire DMG to enemies within 10m, pulls them towards Valkyrie, and increases the total DMG taken by the target by 20%",
									priority: "Filler",
								},
							],
							note: "This build requires 2 Ego signets from the early get-go: Wild Flare and Radiant Formation. Once you get Radiant Formation, doing any normal Rapier stabs will reduce the Ultimate's CD by 20%, allowing you to play around it for quick bursts. The other 2 Ego signets to get are Alrescha and Holy Flame. Star Quillon is really unnecessary, but you can take it if you don't get any better doors.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Basic ATK is priority to upgrade to +3. SP Regen can be taken to further synergize with Eden2 afterwards, but not necessary.",
						},
						{
							name: "Eden - Signet of Gold (2nd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "Optional 1st",
								},
							],
							note: "Withered Soil will further boost SpA's damage even more especially when you already have Su's SP Regen.",
						},
						{
							name: "Su - Signet of Bodhi (3rd Core)",
							lists: [
								{
									name: "Motto of Dibba-Cakkhu",
									description:
										"Combo hits are reset at 150 to boost Total DMG taken by all enemies by 35% for 10s.",
									priority: "1st",
								},
								{
									name: "Motto of Asavakkhaya",
									description:
										"Attacks grant 25 bonus combo hits on hit. CD: 5s.",
									priority: "2nd",
								},
								{
									name: "Motto of Ceto-Pariya-Nana",
									description: "Combo hits are reset at 150 to restore 30 SP.",
									priority: "3rd",
								},
								{
									name: "Motto of Pubbe-Nivasanussati",
									description:
										"Combo hits are reset at 150 to boost Total DMG by 55% for 10s.",
									priority: "4th",
								},
								{
									name: "Motto of Iddhi-Vidha",
									description:
										"Combo hits are increased to 60 when below 60. CD: 10s.",
									priority: "Optional 5th",
								},
								{
									name: "Dictum of Bodhi",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
							note: "It's fine to have just Red, Yellow and Black. As long as you have at least Red, you can focus on the other signets in the meanwhile and leave Griseo by last. Red is highest priority to upgrade to +3.",
						},
					],
				},
			},
			{
				name: "Kosma Build",
				note: "Updated 6.1. This valk is fucking awful. Honest truth. Her early game absolutely sucks, even as SS-rank, and loses against valks like Fischl and Eden in that regard. She only starts ramping up in strength after Benares, but even then, she still sucks a bit as she becomes mediocre at best. If anything, I would honestly recommend to play other valks instead of this shitty valk. She just really sucks, nothing more.",
				boss: {
					info: "Hephaestus / Husk, then Aponia or Vill-V",
					note: "You should consider Hephaestus' Overheat mechanic. You might not be able to kill him. If you're not confident in doing so, you can instead go with Husk, but he's more annoying due to SpA's lack of i-frames which makes her be reliant on manual dodging even more, as she already uses Kosma.",
				},
				setup: {
					lists: [
						{
							rank: "SS",
							difficult: "Finality",
							gear: "Pisces & Ragna",
							time: "10:16m (6.0A)",
							ref: "https://youtu.be/IDZt4TyONVo",
						},
					],
					note: "In terms of downscalability purposes, SpA is kinda bad, suffering mostly from a really shitty early game and a sort of mediocre mid-game. Lower difficulty she'd be fine, however, without Pisces she might struggle badly.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Fragile Friend",
							second: "Out of Reach",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Veil of Tears / Rainbow of Absence",
							second: "Because of You / Out of Reach",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "Out of Reach",
						},
					],
					note: "You can choose to stay with Out of Reach or swap it out for Because of You at F5 shop, for the purpose of getting 2 additional Ego signets by F11 doubles, as SpA is a Ego signet-hungry valkyrie.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BR / VKE",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "VKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start into Kosma's Basic ATK F3, then unlock Kosma 2nd Core by F4, go shop F5 and get 1 or 2 Kalpas signets, then decide between swapping or not swapping Out of Reach for Because Of You if you want more Ego Signets, and unlock Kalpas2 by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Wild Flare",
									description:
										"Each hit of Astral Flare unleashes Astral Flare: Erupt, casting 1 Astral Rend in front that deals 200% of ATK as Fire DMG. Each cast of Astral Rend exits Astral Harness state, restoring 3 SP and 80 Astrum, with a maximum of 6 casts",
									priority: "Start",
								},
								{
									name: "Blessing of Alrescha",
									description:
										"Hits dealt by Astral Flare +1. When Astral Flare hits the target, its Fire DMG increases by 40% for 5s. This effect can be refreshed",
									priority: "1st",
								},
								{
									name: "Blessing of Radiant Formation",
									description:
										"Hits dealt by Astral Flare: Erupt +1. After unleashing Astral Flare: Erupt, the remaining Ultimate CD reduces by 10% and 300 Astrum is restored",
									priority: "2nd",
								},
								{
									name: "Blessing of Star Quillon",
									description:
										"When unleashing Astral Flare: Ignite, and Astral Flare: Combust, the 4th hit of Basic ATK in Astral Harness state deals 500% of ATK as Fire DMG to enemies within 10m, pulls them towards Valkyrie, and increases the total DMG taken by the target by 20%",
									priority: "3rd",
								},
								{
									name: "Blessing of Holy Flame",
									description:
										"Astral Flare deals an additional 500% ATK of Fire DMG to the target for every 6 hits and increases the Fire DMG to the hit target by 20% (independent effect) for 5s. Can be refreshed",
									priority: "Optional",
								},
							],
							note: "This build requires 2 Ego signets to function early on: Wild Flare + Alrescha. Also, SpA is a valkyrie that really loves her Ego signets, so getting more is recommended, as long as you already have the 2 main Cores ready: Radiant Formation and Star Quillon. ",
						},
						{
							name: "Kosma - Signet of Daybreak (1st Core)",
							lists: [
								{
									name: "Talons that Desecrate the Sanctuary",
									description:
										"Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description:
										"Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description:
										"Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "3rd",
								},
								{
									name: "Heart that Commited Seven Crimes",
									description: "Rend lasts 5s longer.",
									priority: "4th",
								},
								{
									name: "Daybreak, Lone Beacon",
									description: "",
									priority: "Core",
								},
								{
									name: "Heart, Unshakable Character",
									description:
										"Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Dawn, Perpetual Wait",
									description:
										"While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
									priority: "2nd",
								},
								{
									name: "Choice, Ensuing Regret",
									description:
										"When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional",
								},
							],
							note: 'Kosma for the most part fixes SpA\'s inherent problem of having her big damage numbers locked behind her Rapier Stabs and Ultimate into Rapier Stab. When you add Aponia into the mix, then her "downtime" outside Rapier Stabs is fixed, and as such, Kosma is an essential part of her kit here.',
						},
						{
							name: "Kalpas - Signet of Decimation (2nd Core)",
							lists: [
								{
									name: "Blade, Grave, and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%",
									priority: "1st",
								},
								{
									name: "Bone, Blood, and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune, and Written Fate",
									description: "Max HP increases by 25%",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter: HP cannot exceed 18% of max HP. Healing HP charges [Bloodboil Garment] ",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Aponia - Signet of Discipline (3rd Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
							note: "After getting Aponia's Breach, you can choose to further go for her other enhanceds, or pursue Griseo2's enhanceds instead",
						},
						{
							name: "Griseo - Signet of Stars 4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Starchasm Nyx",
		type: "QUA",
		keyword: "starchasm nyx nyx sx seele vollerei",
		builds: [
			{
				name: "Veliona Tries to Survive",
				note: "Updated 6.1. Nyx is a sort of straightforward valkyrie to play in ER. Relying on the generation of Carmine Gashes to recover SP for herself and get ready to ult everytime, she actually has a quite comfortable downtime. However, this is locked behind the requirement of needing one of her Ego signets. For a full explanation, you can read the video run's description.",
				boss: {
					info: "Hephaestus, then Vill-V or Aponia",
					note: "Nyx might struggle finishing Aponia off before she goes flying in her P2. If u want faster clear time, V-V is the choice.",
				},
				setup: {
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Sanguine & Verne",
							time: "8:48m (6.1)",
							ref: "https://youtu.be/9w0XSpPfJNc",
						},
					],
					note: "Nyx as a whole can be assumed to be very screwed with downscaled gear, as her strength early on is on the weak side. Not only her own signature weapon helps her a lot, but also other stigmata choices lose out on more than 20% DPS comparison to Verne. Simply speaking, for downscalability purposes, expect this valk to be more affected the worse the gears are.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Pseudo Miracle",
							second:
								"Because of You / Falling in Past Light / The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Memory / Rainbow of Absence",
							second: "Because of You / The Lonely Moon",
						},
						{
							time: "Late",
							first: "Tin Flask / Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "Because of You start is the most ideal and preferred due to the pretty noticeably strong powerspike that Nyx gets from getting 4 of her Ego signets. However, you can delay this powerspike for F11 if your Nyx is struggling to get F4 doubles by using FPL or TLM, taking in mind that FPL will let you +3 the V-V signets which is more value.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "SN",
						},
						{
							time: "Mid",
							first: "BKE",
							second: "SN",
						},
						{
							time: "Late",
							first: "AE",
							second: "SN",
						},
					],
					note: "Remember to swap out AE for BKE before facing Heimdall. Also, SN is used because of the load buff for 10% TDT.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Frigidity & Toxic Bath) into V-V's Conflict or Pendulum F3, unlock V-V 2nd Core by F4, go shop F5 and buy Hua's Elem Breach and TDM, roll for a Hua door F6 to complete Hua 2nd Core, then V-V door at F7 Double for Puppetry and Drama.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Frigidity",
									description:
										"In burst mode, every 4 Charged ATKs trigger a frost explosion to deal 1000% bonus Ice DMG. Within the first 8s of burst mode, it only takes 2 Charged ATKs to trigger the explosion",
									priority: "Start",
								},
								{
									name: "Blessing of Toxic Bath",
									description:
										"Weapon skill CD is reduced by 50%. Enemies hit by chain claws take 36% bonus Total DMG for 8s",
									priority: "1st",
								},
								{
									name: "Blessing of Abyssal Gaze",
									description:
										"Ultimate has 35% reduced CD. Nightmare Thorns pass-on DMG increases by 18%",
									priority: "2nd",
								},
								{
									name: "Blessing of Cocoon Break",
									description:
										"In normal mode, consuming 6 Carmine Gashes boosts Ice DMG of Charged ATK by 600% and restores 35 bonus SP. In burst mode, consuming 6 Carmine Gashes restores 35 bonus SP",
									priority: "3rd",
								},
								{
									name: "Blessing of Nightmare",
									description:
										"In burst mode, every Carmine Gash consumed boosts Total DMG of Ultimate Sequence 2 by 25%. 10 stacks max",
									priority: "No",
								},
							],
							note: "This particular build focuses on V-V start. As such, the starting Ego signets are Frigidity and Toxic Bath. The other 2 Ego signets to obtain from Because of You are Abyssal Gaze and Coccoon Break. Do note that Coccoon Break will open up the possibility for Eden signets to be used.",
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act IV: Spoon",
									description:
										"Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
							note: "Puppetry and Drama are both priority to upgrade to +3.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
							note: "Getting Broken Dream is really helpful, as such, it's not a bad choice to try and gamble for it.",
						},
						{
							name: "Griseo - Signet of Stars (3rd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
						{
							name: "Eden - Signet of Gold (Felis Shop Signets)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30",
									priority: "Optional 4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							note: "Due to Nyx's 75sp Ult cost, she can't really effectively use Eden2 due to the charges being too low to even maintain for a prolonged period of time. As such, Eden's signets are best picked from Shop instead.",
						},
						{
							name: "Sakura - Signet of Setsuna (Felis Shop Signets)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Starry Impression",
		type: "PHY",
		keyword: "griseo starry impression si",
		builds: [
			{
				name: "Griseo Aboose",
				note: "Updated for 6.1.",
				boss: {
					info: "Hephaestus, then Mobius, Aponia or Vill-V.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Elysian Astra & Cezanne",
							time: "7:16m (6.0A)",
							ref: "https://youtu.be/WOaXlhdcyrc",
						},
					],
					note: "This build is downscaleable with lower clear time based on stats/gears/rank and lower difficulties. However, I can't say how she will work without Cezanne as most of Griseo's damage in ER comes from her bleed damage. A bit weird to work around. But there's probably a way to work around it, which I will look into later.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Memory / Home Lost",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "BR",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BR",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego start into Griseo 2nd Core finish by F4, grab either A Flame Extinguished or Petals in the Wind based on the required paints you have by F5 or F6, then unlock Apo 2nd Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Signet of Starry Night",
									description:
										"Combo ATK deals an additional 1000/1200% ATK Physical DMG for each color consumed. When consuming red/yellow/blue color, reduce weapon active/ultimate/evasion CD by 1s respectively. Combo attack that consumes all colors can also chain to 3rd sequence of normal attack",
									priority: "Start",
								},
								{
									name: "Signet of River Forest",
									description:
										"During ultimate, gain +25% attack speed and 3rd/5th sequence of normal attack grant an additional color (same as normal attack color). During ultimate, all enemies take 10/20% more Total DMG (independent effect)",
									priority: "Start",
								},
								{
									name: "Signet of Cloud Valley",
									description:
										"Physical DMG 30/40%. Normal attack sequence 4 gathers enemies",
									priority: "1st",
								},
								{
									name: "Signet of Feathers",
									description:
										"For every stack of bleed on enemies, gain Total DMG +10%. When using combo attack to consume all 3 colors, deal an additional 800/1000%ATK Physical Bleed damage, CD 0.5s",
									priority: "Optional",
								},
								{
									name: "Signet of Azure Wind",
									description:
										"When activating ultimate evasion, gain 3 different ink colors and make all enemies on field take 30/40% more TDM for 10s",
									priority: "No",
								},
							],
							note: "Starry Night + River Forest into double Ego start with Cloud Valley for having free gather. Without it, you're gonna have a rough time as Griseo prefers to distribute her damage to everyone with Mr Knight's fully-stacked Combo ATK. A 4th Ego signet can also be picked, taking Feathers to make the build stronger.",
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
							note: "By F4, if you get both Red and Yellow paint only, grab A Flame Extinguished. If you get Red and Blue, grab Petals in the Wind. If for some reason you only get Yellow & Blue, then Fallen Leaves.",
						},
						{
							name: "Hua - Signet of Vicissitude (2nd Core)",
							lists: [
								{
									name: "No One To Share",
									description:
										"Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description:
										"Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Days Gone",
									description:
										"Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description:
										"When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "1st",
								},
							],
							note: "Broken Dream remains a gamble to try and get from a door. Better taken from shop or unless you don't have other good door choices.",
						},
						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Aponia - Signet of Discipline (4th Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Pardofelis - Signet of Reverie (5th Core)",
							lists: [
								{
									name: "Motto of Meow",
									description:
										"Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description:
										"Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description:
										"Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "Optional",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "Botan and Koyo are good grabs from Felis shop. You don't go for Sakura core really, you just get those 2 Sakura signets if you can help it.",
						},
					],
				},
			},
		],
	},
	{
		name: "Striker Fulminata",
		type: "BIO",
		keyword: "stfu raiden mei striker fulminata",
		builds: [
			{
				name: "Just Stfu",
				note: "Updated 6.1. If anyone tells you that StFu can't do ER, you can show this to them! Or... you can do it yourself! Provided you actually wouldn't mind balding for making this valkyrie work, that is... Wait, this valk actually isn't that bad! Okay, but seriously. What can I say? StFu's strength as a valkyrie for ER is also pretty mid, but leaning towards somewhat strong. Though this comes with quite a number of downsides that StFu has, naturally making her not a better choice than other particular valks.",
				boss: {
					info: "Husk, then Aponia or Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "7T & 3-set Dirac",
							time: "13:18m (6.1)",
							ref: "https://youtu.be/K-h8H2hQViQ",
						},
					],
					danger:
						"For downscalability purposes, let's be honest, she aint gonna do shit without 3-set Dirac as she badly needs the 50% impair for the early game. Dirac also provides with other useful things that StFu wants. 7T, on the other hand, is easily her BiS here due to it allowing StFu to reapply Griseo's Red Paint easily anytime.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Light as a Bodhi Leaf / Gold Goblet / Rainbow of Absence",
							second: "Because of You",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Dreamful Gold",
						},
					],
					note: "The Lonely Moon is a must to get F4 Double guaranteed.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "SN",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BKE",
						},
						{
							time: "Late",
							first: "SS",
							second: "SA",
						},
					],
					note: "SN is mainly to deal with the early Quantum mobs as they are too tanky for her without being collapsed. Afterwards, SN is swapped out for SA. Remember to bring BKE to Heimdall fight.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Current + Karma) into Aponia Ultimate F3, finish Aponia 2nd Core by F4 Double, go shop F5 and put Because of You, buy Su's 30 SP and 25 Hits or TDM Taken, grab Aponia's Breach at F6 and finish Su 2nd Core by F7 Double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Current",
									description:
										"Gotamashi Edge deals 40% ATK of bonus Physical DMG. Casting Gotamashi Edge consumes all EM to generate additional penetrating Gotamashi Edges",
									priority: "Start",
								},
								{
									name: "Blessing of Karma",
									description:
										"When casting Gotamashi Edge, each EM Reserve point consumed provides 2 bonus Edges that can cut through enemies",
									priority: "1st",
								},
								{
									name: "Blessing of Zanshin",
									description:
										"Increases the Physical DMG dealt by Combo ATK: Blade Flurry by 45%. For every 4 EM Reserves restored, gains a barrier with 50% of her max HP that lasts 3s. Triggering it again resets the barrieds HP",
									priority: "2nd",
								},
								{
									name: "Blessing of Idea",
									description:
										"Can use Ultimate after entering Burst mode for 4s. After using Ultimate again in Burst mode, her Total DMG will be increased by 30% until Burst mode ends",
									priority: "3rd",
								},
								{
									name: "Blessing of Thunder",
									description:
										"For every 4 EM Reserves restored, releases a burst of lightning that deals ATK of Physical DMG to surrounding enemies",
									priority: "No",
								},
							],
							note: "Current is a must start, followed next by Karma. StFu needs this double Ego start as these 2 signets are what provide her with her ER damage. Without both of these signets, her damage is just non-existent. The other 2 Ego signets to get from Because of You are Zanshin and Idea.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Ultimate is priority to +3, providing massive amounts of damage to StFu's laser blades.",
						},
						{
							name: "Su - Signet of Bodhi (2nd Core)",
							lists: [
								{
									name: "Motto of Ceto-Pariya-Nana",
									description: "Combo hits are reset at 150 to restore 30 SP.",
									priority: "1st",
								},
								{
									name: "Motto of Dibba-Cakkhu",
									description:
										"Combo hits are reset at 150 to boost Total DMG taken by all enemies by 35% for 10s.",
									priority: "2nd",
								},
								{
									name: "Motto of Asavakkhaya",
									description:
										"Attacks grant 25 bonus combo hits on hit. CD: 5s.",
									priority: "3rd",
								},
								{
									name: "Motto of Pubbe-Nivasanussati",
									description:
										"Combo hits are reset at 150 to boost Total DMG by 55% for 10s.",
									priority: "4th",
								},
								{
									name: "Motto of Iddhi-Vidha",
									description:
										"Combo hits are increased to 60 when below 60. CD: 10s.",
									priority: "Optional 5th",
								},
								{
									name: "Dictum of Bodhi",
									description: "",
									priority: "Core",
								},
							],
							note: "Su's SP Regen will basically avoid StFu's downtime issues when she can't get her Burst Mode.",
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "Optional 1st",
								},
							],
							note: "Withered Soil can be a massive upgrade due to synergizing very well with StFu's Burst Mode and providing much more buffs from Eden's DMG boosts.",
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Stygian Nymph",
		type: "QUA",
		keyword: "sn seele vollerei stygian nymph",
		builds: [
			{
				name: "Veliona After PTSD",
				note: "Updated 6.1. Truthfully, you should just avoid using this Valk for the purposes of the weekly ER clear. There are a lot of reasons. But she's simply, the worst performance valk in ER amidst the base S-ranks.",
				boss: {
					info: "Hephaestus, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "PoA:Kindred & Allan Poe",
							time: "16:10m (6.1)",
							ref: "https://youtu.be/KDbo2fZi94E",
						},
					],
					note: "For downscalability purposes, she's by far one of the worst valks as she gets increasingly worse the lower your gears are.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Fragile Friend / Forget-Me-Not / Mad King's Mask",
							second: "Out of Reach / Tsukimi Himiko",
						},
						{
							time: "Late",
							first: "Stained Sakura",
							second: "Tsukimi Himiko",
						},
					],
					note: "The Lonely Moon is very essential to have the best chances at getting F4 double. Because of You is also essential due to SN's massive reliance on her own Ego signets, as they act as a mid but decent powerspike to her. After F13, Out of Reach can be used for getting +1 on Kosma signets. Tsukimi Himiko is taken before F17 and F18 boss fights.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "SA",
						},
						{
							time: "Mid",
							first: "SS",
							second: "SA",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "Do note that the usage of supports is very important to time out together with SN's burst windows, as they provide the necessary enormous damage spikes for her needed to get through, especially at Double bonus floors. BR can be picked by F17 as SN really depends on gather because of her single target damage being so weak that she'd rather be hitting everyone at once.",
				},
				signet: {
					danger:
						"Ideal course of build up: 2 Ego Start (Vulnerable Duality + Intergrowth) into Aponia's Ultimate F3, unlock Aponia 2nd Core by F4 with Basic ATK and 70 Initial Load, go shop F5 and swap The Lonely Moon out for Because of You. If possible, buy Aponia's Breach or Penance from Shop. Otherwise, buy Sakura's TDM Taken and TDM signets from shop or Griseo's Yellow & Black, get Aponia's Breach by F6 and proceed to get Aponia's Penance and TDM Taken from F7 Double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Vulnerable Duality",
									description:
										"Triggering Ultimate Evasion Skill reduces Ultimate CD by 40%.",
									priority: "Start",
								},
								{
									name: "Blessing of Intergrowth",
									description:
										"Switching between Saule and Veliona restores full Ultimate Evasion Skill charges.",
									priority: "1st",
								},
								{
									name: "Blessing of Union",
									description:
										"Within 12s after switching between Saule and Veliona, resonances of either Sunnebrands or Veilmarks trigger the resonance effects of both marks.",
									priority: "2nd",
								},
								{
									name: "Blessing of Kindred",
									description:
										"Any mark resonance triggers the effect twice. CD: 5s.",
									priority: "3rd",
								},
								{
									name: "Blessing of Might of Duality",
									description:
										"Casting Ultimate creates a resonance field (up to 3 can be present). Resonances of Sunnebrands or Veilmarks deal 160% ATK of bonus Physical DMG to enemies within the field.",
									priority: "No",
								},
							],
							note: "SN absolutely needs 2 minimum Ego signets to work: Vulnerable Duality and Intergrowth. SS rank eliminates SN's reliance on Sakura's Fuji signet. Then, the other 2 Ego signets that SN really wants to get are Union and Kindred.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Breach is an absolute must to get before F7. You'll have to reset the run otherwise. The reason for this is due to SN's massive reliance on Breach as without it her damage plummets really really hard. As for SP Regen, it's not a bad choice due to how much SN halvens Load from her constant UE's, allowing for the Load to get back up to 150 fast enough during every Ultimate's animation if you have 3 of Aponia's Basic signets.",
						},
						{
							name: "Kosma - Signet of Daybreak (2nd Core)",
							lists: [
								{
									name: "Horns that Rip the Bleak Sky",
									description:
										"Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "1st",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description:
										"Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Talons that Desecrate the Sanctuary",
									description:
										"Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "3rd",
								},
								{
									name: "Heart that Commited Seven Crimes",
									description: "Rend lasts 5s longer.",
									priority: "4th",
								},
								{
									name: "Daybreak, Lone Beacon",
									description: "",
									priority: "Core",
								},
								{
									name: "Heart, Unshakable Character",
									description:
										"Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Dawn, Perpetual Wait",
									description:
										"While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
									priority: "2nd",
								},
								{
									name: "Choice, Ensuing Regret",
									description:
										"When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional 3rd",
								},
							],
							note: "In terms of order priority, Kosma is the second main core for SN to use, however the other signets can be prioritized to get from Felis Shop.",
						},
						{
							name: "Sakura - Signet of Setsuna (3rd Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "3rd",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku* ",
									description: "",
									priority: "Core",
								},
							],
							note: "SN often can't make use of Sakura1 very well, and due to her nature of spamming UE over and over triggering Sakura Screens one after the other, it's not much of a priority to unlock her core, as SN prefers to have Stained Sakura to make better use of it. Due to this, Sakura is better taken from Felis Shop.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (Felis Shop Signets)",
							lists: [
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
			{
				name: "S2 Build 5D",
				note: "",
				boss: {
					info: "Husk or Hephaestus, then Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "S2",
							difficult: "Abstinence",
							gear: "Path of Acheron Pri & 3-set Allan Poe",
							time: "14m (5.9B)",
							ref: "https://youtu.be/cslZh5G3YxI",
						},
					],
					note: "Honestly? Just play someone else instead. SN is the weakest ER valk since release, without any changes at all. SS-rank is expected to be able to do Finality, and of course Corruption. This weather is also not really in her favor either.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "Tsukimi Himiko",
						},
						{
							time: "Mid",
							first: "Forget-Me-Not / Burden / Mad King's Mask",
							second: "Tsukimi Himiko",
						},
						{
							time: "Late",
							first: " Stained Sakura",
							second: "Tsukimi Himiko",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SA",
							second: "SS",
						},
						{
							time: "Mid",
							first: "SA",
							second: "SS",
						},
						{
							time: "Late",
							first: "SA",
							second: "SS",
						},
					],
				},
				signet: {
					danger:
						"Ideal start is double Ego door into 1 Sakura door. Read Sakura's section for explanation.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Kindred",
									description:
										"Any mark resonance triggers the effect twice. CD: 5s.",
									priority: "Optional",
								},
								{
									name: "Blessing of Vulnerable Duality",
									description:
										"Triggering Ultimate Evasion Skill reduces Ultimate CD by 40%.",
									priority: "Start",
								},
								{
									name: "Blessing of Union",
									description:
										"Within 12s after switching between Saule and Veliona, resonances of either Sunnebrands or Veilmarks trigger the resonance effects of both marks.",
									priority: "Optional",
								},
								{
									name: "Blessing of Intergrowth",
									description:
										"Switching between Saule and Veliona restores full Ultimate Evasion Skill charges.",
									priority: "1st",
								},
								{
									name: "Blessing of Might of Duality",
									description:
										"Casting Ultimate creates a resonance field (up to 3 can be present). Resonances of Sunnebrands or Veilmarks deal 160% ATK of bonus Physical DMG to enemies within the field.",
									priority: "No",
								},
							],
							note: "As SN is a valk that loves her Ego signets, if you get Ego doors, take them UNLESS you get an door that will complete a necessary Core.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (2nd Core)",
							lists: [
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description:
										"Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "4th",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku* ",
									description: "",
									priority: "Core",
								},
							],
							note: "Taking Sakura's Bountiful Blossom: Fuji for the 3rd door is the ideal start, due to its synergy with the 2 starting Ego signets and the synergy with Sakura's FC Skill. It's also the most effective.",
						},
						{
							name: "Kevin - Signet of Deliverance (3rd Core)",
							lists: [
								{
									name: "Mark of the Predator",
									description: "Ultimate boosts Physical Breach by 25% for 5s.",
									priority: "1st",
								},
								{
									name: "Goblet of the Giver",
									description: "Ultimate boosts Total DMG by 35% for 5s",
									priority: "2nd",
								},
								{
									name: "Pendant of the Watcher",
									description: "Ultimate boosts Physical DMG by 30% for 5s.",
									priority: "3rd",
								},
								{
									name: "Blade of the Deliverer",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of the Deliverer",
									description:
										"Duration of Final Battle and all buffs provided by Normal Signets of Deliverance are extended to 8s.",
									priority: "1st",
								},
								{
									name: "Crusade of the Deliverer",
									description:
										"After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%.",
									priority: "2nd",
								},
							],
							note: "Getting Kevin's Core before Hephaestus fight is the most ideal.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "You don't have to worry about low health gameplay without shields. SN's repeated abuse of Ultimate Evasion and her own Ultimate will do the job of acting as I-frames. ",
							danger:
								"Due to the nature of SN being, in a streak, the most unfavored valkyrie patch after patch in the rotating ER weathers, do not expect her performance and power compared to other valkyries to change. Yet, if you still want to play this valkyrie, do enjoy her. And hopefully someday Hoyoverse will consider reworking her Ego signets. https://www.youtube.com/watch?v=cslZh5G3YxI",
						},
					],
				},
			},
		],
	},
	{
		name: "Sweet 'n' Spicy",
		type: "MECH",
		keyword: "sns sweet n spicy carole pepper",
		builds: [
			{
				name: "Scamrole!",
				note: "Updated 6.1. Carole arguably sits in a tier of her own thanks to this, and a couple other reasons. While she actually has A LOT of frontloaded damage that hurts a shitton, both in her Charged ATKs and Ultimate, this is however eclipsed by the fact that she's actually TERRIBLE when dealing with the F17 Bosses. This can easily become a problem for you to get past, which would mean a failed run.",
				boss: {
					info: "Husk? or Hephaestus, then Aponia or Vill-V",
					note: "I do not know how Carole performs against Husk, and I don't really want to try it out either. Not gonna deal with the IMG Taint and Husk's bullshit. Honestly, not sure which one between the two is less bullshit for Carole.",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "MKP & Paganini",
							time: "12:34m (6.1)",
							ref: "https://youtu.be/MdpFV-Zh1LU",
						},
					],
					note: "Carole's downscalability shouldn't be much of an issue with other alternative stigmas like Elysia TB or BiankaT.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1. ",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Rainbow of Absence / Gold Goblet",
							second: "Because of You",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
					note: "The Lonely Moon is essential to help Carole guarantee the F4 Double. You just have to time it well for 3rd Wave.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "SN",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BR",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "SN will help Carole with the early floors' Quantum Mobs, making her essential. Afterwards, she can be swapped out quickly for BR. Carole does not need BKE, as she has a lot of Heavy Attack Trauma filling of her own to deal with Heimdall.",
				},
				signet: {
					note: "Ideal Order from F1-F7: 2 Ego Start (Revolution + Brake) into Aponia's Basic ATK F3, finish Aponia 2nd Core by F4 double, go shop F5 and put Because of You, buy Kalpas' both DMG boosts or one and Eden's TDM, grab Aponia's Breach at F6, get the remaining Penance and TDM Taken from Aponia at F7 Double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Revolution",
									description:
										"Each charging stage reduces Ultimate CD by 0.8s. Ultimate and aerial Charged ATK deal 10% bonus Physical DMG to enemies not protected by shields",
									priority: "Start",
								},
								{
									name: "Blessing of Brake",
									description:
										"Charging speed accelerates and Physical DMG of Charged ATK increases by 10%. My Hands Are Burning stacks faster",
									priority: "1st",
								},
								{
									name: "Blessing of Rupture",
									description:
										"Ground Charged ATK can charge up to 4 stages and deal 400% ATK of bonus Physical DMG",
									priority: "2nd",
								},
								{
									name: "Blessing of Impulse",
									description:
										"Armor Shredder maxes at 4 stacks and stacks twice each time",
									priority: "3rd",
								},
								{
									name: "Blessing of Skyfall",
									description:
										"Each stage of aerial charging stacks Momentum once up to 6 stacks. Each stack boosts Ultimate DMG by 15%. Removed upon Ultimate cast",
									priority: "Optional 4th",
								},
							],
							note: "Revolution and Brake are the essential starter Ego signets for Carole. Afterwards, Rupture and Impulse are the other 2 must-get signets from Because of You. Skyfall is also good to take if you ever get a 5th Ego door in your run, as it further improves on Ultimate's DMG.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
							note: "Basic ATK is the highest priority to +3. Ultimate can also be considered to +3 but give priority to Griseo's Red Paint.",
						},
						{
							name: "Kalpas - Signet of Decimation (2nd Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description:
										"Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core (Not Necessary)",
								},
							],
							note: "Unlocking Kalpas' core wont be necessary if you don't get Skyfall in your run.",
						},
						{
							name: "Griseo - Signet of Stars (3rd Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "4th",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
							note: "If you manage to get Petals in the Wind, try to always trigger it whenever possible for maximum damage output.",
						},
						{
							name: "Eden - Signet of Gold (4th Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "Optional 3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "Optional 4th",
								},
								{
									name: "Aria of Gold",
									description: "",
									priority: "Core",
								},
							],
							note: "Prioritize getting Eden's DMG boost signets mainly from Felis Shop.",
						},
					],
				},
			},
		],
	},
	{
		name: "Twilight Paladin",
		type: "MECH",
		keyword: "theresa apocalypse tp twilight paladin",
		builds: [
			{
				name: "Teri's Struggles",
				note: "Updated 6.1. Sadly, TP's strength is pretty average. All around, she's average. Just a decent ER valkyrie that isn't either good nor bad. ",
				boss: {
					info: "Hephaestus, then Aponia or Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Hekate Sombre & Kafka",
							time: "11:26m (6.1)",
							ref: "https://youtu.be/fVlpYAEqHug",
						},
					],
					note: "This valkyrie's downscalability issues can be notoriously bad as she also sort of relies in her signature weapon for the endless combo hits, especially at early game when you don't have much room for continuously reducing your Ult's CD. Her gears are just... well. Time to inhale copium, probably.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Light as a Bodhi Leaf / Gold Goblet / Rainbow of Absence",
							second: "Because of You / Dreamful Gold",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Dreamful Gold",
						},
					],
					note: "The Lonely Moon is a must to get F4 Double guaranteed.",
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "SS",
							second: "SN",
						},
						{
							time: "Mid",
							first: "SS",
							second: "BKE",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR",
						},
					],
					note: "SA provides some comfy gather alongside a nice Phys DMG boost. SN is mainly to deal with the early Quantum mobs as they are too tanky for her without being collapsed. Afterwards, she's swapped out for SS. Remember to bring BKE before Heimdall fight.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Banishment + Penalty) into Aponia's SP Regen or Basic ATK F3, unlock Aponia's 2nd Core by F4 Doubles, go shop F5 and swap TLM for Because of You, buy Su's 30 SP and TDM Taken or 25 Hits from Shop, grab Aponia's Breach at F6 and finish Su's 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Banishment",
									description:
										"Every combo hits reduce Ultimate CD by 18% and restore 5 SP. CD: 2s. Ultimate deal 100% bonus Physical DMG and an additional 3000% ATK of Physical DMG. Blood Tide continuously gathers enemies nearby",
									priority: "Start",
								},
								{
									name: "Blessing of Penalty",
									description:
										"In Fervent state, Total DMG increases by 15% per second for up to 10 stacks. Reset when exiting Fervent state",
									priority: "1st",
								},
								{
									name: "Blessing of Dusk",
									description:
										"With Polarization Agent consumed, Feverish Barrage deals ATK of bonus Physical DMG and grants 10% bonus Move Speed for 20s. 6 stacks max",
									priority: "2nd",
								},
								{
									name: "Blessing of Radiance",
									description:
										"Ultimate Evasion Skill resets Fervor drain speed, boosts Physical DMG by 80% for 8s. Casting Feverish Barrage in Fervent state triggers Ultimate Evasion Skill but not Fang Execution",
									priority: "3rd",
								},
								{
									name: "Blessing of Sanction",
									description:
										"Every combo hits trigger slashing blades to deal 2x1000% ATK of Physical DMG and grant 30% Physical Breach lasting 1s. CD: 5s",
									priority: "No",
								},
							],
							note: "2 Ego signet start is strongly recommended for TP. Banishment and Penalty are her go-to starting signets. It is also strongly recommended to use Because of You to get Dusk and Radiance. 5th Ego is not necessary.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							],
						},
						{
							name: "Su - Signet of Bodhi (2nd Core)",
							lists: [
								{
									name: "Motto of Dibba-Cakkhu",
									description:
										"Combo hits are reset at 150 to boost Total DMG taken by all enemies by 35% for 10s.",
									priority: "1st",
								},
								{
									name: "Motto of Asavakkhaya",
									description:
										"Attacks grant 25 bonus combo hits on hit. CD: 5s.",
									priority: "2nd",
								},
								{
									name: "Motto of Ceto-Pariya-Nana",
									description: "Combo hits are reset at 150 to restore 30 SP.",
									priority: "3rd",
								},
								{
									name: "Motto of Pubbe-Nivasanussati",
									description:
										"Combo hits are reset at 150 to boost Total DMG by 55% for 10s.",
									priority: "4th",
								},
								{
									name: "Motto of Iddhi-Vidha",
									description:
										"Combo hits are increased to 60 when below 60. CD: 10s.",
									priority: "Optional 5th",
								},
								{
									name: "Dictum of Bodhi",
									description: "",
									priority: "Core",
								},
							],
							note: "You can instead just get 25 Hits & TDM Taken first from Shop.",
						},
						{
							name: "Eden - Signet of Gold (3rd Core)",
							lists: [
								{
									name: "Recitatif of Eden",
									description: "Every 10 SP left boosts Total DMG by 3.0%.",
									priority: "1st",
								},
								{
									name: "Recitatif of Creeks",
									description:
										"Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
								{
									name: "Recitatif of Good Wine",
									description: "Restore 1.5 SP per second.",
									priority: "3rd",
								},
								{
									name: "Recitatif of Fine Jade",
									description: "Initial SP and max SP increase by 30.",
									priority: "4th",
								},
								{
									name: "Echo of Gold",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of Withered Soil",
									description:
										"After lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends.",
									priority: "1st",
								},
								{
									name: "Echo of Silent Night",
									description:
										"After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends.",
									priority: "Optional 2nd",
								},
							],
							note: "Silent Night is strongly recommended to get as soon as possible, as it will act as your second Breach signet. Withered Soil in the other hand will go along nicely with the synergy from the massive SP regen you'll be getting from your other sources, leading to massive damage boosts.",
						},
						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "4th",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core (Not Necessary)",
								},
								{
									name: "Petals in the Wind",
									description:
										"When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description:
										"When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
							note: "Griseo's Core is not really needed to complete, so you can give priority to the other Signets.",
						},
						{
							name: "Sakura - Signet of Setsuna (Felis Shop Signets)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
						},
					],
				},
			},
		],
	},
	{
		name: "Valkyrie Gloria",
		type: "QUA",
		keyword: "vg valkyrie gloria goose dudu bianca durandal astagina",
		builds: [
			{
				name: "Abstinence Build",
				note: "Updated for 6.1. Honestly, just pick someone better.",
				boss: {
					info: "Husk or Hephaestus, Aponia",
				},
				setup: {
					lists: [
						{
							rank: "SSS",
							difficult: "Abstinence",
							gear: "Eos Gloria & LWH TB Thales M",
							time: "13:09m (5.9B)",
							ref: "https://youtu.be/ILcGqhJskcs",
						},
					],
					note: "Downscaling would fit into lower difficulties with this one.",
				},
				buff: {
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon",
						},
						{
							time: "Mid",
							first:
								"Pseudo Miracle / Memory / Rainbow of Absence / Mad King's Mask",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "FR",
						},
						{
							time: "Late",
							first: "AE",
							second: "FR",
						},
					],
				},
				signet: {
					note: "Ideal course of build up: Double Ego start > Apo2 Core by F4 > Apo2 Breach by F5 > V-V by F6 > Complete V-V 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Battle Song",
									description:
										"Weapon actives deal 200% bonus Total DMG. Hitting an enemy with Charged ATK in Aura Ignis resets weapon active CD.",
									priority: "Start",
								},
								{
									name: "Blessing of Gloria",
									description:
										"The last hit of Charged ATK or Throw ATK inflicts Magnifica Mark on enemies which explodes after a short delay to deal 1500% ATK of Fire DMG.",
									priority: "1st",
								},
								{
									name: "Blessing of Sol",
									description:
										"Within 3s after performing Ultimate Evasion, Basic ATK Sequence 5 or the last hit of Charged ATK inflicts Magnifica Mark on enemies which explodes after a short delay to deal 1200% ATK of Fire DMG.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Triumph",
									description:
										"Triggering Ultimate Evasion Skill or detonating Magnifica Mark restores 15 SP.",
									priority: "Filler",
								},
								{
									name: "Blessing of Impetus",
									description:
										"Entering Sprint triggers Stage 2 and until Sprint ends, attacks cost 40 Resolve more on hit to deal 2000% ATK of Fire DMG per second.",
									priority: "No",
								},
							],
							note: "Battle Song + Gloria are a must. Sol can be optionally picked later. Triumph is not necessary. VG is another valk that loves her Ego signets, however, prioritize completing the important cores over the Ego signets.",
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Third, No Brutality",
									description:
										"Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description:
										"Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "Fourth, No Insolence",
									description:
										"Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description:
										"Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description:
										"You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description:
										"Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description:
										"Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Signet)",
							lists: [
								{
									name: "Red & Hot",
									description:
										"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st YES",
								},
								{
									name: "Yellow & Warm",
									description:
										"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd YES",
								},
								{
									name: "Black & Dark",
									description:
										"Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd YES",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "A Flame Extinguished",
									description:
										"When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (3rd Core)",
							lists: [
								{
									name: "Act II: Pendulum",
									description:
										"Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act III: Conflict",
									description:
										"Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act I: Magic",
									description:
										"Using a weapon active boosts its Total DMG by 10%. 6 stacks max. Reset at the end of each battle.",
									priority: "3rd",
								},
								{
									name: "Act VI: Sneer",
									description:
										"Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "Optional",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description:
										"Extends Global Time Fracture caused by Special Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description:
										"During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
								{
									name: "Saga: Overlapping Needles",
									description:
										"Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG.",
									priority: "Filler",
								},
							],
							note: "Interlacing Cells and Origin of Slumber take priority of upgrades.",
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							lists: [
								{
									name: "Blade, Grave and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%.",
									priority: "1st",
								},
								{
									name: "Bone, Blood and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "Kalpas' signets are best taken from Felis shop. If you get 2 of Kalpas' signets from there, then proceed with getting his Core if possible.",
						},
					],
				},
			},
		],
	},
];
