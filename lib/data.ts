
export type TrollItem = {
  slug: string; name: string; type: "Species" | "Named"; region: string[]; habitat: string[]; synopsis: string; image?: string; earliestSource?: string;
  scholarlyDescription?: string;
  prologue?: { text: string; evidence: "attested" | "inferred" | "speculative" };
  epilogue?: { text: string; evidence: "attested" | "inferred" | "speculative" };
  size?: { heightRangeM?: [number, number]; weightRangeKg?: [number, number]; methodSummary?: string; methodDetail?: string; };
  sources?: { citation?: string; page?: string; quoteOriginal?: string; quoteTranslation?: string; }[];
};

export const speciesTypes = ["Species","Named"];
export const regions = ["Norway","Iceland","Sweden","Denmark"];
export const habitats = ["Bridge","Mountain","Castle","Forest"];

export const trolls: TrollItem[] = [
  { slug: "dovregubben", name: "Dovregubben (King of the Dovre Hall)", type: "Named", region: ["Norway"], habitat: ["Mountain","Castle"],
    synopsis: "Ruler of the subterranean halls beneath the Dovre mountains; appears in Asbjørnsen & Moe traditions and later cultural adaptations.",
    earliestSource: "Norske Folkeeventyr (Asbjørnsen & Moe)",
    scholarlyDescription: "Often conceptualized as a chthonic sovereign of mountain halls, Dovregubben embodies motifs of subterranean wealth, threat to travelers, and negotiated passage. Later cultural renderings amplify regal attributes while maintaining folkloric ferocity.",
    prologue: { text: "Born of stone-marrow and deep echo, Dovregubben gathered courts beneath Dovre where the earth sweats ore.", evidence: "speculative" },
    epilogue: { text: "In some tales his court slumbers under loads of granite; in others, they are dispersed by church bells and sunlight.", evidence: "inferred" },
    size: { heightRangeM: [3.5,6], weightRangeKg: [800,2500], methodSummary: "Scaled from human figures in 19th‑c. illustrations and tale descriptions.", methodDetail: "Range derives from proportional analysis of canonical engravings versus known objects and textual superlatives." },
    sources: [{ citation: "Asbjørnsen & Moe, Norske Folkeeventyr", page: "various" }], image: "/images/placeholder.svg"
  },
  { slug: "bridge-troll", name: "Bridge Troll", type: "Species", region: ["Norway"], habitat: ["Bridge"],
    synopsis: "Archetypal bridge‑dwelling troll known from variants of “The Three Billy Goats Gruff,” threatening passage until overcome by cunning or force.",
    earliestSource: "Asbjørnsen & Moe (1840s editions)",
    scholarlyDescription: "Bridge trolls dramatize territorial control and toll‑taking across fords and spans. They function as liminal guardians whose defeat reasserts communal right‑of‑way.",
    prologue: { text: "Where the river gnaws the banks, a troll learns the price of passage.", evidence: "speculative" },
    epilogue: { text: "Most versions end with the troll cast down or scattered; variants preserve a cautionary echo beneath planks and stone.", evidence: "inferred" },
    size: { heightRangeM: [1.8,3], weightRangeKg: [120,480], methodSummary: "Scaled to goats and bridge dimensions in tale variants.", methodDetail: "Height from illustrated editions and narrative cues." },
    sources: [{ citation: "De tre bukkene Bruse (Billy Goats Gruff)", page: "passim" }], image: "/images/placeholder.svg"
  },
  { slug: "troll-hag-dovre", name: "Troll‑Hag of Dovre Mountain", type: "Named", region: ["Norway"], habitat: ["Mountain"],
    synopsis: "A fearsome hag‑troll linked to Dovre traditions; often portrayed with giant size, iron claws, and a taste for livestock.",
    earliestSource: "Regional folktale collections (19th c.)",
    scholarlyDescription: "Hag‑troll figures emphasize predation and threshold violation. Their iron features and enormity code the inhuman while retaining domestic proximity.",
    prologue: { text: "She learned storms from the lee of Dovre and counted flocks by the taste of their breath.", evidence: "speculative" },
    epilogue: { text: "Stories diverge: some freeze her at dawn, others drive her to the high stone wastes.", evidence: "inferred" },
    size: { heightRangeM: [2.5,4.5], weightRangeKg: [300,1000], methodSummary: "Comparative scale from livestock predation tales.", methodDetail: "Scaled from cow/ox references and barn-door clearances." },
    sources: [{ citation: "Norwegian regional folktales", page: "various" }], image: "/images/placeholder.svg"
  },
  { slug: "soria-moria-troll", name: "Soria Moria Castle Troll", type: "Species", region: ["Norway"], habitat: ["Castle"],
    synopsis: "Trolls associated with the fabled Soria Moria Castle; treasure guardians and opponents in heroic quests.",
    earliestSource: "Norske Folkeeventyr",
    scholarlyDescription: "Castle‑linked trolls fuse feudal imagery with folkloric otherness, turning treasure and architecture into tests of bravery and wit.",
    prologue: { text: "Gold dust gathers in the lines of their palms; the halls answer to their tread.", evidence: "speculative" },
    epilogue: { text: "Vanquished or bargained with, they linger as warnings carved into lintels.", evidence: "inferred" },
    size: { heightRangeM: [2,5], weightRangeKg: [200,1600], methodSummary: "Scaled to interior architecture in illustrations and tales.", methodDetail: "Doorway heights and throne proportions anchor the range." },
    sources: [{ citation: "Asbjørnsen & Moe, 'Soria Moria slott'", page: "various" }], image: "/images/placeholder.svg"
  }
];
