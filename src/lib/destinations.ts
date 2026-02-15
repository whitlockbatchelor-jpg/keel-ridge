export interface Destination {
  slug: string;
  name: string;
  region: string;
  theme: string;
  gradient: string;
  description: string[];
  guideIntro: string;
}

export const destinations: Destination[] = [
  {
    slug: "hokkaido",
    name: "Hokkaido Backcountry",
    region: "Japan",
    theme: "Deep powder skiing through ancient birch forests",
    gradient: "from-slate via-navy to-ink",
    description: [
      "Hokkaido is where Japan's deepest snowpack meets an almost spiritual silence. The birch forests here are centuries old, their pale trunks standing like sentinels in chest-deep powder that falls with a consistency found almost nowhere else on earth. This isn't resort skiing — it's a slow, deliberate immersion into terrain that demands respect and rewards patience.",
      "Our routes thread through volcanic highlands and coastal ranges, guided by locals who've skied these mountains since childhood. Between runs, the rhythm shifts: wood-fired onsen, izakaya dinners of fresh-caught seafood, mornings that start with matcha and end with waist-deep turns through untracked glades.",
      "This is Japan at its most elemental — snow, forest, silence, warmth. Every detail is considered, every day earned.",
    ],
    guideIntro:
      "Our Hokkaido guide grew up skiing the mountains above Niseko before it had a name. He knows every drainage, every aspect, every tree gap worth threading.",
  },
  {
    slug: "georgia",
    name: "Georgian Highlands",
    region: "Caucasus",
    theme: "Mountain trekking through medieval tower villages",
    gradient: "from-[#2A3020] via-slate to-ink",
    description: [
      "The Caucasus Mountains of Georgia are Europe's last great frontier. Svaneti's medieval tower villages rise from valleys that have been continuously inhabited for five thousand years, guarded by peaks that rival the Alps but see a fraction of the foot traffic. The trails here cross high passes between communities where traditions remain unbroken.",
      "Trekking in Georgia isn't just physical — it's a negotiation with deep time. You walk through villages where the architecture predates most European nations, share meals with families who've farmed these slopes for generations, and sleep beneath peaks that early cartographers considered the edge of the known world.",
      "The hospitality is legendary, the terrain is demanding, and the sense of discovery is real. This is not a place the travel industry has polished smooth.",
    ],
    guideIntro:
      "Born in Mestia, our Svan guide is a mountaineer, historian, and keeper of local tradition. His family has lived in the tower villages for more generations than anyone can count.",
  },
  {
    slug: "new-zealand",
    name: "Southern Alps",
    region: "New Zealand",
    theme: "Heli-ski mountaineering in pristine alpine terrain",
    gradient: "from-[#1A2535] via-navy to-ink",
    description: [
      "New Zealand's Southern Alps are a mountaineer's proving ground — raw, glaciated, and staggeringly beautiful. The ski mountaineering here combines helicopter access with serious alpine terrain: couloirs that drop from ridgeline to valley floor, glaciers that require roped travel, and descents measured in thousands of vertical feet.",
      "What sets New Zealand apart is the scale and the emptiness. On a given day, your tracks may be the only ones on the entire mountain. The weather is maritime and demanding, the snowpack complex, and the reward immense — long, sustained descents through terrain that feels truly wild.",
      "Based from remote lodges, each day is shaped by conditions, ambition, and the deep expertise of guides who've spent decades reading these mountains.",
    ],
    guideIntro:
      "A certified IFMGA guide and lifelong Southern Alps climber, our New Zealand guide has made first descents on peaks most people have never heard of.",
  },
  {
    slug: "cordillera-darwin",
    name: "Cordillera Darwin",
    region: "Chile",
    theme: "Expedition sailing and ski mountaineering in the last wilderness",
    gradient: "from-[#0D1520] via-[#1A2535] to-ink",
    description: [
      "The Cordillera Darwin is one of the last truly wild mountain ranges on earth. Located at the southern tip of Patagonia, these peaks rise directly from the Beagle Channel — a place where glaciers calve into fjords, where weather systems from the Southern Ocean slam into granite walls, and where almost no one goes.",
      "This expedition combines ocean sailing with ski mountaineering: we approach by boat through channels Magellan and Darwin once navigated, anchor in unnamed fjords, and skin up glaciers to ski lines that may never have been touched. It is raw, demanding, and genuinely exploratory.",
      "This is not a trip for everyone. It requires fitness, patience, comfort with uncertainty, and the kind of appetite for real adventure that can't be faked. For those who are ready, it may be the most extraordinary thing you've ever done.",
    ],
    guideIntro:
      "Our Chilean expedition leader has spent twenty years guiding in Patagonia's most remote ranges. He knows these waters, these glaciers, and these mountains like no one else.",
  },
  {
    slug: "british-columbia",
    name: "Northern British Columbia",
    region: "Canada",
    theme: "Backcountry ski touring in old-growth forests",
    gradient: "from-[#1A2520] via-[#1B2A3A] to-ink",
    description: [
      "Northern BC is Canada's backcountry at its most vast and untouched. The terrain here ranges from old-growth cedar forests to alpine bowls above treeline, connected by touring routes that see almost no traffic. The snowpack is deep, the days are long, and the silence is total.",
      "We access remote lodges and huts by helicopter or snowmobile, then spend days touring — skinning through ancient forests, climbing to ridgelines with views that stretch to the Pacific, and skiing descents through terrain that has barely been mapped, let alone tracked out.",
      "This is the Canadian backcountry as it existed before the crowds found it. The guides here are locals who've spent their lives in these mountains, and they bring an intimacy with the terrain that no amount of guidebook research can replace.",
    ],
    guideIntro:
      "Raised in the Skeena Valley, our BC guide is a certified mountain guide who has been exploring the northern ranges since before there were trail maps.",
  },
];
