<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "b4d82c19-1ba8-4c31-9ff8-4697aba777d4",
  name: "Herrscher Of Sentience",
  imageSrc: "/images/herrscher-of-sentience.jpg",
  imageAlt: "Herrscher Of Sentience",
  position: "object-center",
  derp: {
    imageSrc: "/images/derp/herrscher-of-sentience.png",
    imageAlt: "Derp Herrscher Of Sentience",
    position: "object-center",
  }
};

const signets = {
  builds: [
    {
      name: "Stars (Griseo)",
      recommended: "Choose Husk",
      boss: "Aponia",
      supports: [
        {
          time: "Early",
          sigils: "",
          support_1: "SA",
          support_2: "LE",
        },
        {
          time: "Mid",
          sigils: "",
          support_1: "SA",
          support_2: "LE / SS",
        },
        {
          time: "Late",
          sigils: "",
          support_1: "SA",
          support_2: "SS",
        },
      ],
      signets: [
        {
          name: "Elysia",
          info: "Blessings of Legion is wrongly translated by miHoYo. All combo ATKs proc the 60% Total DMG, not just sword, spear and chain combo attacks. This includes Combo ATK: Slashes in Herrscher Mode. All skills and multipliers still work as intended ingame.",
          lists: [
            {
              name: "Blessing of  Victory",
              desc: "In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
              priority: "Start",
            },
            {
              name: "Blessing of Dark Plumes",
              desc: "Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
              priority: "1st",
            },
            {
              name: "Blessing of Supremacy",
              desc: "Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
              priority: "2nd",
            },
            {
              name: "Blessing of Legion",
              desc: "Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
              priority: "Filler",
            },
            {
              name: "Blessing of Ego",
              desc: "Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
              priority: "No",
            },
          ],
        },
        {
          name: "Griseo 1",
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
              name: "Grey & Empty",
              desc: "Enemies stay tainted for 5s longer",
              priority: "3rd",
            },
            {
              name: "Blue & Cold",
              desc: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration",
              priority: "4th",
            },
            {
              name: "Nexus Signet: Shine like Stars",
              desc: "When there are enemies tainted with 1/2/3 different paints, Valkyries deal 20%/50%/100% bonus Total DMG to enemies of countering types",
              priority: "CORE",
            },
            {
              name: "Blooming like Flowers",
              desc: "When enemies of countering types are tainted with both blue and red paints, Valkyries deal 50% bonus Total DMG to them (cannot stack)",
              priority: "YES",
            },
          ],
        },
        {
          name: "Eden 2",
          lists: [
            {
              name: "Recitatif of Creeks",
              desc: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
              priority: "1st",
            },
            {
              name: "Recitatif of Eden",
              desc: "Every 10 SP left boosts Total DMG by 3.0%",
              priority: "2nd",
            },
            {
              name: "Recitatif of Good Wine",
              desc: "Restore 1.5 SP per second",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: Echo of Gold",
              desc: "Consuming SP restores the same charges and triggers Final Echo status during which Total DMG increases 8% (160% max) at the cost of charges equal to the remaining duration per second. Insufficient charges reset the effect and end Final Echo.",
              priority: "CORE",
            },
            {
              name: "Echo of Silent Night",
              desc: "After lasting over 7s, reduce ATK, DEF, ele resists of enemies nearby",
              priority: "1st",
            },
            {
              name: "Echo of Withered Soil",
              desc: "After lasting over 7s, boost SP cap and restore SP/s till it ends",
              priority: "Filler",
            },
          ],
        },
        {
          name: "Kevin 1 (Choose one)",
          lists: [
            {
              name: "Mask of the Predator",
              desc: "Ultimate boosts Physical Breach by 25% for 5s",
              priority: "1st",
            },
            {
              name: "Pendant of the Watcher",
              desc: "Ultimate boosts Physical DMG by 30% for 5s",
              priority: "2nd",
            },
            {
              name: "Goblet of the Giver",
              desc: "Ultimate boosts Total DMG by 35% for 5s",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: Blade of the Deliverer",
              desc: "Ultimate triggers Final Battle status during which all buffs provided by Normal Signets of Deliverance increase by for 5s",
              priority: "CORE",
            },
            {
              name: "Echo of the Deliverer",
              desc: "Duration of Final Battle and all buffs provided by Normal Signets of Deliverance are extended to 8s",
              priority: "1st",
            },
            {
              name: "Crusade of the Deliverer",
              desc: "After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%",
              priority: "2nd",
            },
          ],
        },
        {
          name: "Kevin 2 (Choose one)",
          lists: [
            {
              name: "Mask of the Predator",
              desc: "Ultimate boosts Physical Breach by 25% for 5s",
              priority: "1st",
            },
            {
              name: "Pendant of the Watcher",
              desc: "Ultimate boosts Physical DMG by 30% for 5s",
              priority: "2nd",
            },
            {
              name: "Goblet of the Giver",
              desc: "Ultimate boosts Total DMG by 35% for 5s",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: Shadow of the Deliverer",
              desc: "Ultimate or burst mode ATKs hitting enemies 50 times triggers War of Deliverance status during which all buffs provided by Normal Signets of Deliverance are active",
              priority: "CORE",
            },
          ],
        },
        {
          name: "Su 2",
          lists: [
            {
              name: "Motto of Dibba-Cakkhu",
              desc: "Combo hits are reset at to boost Total DMG taken by all enemies by 35% for 10s",
              priority: "1st",
            },
            {
              name: "Motto of Asavakkhaya",
              desc: "Attacks grant 25 bonus combo hits on hit. CD: 5s",
              priority: "2nd",
            },
            {
              name: "Motto of Iddhi-Vidha",
              desc: "Combo hits are increased to 60 when below 60. CD: 10s",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: Dictum of Bodhi",
              desc: "Reaching 60/100/150 combo hits unleashes Bodhi: Eyes Open on a random enemy, dealing 800%/900%/1000% ATK of adaptive DMG and inflicting Trance. Affected enemies contribute 1 bonus combo hit on hit for 3s",
              priority: "CORE",
            },
          ],
        },
      ],
    },
    {
      name: "Ego",
      recommended: "Choose Husk. Full Sirin Ascendant is almost similar to Full Shattered Swords. But Shattered Swords still better in general. Ref <a class='italic font-bold underline' href='https://www.youtube.com/watch?v=j_UFFAe3yWI'>here</a>",
      boss: "Vill-V",
      patch: "5.9",
      supports: [
        {
          time: "Early",
          sigils: "Forbidden Seed & Dreamful Gold",
          support_1: "SS",
          support_2: "SN",
        },
        {
          time: "Mid",
          sigils: "(Veil of Tears / Golden Goblet / Rainbow of Absence) & Dreamful Gold",
          support_1: "SS",
          support_2: "SN",
        },
        {
          time: "Late",
          sigils: "(Good Old Days / The First Scale) & Dreamful Gold",
          support_1: "SS",
          support_2: "BR",
        },
      ],
      signets: [
        {
          name: "Elysia",
          info: "This build only need 2 Signets, \"Blessing of Victory\" and \"Blessing of Ego\". Double start is strictly necessary as \"Blessing of Ego\" and Mobius signets are the main core. Can take \"Blessing of Dark Plumes\" as 3rd which will massively help with the SP regen and make the build smoother, especially before F7. Then stop getting more Elysian Signets",
          lists: [
            {
              name: "Blessing of  Victory",
              desc: "In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
              priority: "Start",
            },
            {
              name: "Blessing of Ego",
              desc: "Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
              priority: "1st",
            },
            {
              name: "Blessing of Dark Plumes",
              desc: "Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
              priority: "Optional",
            },
            {
              name: "Blessing of Supremacy",
              desc: "Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
              priority: "Filler",
            },
            {
              name: "Blessing of Legion",
              desc: "Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
              priority: "No",
            },
          ],
        },
        {
          name: "Mobius 1",
          info: "\"Lip Poison [E]\" start has more noticeable damage increase. Also, \"Lodging [C]\" is far more valuable than \"Rodent [V]\" for finishing 1st core, allowing you to use support SN for Smelter Zombie on F7  and making it easier to get the double signet. Take \"Newborn [X]\" only if you want to upgrade \"Dead [X]\"",
          lists: [
            {
              name: "Lip Poison [E]",
              desc: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%",
              priority: "1st",
            },
            {
              name: "Lodging [C]",
              desc: "ELF Ultimates and Support Valkyries support skills have 20% reduced CD",
              priority: "2nd",
            },
            {
              name: "Entwined [P]",
              desc: "For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
              priority: "3rd",
            },
            {
              name: "Rodent [V]",
              desc: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max)",
              priority: "4th",
            },
            {
              name: "Nexus Signet: Infinite [X]",
              desc: "Summoning summoned entities or using ELF Ultimates triggers Mind Sync state which lasts 8s. In Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 30% bonus Physical and Elemental DMG. Reset on exiting Mind Sync",
              priority: "CORE",
            },
            {
              name: "Dead [X]",
              desc: "For every second in Mind Sync, Valkyrie herself, summoned entities, ELFs, and Support Valkyries deal 10% bonus Total DMG. 5 stacks max. 9 stacks max with any summoned entity present. Reset on exiting Mind Sync",
              priority: "1st",
            },
            {
              name: "Newborn [X]",
              desc: "Triggering Mind Sync again during Mind Sync no longer resets the duration but extends the duration by 4.0s instead. With any summoned entity present, the duration is extended by 5s additionally",
              priority: "Optional",
            },
          ],
        },
        {
          name: "Aponia 2",
          info: "SP regen takes the priority here for a start. Without \"Blessing of Dark Plumes\", SP problems is noticeable at F7",
          lists: [
            {
              name: "Third, No Brutality",
              desc: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation",
              priority: "1st",
            },
            {
              name: "Fifth, No Insolence",
              desc: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation",
              priority: "2nd",
            },
            {
              name: "Fifth, No Falsehood",
              desc: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: You Shall Receive Disciplines' Blessing",
              desc: "Normal Signet of Discipline grants Exhortation 100% increase per second. When Exhortation exceeds 150, \"You Shall Know Your Sins\" will trigger every 5s around the Valkyrie, dealing 1400% ATK of Adaptive DMG. The Valkyrie deals 10% more Total DMG for each enemy hit for a total or 70%, for 10%. Triggering it again resets the duration",
              priority: "CORE",
            },
            {
              name: "You Shall Punish Evil",
              desc: "Enemies struck by \"You Shall Know Your Sins\" two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by \"You Shall Know Your Sins\"",
              priority: "YES",
            },
            {
              name: "You Shall Answer Prayers",
              desc: "Triggering \"You Shall Know Your Sins\" causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration",
              priority: "Optional",
            },
            {
              name: "You Shall Follow Good",
              desc: "\"You Shall Know Your Sins'\" Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration",
              priority: "Filler",
            },
          ],
        },
        {
          name: "Eden 2",
          lists: [
            {
              name: "Recitatif of Eden",
              desc: "Every 10 SP left boosts Total DMG by 3.0%",
              priority: "1st",
            },
            {
              name: "Recitatif of Creeks",
              desc: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
              priority: "2nd",
            },
            {
              name: "Recitatif of Good Wine",
              desc: "Restore 1.5 SP per second",
              priority: "3rd",
            },
            {
              name: "Recitatif of Fine Jade",
              desc: "Initial SP and max SP increase by 30",
              priority: "Filler",
            },
            {
              name: "Nexus Signet: Echo of Gold",
              desc: "Consuming SP restores the same charges and triggers Final Echo status during which Total DMG increases 8% (160% max) at the cost of charges equal to the remaining duration per second. Insufficient charges reset the effect and end Final Echo",
              priority: "CORE",
            },
            {
              name: "Echo of Silent Night",
              desc: "Echo of Silent Night: After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends",
              priority: "1st",
            },
          ],
        },
        {
          name: "Griseo 2",
          info: "The gameplay changes based on basic paints. It's essential to save the Weap skill and Ultimate Evasion to trigger together with Ultimate, end up having all 3 paints. Taint Extension is also very crucial for this, as the +0 alone will increase the duration from 8s to 13s, making up for an entire ultimate duration of 2 complete series of Victory Slashes",
          lists: [
            {
              name: "Red & Hot",
              desc: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "Yellow & Warm",
              desc: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration",
              priority: "2nd",
            },
            {
              name: "Grey & Empty",
              desc: "Enemies stay tainted for 5s longer",
              priority: "3rd",
            },
            {
              name: "Blue & Cold",
              desc: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration",
              priority: "4th",
            },
            {
              name: "Black & Dark",
              desc: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max",
              priority: "Optional",
            },
            {
              name: "Nexus Signet: Faded Stars",
              desc: "When tainted enemies are tainted another color, Blending is triggered, dealing 300% ATK of Adaptive DMG to enemies within 15m and tainting enemies purple, green, or orange based on the Enhanced Signet; CD: 1s. Total DMG increases 15% for each layer of taint, plus an additional 15% for enemies of a countered type",
              priority: "CORE",
            },
            {
              name: "Petals in the Wind",
              desc: "When red and blue taint triggers Blending, enemies within 8m are dealt 1200%/500% ATK of Adaptive DMG; CD: 3s. Also taints yourself purple for 15s, increasing the effect of red, yellow, and blue taint by 40%. Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "A Flame Extinguished",
              desc: "When red and yellow taint triggers Blending you become tainted orange for 15s, triggering Time Fracture for 2.5s and reducing enemy Physical Defense 40% and Elemental Resist 15% for 10s; CD: 7s. Triggering it again resets the duration",
              priority: "2nd",
            },
            {
              name: "Fallen Leaves",
              desc: "When yellow and blue taint triggers Blending along with an AoE ATK dealing 800% ATK of Adaptive DMG; CD: 3s. Also taints yourself green for 15s, increasing Total DMG 20% for each taint in Faded Stars. Triggering it again resets the duration",
              priority: "Optional",
            },
          ],
        },
      ],
    },
    {
      name: "Daybreak",
      patch: "5.9",
      recommended: "Choose Husk. Can swap SN to BR for F17. Ref <a class='italic font-bold underline' href='https://www.youtube.com/watch?v=6Ab8Bw54IGA'>here</a>",
      boss: "Vill-V",
      supports: [
        {
          time: "Early",
          sigils: "Veil of Tears & Dreamful Gold",
          support_1: "SS",
          support_2: "SN",
        },
        {
          time: "Mid",
          sigils: "Veil of Tears & Dreamful Gold",
          support_1: "SS",
          support_2: "SN",
        },
        {
          time: "Late",
          sigils: "Veil of Tears & Dreamful Gold",
          support_1: "SS",
          support_2: "SN / BR",
        },
      ],
      signets: [
        {
          name: "Elysia",
          info: "Rerolling for \"Blessing of Dark Plumes\" is essential, because SP problem. Can take \"Blessing of Supremacy\" if you're comfortable with shield it provides",
          lists: [
            {
              name: "Blessing of  Victory",
              desc: "In Herrscher Form, Combo ATK: Slashes can have up to 18 slashes. After reaching 7 slashes, every slash deals 600% ATK of Physical DMG.",
              priority: "Start",
            },
            {
              name: "Blessing of Dark Plumes",
              desc: "Combo ATK restores 1 SP on hit and unleashes a plume attack on hit that deals 150% ATK of Physical DMG. CD: 0.5s",
              priority: "1st",
            },
            {
              name: "Blessing of Supremacy",
              desc: "Shield: I'm Untouchable absorbs 100% of DMG taken and deals 5000% ATK of Physical DMG to enemies within 8 metres when it ends or resets.",
              priority: "Filler",
            },
            {
              name: "Blessing of Legion",
              desc: "Sword, spear and chain combo attacks restore 300 sword, spear and chain energy respectively and boost Total DMG by 60% for 8s.",
              priority: "No",
            },
            {
              name: "Blessing of Ego",
              desc: "Casting Combo ATK summons an illusion (summoned entity) to replicate the attack. In Herrscher Form, the illusion only replicates the slashes each dealing 105% ATK of Physical DMG. The illusion has 400% of the Valkyrie's ATK.",
              priority: "No",
            },
          ],
        },
        {
          name: "Aponia 2",
          info: "\"You Shall Answer Prayers\" Best taken on later floors after getting 2nd / 3rd core signets. \"You Shall Follow Good\" is last priority",
          lists: [
            {
              name: "Fourth, No Insolence",
              desc: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation",
              priority: "1st",
            },
            {
              name: "Third, No Brutality",
              desc: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation",
              priority: "2nd",
            },
            {
              name: "Fifth, No Falsehood",
              desc: "Valkyrie starts with 70 bonus Exhortation. Whenever Exhortation is reduced, enemies take 25% bonus Total DMG for 5s. Can be refreshed",
              priority: "3rd",
            },
            {
              name: "Nexus Signet: You Shall Receive Disciplines' Blessing",
              desc: "Normal Signet of Discipline grants Exhortation 100% increase per second. When Exhortation exceeds 150, \"You Shall Know Your Sins\" will trigger every 5s around the Valkyrie, dealing 1400% ATK of Adaptive DMG. The Valkyrie deals 10% more Total DMG for each enemy hit for a total or 70%, for 10%. Triggering it again resets the duration",
              priority: "CORE",
            },
            {
              name: "You Shall Punish Evil",
              desc: "Enemies struck by \"You Shall Know Your Sins\" two or more times take 40% more Total DMG. 5 SP is restored when these enemies are hit by \"You Shall Know Your Sins\"",
              priority: "YES",
            },
            {
              name: "You Shall Answer Prayers",
              desc: "Triggering \"You Shall Know Your Sins\" causes the Valkyrie to enter Penance for 8s. In Penance, the Valkyrie takes 30% less Total DMG and deals 40% more Physical and Elemental DMG to enemies. Valkyrie deals 800% ATK of Adaptive DMG to attacking enemies when hit; CD: 5s. Triggering it again resets the duration",
              priority: "Filler",
            },
            {
              name: "You Shall Follow Good",
              desc: "\"You Shall Know Your Sins\" Total DMG dealt increases 40% and increases Physical and Elemental Breach by 0.25% of Exhortation for 6s upon hitting an enemy. Triggering it again resets the duration",
              priority: "Filler",
            },
          ],
        },
        {
          name: "Eden 2",
          info: "Based on RNG luck. Ideally pick Aponia enhanced signet, Eden normal signet, then take Eden on F7 for double signets. Order of Aponia and Eden on F5 - F6 is not necessary.\"Echo of Shrill Wind\" here is important to take ASAP, as this signet will negate the 30% TDM reduction of the current weather due to inflicting lightning damage to enemies. \"Echo of Silent Night\" is also strong enhanced signet. \"Echo of Withered Soil\" is last priority",
          lists: [
            {
              name: "Recitatif of Creeks",
              desc: "Every 10 SP left boosts Physical & Elemental DMG by 2.5%",
              priority: "1st",
            },
            {
              name: "Recitatif of Eden",
              desc: "Every 10 SP left boosts Total DMG by 3.0%",
              priority: "2nd",
            },
            {
              name: "Recitatif of Good Wine",
              desc: "Restore 1.5 SP per second",
              priority: "3rd",
            },
            {
              name: "Recitatif of Fine Jade",
              desc: "Initial SP and max SP increase by 30",
              priority: "Filler",
            },
            {
              name: "Nexus Signet: Echo of Gold",
              desc: "Consuming SP restores the same charges and triggers Final Echo status during which Total DMG increases 8% (160% max) at the cost of charges equal to the remaining duration per second. Insufficient charges reset the effect and end Final Echo",
              priority: "CORE",
            },
            {
              name: "Echo of Shrill Wind",
              desc: "After lasting over 1s, Final Echo deals 300% ATK of Lightning DMG per second until it ends",
              priority: "YES",
            },
            {
              name: "Echo of Silent Night",
              desc: "After lasting over 1s, Final Echo reduces the ATK, DEF. and Elemental Resists of enemies nearby by 2% per second (40% max) until it ends",
              priority: "1st",
            },
            {
              name: "Echo of Withered Soil",
              desc: "ter lasting over 1s, Final Echo boosts SP cap by 50% and restores 1% SP per second until it ends",
              priority: "Filler",
            },
          ],
        },
        {
          name: "Kosma 2",
          info: "Based on RNG luck. Pick \"Choice, Ensuing Regret\" ONLY if you going to build Kalpas core. Otherwise, pick \"Dawn, Perpetual Wait\"",
          lists: [
            {
              name: "Talons that Desecrate the Santuary",
              desc: "Basic/Combo/Charged ATKs inflict a stack of Rend on hit, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. Stacking CD: 1s",
              priority: "1st",
            },
            {
              name: "Wings that Mask the Sanguine Moon",
              desc: "Ultimate Evasion Skill inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s",
              priority: "2nd",
            },
            {
              name: "Horns the Rip the Bleak Sky",
              desc: "Ultimate inflicts 15 stacks of Rend on all enemies, each stack dealing 25% ATK of Adaptive DMG per second for 10s. 70 stacks max. CD: 15s",
              priority: "3rd",
            },
            {
              name: "Heart that Committed Seven Crimes",
              desc: "Rend lasts 5s longer",
              priority: "4th",
            },
            {
              name: "Nexus Signet: Daybreak, Lone Beacon",
              desc: "Rend will also be applied to Valkyrie. Each stack of Rend makes Valkyrie deal 2% more Total DMG and lose 2 HP per second down to 1 HP",
              priority: "CORE",
            },
            {
              name: "Choice, Ensuing Regret",
              desc: "When Combo and Charged ATKs hit, unleash Righteous Retribution once, dealing 3600% ATK of Adaptive DMG to nearby enemies as well as restoring 0.5% of HP for each stack of Rend on Valkyrie. CD: 10s",
              priority: "Filler",
            },
            {
              name: "Dawn, Perpetual Wait",
              desc: "While Rended, recovering HP reduces Total DMG taken by 1.2% each time up to 36%, and losing HP increases Physical and Elemental Breach by 2.4% each time up to 36%",
              priority: "Filler",
            },
          ],
        },
        {
          name: "Kalpas 2 (Optional)",
          info: "After finishing this core, you only consider taking Kalpas2 enhanceds IF you take \"Choice, Ensuing Regret\" (check Kosma)",
          lists: [
            {
              name: "Bone, Blood, and Ribbon",
              desc: "Every 100 HP loss boosts Physical & Elemental DMG by 0.8%",
              priority: "1st",
            },
            {
              name: "Blade, Grave, and Scar",
              desc: "Every 100 HP loss boosts Total DMG by 1%",
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
            {
              name: "Hometown, Homeland, Friends, and Acquaintances",
              desc: "If [Bloodboil Garment] exceeds 1500, gain 25% physical and elemental breach",
              priority: "Optional",
            },
            {
              name: "Body, Bones, Heart, and Soul",
              desc: "The Bloodboil Armor charges cap increases by 500. When its charges exceed 1500, if it gains HP recovery, when it next deals DMG to enemies, it will have a bonus 800% ATK of adaptive DMG. CD: 5s",
              priority: "Filler",
            },
          ],
        },
        {
          name: "Griseo 2 (Optional)",
          info: "Getting core signet is not necessary. Build this if not build Kalpas",
          lists: [
            {
              name: "Red & Hot",
              desc: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "Yellow & Warm",
              desc: "Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration",
              priority: "2nd",
            },
            {
              name: "Grey & Empty",
              desc: "Enemies stay tainted for 5s longer",
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
