export const valkyries = [
	{
		name: "Argent Knight: Artemis",
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. AKA is yet another one of these valkyries that needs quite the particular investment for comfily using in ER. She wants a minimum rank of S2, and she also wants her pri-arm, without which she struggles quite noticeably. However, there's also something else that adds up into her performance at ER. She's also a highly difficult mechanical valk to optimally play with, as she does have quite a lot of tricks going for her. Most notably, animation cancels, which arguably do provide quite a big and drastic DPS increase for her, both inside and outside ER.",
				boss: {
					info: "Husk, then Vill-V or Kalpas",
					note: "Aponia is just easier. Kosma is not recommended due to FR lacking enough hitcount potential which would take her too long during the hitcount phases.",
				},
				setup: {
					danger:
						"In downscalability terms, she's downright bad below SS rank. At a minimum of S2 rank however, she isn't as bad, but one problem still remains, she needs her signature Pri. With weaker stigmatas, expect her performance to decrease. Choose difficulty accordingly.",
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "Skadi of Thrymheim & Ana TMB",
							time: "10:08 (6.1)",
							ref: "https://youtu.be/8DI2mKbHxNY",
						},
					],
				},
				buff: {
					note: "Effective for 6.1",
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
				},
				sigil: {
					note: "With Willows and assuming same rank (SS), it's possible for AKA to instead start with Because of You and get her 2 Ego signets for F7, which will then open the opportunity to get Boundless Logos by F9.",
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You",
						},
						{
							time: "Mid",
							first: "Forbidden Seed / Memory / Rainbow of Absence",
							second: "Because of You (F5 Shop) / Boundless Logos",
						},
						{
							time: "Late",
							first: "The First Scale",
							second: "Boundless Logos",
						},
					],
				},
				support: {
					note: "Remember to switch out LE for BK at F9/F10 before Heimdall fight. As for LE, you can switch her out once you get yourself a SP regen source like Aponia's. HB on the other hand is better after Heimdall fight, as she will provide highest damage. BR is not recommended due to AKA wanting to stay at more than 70% HP.",
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "LE",
						},
						{
							time: "Mid",
							first: "AE",
							second: "BK",
						},
						{
							time: "Late",
							first: "AE",
							second: "HB",
						},
					],
				},
				signets: {
					note: "Ideal course of build up: 2 Ego start into Aponia SP Regen F3, finish Aponia 2nd Core by F4, go shop F5 and swap The Lonely Moon for Because of You, buy Aponia's Penance if possible, otherwise get Mobius' Lip Poison [E] and Hua's Elem Breach. Can upgrade Aponia's Ultimate. Grab Aponia door F6 for Breach and finish Mobius 1st Core by F7 with Entwined [P] and Rodent [V].",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							note: "This build mainly relies on 2 Ego signets with 2 other serving as a huge powerspike: Starting with Frost Scythe + Stellar Trails. Frost Scythe will act as your means of reliable gather, being a strong one at that, and also providing pretty decent amounts of damage on a 8s CD. Be mindful of this to spam it every 8 seconds. The other 2 Ego Signets to get are Winter Harvest + Cold Moon. Do NOT get Uranian Mirror.",
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
							note: "Lip Poison gives a good damage increase to AKA's Crescent Harvest (her Summoned Entity). Dead [X] is also strongly recommended to get as a sharp damage increase for AKA.",
							lists: [
								{
									name: "Lip Poison [E]",
									description:
										"Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60 %.ELFs",
									priority: "1st",
								},
								{
									name: "Entwined [P]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, enemies take 8 % bonus Total DMG(5 stacks max)",
									priority: "2nd",
								},
								{
									name: "Rodent [V]",
									description:
										"For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10 % bonus Total DMG(5 stacks max).",
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
						},
						{
							name: "Hua - Signet of Vicissitude (3rd Core)",
							note: "If you don't get any better options for doors, you can try and gamble for Broken Dream",
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
		builds: [
			{
				name: "General Build",
				danger: "Outdated 5.8 build",
				boss: { info: "Aponia" },
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Forget-Me-Not / Mad King's Mask",
							second: "",
						},
						{
							time: "Mid",
							first: "Forget-Me-Not / Grey-scale Rainbow",
							second: "",
						},
						{
							time: "Late",
							first: "Stained Sakura / Home Lost",
							second: "",
						},
					],
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "LE",
							second: "",
						},
						{
							time: "Mid",
							first: "LE",
							second: "BR",
						},
						{
							time: "Late",
							first: "BR",
							second: "",
						},
					],
				},
				signets: {
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
									name: "Blessing of Glory",
									description:
										"In Burst mode, Weapon Active has 70% shorter CD and can deal 2400% ATK of bonus Physical DMG at the cost of 12 SP. Weapon Active gains 4% Total DMG boost per second, and the boost resets when Burst mode is activated again",
									priority: "1st",
								},
								{
									name: "Blessing of Paragon",
									description:
										"Ultimate grants 5 stacks of Paragon, each of which boosts Total DMG by 4% for 15s",
									priority: "2nd",
								},
								{
									name: "Blessing of Holy Lance",
									description:
										"During Basic ATK SEQ 4, tap [ATK] repeatedly to thrust the lance at enemies in an increasingly violent manner to deal a total of 6000% ATK of Physical DMG, and Valkyrie is immune to frontal and flank attacks. When Valkyrie's SEQ 4 attack reaches its peak, Basic ATK SEQ 5 will be enhanced to deal 3500% ATK of bonus Physical DMG to enemies in a large area",
									priority: "No",
								},
								{
									name: "Blessing of Formation",
									description:
										"Basic ATK SEQ 5 creates a 3-sec Grav Singularity that pulls in surrounding enemies and deals 2100% ATK of Physical DMG to them. Basic ATK SEQ 4 & 5 and the explosion of the Grav Singularity boost Valkyrie's Total DMG by 3% for 40s (15 stacks max)",
									priority: "No",
								},
							],
						},
						{
							name: "Kevin - Signet of Deliverance (1st Core)",
							lists: [
								{
									name: "Mask of the Predator",
									description: "Ultimate boosts Physical Breach by 25% for 5s",
									priority: "1st",
								},
								{
									name: "Pendant of the Watcher",
									description: "Ultimate boosts Physical DMG by 30% for 5s",
									priority: "2nd",
								},
								{
									name: "Goblet of the Giver",
									description: "Ultimate boosts Total DMG by 35% for 5s",
									priority: "3rd ",
								},
								{
									name: "Blade of the Deliverer",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of the Deliverer",
									description:
										"Duration of Final Battle and all buffs provided by Normal Signets of Deliverance are extended to 8s",
									priority: "YES",
								},
								{
									name: "Crusade of the Deliverer",
									description:
										"After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%",
									priority: "1st",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (1st Core)",
							lists: [
								{
									name: "Bountiful Blossom: Koyo",
									description:
										"Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description:
										"Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description:
										"Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "3rd",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Setsuna Blade: Ame-Shiko",
									description:
										"Activating Sakura Screen resets Ultimate CD and weapon active CD",
									priority: "YES",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
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
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description:
										"Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration",
									priority: "4th",
								},
								{
									name: "Shine like Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Blooming like Flowers",
									description:
										"When enemies of countering types are tainted with both blue and red paints, Valkyries deal 50% bonus Total DMG to them (cannot stack)",
									priority: "YES",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (2nd Core)",
							lists: [
								{
									name: "Bone, Blood, and Ribbon",
									description:
										"Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",
									priority: "1st",
								},
								{
									name: "Blade, Grave, and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%",
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
								{
									name: "Death, Life, Oblivion, and Existence",
									description:
										" If [Bloodboil Garment] exceeds 1500, when taking damage, reduces damage taken by 1% of [Bloodboil Garment]",
									priority: "Filler ",
								},
							],
						},
					],
				},
			}
		]
	},
	{
		name: "Valkyrie Gloria",
		builds: [
			{
				name: "VG - Abstinence Build 5D",
				note: "Updated for 6.1. Honestly, just pick someone better.",
				boss: { info: "Husk or Hephaestus, Aponia" },
				setup: {
					note: "Downscaling would fit into lower difficulties with this one.",
					lists: [
						{
							rank: "SSS",
							difficult: "Abstinence",
							gear: "Eos Gloria & LWH TB Thales M",
							time: "13:09 (2nd Half 5.9)",
							ref: "https://youtu.be/ILcGqhJskcs",
						},
					],
				},
				buff: {
					note: "Effective for 6.1",
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
							second: "LE;",
						},
						{
							time: "Mid",
							first: "AE",
							second: "FR;",
						},
						{
							time: "Late",
							first: "AE",
							second: "FR;",
						},
					],
				},
				signets: {
					note: "Ideal course of build up: Double Ego start > Apo2 Core by F4 > Apo2 Breach by F5 > V-V by F6 > Complete V-V 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							note: "Battle Song + Gloria are a must. Sol can be optionally picked later. Triumph is not necessary. VG is another valk that loves her Ego signets, however, prioritize completing the important cores over the Ego signets.",
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
							note: "Interlacing Cells and Origin of Slumber take priority of upgrades.",
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
									name: "Intermezzo: Holistic Helix",
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
									priority: "Filler ",
								},
							],
						},
						{
							name: "Kalpas - Signet of Decimation (4th Core)",
							note: "Kalpas' signets are best taken from Felis shop. If you get 2 of Kalpas' signets from there, then proceed with getting his Core if possible.",
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
					],
				},
			},
		],
	},
];