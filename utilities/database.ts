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
				signet: {
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
				signet: {
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
			},
		],
	},
	{
		name: "Dea Anchora",
		danger: "Outdated 5.8 build",
		boss: {
			info: "Husk, Elysia",
		},
		sigil: {
			lists: [
				{
					time: "Early",
					first: "Burden",
					second: "",
				},
				{
					time: "Mid",
					first: "Gold Goblet / Light as a Bodhi Leaf",
					second: "",
				},
				{
					time: "Late",
					first: "It Will Be Written / Home Lost",
					second: "",
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
					second: "LE / BR",
				},
				{
					time: "Late",
					first: "AE",
					second: "MA / BR",
				},
			],
		},
		signet: {
			lists: [
				{
					name: "Elysia - Signet of Ego",
					lists: [
						{
							name: "Blessing of Stars",
							description: "Ultimate deals 50 % bonus Total DMG",
							priority: "Start",
						},
						{
							name: "Blessing of Brilliance",
							description:
								"Voidstar Anchor and Astral Flares EX cost no SP and restore 3 SP.Every 30 SP restored deals 800 % ATK of Fire DMG to enemies within 10 meters.CD: 6s",
							priority: "1st",
						},
						{
							name: "Blessing of Halo",
							description:
								"Voidstar Anchor, Voidstar Anchor EX, Astral Flares, and Astral Flares EX deal 2000 % ATK of Fire DMG to enemies within 8 meters of the target hit, gather them, and restore 50 Astrum.CD: 10s",
							priority: "2nd",
						},
						{
							name: "Blessing of Sheen",
							description:
								"Voidstar Anchor EX and Astral Flares EX do not suspend Astrum cosumption, but Seirios Ballista doesnt end Astral Harness and clear Astrum.Seirios Ballista costs 65 SP at most",
							priority: "3rd",
						},
						{
							name: "Blessing of Gale",
							description:
								"In Astral Hamess, all attacks ignite enemies hit and ignited enemies take 25 % bonus Total DMG for 10s",
							priority: "Filler",
						},
					],
				},
				{
					name: "Kevin - Signet of Deliverance (1st Core)",
					lists: [
						{
							name: "Artifact of the Inhibitor",
							description: "Ultimate boosts Elemental Breach by 20 % for 5s",
							priority: "1st",
						},
						{
							name: "Brand of the Undead",
							description: "Ultimate boosts Elemental DMG by 30 % for 5s",
							priority: "2nd",
						},
						{
							name: "Rochet of the Pilgrim",
							description: "Ultimate restores 3 SP per second for 5s",
							priority: "3rd",
						},
						{
							name: "Goblet of the Giver",
							description: "Ultimate boosts Total DMG by 35 % for 5s",
							priority: "Filler",
						},
						{
							name: "Blade of the Deliverer",
							description: "",
							priority: "Core",
						},
						{
							name: "Crusade of the Deliverer",
							description:
								"After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90 % instead of 50 %",
							priority: "1st",
						},
					],
				},
				{
					name: "Eden - Signet of Gold (2nd Core)",
					lists: [
						{
							name: "Recitatif of Creeks",
							description:
								"Every 10 SP left boosts Physical & Elemental DMG by 2.5 %",
							priority: "1st",
						},
						{
							name: "Recitatif of Eden",
							description: "Every 10 SP left boost Total DMG by 3.0 %",
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
					name: "Griseo - Signet of Stars (1st Core)",
					lists: [
						{
							name: "White & Bright",
							description:
								"Every time an enemy is tainted, Valkyrie restores 12 SP.CD: 5s",
							priority: "Start",
						},
						{
							name: "Yellow & Warm",
							description:
								"Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30 % bonus Total DMG.Triggering it again resets the duration",
							priority: "1st",
						},
						{
							name: "Red & Hot",
							description:
								"Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25 % bonus Physical and Elemental MG(cannot stack).Triggering it again resets the duration",
							priority: "2nd",
						},
						{
							name: "Grey & Empty",
							description: "Enemies stay tainted for 5s longer",
							priority: "3rd",
						},
						{
							name: "Shine like Stars",
							description: "",
							priority: "Core",
						},
					],
				},
				{
					name: "Su - Signet of Bodhi (2nd Core)",
					lists: [
						{
							name: "Motto of Dibba - Cakkhu",
							description:
								"Combo hits are reset at 150 to boost Total DMG taken by all enemies by 35 % for 10s",
							priority: "1st",
						},
						{
							name: "Motto of Asavakkhaya",
							description: "Attacks grant 25 bonus combo hits on hit.CD: 5s",
							priority: "2nd",
						},
						{
							name: "Motto of Iddhi - Vidha",
							description:
								"Combo hits are increased to 60 when below 60. CD: 10s",
							priority: "3rd",
						},
						{
							name: "Dictum of Bodhi",
							description: "",
							priority: "Core",
						},
						{
							name: "Dictum of Anatman",
							description:
								"Eyes Open debuffs last 3s longer.Every debuff on enemy makes it take 5 % more TDM",
							priority: "1st",
						},
						{
							name: "Dictum of Santam",
							description: "Inflict 3 random debuffs when Eyes Open hit",
							priority: "Filler",
						},
					],
				},
			],
		},
	},
	{
		name: "Disciplinary Perdition",
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. Aponia being one of the strongest Flamechasers available to do ER with, is also a valk that doesn't really demands much mechanical play. There's really not much to explain about her. Aponia in ER is basically a get 100 sp, use Ultimate, hold A for Thunderstorm and move or just watch a video while enemies die. Then gain SP again and repeat the same process. More explanation on her is given in the description of the video runs.",
				boss: {
					info: "Husk, then Aponia",
					note: "Yeah. Fighting herself. That's how things should be. Right?",
				},
				setup: {
					danger:
						"In downscalability terms, Aponia does seem pretty decent as seen on the above run using Handel instead of Zeno. However, do expect worse performance with lower gears, but she can scale accordingly without problems.",
					lists: [
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Lost Conviction & 3-set Handel",
							time: "7:47 (6.1)",
							ref: "https://youtu.be/250mouXMexk",
						},
					],
				},
				buff: {
					note: "Effective for 6.1.",
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: "5",
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: "10",
						},
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: "15",
						},
					],
				},
				sigil: {
					note: "Boundless Feeling is used for the +1 to Aponia signets. You can alternatively start with The Lonely Moon instead, to guarantee 4F double.",
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
				},
				support: {
					note: "AE is not switched out. LE is for early game, and can later be switched out at F5 shop and above once you have Aponia's SP Regen. Other additional SP regen sources can be obtained to be more comfortable, but not recommended. BK is recommended to bring against Heimdall.",
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
							second: "BR",
						},
					],
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start (Admonition into Shelter, then Inclusiveness) into Aponia QTE F3, unlock Aponia 2nd Core with SP Regen and Ultimate, grab Aponia's Breach from F5, go shop F6 and buy Griseo's Red, Yellow and Black from Shop. Can also take Sakura's TDM Taken and TDM and Kalpas signets. Grab Aponia door for F7 and unlock the remaining 2 Enhanceds",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							note: "Aponia only needs 3 Ego signets; Admonition, Shelter and Inclusiveness. A 4th Ego signet can be picked for Rescue, only if you want, as it hasn't given a lot of impact from getting picked. Its almost negligible.",
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
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							note: "All 3 Enhanceds are good to get for Aponia. Also, Basic ATK is not taken because the Admonition Ego signet modifies the Thunderstorm and its finisher to count as Ultimate DMG.",
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
						},

						{
							name: "Griseo - Signet of Stars (2nd Core)",
							note: "After getting Petals in the Wind, can proceed to finish Kalpas 2nd Core.",
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
						},

						{
							name: "Kalpas - Signet of Decimation (3rd Core)",
							note: "Throughout the Wep Active spam, Aponia recovers so much HP upon many repeated uses that she can easily fill Bloodboil Garment to the max in a decent amount of time.",
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
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. Do note that FR needs her Pri-arm if you want to use her for ER. Due to the complex mechanics that FR has, she's one of the harder valks to properly play into ER. In fact, much like certain other valks, her performance won't only depend on her gears and ranks, but also will depend on how optimally you can play her. As long as you can consistently and properly do her Evade cancels (especially taking note of Strix-the bird rune- getting off CD to spam him) into Charged ATKs one after another, you can expect things to go well. Her greatest dps is between her ult and the successive Charged ATK chain.",
				boss: {
					info: "Hephaestus, then Aponia or Kosma",
					note: "Aponia is just easier. Kosma is not recommended due to FR lacking enough hitcount potential which would take her too long during the hitcount phases.",
				},
				setup: {
					danger:
						'In downscalability terms, even below SS2 where FR unlocks her "dps" potential outside ER, she should be fine here. With lower gears as well. However, do note that FR is a valk that re',
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Iris of Helheim & Handel TMB",
							time: "6:21 (6.1)",
							ref: "https://youtu.be/xppTS-q5ll4",
						},
					],
				},
				buff: {
					note: "Effective for 6.1",
					lists: [
						{
							description:
								"When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: "15",
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: "15",
						},
					],
				},
				sigil: {
					note: "If your FR is struggling to get through 4F double, you can instead start with The Lonely Moon and delay your 4 Ego powerspike until F11.",
					lists: [
						{
							time: "Early",
							first: "Veil of Tears",
							second: "Because of You OR The Lonely Moon",
						},
						{
							time: "Mid",
							first: "Memory / Mad King's Mask / Rainbow of Absence",
							second: "The Lonely Moon",
						},
						{
							time: "Late",
							first: "Tin Flask or Key to the Deep",
							second: "The Lonely Moon",
						},
					],
				},
				support: {
					note: "Remember to swap AE out for BK before Heimdall fight. As for the late floors, you can use BR because by then you'll already have more than enough breach with Aponia's and Hua's combined. For this very same reason. You don't take SN out because of 2nd Load Buff.",
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "SN",
						},
						{
							time: "Mid",
							first: "AE/BK",
							second: "SN",
						},
						{
							time: "Late",
							first: "AE/BR",
							second: "SN",
						},
					],
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start into Aponia Ultimate F3, finish Aponia 2nd Core by F4 with SP Regen & 70 Load, grab Aponia's Breach at F5, go shop F6, grab Aponia's Basic ATK if missing, get Kalpas' both DMG boosts or one and Hua's Elem Breach, then use Because of You to grab Nocturne and God Eater from F7 Double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							note: "This build mainly relies on 2 Ego signets that are necessary to start with: Soul Siphon into Valfreyja. Soul Siphon is the signet that will allow FR to chain unlimited Charged ATKs. Valfreyja will be your other main source of big damage. Then, the other 2 Ego signets that become a huge powerspike for FR are Nocturne and God Eater, gotten through Because of You.",
							lists: [
								{
									name: "Blessing of Soul Siphon",
									description:
										"In Valfreyja form basic ATK siphons extra Disir",
									priority: "**Start**",
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
							name: "Kalpas - Signet of Decimation (3rd/4th Core)",
							note: "It is NOT necessary to finish Kalpas2's Core. FR has no in-built healing so she can permanently stay at below 100 HP and won't be recovering any HP diminishing Kalpas' buffs. This also means you can just continue towards Griseo while getting Kalpas signets from shop.",
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
		name: "Fervent Tempo: Delta",
		builds: [
			{
				name: "FT General Build",
				note: "Updated 6.1. In terms of downscalability, this build sucks for that. It's linked to the valk herself. What does this mean? Basically, you'd rather be using another valk instead of FT if your FT is a bit too downscaled. Needs Sleeper's Dream as minimum, otherwise her ER gameplay is really painful.",
				boss: {
					info: "Husk, then Vill-V",
					note: "Why not Hephaestus? Because, despite FT type-countering Heph and even with Griseo2, she's actually awfully horrible against Heph. It also doesn't help that her personal single damage against Bosses is dogshit despite everything. Husk is way easier. Also simpler to parry his attacks.",
				},
				setup: {
					danger: "Sleeper's Dream is the minimum re",
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "Sleeper's Dream & Michelangelo TB Dante M",
							time: "8:55 (6.0 1st Half)",
							ref: "https://youtu.be/0od_2xpXFcI",
						},
					],
				},
				buff: {
					note: "Effective for 6.1.",
					lists: [
						{
							description:
								"Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: "5",
						},
						{
							description:
								"Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: "10",
						},
						{
							description:
								"When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: "15",
						},
					],
				},
				sigil: {
					note: "It Will Be Written can be used for guaranteeing F7 double by oneshotting the Smelter Zombie.",
					lists: [
						{
							time: "Early",
							first: "Rainbow of Absence",
							second: "The Lonely Moon OR Because of You / It Will Be Written",
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
				},
				support: {
					note: "You want to swap LE out once you're settled down on SP regen sources, which is very important for FT. ",

					lists: [
						{
							time: "Early",
							first: "SS",
							second: "LE;",
						},
						{
							time: "Mid",
							first: "SS",
							second: "(LE / BR);",
						},
						{
							time: "Late",
							first: "SS",
							second: "BR;",
						},
					],
				},
				signet: {
					note: "Ideal Order from F1-F7: Double Ego start into Griseo Red or Yellow F3, get Griseo 2nd Core by F4 with Yellow & Black, grab Griseo's A Flame Extinguished or White for F5 or F6, shop, get an Aponia signet and finish Aponia 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							note: "This build works with 2 Ego signets mainly: Silence + Mixing. Those 2 are essential. FT without gather is absolutely horrible. No Mixing means FT is unplayable. Regarding other Ego signets, she really loves the opportunity to take a 3rd and 4th; Thorns and Solitude are your best choices respectively.",

							lists: [
								{
									name: "Blessing of Silence",
									description:
										"Ultimate's CD is reduced by 30% and Ultimate's Total DMG is increased by 300%. Weapon Active CD is reduced by 2s each time Ultimate deals DMG. Strike Back EX is usable during the entirety of Fortress Mode.",
									priority: "**Start**",
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
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
							note: "White is essential due to FT's severe lack of SP regen without Thorns and particularly during Fervent Mode (which incentivizes you to just let Fervent Mode end so you can regen SP again), so if you get Thorns beforehand, you basically ignore White. Also, due to no on-demand UE, you'll want to intentionally let enemies attack you and evade so you can proc Blue paint, and along with it, Fallen Leaves and Petals in the Wind. Especially Fallen Leaves as it gives a really noticeable shitload of dmg buff to FT.",

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
		builds: [
			{
				name: "General Build",
				note: "Updated 6.1. As far as testing goes, this is the current best build for Eden, and other variations with different signets are either weaker, or just don't really work as well as they would seem to do in paper. Take Eden2 for instance, which supposedly GD would be perfectly fine with. Issue? It actually isn't that great. Only acceptable as a versatile option when you don't have any other better alternatives for doors, but otherwise, not recommended to do as early start, as it's garbage.",
				boss: {
					info: "Husk or Hephaestus, then Aponia or Vill-V",
					note: "Hephaestus is only recommended if you actually have both DoI & Handel to go with. Eden has the capability to kill Hephaestus before he goes into Overheat mode. If you do not have the confidence to kill it before it goes Overheat mode, then just go with Husk.",
				},
				setup: {
					danger:
						"In terms of downscalability, as long as you have Handel, GD won't be as painful to use, particularly because the atk difference does play in ",
					lists: [],
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
				},
				sigil: {
					note: "This build has 2 starter variations. You either choose Aponia or Kosma. The difference between both will be explained further below. Look out for reading if you want to know.",
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
				},
				support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR;",
						},
						{
							time: "Mid",
							first: "AE / BK",
							second: "BR;",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR;",
						},
					],
				},
				signet: {
					note: "Ideal course of build up: 3 Ego start into Aponia's Basic or Ultimate F3, unlock Aponia 2nd Core by F4, go shop F5, buy 2 of either Kosma or Kalpas signets and reroll for either door accordingly to unlock their core by F6, otherwise Aponia door for enhanced. If you CAN get Kalpas 2nd Core by F6 over Kosma2, then grab Aponia for F7 double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							note: "This build requires only 3 Ego signets to function: Arioso + Fugue into Cadenza. You can also additionally take a 4rd Ego door for Concerto, or if you plan on using Eden2, take Symphony, but otherwise NEVER take Symphony, as it heavily relies on minimum 2 SP regen sources (Aponia2 and Eden2)",
							danger:
								"Regarding 2 diff Startup importance: Aponia which includes her Boundless Feeling support skill is weaker for F4 Double, but is a bit stronger start after getting her core. Kosma on the other hand provides easily accessible and comfortable gather, while also being stronger for F4 Double and can very likely guarantee it. This run will assume Aponia start. For Kosma start, you just switch the priority order between the two. (Kosma 1st, Aponia 3rd)",
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
							note: "If you want to be able to maximize Kalpas2's Bloodboil Garment, then you take Kosma's healing (the 3000% Adaptive DMG). It will further boost the amount of buffs you can get from Kalpas.",
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
							name: "Pardofelis - Signet of Reverie (5th Core)",
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
				signet: {
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
