import { Valkyrie } from "../utilities/types";

export const valkyries: Array<Valkyrie> = [
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
					lists: [
						{
							rank: "SS0",
							difficult: "Finality",
							gear: "Skadi Pri & 3-set Ana",
							time: "10:08m (6.1)",
							ref: "https://youtu.be/8DI2mKbHxNY",
						},
					],
					danger: "In downscalability terms, she's downright bad below SS rank. At a minimum of S2 rank however, she isn't as bad, but one problem still remains, she needs her signature Pri. With weaker stigmatas, expect her performance to decrease. Choose difficulty accordingly.",
				},
				buff: {
					lists: [
						{
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
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
							second: "The Lonely Moon OR Because of You",
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
							second: "BK",
						},
						{
							time: "Late",
							first: "AE",
							second: "HB",
						},

					],
					note: "Remember to switch out LE for BK at F9/F10 before Heimdall fight. As for LE, you can switch her out once you get yourself a SP regen source like Aponia's. HB on the other hand is better after Heimdall fight, as she will provide highest damage. BR is not recommended due to AKA wanting to stay at more than 70% HP.",
				},

				signet: {
					note: "Ideal course of build up: 2 Ego start into Aponia SP Regen F3, finish Aponia 2nd Core by F4, go shop F5 and swap The Lonely Moon for Because of You, buy Aponia's Penance if possible, otherwise get Mobius' Lip Poison [E] and Hua's Elem Breach. Can upgrade Aponia's Ultimate. Grab Aponia door F6 for Breach and finish Mobius 1st Core by F7 with Entwined [P] and Rodent [V].",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Frost Scythe",
									description: "Tap [ATK] after evasion to hurl Frost Guisarmier which spins for 5s, gathers enemies nearby, and deal 5400% ATK of Ice DMG. CD: 10s",
									priority: "Start",
								},
								{
									name: "Blessing of Stellar Trials",
									description: "Inflicting Ice Cell also creates a Frost Ring centered around the target lasting 2s which deals 480% ATK of Ice DMG per 0.3s to enemies nearby",
									priority: "1st",
								},
								{
									name: "Blessing of Winter Harvest",
									description: "Enemies recovering from Ice Cell are inflicted with 1 stack of Hypothermia",
									priority: "2nd",
								},
								{
									name: "Blessing of Cold Moon",
									description: "Inflicting Ice Cell also creates a self-centered Frost Ring lasting 6s which deals 180% ATK of Ice DMG per 0.3s to enemies nearby",
									priority: "3rd",
								},
								{
									name: "Blessing of Uranian Mirror",
									description: "Burst mode consumes 100% more SP and Valkyrie deals 90% bonus Total DMG in burst mode",
									priority: "No",
								},
							],
							note: "This build mainly relies on 2 Ego signets with 2 other serving as a huge powerspike: Starting with Frost Scythe + Stellar Trails. Frost Scythe will act as your means of reliable gather, being a strong one at that, and also providing pretty decent amounts of damage on a 8s CD. Be mindful of this to spam it every 8 seconds. The other 2 Ego Signets to get are Winter Harvest + Cold Moon. Do NOT get Uranian Mirror."
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "2nd",
								},
								{
									name: "Fourth, No Insolence",
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "3rd",
								},
							]
						},
						{
							name: "Mobius - Signet of Infinity (2nd Core)",
							lists: [
								{
									name: "Lip Poison [E]",
									description: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "1st",
								},
								{
									name: "Entwined [P]",
									description: "For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "2nd",
								},
								{
									name: "Rodent [V]",
									description: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "3rd",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description: "For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description: "Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
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
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
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
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							]
						},
					]
				}
			}
		],
	},
	{
		name: "Bright Knight: Excelsis",
		builds: [
			{
				name: "Recommended",
				danger: "Outdated 5.8 build",
				boss: { info: "Aponia" },
				sigil: {
					lists: [
						{
							time: "Early",
							first: "Forget-Me-Not/Mad King's Mask",
							second: "",
						},
						{
							time: "Mid",
							first: "Forget-Me-Not/Grey-scale Rainbow",
							second: "",
						},
						{
							time: "Late",
							first: "Stained Sakura/Home Lost",
							second: "",
						},
					]
				},
				support: {
					lists: [
						{
							first: "VC",
							second: "LE",
						},
						{
							first: "SS",
							second: "LE / BR",
						},
						{
							first: "SS",
							second: "BR",
						},
					]
				},
				signet: {
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Gambit",
									description: "Triggering Retaliation or Ultimate Evasion boosts Physical DMG by 25% for 8s. If triggered outside Burst mode, Valkyrie gains Iron Body for 8s; if triggered in Burst mode, Valkyrie additionally unleashes a counterattack cross strike before Phantom Cleave to deal 1200% ATK of Physical DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Glory",
									description: "In Burst mode, Weapon Active has 70% shorter CD and can deal 2400% ATK of bonus Physical DMG at the cost of 12 SP. Weapon Active gains 4% Total DMG boost per second, and the boost resets when Burst mode is activated again",
									priority: "1st",
								},
								{
									name: "Blessing of Paragon",
									description: "Ultimate grants 5 stacks of Paragon, each of which boosts Total DMG by 4% for 15s",
									priority: "2nd",
								},
								{
									name: "Blessing of Holy Lance",
									description: "During Basic ATK SEQ 4, tap [ATK] repeatedly to thrust the lance at enemies in an increasingly violent manner to deal a total of 6000% ATK of Physical DMG, and Valkyrie is immune to frontal and flank attacks. When Valkyrie's SEQ 4 attack reaches its peak, Basic ATK SEQ 5 will be enhanced to deal 3500% ATK of bonus Physical DMG to enemies in a large area",
									priority: "No",
								},
								{
									name: "Blessing of Formation",
									description: "Basic ATK SEQ 5 creates a 3-sec Grav Singularity that pulls in surrounding enemies and deals 2100% ATK of Physical DMG to them. Basic ATK SEQ 4 & 5 and the explosion of the Grav Singularity boost Valkyrie's Total DMG by 3% for 40s (15 stacks max)",
									priority: "No",
								},
							]
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
									priority: "3rd",
								},
								{
									name: "Blade of the Deliverer",
									description: "",
									priority: "Core",
								},
								{
									name: "Echo of the Deliverer",
									description: "Duration of Final Battle and all buffs provided by Normal Signets of Deliverance are extended to 8s",
									priority: "Yes",
								},
								{
									name: "Crusade of the Deliverer",
									description: "After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%",
									priority: "1st"
								},
							]
						},
						{
							name: "Sakura - Signet of Setsuna (1st Core)",
							lists: [
	
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description: "Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "3rd",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Setsuna Blade: Ame-Shiko",
									description: "Activating Sakura Screen resets Ultimate CD and weapon active CD",
									priority: "Yes",
								},
							]
						},
						{
							name: "Griseo - Signet of Stars (1st Core)",
							lists: [
								{
									name: "Red & Hot",
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental MG (cannot stack). Triggering it again resets the duration",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration",
									priority: "4th",
								},
								{
									name: "Shine like Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Blooming like Flowers",
									description: "When enemies of countering types are tainted with both blue and red paints, Valkyries deal 50% bonus Total DMG to them (cannot stack)",
									priority: "Yes",
								},
							]
						},
						{
							name: "Kalpas - Signet of Decimation (2nd Core)",
							lists: [
								{
									name: "Path, Misfortune, and Written Fate",
									description: "Max HP increases by 25%",
									priority: "3rd",
								},
								{
									name: "Bone, Blood, and Ribbon",
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",
									priority: "1st",
								},
								{
									name: "Blade, Grave, and Scar",
									description: "Every 100 HP loss boosts Total DMG by 1.0%",
									priority: "2nd",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Death, Life, Oblivion, and Existence",
									description: " If [Bloodboil Garment] exceeds 1500, when taking damage, reduces damage taken by 1% of [Bloodboil Garment]",
									priority: "Filler",
								},
							]
						},
					]
				}
			}
		],
	},
	{
		name: "Dea Anchora",
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
						}
					],
					danger: "This valkyrie's downscalability is beyond terrible. She badly needs Shakes Adrift B's SP Regen. She also needs the T piece's ignite effect. Or better put, not only she needs her signature weapon but also needs her own signature stigmata set.",
				},
				buff: {
					lists: [
						{
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
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
							second: "Because of You (F5 Shop) / Dreamful Gold (After F12)",
						},
						{
							time: "Late",
							first: "Key to the Deep",
							second: "Dreamful Gold",
						},
					],
					note: "The Lonely Moon is absolutely necessary to help barely guarantee F4 Double. ",
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
							second: "MA / BK",
						},
						{
							time: "Late",
							first: "AE",
							second: "MA",
						},
					],
					note: "LE is essential for DA's early game, otherwise she may face SP problems. By F5 Shop, you can swap her out for MA to help DA's damage. BR is not recommended due to DA's long animation sequence for her Ultimate. Also, remember to bring BK before Heimdall fight.",
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
									description: "In Astral Hamess, all attacks ignite enemies hit and ignited enemies take 25% bonus Total DMG for 10s",
									priority: "1st",
								},
								{
									name: "Blessing of Sheen",
									description: "Voidstar Anchor EX and Astral Flares EX do not suspend Astrum cosumption, but Seirios Ballista doesnt end Astral Harness and clear Astrum. Seirios Ballista costs 65 SP at most",
									priority: "2nd",
								},
								{
									name: "Blessing of Halo",
									description: "Voidstar Anchor, Voidstar Anchor EX, Astral Flares, and Astral Flares EX deal 2000% ATK of Fire DMG to enemies within 8 meters of the target hit, gather them, and restore 50 Astrum. CD: 10s",
									priority: "3rd",
								},
								{
									name: "Blessing of Brilliance",
									description: "Voidstar Anchor and Astral Flares EX cost no SP and restore 3 SP. Every 30 SP restored deals 800% ATK of Fire DMG to enemies within 10 meters. CD: 6s",
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
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
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
									description: "After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%",
									priority: "1st",
								},
								{
									name: "Flock of the Deliverer",
									description: "Final Battle is also considered burst mode. Total DMG increases by 20% in burst mode.",
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
									description: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
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
									description: "After lasting over 7s, reduce ATK, DEF, ele resists of enemies nearby",
									priority: "YES",
								},
							],
						},

						{
							name: "Griseo - Signet of Stars (4th Core)",
							lists: [
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Red & Hot",
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental MG (cannot stack). Triggering it again resets the duration",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
					]
				},
			}
		],
	},
	{
		name: "Disciplinary Perdition",
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
					danger: "In downscalability terms, Aponia does seem pretty decent as seen on the above run using Handel instead of Zeno. However, do expect worse performance with lower gears, but she can scale accordingly without problems.",
				},
		buff: {
					lists: [
						{
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
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
							first: "Rainbow of Absence / Mad King's Mask / Feast of Emptiness",
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
							second: "BK",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "AE is not switched out. LE is for early game, and can later be switched out at F5 shop and above once you have Aponia's SP Regen. Other additional SP regen sources can be obtained to be more comfortable, but not recommended. BK is recommended to bring against Heimdall.",
				},
	
				signet: {
					note: "Ideal course of build up: 2 Ego start (Admonition into Shelter, then Inclusiveness) into Aponia QTE F3, unlock Aponia 2nd Core with SP Regen and Ultimate, grab Aponia's Breach from F5, go shop F6 and buy Griseo's Red, Yellow and Black from Shop. Can also take Sakura's TDM Taken and TDM and Kalpas signets. Grab Aponia door for F7 and unlock the remaining 2 Enhanceds",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Admonition",
									description: "Aponia gains 40% Total DMG Reduction. In Predictor's Sentence form, Lightning DMG increases 30% every 0.5s for a maximum of 180%. Inhibitor's Adjudication deals an additional 400% Lightning DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Shelter",
									description: "In Predictor's Sentence form, Redemption cost per second reduced by 55%; Total DMG dealt by Thunderstorm and Inhibitor's Adjudication increases 70% and count as Ultimates",
									priority: "Start",
								},
								{
									name: "Blessing of Inclusiveness",
									description: "Restores 12 SP and reduces Ultimate CD by 6s when illusion uses QTE. Increases Ultimate's Total DMG by 60%. Ultimate restores up to 100% Redemption when used",
									priority: "1st",
								},
								{
									name: "Blessing of Rescue",
									description: "Illusory Summoned Entity will deal Paralyse Trauma alongside DMG. DMG dealt by your Ultimate Evasion Skill increases 120%. Lightning DMG dealt by you or your illusion increases 70%",
									priority: "Optional",
								},
								{
									name: "Blessing of Atonement",
									description: "Aponia illusory Summoned Entity wherever she does, dealing 385% Lightning DMG every second to surrounding enemies. The illusion's Total DMG increases 100% and restores 12 SP after leaving Predictor's Sentence form",
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
									description: "Boosts Valkyrie Total DMG by 20% and keeps Exhortation from reducing for 15s upon QTE hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Flexible P&C",
									description: "Every 100 Shiny Silvers obtained this round restore 1 HP and 0.1 SP. Taking DMG disables this effect for 5s.",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
						},
					],
				}
			}
		],
	},
	{
		name: "Fallen Rosemary",
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
					danger: "In downscalability terms, even below SS2 where FR unlocks her "dps" potential outside ER, she should be fine here. With lower gears as well. However, do note that FR is a valk that requires her Pri-weapon in order to be used in ER, simply due to the instant Valfreyja Form.",
				},
				buff: {
					lists: [
						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				}
      sigil: {
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
							first: "AE/BK",
							second: "SN",
						},
						{
							time: "Late",
							first: "AE/BR",
							second: "SN",
						},
					],
					note: "Remember to swap AE out for BK before Heimdall fight. As for the late floors, you can use BR because by then you'll already have more than enough breach with Aponia's and Hua's combined. For this very same reason. You don't take SN out because of 2nd Load Buff.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego start into Aponia Ultimate F3, finish Aponia 2nd Core by F4 with SP Regen & 70 Load, grab Aponia's Breach at F5, go shop F6, grab Aponia's Basic ATK if missing, get Kalpas' both DMG boosts or one and Hua's Elem Breach, then use Because of You to grab Nocturne and God Eater from F7 Double.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Soul Siphon",
									description: "In Valfreyja form basic ATK siphons extra Disir",
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
									description: "When God Eater hits, a lightning bolt hits and fully recharges Strix",
									priority: "3rd",
								},
								{
									name: "Blessing of Spirit Servants",
									description: "When Garmr/Strix/Linnorm hits, increases Lightning DMG",
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
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
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
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
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
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
				}
			}
		],
	},
	{
		name: "Fervent Tempo: Delta",
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
							time: "8:55m (6.0 1st Half)",
							ref: "https://youtu.be/0od_2xpXFcI",
						},
					],
					danger: "Sleeper's Dream is the minimum requirement, otherwise FT is really painful to play. In stigmatas, she's kinda flexible being able to use 3-set BiankaT, Ely TB, Polo TM Attila B. However the performance of these stigmatas are expected to be really varied. Don't expect impressive results from them.",
				},
				buff: {
					lists: [
						{
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
				}
        
        sigil: {
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
							second: "LE/BR",
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
									description: "Ultimate's CD is reduced by 30% and Ultimate's Total DMG is increased by 300%. Weapon Active CD is reduced by 2s each time Ultimate deals DMG. Strike Back EX is usable during the entirety of Fortress Mode.",
									priority: "Start",
								},
								{
									name: "Blessing of Mixing",
									description: "Charged ATK and Ultimate pull enemies in a large area and increase their Total DMG taken by 30% for 8s. Triggering it again refreshes the duration.",
									priority: "1st",
								},
								{
									name: "Blessing of Thorns",
									description: "Basic ATK and Charged ATK deal 20% more Physical DMG and restore 1 SP on every hit. At 150 SP or higher, casting Ultimate costs an extra 50 SP, and during this Ultimate enemies take 20% more Total DMG.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Solitude",
									description: "In Fervent Mode, Basic ATK deals an extra 20% Physical DMG. Ultimate last SEQ deals an extra 200% Physical DMG.",
									priority: "Optional 3rd",
								},
								{
									name: "Blessing of Fervor",
									description: "In Fervent Mode, nearby enemies take 20% more Physical DMG and Fervent Juice is consumed 50% faster (cannot stack).",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "White & Bright",
									description: "Every time an enemy is tainted, Valkyrie restores 12 SP. CD: 5s.",
									priority: "Optional",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
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
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
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
									description: "Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "2nd",
								},
								{
									name: "Days Gone",
									description: "Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},
							],
						},
					],
				},
			}
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
					lists: [
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoI & Handel",
							time: "9:03m (6.0 2nd Half)",
							ref: "https://youtu.be/iWKlVGS9wnU",
						},
					],
					danger: "In terms of downscalability, as long as you have Handel, GD won't be as painful to use, particularly because the atk difference does play in quite a big manner for her damage. It's also due to DoI's buffs difference.",
				}
        buff: {
					lists: [
						{
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
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
							first: "Veil of Tears OR Fragile Friend",
							second: "Boundless Feeling OR Out of Reach",
						},
						{
							time: "Mid",
							first: "Mad King's Mask / Rainbow of Absence / Home Lost",
							second: "Out of Reach",
						},
						{
							time: "Late",
							first: "Tin Flask or Key to the Deep",
							second: "Out of Reach",
						},
					],
					note: "This build has 2 starter variations. You either choose Aponia or Kosma. The difference between both will be explained further below. Look out for reading if you want to know.",
				}
        support: {
					lists: [
						{
							time: "Early",
							first: "AE",
							second: "BR",
						},
						{
							time: "Mid",
							first: "AE / BK",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					]
				},
				signet: {
					danger: "Regarding 2 diff Startup importance: Aponia which includes her Boundless Feeling support skill is weaker for F4 Double, but is a bit stronger start after getting her core. Kosma on the other hand provides easily accessible and comfortable gather, while also being stronger for F4 Double and can very likely guarantee it. This run will assume Aponia start. For Kosma start, you just switch the priority order between the two. (Kosma 1st, Aponia 3rd)",
					note: "Ideal course of build up: 3 Ego start into Aponia's Basic or Ultimate F3, unlock Aponia 2nd Core by F4, go shop F5, buy 2 of either Kosma or Kalpas signets and reroll for either door accordingly to unlock their core by F6, otherwise Aponia door for enhanced. If you CAN get Kalpas 2nd Core by F6 over Kosma2, then grab Aponia for F7 double",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Arioso",
									description: "During Sound of Nature, each note consumed increases Total DMG by 12% with a max stack of 10. This is reset when Sound of Nature ends",
									priority: "Start",
								},
								{
									name: "Blessing of Fugue",
									description: "Ensemble combo sequence is increased by 6. Hurling pistols Total DMG increases 140%",
									priority: "Start",
								},
								{
									name: "Blessing of Cadenza",
									description: "Chord and Variation launch sound waves dealing 550% Lightning DMG. Each wave increases Total DMG reduction by 30% and slightly raises Ignore Interrupt for 10s while restoring 2 or 4 SP respectively. Triggering it again resets the duration",
									priority: "1st",
								},
								{
									name: "Blessing of Concerto",
									description: "Each Combo ATK grants 1 Charge. At 4 Charge, Basic and Combo ATKs' Total DMG increase by 60% for 15s. Charge consumed on use and cannot be restored during use. Restores 12 SP after use",
									priority: "Optional",
								},
								{
									name: "Blessing of Symphony",
									description: "Hurl pistols when using Ensemble Playing for 12 SP and dealing 350% Lightning DMG",
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
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed",
									priority: "2nd",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "3rd",
								},
								{
									name: "First, No Betrayal",
									description: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation",
									priority: "Optional 4th",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "1st",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",
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
									priority: "Core"
								},
							]
						},

						{
							name: "Kosma - Signet of Daybreak (3rd Core)",
							lists: [

								{
									name: "Talons that Desecrate the Sanctuary",
									description: "Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description: "Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description: "Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
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
									description: "Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Dawn, Perpetual Wait",
									description: "While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
									priority: "2nd",
								},
								{
									name: "Choice, Ensuing Regret",
									description: "When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
							],
						},
						{
							name: "Pardofelis - Signet of Reverie 5th Core)",
							lists: [
								{
									name: "Neighborhood Chatters",
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
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
									description: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
							],
						},
					],
				}
			}
		],
	},
	{
		name: "Helical Contraption",
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
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Flame-Chasers deal 15% more Total DMG.",
							load: 10,
						},
						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
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
							first: "Tin Flask or Key to the Deep",
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
							first: "AE / BK or VK",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "In the SS1 run, I picked VK as she gives 20% Fire Taken. However, do note that VK is harder to use for the purpose of denying Heimdall's Red Mode. This is because VK applies mid Heavy Trauma throughout many successive hits that NEED to connect with Heimdall. If you do not want to be resetting the fight until VK successfully does her job, then just pick BK instead.",
				},
				signet: {
					note: "Ideal course of build up: 3 Ego Start (Facade + Sleight into Reversal), V-V's Spider Web or Pendulum F3, then finish V-V 2nd Core by F4, grab V-V's Puppetry by F5, go shop and swap Falling in Past Light for Boundless Logos, get Drama (if possible) or get Mobius' Entwined [P] or Lip Poison [E] and Hua's Elem Breach & Kalpas TDM, proceed to finish Mobius 1st Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Facade",
									description: "Within 15s of entering Special Weapon: No. 9 or Weapon Mode, Valkyrie deals 40% more Fire DMG, and Target Lock hits 1 more time and recovers 0.3 more SP.",
									priority: "Start",
								},
								{
									name: "Blessing of Sleight",
									description: "Target Lock becomes an AoE attack and deals 100% ATK more of Fire DMG. If Target Lock hits, Valkyrie deals 30% more Total DMG for 5s. Triggering it again refreshes the duration.",
									priority: "Start",
								},
								{
									name: "Blessing of Reversal",
									description: "Weapon active deals 25% more Total DMG. In burst mode, casting weapon active restores 20 Chariot Heat Value, Total DMG increases by 30%, and hitting an enemy inflicts Target Lock on all eneimes once; CD: 5s.",
									priority: "1st",
								},
								{
									name: "Blessing of Assemblage",
									description: "Once Loud Armaments is destroyed, enter burst mode. Can summon a Blazing Spiral that lasts for 5s. It will continuously pull enemies and make them take 30% more Total DMG. A Blazing Spiral deals 500% ATK of Fire DMG when created, which increases by 300% ATK for every Loud Armaments destroyed.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Transmission",
									description: "In Special Weapon: No. 9, Interlude Salute and Evasion deal 50% more Total DMG. Casting Interlude Salue restores 5 SP. Every 3 casts of Interlude Salute refreshes weapon active CD, but exiting the combat vehicle resets the counter.",
									priority: "No",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [

								{
									name: "Act V: Spider Web",
									description: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description: "Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description: "Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
							],
						},
						{
							name: "Mobius - Signet of Infinity (2nd Core)",
							lists: [

								{
									name: "Entwined [P]",
									description: ":For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "3rd",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description: "For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description: "Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
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
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
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
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
							]
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
					]
				},
			}
		],
	},
	{
		name: "Herrscher of Flamescion",
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
							time: "4:18m (6.0 2nd Half)",
							ref: "[(https://youtu.be/-fVlZ3l135k](https://youtu.be/-fVlZ3l135k)",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. LWH TB Thales M efficiency with this build is yet to be tested.",
				},
				buff: {
					lists: [
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							first: "VK",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "You want to save BR specifically for after entering Herrscher Mode on the first snap. Basically, when you're about to use your first Blackhole in Herrscher Form for the maximum output of damage possible. Combine this with Sirin and Kalpas Support Skill and you end up dealing a shitton of damage.",
					danger: "VK for Heimdall fight is recommended in order to fill his Heavy Bar Trauma. Do note that this is specifically for getting him out of Red Mode forcibly once its filled.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego Start (Heatflow + Starfire), Kalpas' TDM by F3, Kalpas 2nd Core by F4, F5 Shop for switching The Lonely Moon for Because Of You and grab 2 Hua Signets and Sakura's TDM Taken or TDM, get Hua door by F6 and unlock 2nd Core, then proceed to get Sakura 1st Core by F7",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Heatflow",
									description: "Black holes generated by the Herrscher of Flamescion deal 75% bonus Fire DMG. Triggering Ultimate Evasion Skill creates an additional black hole",
									priority: "Start",
								},
								{
									name: "Blessing of Starfire",
									description: "When a black hole created by the Herrscher of Flamescion ends, a smaller black hole lasting 5s is generated to deal 300% ATK of Fire DMG per second. CD: 3s",
									priority: "1st"
								},
								{
									name: "Blessing of Reburn",
									description: "Triggering Ultimate Evasion Skill removes Overheat and clears Heat",
									priority: "2nd"
								},
								{
									name: "Blessing of Tempered Warrior",
									description: "Aerial Combo ATKs reduce Ultimate Evasion Skill CD by 9s",
									priority: "3rd"
								},
								{
									name: "Blessing of Flamescion",
									description: "For every black hole created by the Herrscher of Flamescion, Valkyrie restores 25 HP per second and deals 30% bonus Total DMG",
									priority: "No"
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description: "The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
									priority: "Optional (Priority only by F9 afterwards)",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description: "The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional (Not necessary)",
								},
							],
							danger: "2 important things. Kalpas TDM on F3 is an absolute must, as it's the strongest buff HoFS can get that will also guarantee you'll have an easy time clearing F4 for the double reward. The other DMG buff doesn't come close, and the other 2 are a no. And you leave Kalpas enhanceds for later on. 2 reasons. Getting Hua 2nd Core finished by F6 and Sakura 1st Core by F7 is a way stronger ramp up than getting Kalpas Breach which doesn't have much effect early on. And trying to get one after finishing his 2nd core is a massive slowdown on the pace, as it feels like it's not really doing anything to help u. This is the reason getting other signets instead is better. So, leave this for after you get 2nd core.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
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
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description: "Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
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
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
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
				}
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
							time: "5:26m (6.0 1st Half)",
							ref: "https://youtu.be/YRwcFNoFUWk",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "DoI & Shelley T Himeko M Scott B",
							time: "10:36m (6.0 2nd Half)",
							ref: "https://youtu.be/l5wUpammzF0",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. However, you preferentially want Himeko M to be present for this build, as it makes it stronger.",
				},
				buff: {
					lists: [
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							first: "VK",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},

					],
					note: "You want to save BR specifically for after entering Herrscher Mode on the first snap. Basically, when you're about to use your first Blackhole in Herrscher Form for the maximum output of damage possible. Combine this with Sirin and Kalpas Support Skill and you end up dealing a shitton of damage.",
					danger: "VK for Heimdall fight is recommended in order to fill his Heavy Bar Trauma. Do note that this is specifically for getting him out of Red Mode forcibly once its filled.",
				},
				signet: {
					note: "Ideal course of build up: 2 Ego Start, Kalpas' TDM by F3, Kalpas 2nd Core by F4 w/Max HP, F5 Shop for switching The Lonely Moon for An Old Pal's Legacy and grab Sakura's Fuji or Hua's Elem Breach, get Sakura or Hua door F6, finish Hua 2nd Core by F7.",
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Heatflow",
									description: "Black holes generated by the Herrscher of Flamescion deal 75% bonus Fire DMG. Triggering Ultimate Evasion Skill creates an additional black hole",
									priority: "Start",
								},
								{
									name: "Blessing of Reburn",
									description: "Triggering Ultimate Evasion Skill removes Overheat and clears Heat",
									priority: "1st"
								},
								{
									name: "Blessing of Tempered Warrior",
									description: "Aerial Combo ATKs reduce Ultimate Evasion Skill CD by 9s",
									priority: "2nd"
								},
								{
									name: "Blessing of Starfire",
									description: "When a black hole created by the Herrscher of Flamescion ends, a smaller black hole lasting 5s is generated to deal 300% ATK of Fire DMG per second. CD: 3s",
									priority: "Optional"
								},
								{
									name: "Blessing of Flamescion",
									description: "For every black hole created by the Herrscher of Flamescion, Valkyrie restores 25 HP per second and deals 30% bonus Total DMG",
									priority: "No"
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description: "The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
									priority: "Optional (Priority only by F9 afterwards)",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description: "The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional (Not necessary)",
								},
							],
							danger: "You leave Kalpas enhanceds for later on. 2 reasons. Getting a Sakura signet or being able to finish Hua 2nd Core by F7 double or even getting Tempered Warrior is higher value. And trying to get one after finishing his 2nd core is a massive slowdown on the pace, as it feels like it's not really doing anything to help u. This is the reason getting other signets instead is better. So, leave this for after you get 2nd core.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "Optional",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "Optional",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description: "Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
									priority: "Optional",
								},
								{
									name: "Sakura-ni-Maku",
									description: "",
									priority: "Core",
								},
							],
							note: "Fuji, Koyo and Botan are preferred to pick up from Felis Shop, with Fuji being the absolute first priority, especially when missing Tempered Warrior. Read the danger for further explanation.",
							danger: "Sakura's Core is not necessary to complete. After getting Fuji, you can proceed to focus on getting Griseo and finishing Sakura 1st core on later floors, particularly after Mech Land. Also, Ayame is good to consider taking for the purposes of getting Yellow applied through early Ultimate so you can get your maximum damage output as soon as possible, however you can also instead pick Eden's Initial/Max SP for this.",
						},
						{
							name: "Griseo - Signet of Stars (4th or 3rd Core)",
							lists: [

								{
									name: "Red & Hot",
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
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
				}
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
							time: "7:19m (6.0 (1st Half)",
							ref: "https://youtu.be/sBqs_DAPdAk",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "DoI & Leuween TB Thales M",
							time: "9:44m (6.0 1st Half)",
							ref: "https://youtu.be/6vlIJ4hAKT8",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. However, do note that Leuween TB Thales M has some serious problems to be taken into account that will be noted down in some of the signets info.",
				},
				buff: {
					lists: [
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							first: "VK",
							second: "BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "You want to save BR specifically for after entering Herrscher Mode on the first snap. Basically, when you're about to use your first Blackhole in Herrscher Form for the maximum output of damage possible.",
					danger: "VK for Heimdall fight is recommended in order to fill his Heavy Bar Trauma. Do note that this is specifically for getting him out of Red Mode forcibly once its filled.",
				},
				signet: {
					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [
								{
									name: "Blessing of Heatflow",
									description: "Black holes generated by the Herrscher of Flamescion deal 75% bonus Fire DMG. Triggering Ultimate Evasion Skill creates an additional black hole",
									priority: "Start",
								},
								{
									name: "Blessing of Reburn",
									description: "Triggering Ultimate Evasion Skill removes Overheat and clears Heat",
									priority: "1st"
								},
								{
									name: "Blessing of Tempered Warrior",
									description: "Aerial Combo ATKs reduce Ultimate Evasion Skill CD by 9s",
									priority: "2nd"
								},
								{
									name: "Blessing of Starfire",
									description: "When a black hole created by the Herrscher of Flamescion ends, a smaller black hole lasting 5s is generated to deal 300% ATK of Fire DMG per second. CD: 3s",
									priority: "Optional"
								},
								{
									name: "Blessing of Flamescion",
									description: "For every black hole created by the Herrscher of Flamescion, Valkyrie restores 25 HP per second and deals 30% bonus Total DMG",
									priority: "No"
								},

							],
            note: "The minimum requirement of Tuna is to have Heatflow and Reburn as her starting signets. Without Reburn, she feels awful to play. Without Heatflow, she doesn't feel like she has much damage. So, a double Ego start is essential for Tuna. Afterwards, getting a 3rd Ego door is very good, taking Tempered Warrior to make the entire run easier and feel better. 4th is also taken for Starfire, adding even more damage but it's not really necessary.",
							danger: "If using Leuween TB Thales M, Tempered Warrior becomes an absolute must. Either you get it early, or you hope to get it later; if you don't get it early, Setsuna's Fuji will become a priority to get as soon as possible, preferentially in F5 or F6 shop.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description: "The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
									priority: "Optional (Priority only by F9 afterwards)",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description: "The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional (Not necessary)",
								},
							],
							danger: "Kalpas Enhanceds, no matter if you're running Himeko or Leuween Thales, are never good to take right after completing his core. Instead of wasting one door for F5 or F6 with Kalpas, use it for either Sakura or Griseo, or go shop and get Fuji, then proceed with Griseo signets.",
							note: "I also strongly recommend upgrading Kalpas' Max HP after both of his DMG boosts if you're using Himeko. Himeko M giving 25% max HP paired with Kalpas 40% Max HP from +3 and Pardofelis Max HP signet makes it possible to reach up to 16k or 17k HP which gives Kalpas an absolutely massive scaling on his +3 DMG Boosts.",
						},
						{
							name: "Sakura - Signet of Setsuna (2nd Core)",
							lists: [

								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ayame",
									description: "Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
									priority: "Optional",
								},
								{
									name: "Sakura-ni-Maku",
									description: "",
									priority: "Core",
								},
							],
							danger: "Fuji is a first priority if the next 2 conditions are met: Using Leuween TB Thales M and no Tempered Warrior before F7. In Himeko's case, it won't matter if you get it without Tempered Warrior, but will do a big favor for you, so it's still good to take. ",
							note: "After getting Fuji, you can then proceed to leave completing Sakura by F11 onwards, with Griseo taking the priority. Also, Ayame is good to consider taking for the purposes of getting Yellow applied through early Ultimate so you can get your maximum damage output as soon as possible.",
						},
						{
							name: "Griseo - Signet of Stars (3rd Core)",
							lists: [

								{
									name: "Red & Hot",
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
									priority: "Optional",
								},

							],
							note: "Hua is not necessary to complete.",
						},
					],
				}
			}
		],
	},
	{
		name: "Herrscher of Humanity",
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
							time: "3:47m (6.0 1st Half)",
							ref: "https://youtu.be/Fgkcml9kPLw",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. Even with complete cope gears such as Call of Crescent and full Ana Schariac or just Light String, HoH can still clear Finality.",
				},
				buff: {
					lists: [

						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							second: "LE/BR",
						},
						{
							time: "Mid",
							first: "AE",
							second: "LE/BR",
						},
						{
							time: "Late",
							first: "AE",
							second: "LE/BR",
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
									description: "In Herrscher of Origin Form, Ice DMG increases by 50%. In Herrscher of Human Form, using Charged ATKs reduces Ultimate CD by 1s and restores 20 SP.",
									priority: "Start",
								},
								{
									name: "Blessing of First Awakening",
									description: "In Herrscher of Origin Form, triggering Ultimate Evasion Skill restores 400 Herrscher Charge and Charged ATKs and special weapon skill deal an additional 1500% ATK of Ice DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of First Journey",
									description: "When switching to Herrscher Form, increase DMG taken by all enemies by 40% for 5s and gain 4 Pristine Crystals. Charged ATKs in Herrscher of Human Form and Ultimate Evasion Skill in Herrscher of Origin Form will clear all Pristine Crystals to deal 1200% x 4 ATK of Ice DMG.",
									priority: "1st",
								},
								{
									name: "Blessing of First Encounter",
									description: "Charged ATKs in Herrscher of Human Form pull enemies on both sides of the arrow slightly towards the center. Charged ATKs deal an additional 1200% ATK of Ice DMG. If a Charged ATK hits more than 10 times, enemies take 10% more Total DMG from Charged ATKs for every Nexus Signet owned (cannot stack).",
									priority: "No",
								},
								{
									name: "Blessing of First Yearning",
									description: "In Herrscher of Human Form, Charged ATK Speed increases by 30% for 5s after triggering Ultimate Evasion Skill. When using Charged ATK, shooting speed continously increases, up to a maximum of 80%. Move Speed while using Charged ATKs increases by 100%. Resets when Charged ATK ends. When Charged ATK hits, Ultimate Evasion CD decreases by 2.5s and weapon skill CD decreases by 1s. Gain 1 stack of Crystal Ice Mirror for every Charged ATK that hits an enemy. Every stack of Crystal Ice Mirror increases DMG from Charged ATK's by 10%.",
									priority: "No",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (1st Core)",
							lists: [

								{
									name: "Act V: Spider Web",
									description: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description: "Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "Optional 4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Drama: Origin of Slumber",
									description: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "1st",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description: "Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description: "Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
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
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
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
				}
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
							time: "4:12m (6.0 1st Half)",
							ref: "https://youtu.be/OdJ-aHcehW0",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement.",
				},
				buff: {
					lists: [

						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
									description: "In Herrscher of Human Form, Charged ATK Speed increases by 30% for 5s after triggering Ultimate Evasion Skill. When using Charged ATK, shooting speed continously increases, up to a maximum of 80%. Move Speed while using Charged ATKs increases by 100%. Resets when Charged ATK ends. When Charged ATK hits, Ultimate Evasion CD decreases by 2.5s and weapon skill CD decreases by 1s. Gain 1 stack of Crystal Ice Mirror for every Charged ATK that hits an enemy. Every stack of Crystal Ice Mirror increases DMG from Charged ATK's by 10%.",
									priority: "Start",
								},
								{
									name: "Blessing of First Encounter",
									description: "Charged ATKs in Herrscher of Human Form pull enemies on both sides of the arrow slightly towards the center. Charged ATKs deal an additional 1200% ATK of Ice DMG. If a Charged ATK hits more than 10 times, enemies take 10% more Total DMG from Charged ATKs for every Nexus Signet owned (cannot stack).",
									priority: "Start",
								},
								{
									name: "Blessing of First Bloom",
									description: "In Herrscher of Origin Form, Ice DMG increases by 50%. In Herrscher of Human Form, using Charged ATKs reduces Ultimate CD by 1s and restores 20 SP.",
									priority: "No",
								},
								{
									name: "Blessing of First Awakening",
									description: "In Herrscher of Origin Form, triggering Ultimate Evasion Skill restores 400 Herrscher Charge and Charged ATKs and special weapon skill deal an additional 1500% ATK of Ice DMG.",
									priority: "No",
								},
								{
									name: "Blessing of First Journey",
									description: "When switching to Herrscher Form, increase DMG taken by all enemies by 40% for 5s and gain 4 Pristine Crystals. Charged ATKs in Herrscher of Human Form and Ultimate Evasion Skill in Herrscher of Origin Form will clear all Pristine Crystals to deal 1200% x 4 ATK of Ice DMG.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description: "Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description: "Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
								{
									name: "Saga: Overlapping Needles",
									description: "Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG.",
									priority: "Filler",
								},
							],
						},
						{
							name: "Aponia - Signet of Discipline (3rd Core)",
							lists: [

								{
									name: "First, No Betrayal",
									description: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Hua - Signet of Vicissitude (4th Core)",
							lists: [

								{
									name: "Old Dreams Again",
									description: "Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
							],
							note: "Take this or Sakura"
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [

								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
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
			}
		],
	},
	{
		name: "Herrscher of Reason",
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
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
					],
					note: "Effective for 6.1.",
				},
				sigil: {
					lists: [

						{
							time: "Early",
							first: "Veil of Tears",
							second: "The Lonely Moon / Because of You (F5)",
						},
						{
							time: "Mid",
							first: "Memory / Mad King's Mask / Forget-Me-Not",
							second: "Because of You / The Lonely Moon (F13+)",
						},
						{
							time: "Late",
							first: "Tin Flask or Key to the Deep",
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
							second: "BK",
						},
						{
							time: "Late",
							first: "AE",
							second: "BR",
						},
					],
					note: "Remember to switch BK in by F10 just before Heimdall fight. Without BK, you'll have a really hard time against Heimdall otherwise. Then, you can switch her out for BR if you already have SP Regen covered.",
				},
				signet: {
					note: "Ideal order from F1-F7: Reset F2 for Griseo Red Paint start, then take Aponia's SP Regen by F3, unlock Aponia 2nd Core by F4 with Ultimate & 70 Load, go shop F5 and put Because of You, buy Aponia's Breach or Penance if you get them, otherwise take Hua's Elem Breach, Sakura's TDM Taken and TDM or Black & Dark from Griseo. Grab Aponia door F6, then unlock Hua 2nd Core by F7 double",

					lists: [

						{
							name: "Elysia - Signet of Ego",
							lists: [

								{
									name: "Blessing of Wisdom",
									description: "In bike mode, Charged ATK inflicts a Structural Impact on enemies hit and deals 2250% ATK of Ice DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Truth",
									description: "Triggering Ultimate Evasion Skill fully restores Konstruktyom. When Konstruktyom is below 120, any evasion can trigger Ultimate Evasion Skill",
									priority: "1st",
								},
								{
									name: "Blessing of Inspiration",
									description: "Triggering an Ultimate Evasion by any means inflicts a Structural Impact on enemies hit and deals 3750% ATK of Ice DMG",
									priority: "2nd",
								},
								{
									name: "Blessing of Reason",
									description: "Every hit from hover guns reduces weapon active CD by 0.7s",
									priority: "No",
								},
								{
									name: "Blessing of Creation",
									description: "In non-bike mode, Charged ATKs create 4 hover guns to attack, each dealing 160% ATK of Ice DMG on hit",
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
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
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
									description: "Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
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
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
					],
				}
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
							time: "6:49 (6.0 1st Half)",
							ref: "https://youtu.be/uA5SCbf7Pcs",
						},
					],
					note: "The easier, stronger and faster variation. However, this build relies mainly on DoR's existence.",
				},
				buff: {
					lists: [

						{
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
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
									description: "In bike mode, Charged ATK inflicts a Structural Impact on enemies hit and deals 2250% ATK of Ice DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Reason",
									description: "Every hit from hover guns reduces weapon active CD by 0.7s",
									priority: "1st",
								},
								{
									name: "Blessing of Truth",
									description: "Triggering Ultimate Evasion Skill fully restores Konstruktyom. When Konstruktyom is below 120, any evasion can trigger Ultimate Evasion Skill",
									priority: "2nd",
								},
								{
									name: "Blessing of Inspiration",
									description: "Triggering an Ultimate Evasion by any means inflicts a Structural Impact on enemies hit and deals 3750% ATK of Ice DMG",
									priority: "Optional",
								},
								{
									name: "Blessing of Creation",
									description: "In non-bike mode, Charged ATKs create 4 hover guns to attack, each dealing 160% ATK of Ice DMG on hit",
									priority: "No",
								},
							],
						},
						{
							name: "Aponia - Signet of Discipline (1st Core)",
							lists: [
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},

							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [

								{
									name: "Red & Hot",
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
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
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Vill-V - Signet of Helix (3rd Core)",
							lists: [

								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act IV: Spoon",
									description: "Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act VI: Sneer",
									description: "Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description: "Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
									priority: "2nd",
								},
								{
									name: "Saga: Overlapping Needles",
									description: "Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
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
				}
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
							time: "9:14 (6.0 1st Half)",
							ref: "https://youtu.be/cgnVNUf8Ye0",
						},
					],
					note: "This build is not very strong in downscaling terms with lower clear times and lower gear requirement.",
				},
				buff: {
					lists: [

						{
							description: "Valkyries gain an additional 10 SP for every 60 SP restored.",
							load: 5,
						},
						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
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
							first: "Stained Sakura or Key to the Deep",
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
									description: "Triggering Ultimate Evasion Skill fully restores Konstruktyom. When Konstruktyom is below 120, any evasion can trigger Ultimate Evasion Skill",
									priority: "Start",
								},
								{
									name: "Blessing of Wisdom",
									description: "In bike mode, Charged ATK inflicts a Structural Impact on enemies hit and deals 2250% ATK of Ice DMG",
									priority: "1st",
								},
								{
									name: "Blessing of Inspiration",
									description: "Triggering an Ultimate Evasion by any means inflicts a Structural Impact on enemies hit and deals 3750% ATK of Ice DMG",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Reason",
									description: "Every hit from hover guns reduces weapon active CD by 0.7s",
									priority: "Optional 3rd",
								},
								{
									name: "Blessing of Creation",
									description: "In non-bike mode, Charged ATKs create 4 hover guns to attack, each dealing 160% ATK of Ice DMG on hit",
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
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [

								{
									name: "Red & Hot",
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
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
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Sakura - Signet of Setsuna (3rd Core)",
							lists: [

								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "3rd",
								},
								{
									name: "Setsuna Blade: Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Setsuna Blade: Ame-Shiko",
									description: "Activating Sakura Screen resets Ultimate CD and weapon active CD",
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
									description: "Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Dark Garb No More",
									description: "Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "Optional",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
							],
							note: "Take this or Pardofelis"
						},
						{
							name: "Pardofelis - Signet of Reverie (6th Core)",
							lists: [

								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "3rd",
								},
								{
									name: "Empty Dreams, Self, Set, and Joy",
									description: "",
									priority: "Core",
								},
							],
							note: "Take this or Kalpas"
						},
					],
				}
			}
		],
	},
	{
		name: "Herrscher of Sentience",
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
							time: "7:47m (6.0 1st Half)",
							ref: "https://youtu.be/jalMiRdgqEw",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "Senpri & Ely TB PoloM",
							time: "8:29m (6.0 1st Half)",
							ref: "https://youtu.be/7OyB4IOkjGA",
						},
					],
					note: "This build is downscaleable with lower clear time based on stats/gears/rank and lower difficulties. Double Clear is not necessary but is nice, you can perfectly clear with this build, especially in 6.0 weather. The one important thing to note from this build is that, especially if you're downscaling in gears but not on difficulty, you want to learn to time The Lonely Moon perfectly into clearing a new wave of mobs right away. Even 1 or 2 seconds later is still fine. Griseo's skill is monstruously op when used this way, due to how easily it can delete waves instantly and apply all your unlocked paints if they're somehow alive still. ",
				},
				buff: {
					lists: [

						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							first: "Good Old Days or Key to the Deep",
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
							second: "BR or BKE",
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
									description: "In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of Dark Plumes",
									description: "Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
									priority: "1st",
								},
								{
									name: "Blessing of Supremacy",
									description: "Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Ego",
									description: "Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
									priority: "No",
								},
								{
									name: "Blessing of Legion",
									description: "Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
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
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "Optional 2nd or 3rd",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description: "Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description: "Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
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
									description: "Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Choice, Ensuing Regret",
									description: "When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional",
								},
								{
									name: "Dawn, Perpetual Wait",
									description: "While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
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
									description: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
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
				}
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
							time: "8:30m (2nd Half 5.9)",
							ref: "ttps://youtu.be/j_UFFAe3yWI",
						},
					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement.",
					danger: "Also, through testing, 3-set Sirin Ascendant has about the same clear time as Shattered Swords. SSwords remains the better contender in general.",
				},
				buff: {
					lists: [

						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							first: "Veil of Tears / Golden Goblet / Rainbow of Absence",
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
							second: "BR or BKE",
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
									description: "In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of Ego",
									description: "Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
									priority: "1st",
								},
								{
									name: "Blessing of Dark Plumes",
									description: "Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
									priority: "Optional",
								},
								{
									name: "Blessing of Supremacy",
									description: "Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
									priority: "Filler",
								},
								{
									name: "Blessing of Legion",
									description: "Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
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
									description: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%.",
									priority: "1st",
								},
								{
									name: "Lodging [C]",
									description: "ELF Ultimates and Support Valkyries' support skills have 20% reduced CD.",
									priority: "2nd",
								},
								{
									name: "Entwined [P]",
									description: "For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max).",
									priority: "3rd",
								},
								{
									name: "Rodent [V]",
									description: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "4th",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description: "For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync.",
									priority: "1st",
								},
								{
									name: "Newborn [X]",
									description: "Triggering Mind Sync again during Mind Sync no longer resets the duration but extends the duration by 4.0s instead. With any summoned entity present, the duration is extended by 5s additionally.",
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
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Fourth, No Insolence",
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "YES",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "Optional",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
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
									description: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
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
									description: "After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends.",
									priority: "Optional",
								},
							],
						},
					],
				}
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
							time: "8:34 (Updated 6.0 1st Half)",
							ref: "https://youtu.be/YjfVFkgrusA",
						},

					],
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement. This is also the 3rd in ranking of strength, only do it for fun.",
				},
				buff: {
					lists: [

						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							second: "BR or BKE",
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
									description: "In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
									priority: "Start",
								},
								{
									name: "Blessing of Dark Plumes",
									description: "Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
									priority: "1st",
								},
								{
									name: "Blessing of Supremacy",
									description: "Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
									priority: "Optional",
								},
								{
									name: "Blessing of Ego",
									description: "Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
									priority: "No",
								},
								{
									name: "Blessing of Legion",
									description: "Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
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
									description: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "YES",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
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
									description: "Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s.",
									priority: "1st",
								},
								{
									name: "Horns that Rip the Bleak Sky",
									description: "Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
									priority: "2nd",
								},
								{
									name: "Wings that Mask the Sanguine Moon",
									description: "Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s.",
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
									description: "Each stack of Rend on Valkyrie makes her deal 1.5% more Physical and Elemental DMG.",
									priority: "1st",
								},
								{
									name: "Choice, Ensuing Regret",
									description: "When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3000% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s.",
									priority: "Optional",
								},
								{
									name: "Dawn, Perpetual Wait",
									description: "While Rended, recovering HP reduces Total DMG taken by 1% each time upto 30%, and losing HP increases Physical and Elemental Breach by 2% each time up to 30%.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
									priority: "4th",
								},
								{
									name: "Soldiers, Scissors, Spoils, and Slaughter",
									description: "",
									priority: "Core",
								},
								{
									name: "Body, Bones, Heart, and Soul",
									description: "The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s.",
									priority: "Optional",
								},
								{
									name: "Hometown, Homeland, Friends, and Acquaintances",
									description: "The cap of Bloodboil Armor charges increases by 500. At over 1500 charges, Bloodboil Armor grants 25% Physical and Elemental Breach.",
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
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "1st",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Neighborhood Chatters",
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
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
				}
			}
		],
	},

	{
		name: "Herrscher of Thunder",
		builds: [
			{
				name: "4-5 Revived Build",
				note: "Updated 6.1. This is the 3rd strongest build, and also competes with the others in being the most braindead to play... sort of. The strength of this build is that it is very solid and has damage on everything. 4-5, 7T actives, Dragon slam, Finisher, Shinzan. Overall, it's pretty good.",
				danger: "Do note though, that this build is not recommended if your HoT is not S1+. Narukami Finisher is stronger.",
				boss: {

					info: "Hephaestus, then Elysia or Mobius/Vill-V",
				},
				setup: {
					lists: [
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 7T & Handel",
							time: "6:53 (6.0 1st Half)",
							ref: "https://youtu.be/hRm5kgih2ao",
						},

					],
					note: "This build's downscalability in terms of weapon and stigmatas has yet to be tested. I cannot say yet how it will do without 7T and Handel, especially 7T as it's what makes this build work, and Handel offers a massive damage boost compared to Benares Awakening or other cope stigmatas. However, if you do have them, even if underleveled, then you can downscale accordingly.",
				},
				buff: {
					lists: [

						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
							load: 15,
						},
					],
					note: "Effective for 6.1.",
					danger: "If not using 7T, then you should instead go with the 10 Load buff that gives 15% TDM as long as your valk doesn't take damage.",

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
									description: "Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s",
									priority: "Start",
								},
								{
									name: "Blessing of Hazy Moon",
									description: "Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK Of Lightning DMG on hit",
									priority: "Start",
								},
								{
									name: "Blessing of Narukami",
									description: "Finisher unleashes 8 bolts of Thundering Sanction, each dealing 900% ATK of Lightning DMG on hit",
									priority: "Optional",
								},
								{
									name: "Blessing of Divine Penalty",
									description: "In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG",
									priority: "No",
								},
								{
									name: "Blessing of Mitama",
									description: "Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 100 bonus Herrscher Charge",
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
									description: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation.",
									priority: "1st",
								},
								{
									name: "Third, No Brutality",
									description: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation.",
									priority: "2nd",
								},
								{
									name: "Fifth, No Falsehood",
									description: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed.",
									priority: "3rd",
								},
								{
									name: "You Shall Receive Disciplines' Blessing",
									description: "",
									priority: "Core",
								},
								{
									name: "You Shall Follow Good",
									description: "You Shall Know Your Sins' Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "You Shall Punish Evil",
									description: "Enemies struck by You Shall Know Your Sins two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by You Shall Know Your Sins.",
									priority: "2nd",
								},
								{
									name: "You Shall Answer Prayers",
									description: "Triggering You Shall Know Your Sins causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
							],
						},
						{
							name: "Griseo - Signet of Stars (2nd Core)",
							lists: [

								{
									name: "Red & Hot",
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
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
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "**Must-take**",
								},
								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act V: Spider Web",
									description: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description: "Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
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
									description: "When possessing Soldier's Remembrance., increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description: "Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
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
				}
			},
			{

				name: "Bombard Build",
				note: "Updated and proper adjustments made for 6.1. The 2nd strongest build. This build also has a surprisingly good time with DoS & Benares Awakening. It also seems to prefer DoS, but nonetheless 7T still does really well.",
				danger: "This build can't work if your HoT isn't at least S2 rank. S2 is essential to make Bombard work.",
				boss: {

					info: "Hephaestus, then Elysia or Mobius/Vill-V",
				},
				setup: {
					lists: [

						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 7T & Handel",
							time: "4:53 (6.0 1st Half)",
							ref: "https://youtu.be/5Ivtllc8h1Y",
						},
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 DoS & Benares: Awakening",
							time: "6:25 (6.0 1st Half)",
							ref: "https://youtu.be/FD6YiTvLYnQ",
						},
						{
							rank: "SS1",
							difficult: "Finality",
							gear: "65 DoS & Handel",
							time: "7:06 (6.0 1st Half)",
							ref: "https://youtu.be/XDaxl4Aesxw",
						},
					],
					note: "This build's downscalability is pretty surprising. DoS & Benares: Awakening also wins second spot in terms of strength over DoS & Handel. Basically, you can work with either DoS or 7T, however DoS should win over 7T due to the buffs that DoS provides overall.",
				},
				buff: {
					lists: [
						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
									description: "In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG",
									priority: "Start",
								},
								{
									name: "Blessing of Mitama",
									description: "Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 100 bonus Herrscher Charge",
									priority: "1st",
								},
								{
									name: "Blessing of Narukami",
									description: "Finisher unleashes 8 bolts of Thundering Sanction, each dealing 900% ATK of Lightning DMG on hit",
									priority: "2nd",
								},
								{
									name: "Blessing of Hazy Moon",
									description: "Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK Of Lightning DMG on hit",
									priority: "No",
								},
								{
									name: "Blessing of Tsukuyomi",
									description: "Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Grey & Empty",
									description: "Enemies stay tainted for 5s longer.",
									priority: "4th",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "5th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
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
									description: "When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
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
							danger: "1st Core if you manage to get Kalpas 2nd core to synergize together with it. If you haven't managed to get Kalpas 2nd core otherwise, get Pardo 2nd core instead.",
						},
						{
							name: "Vill-V - Signet of Helix (5th Core)",
							lists: [

								{
									name: "Act VI: Sneer",
									description: "Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "1st",
								},
								{
									name: "Act V: Spider Web",
									description: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "Optional",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
							note: "You only want to grab these from Sakura, and preferentially from Shop.",
						},
					],
				}
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
							time: "5:01 (6.0 1st Half)",
							ref: "https://youtu.be/WSNNT-c0wns",
						},
						{
							rank: "S0",
							difficult: "Finality",
							gear: "65 7T & Handel",
							time: "8:17 (6.0 1st Half)",
							ref: "https://youtu.be/3oqKVTRESns",
						},
					],
					note: "Expect the strength of this build to be a bit weaker with lower stigmatas.",
				},
				buff: {
					lists: [

						{
							description: "When the stage timer is paused, Total DMG received by all enemies on the field increases by 20% for 15s. Triggering it again resets the duration.",
							load: 15
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
									description: "Finisher unleashes 8 bolts of Thundering Sanction, each dealing 900% ATK of Lightning DMG on hit",
									priority: "Start",
								},
								{
									name: "Blessing of Tsukuyomi",
									description: "Tap [ATK] after evasion to connect into Basic ATK Sequence 4. Basic ATK Sequence 4 boosts Total DMG by 40% for 5s",
									priority: "1st",
								},
								{
									name: "Blessing of Hazy Moon",
									description: "Basic ATK Sequence 5 unleashes 3 bolts of thundering sanction each dealing 900% ATK Of Lightning DMG on hit",
									priority: "2nd",
								},
								{
									name: "Blessing of Mitama",
									description: "Max Herrscher Charge doubles and entering burst mode fully restores it. In burst mode, 75 Herrscher Charge is restored per second. Basic ATK Sequence 5 restores 100 bonus Herrscher Charge",
									priority: "No",
								},
								{
									name: "Blessing of Divine Penalty",
									description: "In burst mode, Bombard costs 200% Herrscher Charge and every hit deals 400% ATK of bonus Lightning DMG",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
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
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
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
									description: "When possessing Soldier's Remembrance, increase the maximum stack of normal Vicissitude signets by 20",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act VI: Sneer",
									description: "Using a weapon active restores 12 SP in 5s and reduces its CD by 15%.",
									priority: "2nd",
								},
								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description: "Extends Global Time Fracture caused by Special Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
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
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
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
							danger: "1st Core if you manage to get Kalpas 2nd core to synergize together with it. If you haven't managed to get Kalpas 2nd core otherwise, get Pardo 2nd core instead.",
							note: "Spider Web is ONLY taken when you manage to get Narukami as it boosts its damage by a shitton. Finishing core is also not necessary.",
						},
						{
							name: "Sakura - Signet of Setsuna (6th Core)",
							lists: [

								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Botan",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "2nd",
								},
							],
							note: "You only want to grab these from Sakura, and preferentially from Shop.",
						},
					],
				}
			}
		],
	},

	{
		name: "Herrscher of Void",
		builds: [
			{

				name: "Thanos Snap 7D",
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
							time: "3:57m (Updated 6.0, 2nd Half)",
							ref: "https://youtu.be/fPhUSG4sug8",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Elysia",
							time: "6:33m (Updated, 6.0 1st Half)",
							ref: "https://youtu.be/m9ODUGWtI-8",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Mich TB Polo M",
							time: "9:53m (2nd Half 5.9)",
							ref: "https://youtu.be/5iB58b-fAQQ",
						},
						{
							rank: "S3",
							difficult: "Finality",
							gear: "Lv55 DoV & Sirin Ascendant",
							time: "7:26 (6.0 1st Half)",
							ref: "https://youtu.be/oMdHkVnh7bE",
						},
						{
							rank: "S3",
							difficult: "Finality",
							gear: "Lv55 DoV & 3-set Elysia",
							time: "10:08m (6.0 1st Half)",
							ref: "https://youtu.be/WkSisfkTyA0",
						},
					],
					danger: "These above are listed based on their potential strength. First listed is the strongest. Also, watch out for builds without SirinA M or Elysia M, as the playstyle changes a bit.",
					note: "This build is downscaleable with lower clear times and lower gear requirement. You don't necessarily have to do Finality, as such, with lower difficulties, you'll either have faster, about the same or lower clear time depending on your gear requirement. However, do note that this valkyrie requires at least Keys of Void to be played in ER. Without her signature weapon, she can't stay in permanent Herrscher Mode.",
				},
				buff: {
					lists: [

						{
							description: "Max SP increases by 30.",
							load: 5,
						},
						{
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							first: "Stained Sakura or Key to the Deep",
							second: "Boundless Logos",
						},
					],
					note: ["Tsukimi Himiko is swapped out for Boundless Logos at F5 Shop.",
						"When you reach F5 or F6 shop, you'll want to be looking for Kalpas TDM and Phys/Elem DMG boost or Max HP signets and switch VC for BR, additionally abusing the swap out spam trick for lowering your health to below 100 to abuse the most out of Kalpas buffs at this point easily, without having to get Kalpas2 beforehand. BR will stay for the remainder of the run."
					],
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
							first: "VC / BR or BKE",
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
									description: "Reduces CD of Ultimate Evasion Skill, weapon skill and Ultimate by 6s each when summoning Space Core. In Herrscher Form, Basic ATKs directly connect to SEQ 3 for a short duration after triggering Ultimate Evasion.",
									priority: "Start",
								},
								{
									name: "Blessing of Coleus",
									description: "Physical DMG dealt by Space Core increases by 80%. Regain 30 Herrscher Charge and gain 20% more Total DMG for 5s upon summoning Space Core. Triggering it again resets the duration. In Herrscher Form, Space Core's area of explosion is expanded and can gather surrounding enemies.",
									priority: "1st",
								},
								{
									name: "Blessing of Annihilation",
									description: "In Herrscher Form, the 3rd SEQ of Basic ATK includes one blow of Charged ATK: Time Tremor that deals 200% ATK of Physical DMG.",
									priority: "Optional 2nd or 3rd",
								},
								{
									name: "Blessing of Virtuality",
									description: "Ultimate Evasion Skill can be triggered even without Ultimate Evasion conditions when there are no enemies along the path of Phase Shuttle. Time-slow area of effect triggered by Ultimate Evasion Skill expands and all enemies in range take 30% more Total DMG for 12s. Triggering it again resets the duration.",
									priority: "Optional 2nd or 3rd",
								},
								{
									name: "Blessing of Law",
									description: "Aerial explosion triggered after Ultimate ends deal 2000% ATK of Physical DMG. Gain Spatial Silence stacks after summoning Space Core. Triggering aerial explosion will clear all Spatial Silence stacks and deal additional number of Spatial Silence stacks x 150% ATK of Physical DMG while restoring number of Spatial Silence stacks x 5 SP.",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description: "Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
									priority: "Filler",
								},
								{
									name: "Sakura ni Maku",
									description: "",
									priority: "Core",
								},
								{
									name: "Setsuna Blade: Ino-Shika-Cho",
									description: "When Sakura Screen is active, moving around can pause its duration countdown for up to 3.0s.",
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
									description: ":For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "3rd",
								},
								{
									name: "Lodging [C]",
									description: "ELF Ultimates and Support Valkyries' support skills have 20% reduced CD",
									priority: "Optional",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description: "For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description: "Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 4.5s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Act II: Pendulum",
									description: "Using a weapon active makes enemies take 20% bonus Total DMG for 4.5s. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Act III: Conflict",
									description: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Act IV: Spoon",
									description: "Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 4.5s Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Holistic Helix",
									description: "",
									priority: "Core",
								},
								{
									name: "Puppetry: Interlacing Cells",
									description: "Extends Global Time Fracture caused by Specail Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach.",
									priority: "1st",
								},
								{
									name: "Drama: Origin of Slumber",
									description: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st YES",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "2nd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "3rd",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
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
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
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
									description: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%.",
									priority: "2nd",
								},
							],
						},
					],
				}
			},
			{
				name: "Gate of Babylon Build 7D",
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
							time: "5:25 (6.0, 2nd Half)",
							ref: "https://youtu.be/0ZiDYsghgFM",
						},
						{
							rank: "SSS",
							difficult: "Finality",
							gear: "DoV & 3-set Sirin Ascendant",
							time: "6:40 (Updated 6.0, 1st Half)",
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
							description: "Deployed Valkyries Total DMG increases 15%. This effect is negated 5s after taking DMG. Triggering it again resets the duration.",
							load: 10,
						},
						{
							description: "When a Support and Deployed Valkyrie are of matching type, all enemies on the field take 10% more Total DMG.",
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
							first: "The First Scale or Key to the Deep",
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
							first: "VC or BKE",
							second: "SS",
						},
						{
							time: "Late",
							first: "VC or BR",
							second: "SS",
						},
						note: ["VC for the entirety of the run remains surprisingly strong and a consistent buffer for HoV. BR is only recommended to take if you get Coleus from a 3rd Ego door during your run, and for the Heph F17 fight.",
							"BKE is only for the purposes of filling Heimdall's Heavy Trauma Bar, forcefully ending his Red Mode.",
						],
					],
				},
				signet: {
					note: "2 Ego Start, Entwined [P] by F2, finish Mobius 1st Core by F4 with Rodent [V] and Lip Poison [E], go shop F5, grab Griseo's Red Paint and Sakura's TDM Taken, TDM or Fuji and swap Forbidden Seed to Rainbow of Absence, get Dead [X] by F6 and finish Griseo 2nd Core by F7.",

					lists: [
						{
							name: "Elysia - Signet of Ego",
							lists: [

								{
									name: "Blessing of Innateness",
									description: "Reduces CD of Ultimate Evasion Skill, weapon skill and Ultimate by 6s each when summoning Space Core. In Herrscher Form, Basic ATKs directly connect to SEQ 3 for a short duration after triggering Ultimate Evasion.",
									priority: "Start",
								},
								{
									name: "Blessing of Law",
									description: "Aerial explosion triggered after Ultimate ends deal 2000% ATK of Physical DMG. Gain Spatial Silence stacks after summoning Space Core. Triggering aerial explosion will clear all Spatial Silence stacks and deal additional number of Spatial Silence stacks x 150% ATK of Physical DMG while restoring number of Spatial Silence stacks x 5 SP.",
									priority: "1st",
								},
								{
									name: "Blessing of Coleus",
									description: "Physical DMG dealt by Space Core increases by 80%. Regain 30 Herrscher Charge and gain 20% more Total DMG for 5s upon summoning Space Core. Triggering it again resets the duration. In Herrscher Form, Space Core's area of explosion is expanded and can gather surrounding enemies.",
									priority: "Optional 2nd",
								},
								{
									name: "Blessing of Virtuality",
									description: "Ultimate Evasion Skill can be triggered even without Ultimate Evasion conditions when there are no enemies along the path of Phase Shuttle. Time-slow area of effect triggered by Ultimate Evasion Skill expands and all enemies in range take 30% more Total DMG for 12s. Triggering it again resets the duration.",
									priority: "Optional 3rd",
								},
								{
									name: "Blessing of Annihilation",
									description: "In Herrscher Form, the 3rd SEQ of Basic ATK includes one blow of Charged ATK: Time Tremor that deals 200% ATK of Physical DMG.",
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
									description: ":For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
									priority: "1st",
								},
								{
									name: "Rodent [V]",
									description: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max).",
									priority: "2nd",
								},
								{
									name: "Lip Poison [E]",
									description: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%. ELFs",
									priority: "3rd",
								},
								{
									name: "Lodging [C]",
									description: "ELF Ultimates and Support Valkyries' support skills have 20% reduced CD",
									priority: "Optional",
								},
								{
									name: "Infinite [X]",
									description: "",
									priority: "Core",
								},
								{
									name: "Dead [X]",
									description: "For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
									priority: "1st",
								},
								{
									name: "Unknown [X]",
									description: "Triggering Mind Sync again during Mind Sync reduces the CD of ELF Ultimates and Support Valkyries' support skills by 2s. With any summoned entity present, the CDs are reduced by 2s additionally. This effect can only be triggered once per 4s.",
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
									description: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.",
									priority: "1st YES",
								},
								{
									name: "Yellow & Warm",
									description: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Black & Dark",
									description: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max.",
									priority: "3rd",
								},
								{
									name: "Blue & Cold",
									description: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.",
									priority: "4th",
								},
								{
									name: "Faded Stars",
									description: "",
									priority: "Core",
								},
								{
									name: "A Flame Extinguished",
									description: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration.",
									priority: "1st",
								},
								{
									name: "Fallen Leaves",
									description: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration.",
									priority: "2nd",
								},
								{
									name: "Petals in the Wind",
									description: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration.",
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
									description: "Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "1st",
								},
								{
									name: "Long Trip",
									description: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "2nd",
								},
								{
									name: "Days Gone",
									description: "Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks.",
									priority: "3rd",
								},
								{
									name: "Suffering Mass",
									description: "",
									priority: "Core",
								},
								{
									name: "Broken Dream",
									description: "With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle.",
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
									description: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%.",
									priority: "2nd",
								},
								{
									name: "Path, Misfortune and Written Fate",
									description: "Max HP increases by 25%.",
									priority: "3rd",
								},
								{
									name: "Desireless, Mindless and Homeless",
									description: "Losing HP boosts Total DMG taken by all enemies by 25% for 8s.",
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
									description: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s.",
									priority: "1st",
								},
								{
									name: "Bountiful Blossom: Koyo",
									description: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s.",
									priority: "2nd",
								},
								{
									name: "Bountiful Blossom: Fuji",
									description: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD.",
									priority: "3rd",
								},
								{
									name: "Bountiful Blossom: Ume",
									description: "Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s.",
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
									description: "Every 100 Shiny Silvers obtained this round boost max HP by 25 and max SP by 1.",
									priority: "1st",
								},
								{
									name: "Motto of Meow",
									description: "Every 100 Shiny Silvers obtained this round boost Total DMG by 1%.",
									priority: "2nd",
								},
								{
									name: "Back-Curled Tail",
									description: "Every 100 Shiny Silvers obtained this round boost Physical and Elemental DMG by 0.8%.",
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
				}
			},

		],
	},
];