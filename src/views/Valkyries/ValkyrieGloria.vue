<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "419347d2-9d10-417c-bafb-d4fd179f0d5d",
  name: "Valkyrie Gloria",
  imageSrc: "/images/valkyrie-gloria.jpg",
  imageAlt: "Valkyrie Gloria",
  position: "object-center",
  derp: {
    imageSrc: "/images/valkyrie-gloria.jpg",
    imageAlt: "Derp Valkyrie Gloria",
    position: "object-center",
  }
};

const signets = {
  builds: [
    {
      name: "Recommendation",
      recommended: "Ideal path: Double Ego start > Aponia Core at F4 > Aponia Breach enhanced signet at F5 > Vill-V at F6 > get Vill-V Core by F7. Ref <a class='italic font-bold underline' href='https://www.youtube.com/watch?v=ILcGqhJskcs'>here</a>",
      boss: "Aponia",
      patch: "6.0",
      supports: [
        {
          time: "Early",
          sigils: "Veil of Tears & The Lonely Moon",
          support_1: "AE",
          support_2: "LE",
        },
        {
          time: "Mid",
          sigils: "Pseudo Miracle / Memory / Rainbow of Absence / Mad King's Mask & The Lonely Moon",
          support_1: "AE",
          support_2: "LE",
        },
        {
          time: "Late",
          sigils: "Key to the Deep & The Lonely Moon",
          support_1: "AE",
          support_2: "BR",
        },
      ],
      signets: [
        {
          name: "Elysia",
          info: "\"Blessing ofBattle Song\" and \"Blessing of Gloria\" are a must. \"Blessing of Sol\" can be optionally picked later. \"Blessing of Triumph\" is not necessary. This is another valk that loves her Ego signets. However, prioritize completing the important cores over the Ego signets",
          lists: [
            {
              name: "Blessing of Battle Song",
              desc: "Weapon actives deal 200% bonus Total DMG. Hitting an enemy with Charged ATK in Aura Ignis resets weapon active CD",
              priority: "Start",
            },
            {
              name: "Blessing of Gloria",
              desc: "The last hit of Charged ATK or Throw ATK inflicts Magnifica Mark on enemies which explodes after a short delay to deal 1500% ATK of Fire DMG",
              priority: "1st",
            },
            {
              name: "Blessing of Sol",
              desc: "Entering Sprint triggers Stage 2 and until Sprint ends, attacks cost 40 Resolve more on hit to deal 2000% ATK of Fire DMG per second",
              priority: "Optional",
            },
            {
              name: "Blessing of Triumph",
              desc: "Triggering Ultimate Evasion Skill or detonating Magnifica Mark restores 15 SP",
              priority: "Filler",
            },
            {
              name: "Blessing of Impetus",
              desc: "Entering Sprint triggers Stage 2 and until Sprint ends, attacks cost 40 Resolve more on hit to deal 2000% ATK of Fire DMG per second",
              priority: "No",
            },
          ],
        },
        {
          name: "Aponia 2",
          lists: [
            {
              name: "Third, No Brutality",
              desc: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation",
              priority: "1st",
            },
            {
              name: "Fifth, No Falsehood",
              desc: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed",
              priority: "2nd",
            },
            {
              name: "Fourth, No Insolence",
              desc: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation",
              priority: "3rd",
            },
            {
              name: "First, No Betrayal",
              desc: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation",
              priority: "Optional",
            },
            {
              name: "Nexus Signet: You Shall Receive Disciplines' Blessing",
              desc: "Normal Signet of Discipline grants Exhortation 100% increase per second. When Exhortation exceeds 150, \"You Shall Know Your Sins\" will trigger every 5s around the Valkyrie, dealing 1400% ATK of Adaptive DMG. The Valkyrie deals 10% more Total DMG for each enemy hit for a total or 70%, for 10%. Triggering it again resets the duration",
              priority: "CORE",
            },
            {
              name: "You Shall Follow Good",
              desc: "\"You Shall Know Your Sins'\" Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "You Shall Punish Evil",
              desc: "Enemies struck by \"You Shall Know Your Sins\" two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by \"You Shall Know Your Sins\"",
              priority: "2nd",
            },
            {
              name: "You Shall Answer Prayers",
              desc: "Triggering \"You Shall Know Your Sins\" causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration",
              priority: "Optional",
            },
          ],
        },
        {
          name: "Vill-V 2",
          info: "\"Drama: Origin of Slumber\" takes the priority of upgrades if you got \"Old Dreams Again\" (See Hua 2)",
          lists: [
            {
              name: "Act II: Pendulum",
              desc: "Using a weapon active makes enemies take 20% bonus Total DMG for 3.5s. Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "Act III: Conflict",
              desc: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration",
              priority: "2nd",
            },
            {
              name: "Act I: Magic",
              desc: "Using a weapon active boosts its Total DMG by 10%. 6 stacks max. Reset at the end of each battle",
              priority: "3rd",
            },
            {
              name: "Act VI: Sneer",
              desc: "Using a weapon active restores 12 SP in 5s and reduces its CD by 15%",
              priority: "Optional",
            },
            {
              name: "Nexus Signet: Intermezzo: Holistic Helix",
              desc: "Cast weapon active to place a Special Weapon: No. 4 at a distance in front of Valkyrie. It will detonate 1s later, dealing 1500% ATK of Adaptive DMG, causing a 3s Global Time Fracture and generating a small Gravitational Field that pulls enemies and deals 100% ATK of Adaptive DMG to them per second for 6s. Only 1 Special Weapon: No. 4 can exist at a time",
              priority: "CORE",
            },
            {
              name: "Puppetry: Interlacing Cells",
              desc: "Extends Global Time Fracture caused by Special Weapon: No. 4's detonation by 3s. During Global Time Fracture, gain 30% Physical and Elemental Breach",
              priority: "1st",
            },
            {
              name: "Drama: Origins of Slumber",
              desc: "During Gravitational Field, enemies take 20% more Total DMG. During Global Time Fracture caused by detonation, enemies take 30% more Total DMG in addition",
              priority: "2nd",
            },
            {
              name: "Saga: Overlapping Needles",
              desc: "Gravitational Field affects a larger area and gain a stronger pull. DMG-dealing hits deal and extra 500% ATK of Adaptive DMG",
              priority: "Filler",
            },
          ],
        },
        {
          name: "Hua 2 (Or Griseo 2)",
          lists: [
            {
              name: "Long Trip",
              desc: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
              priority: "2nd",
            },
            {
              name: "Dark Garb No More",
              desc: "Elemental DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks",
              priority: "1st",
            },
            {
              name: "Old Dreams Again",
              desc: "Elemental Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks",
              priority: "3rd",
            },
            {
              name: "Lost and Found",
              desc: "Total DMG taken decreases by 0.8% per second. 40 stacks max. Taking DMG reduceses 10 stacks",
              priority: "Filler"
            },
            {
              name: "Nexus Signet: Suffering Mass",
              desc: "Valkyries start with 6 Soldier's Remembrance stacks which boost all buffs from Normal Signets of Vicissitude to full stacks. Taking DMG reduces 1 Soldier's Remembrance stack and grants 0.5s invincibility",
              priority: "CORE",
            },
            {
              name: "Broken Dream",
              desc: "With Soldier's Remembrance stacks, the max stacks of all buffs from Normal Signets of Vicissitude increase by 20. Losing all Soldier's Remembrance stacks reduces the max stacks by 10 but restores 1 Soldier's Remembrance stack. Can only be triggered once every battle",
              priority: "1st",
            },
            {
              name: "Worldly Troubles",
              desc: "With Soldier's Remembrance stacks, Total DMG increases by 50% of the Total DMG Reduction percentage from all Signets",
              priority: "Filler",
            }
          ],
        },
        {
          name: "Kalpas 2",
          info: "Best taken from Felis shop. If you get 2 of Kalpas signets from there, then proceed with getting his Core if possible",
          lists: [
            {
              name: "Blade, Grave, and Scar",
              desc: "Every 100 HP loss boosts Total DMG by 1%",
              priority: "1st",
            },
            {
              name: "Bone, Blood, and Ribbon",
              desc: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",
              priority: "2nd",
            },
            {
              name: "Path, Misfortune, and Written Fate",
              desc: "Max HP increases by 25%",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: Soldiers, Scissors, Spoils, and Slaughter",
              desc: "Valkyrie's current HP cannot exceed 18% of her Max HP, and if the HP recovery in combat reaches 0/400/800, the recovery amount increases by of the Bloodboil Armor charges, up to for a single charge. The charge cap is 1800, and each point increases the HP cap by 1",
              priority: "CORE",
            },
          ],
        },
        {
          name: "Griseo 2 (Or Hua 2)",
          info: "If you get blessed by Felis RNG in shop, absolutely take all 3 of these or whichever you can",
          lists: [
            {
              name: "Red & Hot",
              desc: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental MG (cannot stack). Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "Yellow & Warm",
              desc: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration",
              priority: "2nd",
            },
            {
              name: "Black & Dark",
              desc: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: Faded Stars",
              desc: "When tainted enemies are tainted another color, Blending is triggered, dealing 300% ATK of Adaptive DMG to enemies within 15m and tainting enemies purple, green, or orange based on the Enhanced Signet; CD: 1s. Total DMG increases 15% for each layer of taint, plus an additional 15% for enemies of a countered type",
              priority: "CORE",
            },
          ],
        },
      ],
    },
  ],
};
</script>