<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "ca2cf0d6-2ea0-41c9-854d-1b7c7ae5a144",
  name: "Herrscher Of The Void",
  imageSrc: "/images/herrscher-of-the-void.jpg",
  imageAlt: "Herrscher Of The Void",
  position: "object-center",
  derp: {
    imageSrc: "/images/derp/herrscher-of-the-void.png",
    imageAlt: "Derp Herrscher Of The Void",
    position: "object-center",
  }
};

const signets = {
  builds: [
    {
      name: "Thanos Snap",
      recommended: "Ideal path would be: 2 Ego Start > take 1st Core at F4 > take \"Dead [X]\" at F5 (or F6) > take Hua signet at F6 (or F5) > get 2nd Core at F7 > get 3rd Core at F11. Ref <a class='italic font-bold underline' href='https://www.youtube.com/watch?v=CWRlBghJpEY'>here</a>",
      boss: "Elysia / Aponia",
      supports: [
        {
          time: "Early",
          sigils: "Forbidden Seed & Falling in Past Light / Tsukimi Himiko",
          support_1: "VC",
          support_2: "SN",
        },
        {
          time: "Mid",
          sigils: "Pseudo Miracle / Home Lost & Falling in Past Light / Tsukimi Himiko",
          support_1: "VC",
          support_2: "SN",
        },
        {
          time: "Late",
          sigils: "Good Old Days / The First Scale & Falling in Past Light / Tsukimi Himiko",
          support_1: "VC",
          support_2: "SS / BR",
        },
      ],
      patch: "6.0~",
      signets: [
        {
          name: "Elysia",
          info: "Double Elysia signets is best (\"Blessing of Innateness\" and \"Blessing of Virtuality\"). If you get 3rd Elysia signet, either \"Blessing of Annihilation\" or \"Blessing of Coleus\". Both \"Blessing of Virtuality\" and \"Blessing of Annihilation\" are strong. \"Blessing of Virtuality\" has a downside that it can fuck up any non-consistent gathers (\"Blessing of Coleus\" negates it), and it can also delay the spawn of mobs in certain waves",
          lists: [
            {
              name: "Blessing of Innateness",
              desc: "Reduces CD of Ultimate Evasion Skill, weapon skill and Ultimate by 6s each when summoning Space Core. In Herrscher Form, Basic ATKs directly connect to SEQ 3 for a short duration after triggering Ultimate Evasion",
              priority: "Start",
            },
            {
              name: "Blessing of Virtuality",
              desc: "Ultimate Evasion Skill can be triggered even without Ultimate Evasion conditions when there are no enemies along the path of Phase Shuttle. Time-slow area of effect triggered by Ultimate Evasion Skill expands and all enemies in range take 30% more Total DMG for 12s. Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "Blessing of Annihilation",
              desc: "In Herrscher Form, the 3rd SEQ of Basic ATK includes one blow of Charged ATK: Time Tremor that deals 200% ATK of Physical DMG",
              priority: "1st",
            },
            {
              name: "Blessing of Coleus",
              desc: "Physical DMG dealt by Space Core increases by 80%. Regain 30 Herrscher Charge and gain 20% more Total DMG for 5s upon summoning Space Core. Triggering it again resets the duration. In Herrscher Form, Space Core's area of explosion is expanded and can gather surrounding enemies",
              priority: "Optional",
            },
            {
              name: "Blessing of Law",
              desc: "Aerial explosion triggered after Ultimate ends deal 2000% ATK of Physical DMG. Gain Spatial Silence stacks after summoning Space Core. Triggering aerial explosion will clear all Spatial Silence stacks and deal additional number of Spatial Silence stacks x 150% ATK of Physical DMG while restoring number of Spatial Silence stacks x 5 SP",
              priority: "No",
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
              priority: "Optional",
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
          name: "Hua 2",
          info: "If bad RNG luck and got \"Lost and Found\", then \"Worldly Troubles\" becomes an option if it also appears instead of \"Broken Dream\". The lesser but big black goat of the build",
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
          name: "Sakura 1",
          info: "\"Bountiful Blossom: Ume\" surprisingly strong and good synergy with HoV's playstyle. It also makes the gameplay even more fluid and fun",
          lists: [
            {
              name: "Bountiful Blossom: Botan",
              desc: "Triggering Ultimate Evasion Skill boosts Total DMG by 40% for 8s",
              priority: "1st",
            },
            {
              name: "Bountiful Blossom: Koyo",
              desc: "Triggering Ultimate Evasion Skill boosts Total DMG taken by all enemies by 30% for 8s",
              priority: "2nd",
            },
            {
              name: "Bountiful Blossom: Ume",
              desc: "Triggering Ultimate Evasion Skill restores 12.0 bonus SP",
              priority: "3rd",
            },
            {
              name: "Bountiful Blossom: Fuji",
              desc: "Ultimate Evasion Skill has 1 more charge and 10% reduced CD",
              priority: "Optional",
            },
            {
              name: "Nexus Signet: Setsuna Blade: Sakura-ni-Maku",
              desc: "Triggering Ultimate Evasion Skill 3 times activates Sakura Screen to render all enemies static for 3s, after which they lose HP equal to 40% of the DMG they have received during the duration",
              priority: "CORE",
            },
          ],
        },
        {
          name: "Vill-V 2",
          info: "Basic signets are best taken from Felis Shop, then get 2nd Core and get the Enhanceds at any cost IF possible. \"Puppetry: Interlacing Cells\" and \"Drama: Origins of Slumber\" are the mini black goats of this build",
          lists: [
            {
              name: "Act V: Spider Web",
              desc: "Using a weapon active boosts Valkyrie ranged Total DMG by 40% for 3.5s. Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "Act II: Pendulum",
              desc: "Using a weapon active makes enemies take 20% bonus Total DMG for 3.5s. Triggering it again resets the duration",
              priority: "2nd",
            },
            {
              name: "Act IV: Spoon",
              desc: "Using a weapon active boosts Physical DMG and Elemental DMG from Charge ATK and Combo ATK by 25% for 3.5s Triggering it again resets the duration",
              priority: "3rd",
            },
            {
              name: "Act I: Magic",
              desc: "Using a weapon active boosts its Total DMG by 10%. 6 stacks max. Reset at the end of each battle",
              priority: "Optional",
            },
            {
              name: "Act III: Conflict",
              desc: "Using a weapon active boosts Valkyrie Total DMG by 20% for 4.5s Triggering it again resets the duration",
              priority: "Filler",
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
          name: "Griseo 2 (Optional)",
          info: "If you're lucky enough to manage to get this, grab it. However, \"Red & Hot\" and \"Black & Dark\" are the 2 priorities. If you get \"Red & Hot\", then try to take \"Black & Dark\"",
          lists: [
            {
              name: "Red & Hot",
              desc: "Using a weapon active taints enemies nearby with red paint for 8s and makes them take 25% bonus Physical and Elemental MG (cannot stack). Triggering it again resets the duration",
              priority: "1st",
            },
            {
              name: "Black & Dark",
              desc: "Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 6 stacks max",
              priority: "2nd",
            },
            {
              name: "Blue & Cold",
              desc: "Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration",
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
