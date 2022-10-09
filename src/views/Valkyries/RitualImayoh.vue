<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "50289333-4dd5-46b8-a315-d357e4eabb78",
  name: "Ritual Imayoh",
  imageSrc: "/images/ritual-imayoh.jpg",
  imageAlt: "Ritual Imayoh",
  position: "object-top",
  derp: {
    imageSrc: "/images/ritual-imayoh.jpg",
    imageAlt: "Derp Ritual Imayoh",
    position: "object-center",
  }
};

const signets = {
  builds: [
    {
      name: "Recommendation",
      recommended: "This build weakened at 6.0. Ideal start: Double Ego start > Aponia Core at F4 > Aponia Breach Enhanced signet at F5 > Hua or Kevin at F6 > Complete Hua or Kevin 2nd Core by F7. Ref <a class='italic font-bold underline' href='https://www.youtube.com/watch?v=rFxInRhkEdo'>here</a>",
      boss: "Aponia",
      patch: "5.9~",
      supports: [
        {
          time: "Early",
          sigils: "Veil of Tears & The Lonely Moon",
          support_1: "VC",
          support_2: "SS",
        },
        {
          time: "Mid",
          sigils: "Forbidden Seed / Memory / Burden / Home Lost & The Lonely Moon",
          support_1: "VC",
          support_2: "SS",
        },
        {
          time: "Late",
          sigils: "Resolve / Shattered Shackles / Key to the Deep & The Lonely Moon",
          support_1: "VC",
          support_2: "SS",
        },
      ],
      signets: [
        {
          name: "Elysia",
          info: "If not getting \"Blessing of Blossom\", \"Crusade of Deliverer\" is a must to keep up with abusing him (See Kevin 1)",
          lists: [
            {
              name: "Blessing of Prosperity",
              desc: "Tap [ATK] after evasion to dash to enemies for an aerial kick, which can be connected into Basic ATK Sequence 4. Basic ATK Sequence 6 restores KE every time it lands",
              priority: "Start",
            },
            {
              name: "Blessing of Dawn",
              desc: "At full KE, the next Combo ATK consumes all of it to constitute 4 stacks and additionally fire 4 homing missiles dealing 3600% ATK of Physical DMG",
              priority: "1st",
            },
            {
              name: "Blessing of Blossom",
              desc: "Homing missiles restore 2 SP on hit. Basic ATK Sequence 6 additionally fires 4 homing missiles each dealing 200% ATK of Physical DMG",
              priority: "2nd",
            },
            {
              name: "Blessing of Fertility",
              desc: "Ultimate replenishes 40 light bullets for every gun turret and boosts their Tech Level by 1 (caps at 3). Each turret restores Tech Level x 30 KE per second",
              priority: "No",
            },
            {
              name: "Blessing of Torch",
              desc: "When a Combo ATK with KE consumed hits, all gun turrets fire a laser beam at the target to deal Combo ATK stacks x 1600% ATK of Physical DMG",
              priority: "No",
            },
          ],
        },
        {
          name: "Aponia 2",
          info: "",
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
              name: "Third, No Brutality",
              desc: "Exhortation increases by 5 per second and caps at 200. Valkyrie has bonus SP regen per second equal to 1% of Exhortation. Reaching 160 combo reduces 50% Exhortation",
              priority: "1st",
            },
            {
              name: "Fourth, No Insolence",
              desc: "Exhortation increases by 5 per second and caps at 200. Ultimate's Physical and Elemental DMG increases by 0.3% of of Exhortation. Using weapon skills reduces 50% Exhortation",
              priority: "4th",
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
          name: "Hua 2",
          info: "If you don't want to suffer through this valk's insufferable non-existent I-frames, absolutely take Hua. She becomes almost unplayable without her. You need to be good at dodging without her shield (if you don't get her, you better be a masochist!)",
          lists: [
            {
              name: "Long Trip",
              desc: "Total DMG increases by 1.0% per second. 40 stacks max. Taking DMG reduces 10 stacks",
              priority: "1st",
            },
            {
              name: "Days Gone",
              desc: "Physical DMG increases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks",
              priority: "2nd",
            },
            {
              name: "No One to Share",
              desc: "Physical Breach increases by 0.6% per second. 40 stacks max. Taking DMG reduces 10 stacks",
              priority: "3rd",
            },
            {
              name: "Lost and Found",
              desc: "Total DMG taken decreases by 0.8% per second. 40 stacks max. Taking DMG reduces 10 stacks",
              priority: "Filler",
            },
            {
              name: "Nexus Signet: Suffering Mass",
              desc: "Valkyries start with 6 Soldier's Remembrance stacks which boost all buffs from Normal Signets of Vicissitude to full stacks. Taking DMG reduces I Soldier's Remembrance stack and grants 0.5s invincibility",
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
            },
          ],
        },
        {
          name: "Kevin 1",
          info: "If you want to try and fit \"Crusade of the Deliverer\" into every combo, use Ultimate then doing Prosperity's ATK to use Combo at 3 maxed bars would be the ideal to fit the laser into the remaining 2s window of buff. \"Rochet of Pilgrim's\" priority changes based on whether or not you get \"Blessing of Blossom\" (See Elysia)",
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
              name: "Rochet of the Pilgrim",
              desc: "Ultimate restores 3 SP per second for 5s",
              priority: "4th",
            },
            {
              name: "Nexus Signet: Blade of the Deliverer",
              desc: "Ultimate triggers Final Battle status during which all buffs provided by Normal Signets of Deliverance increase by for 5s",
              priority: "CORE",
            },
            {
              name: "Crusade of the Deliverer",
              desc: "After 3s into Final Battle, all buffs provided by Normal Signets of Deliverance increase by 90% instead of 50%",
              priority: "1st",
            },
          ],
        },
        {
          name: "Mobius 1",
          lists: [
            {
              name: "Entwined [P]",
              desc: "For every summoned entity, ELF, or Support Valkyrie present, enemies take 8% bonus Total DMG (5 stacks max)",
              priority: "1st",
            },
            {
              name: "Rodent [V]",
              desc: "For every summoned entity, ELF, or Support Valkyrie present, Valkyrie deals 10% bonus Total DMG (5 stacks max)",
              priority: "2nd",
            },
            {
              name: "Lodging [C]",
              desc: "ELF Ultimates and Support Valkyries support skills have 20% reduced CD",
              priority: "3rd",
            },
            {
              name: "Lip Poison [E]",
              desc: "Total DMG from summoned entities, ELFs, and Support Valkyries increases by 60%",
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
          ],
        },
        {
          name: "Griseo 2",
          info: "Getting core isn't necessary, can take it all from Felis Shop",
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