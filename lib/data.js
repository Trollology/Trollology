export const types = ["Species", "Named"];
export const regions = ["Norway", "Iceland", "Sweden", "Denmark"];
export const habitats = ["Bridge", "Mountain", "Castle", "Forest"];

export const trolls = [
  {
    slug: "dovregubben",
    name: "Dovregubben (King of the Dovre Hall)",
    type: "Named",
    region: ["Norway"],
    habitat: ["Mountain", "Castle"],
    synopsis: "Ruler of the subterranean halls beneath the Dovre mountains; famous in 19th‑c. collections.",
    earliestSource: "Norske Folkeeventyr (Asbjørnsen & Moe)",
    description: "A chthonic sovereign of mountain halls, associated with subterranean wealth and taboo crossings.",
    size: { height: [3.5, 6.0], weight: [800, 2500] },
    method: "Scaled from human figures and architectural elements in 19th‑century engravings.",
    methodDetail: "Proportions estimated from door heights and bridge spans in canonical illustrations.",
    prologue: { text: "Born of stone‑marrow and deep echo beneath Dovre.", evidence: "speculative" },
    epilogue: { text: "In some tales, his court petrifies at sunrise; in others, they retreat into earth.", evidence: "inferred" },
    sources: ["Asbjørnsen & Moe, Norske Folkeeventyr (various tales)."],
    image: "/images/placeholder.svg"
  },
  {
    slug: "bridge-troll",
    name: "Bridge Troll",
    type: "Species",
    region: ["Norway"],
    habitat: ["Bridge"],
    synopsis: "Archetypal bridge guardian from 'The Three Billy Goats' tradition; tests those who cross.",
    earliestSource: "Asbjørnsen & Moe (1840s)",
    description: "Embodies control of passage and toll; defeat restores communal right‑of‑way.",
    size: { height: [1.8, 3.0], weight: [120, 480] },
    method: "Scaled to goats and bridge dimensions in folk illustrations.",
    methodDetail: "Height approximations from comparative readings of illustrated editions and narrative cues.",
    prologue: { text: "Where the river gnaws the banks, a troll learns the price of passage.", evidence: "speculative" },
    epilogue: { text: "Typically cast down by wit or force; echoes linger under planks and stone.", evidence: "inferred" },
    sources: ["De tre bukkene Bruse (Billy Goats Gruff), 19th‑century variants."],
    image: "/images/placeholder.svg"
  },
  {
    slug: "soria-moria-troll",
    name: "Soria Moria Castle Troll",
    type: "Species",
    region: ["Norway"],
    habitat: ["Castle"],
    synopsis: "Trolls bound to the fabled Soria Moria Castle; guardians of treasure and thresholds.",
    earliestSource: "Norske Folkeeventyr",
    description: "Fuses feudal architecture with folkloric otherness; trials of courage and wit.",
    size: { height: [2.0, 5.0], weight: [200, 1600] },
    method: "Scaled to interior arches, thrones, and stair rises in engravings.",
    methodDetail: "Doorway heights and furniture proportions inform the estimate.",
    prologue: { text: "Gold dust gathers in their palms; corridors heed their step.", evidence: "speculative" },
    epilogue: { text: "Vanquished or bargained with, they remain as carved warnings in lintels.", evidence: "inferred" },
    sources: ["Asbjørnsen & Moe, 'Soria Moria slott'."],
    image: "/images/placeholder.svg"
  }
];

export function getTrollBySlug(slug) {
  return trolls.find(t => t.slug === slug) || null;
}
