<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "d60e06e4-9aa4-4269-a73f-9cce683beb79",
  name: "Stygian Nymph",
  imageSrc: "/images/stygian-nymph.png",
  imageAlt: "Stygian Nymph",
  position: "object-center",
  derp: {
    imageSrc: "/images/stygian-nymph.png",
    imageAlt: "Derp Stygian Nymph",
    position: "object-center",
  }
};

const signets = {
  builds: [
    {
      name: "Recommendation",
      recommended: "Just play someone else instead. SN is the weakest ER valk since release, without any changes at all. SS-rank is expected to be able to do Finality, and of course Corruption. Also, this was made in -30% DMG reduction for SN. Ideal path is 2 Elysia then 1 Sakura. Read Sakura's section for explanation. Ref <a class='italic font-bold underline' href='https://www.youtube.com/watch?v=cslZh5G3YxI'>here</a>",
      boss: "Vill-V",
      patch: "5.9",
      supports: [
        {
          time: "Early",
          sigils: "Veil of Tears & Tsukimi Himiko",
          support_1: "VC",
          support_2: "DP",
        },
        {
          time: "Mid",
          sigils: "Forget-Me-Not / Burden / Mad King's Mask & Tsukimi Himiko",
          support_1: "VC",
          support_2: "BR",
        },
        {
          time: "Late",
          sigils: "Bloodstained Sakura & Tsukimi Himiko",
          support_1: "SS",
          support_2: "BR",
        },
      ],
      signets: [
        {
          name: "Elysia",
          info: "As SN is a valk that loves her Ego signets, take them if you get Ego doors UNLESS you get an door that will complete a necessary Core",
          lists: [
            {
              name: "Blessing of Vulnerable Duality",
              desc: "Triggering Ultimate Evasion Skill reduces Ultimate CD by 40%",
              priority: "Start",
            },
            {
              name: "Blessing of Intergrowth",
              desc: "Switching between Saule and Veliona restores full Ultimate Evasion Skill charges",
              priority: "1st",
            },
            {
              name: "Blessing of Union",
              desc: "Within 12s after switching between Saule and Veliona, resonances of either Sunnebrands or Veilmarks trigger the resonance effects of both marks",
              priority: "Optional",
            },
            {
              name: "Blessing of Kindred",
              desc: "Charging speed accelerates and Physical DMG of Charged ATK increases by 10%. My Hands Are Burning stacks faster",
              priority: "Optional",
            },
            {
              name: "Blessing of Might of Duality",
              desc: "Ground Charged ATK can charge up to 4 stages and deal 400% ATK of bonus Physical DMG",
              priority: "No",
            },
          ],
        },
        {
          name: "Aponia 2",
          info: "SP regen takes the priority here for a start. Without \"Blessing of Dark Plumes\", SP problems is noticeable at F7",
          lists: [
            {
              name: "First, No Betrayal",
              desc: "Exhortation increases by 5 per second and caps at 200. Basic ATK's Total DMG increases by 0.3% of Exhortation. Triggering Ultimate Evasion Skill reduces 50% Exhortation",
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
              priority: "3rd",
            },
          ],
        },
        {
          name: "Sakura 1",
          info: "Take \"Bountiful Blossom: Fuji\" is the ideal start, due to its synergy with the 2 Elysia signets and Sakura's FC Skill. It's also the most effective",
          lists: [
            {
              name: "Bountiful Blossom: Fuji",
              desc: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
              priority: "1st",
            },
            {
              name: "Bountiful Blossom: Koyo",
              desc: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
              priority: "2nd",
            },
            {
              name: "Bountiful Blossom: Ume",
              desc: "Triggering Ultimate Evasion Skill boosts Attack Speed & Move Speed by 40% for 8s",
              priority: "3rd",
            },
            {
              name: "Bountiful Blossom: Botan",
              desc: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s",
              priority: "4th",
            },
            {
              name: "Nexus Signet Setsuna Blade: Sakura ni Maku",
              desc: "Triggering Ultimate Evasion Skill 3 times activates Sakura Screen to render all enemies static for 3s, after which they lose HP equal to 40% of the DMG they have received during the duration",
              priority: "CORE",
            },
          ],
        },
        {
          name: "Kevin 1",
          lists: [
            {
              name: "Mask of the Predator",
              desc: "Ultimate boosts Physical Breach by 25% for 5s",
              priority: "1st",
            },
            {
              name: "Goblet of the Giver",
              desc: "Ultimate boosts Total DMG by 35% for 5s",
              priority: "2nd",
            },
            {
              name: "Pendant of the Watcher",
              desc: "Ultimate boosts Physical DMG by 30% for 5s",
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
          name: "Kalpas 2",
          info: "Don't worry about low health gameplay without shields. SN abuse Ultimate Evasion and Ultimate as I-frames",
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
      ],
    },
  ],
};
</script>