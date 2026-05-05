export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  theme: string;
  gradient: string;
  image: string;
  heroImage?: string;
  gallery?: GalleryImage[];
  description: string[];
  guideIntro: string;
}

export const destinations: Destination[] = [
  {
    slug: "japanese-alps",
    name: "Japanese Alps",
    region: "Japan",
    theme: "Deep powder skiing through ancient cedar forests and hidden mountain villages",
    gradient: "from-slate via-navy to-ink",
    image: "/images/destinations/japanese-alps-hero.jpg",
    heroImage: "/images/destinations/japan/bootpack-lone-tree-whiteout.jpg",
    gallery: [
      { src: "/images/destinations/japanese-alps-hero.jpg", alt: "Tree skiing through deep powder in the Japanese Alps" },
      { src: "/images/destinations/japan/bootpack-lone-tree-whiteout.jpg", alt: "Bootpacking through whiteout with a lone tree" },
      { src: "/images/destinations/japan/powder-turn-trees.jpg", alt: "Powder turns through Japanese cedar forest" },
      { src: "/images/destinations/japan/skin-track-snow-forest-shadows.jpg", alt: "Skin track through snow-covered forest" },
      { src: "/images/destinations/japan/village-street-night-snow.jpg", alt: "Snow-covered village street at night" },
    ],
    description: [
      "The Japanese Alps are where the world's deepest snowpack meets an almost spiritual silence. Ancient cedar forests stand sentinel over valleys where hidden villages have weathered centuries of winter, their thatched roofs bowing under meters of powder that falls with a consistency found almost nowhere else on earth. This isn't resort skiing — it's a slow, deliberate immersion into terrain that demands respect and rewards patience.",
      "Our routes thread through volcanic highlands and remote ranges, guided by locals who've skied these mountains since childhood. Between runs, the rhythm shifts: wood-fired onsen tucked into mountainsides, izakaya dinners of fresh-caught seafood, mornings that start with matcha and end with waist-deep turns through untracked glades beneath thousand-year-old trees.",
      "This is Japan at its most elemental — snow, forest, silence, warmth. Every detail is considered, every day earned. The mountain villages here are not stops on a tour. They are the experience itself.",
    ],
    guideIntro:
      "Our Japanese Alps guide grew up skiing these mountains before the rest of the world discovered them. He knows every drainage, every aspect, every tree gap worth threading — and every onsen worth soaking in after.",
  },
  {
    slug: "european-alps",
    name: "European Alps",
    region: "South Tyrol",
    theme: "Hut to hut through South Tyrol — six days, four strangers, weather that decides the day",
    gradient: "from-slate via-[#1B2A4A] to-ink",
    image: "/images/destinations/european-alps-v2.jpg",
    description: [
      "Hut to hut through South Tyrol. Six days, four strangers, one mountain we didn't summit and were right not to. The rifugios are run by families who've been here for generations. The breakfast is terrible. Everything else is not.",
    ],
    guideIntro:
      "South Tyrol guides who have skied these huts since they were children. They set the pace and read the weather. We follow.",
  },
  {
    slug: "new-zealand",
    name: "Southern Alps",
    region: "New Zealand",
    theme: "Heli-ski mountaineering in pristine alpine terrain",
    gradient: "from-[#1A2535] via-navy to-ink",
    image: "/images/destinations/new-zealand-hero.jpg",
    heroImage: "/images/destinations/new-zealand/heli-pickup-snow-spray.jpg",
    gallery: [
      { src: "/images/destinations/new-zealand-hero.jpg", alt: "Turquoise alpine lake at sunset from the air" },
      { src: "/images/destinations/new-zealand/heli-pickup-snow-spray.jpg", alt: "Helicopter pickup on steep snow with spray" },
      { src: "/images/destinations/new-zealand/alpine-lake-mt-cook-aerial.jpg", alt: "Glacial lake with Mt Cook from the air" },
      { src: "/images/destinations/new-zealand/two-skiers-summit-southern-alps.jpg", alt: "Two skiers on summit with Southern Alps backdrop" },
      { src: "/images/destinations/new-zealand/lodge-bed-mountain-view.jpg", alt: "Lodge at blue hour with mountain views" },
      { src: "/images/destinations/new-zealand/lodge-picnic-table-mountains.jpg", alt: "Lodge dining with mountain panorama" },
    ],
    description: [
      "New Zealand's Southern Alps are a mountaineer's proving ground — raw, glaciated, and staggeringly beautiful. The ski mountaineering here combines helicopter access with serious alpine terrain: couloirs that drop from ridgeline to valley floor, glaciers that require roped travel, and descents measured in thousands of vertical feet.",
      "What sets New Zealand apart is the scale and the emptiness. On a given day, your tracks may be the only ones on the entire mountain. The weather is maritime and demanding, the snowpack complex, and the reward immense — long, sustained descents through terrain that feels truly wild.",
      "Based from remote lodges, each day is shaped by conditions, ambition, and the deep expertise of guides who've spent decades reading these mountains.",
    ],
    guideIntro:
      "A certified IFMGA guide and lifelong Southern Alps climber, our New Zealand guide has made first descents on peaks most people have never heard of.",
  },
  {
    slug: "alaska",
    name: "Alaska",
    region: "Chugach Range",
    theme: "Vertical from the water's edge — Valdez and the Chugach",
    gradient: "from-[#0D1A2A] via-slate to-ink",
    image: "/images/destinations/british-columbia.jpg",
    description: [
      "It starts and ends in Valdez. A working fishing port with no pretense and no reason for any. The peaks rise directly from sea level — no approach, no warmup, just vertical from the water's edge. The Chugach snowpack is one of the most stable in the world, which is the only reassuring thing about it. The weather is coastal and unpredictable and doesn't negotiate. You come here because the skiing is unlike anything else on earth.",
    ],
    guideIntro:
      "Operators in Valdez who have built their lives around the Chugach. They know which slopes are stable when, which weather windows are real, and when to wait.",
  },
  {
    slug: "british-columbia",
    name: "British Columbia",
    region: "Skeena Range",
    theme: "Off-grid in the Skeena Range — where Stone sheep outnumber people",
    gradient: "from-[#152030] via-navy to-ink",
    image: "/images/destinations/alaska.jpg",
    description: [
      "Two hours north of Vancouver by small plane. Four hours by bus after that. The Skeena Range sits off grid in a way that the word off grid doesn't quite capture — white peaks as far as you can see in every direction. The only other inhabitants are the local Stone sheep, protected and unbothered, moving through terrain they've understood longer than we have. Bluebird days. Light snow. The kind of place that recalibrates something in you that you didn't know needed recalibrating.",
    ],
    guideIntro:
      "Locals in the Skeena Range, third generation in the territory, who have lived and skied this terrain for as long as it has been theirs.",
  },
  {
    slug: "baja",
    name: "Baja Peninsula",
    region: "Mexico",
    theme: "Whale watching, sea kayaking, and mountain biking from the Sea of Cortez to the Pacific",
    gradient: "from-[#1A2520] via-[#1B2A3A] to-ink",
    image: "/images/destinations/baja-hero.jpg",
    heroImage: "/images/destinations/baja/panga-boat-rocky-coast.jpg",
    gallery: [
      { src: "/images/destinations/baja-hero.jpg", alt: "Infinity pool with tipi and canoe at dusk" },
      { src: "/images/destinations/baja/panga-boat-rocky-coast.jpg", alt: "Panga boat approaching rocky headland" },
      { src: "/images/destinations/baja/resort-pool-sunset-wide.jpg", alt: "Resort pool with ocean sunset" },
      { src: "/images/destinations/baja/snorkel-boat-clear-water.jpg", alt: "Snorkel boat in crystal clear water" },
      { src: "/images/destinations/baja/pool-tipi-sunset-wide.jpg", alt: "Pool and tipi at golden hour" },
    ],
    description: [
      "The Baja Peninsula is a thousand-mile ribbon of desert, mountain, and coastline wedged between two of the world's most productive seas. The Sea of Cortez — what Cousteau called the world's aquarium — teems with whale sharks, mobula rays, and sea lions. On the Pacific side, gray whales migrate into the warm lagoons each winter to calve and nurse, close enough to touch from a kayak.",
      "Between the coasts, the Sierra de la Laguna rises from the desert floor — a sky island of oak and pine that offers some of the most underrated mountain biking terrain in North America. The trails here are raw, the vistas endless, and the descents earn every pedal stroke of the climb.",
      "Baja is where the desert meets the sea in the most dramatic way imaginable. The guides here are fishermen, naturalists, and trail builders who know this land with the intimacy of people who've never left it.",
    ],
    guideIntro:
      "Our Baja guide is a marine biologist turned adventure operator who has spent two decades exploring the peninsula's coastlines, mountains, and hidden canyons.",
  },
  {
    slug: "cordillera-darwin",
    name: "Cordillera Darwin",
    region: "Chile",
    theme: "Expedition sailing and ski mountaineering in the last wilderness",
    gradient: "from-[#0D1520] via-[#1A2535] to-ink",
    image: "/images/destinations/cordillera-darwin-hero.jpg",
    heroImage: "/images/destinations/cordillera-darwin/glacial-fjord-approach.jpg",
    gallery: [
      { src: "/images/destinations/cordillera-darwin-hero.jpg", alt: "Cordillera Darwin peaks rising from the Beagle Channel" },
      { src: "/images/destinations/cordillera-darwin/glacial-fjord-approach.jpg", alt: "Approaching a glacial fjord by expedition yacht" },
      { src: "/images/destinations/cordillera-darwin/snow-ridge-sunset.jpg", alt: "Snow ridge glowing at sunset over Patagonia" },
      { src: "/images/destinations/cordillera-darwin/beagle-channel-mountains.jpg", alt: "Mountains lining the Beagle Channel under clearing skies" },
      { src: "/images/destinations/cordillera-darwin/sun-over-glacier.jpg", alt: "Sun breaking over a glacier in the Darwin Range" },
      { src: "/images/destinations/cordillera-darwin/patagonia-granite-peaks.jpg", alt: "Granite peaks of southern Patagonia" },
      { src: "/images/destinations/cordillera-darwin/mountain-lake-reflection.jpg", alt: "Mountain lake reflecting surrounding peaks" },
      { src: "/images/destinations/cordillera-darwin/glacial-valley-overview.jpg", alt: "Glacial valley stretching toward the sea" },
      { src: "/images/destinations/cordillera-darwin/snow-covered-range.jpg", alt: "Snow-covered range from summit vantage point" },
      { src: "/images/destinations/cordillera-darwin/calving-glacier-ice.jpg", alt: "Calving glacier dropping ice into the fjord" },
      { src: "/images/destinations/cordillera-darwin/steep-couloir-descent.jpg", alt: "Steep couloir descent through untouched snow" },
      { src: "/images/destinations/cordillera-darwin/expedition-yacht-fjord.jpg", alt: "Expedition yacht anchored in an unnamed fjord" },
    ],
    description: [
      "The Cordillera Darwin is one of the last truly wild mountain ranges on earth. Located at the southern tip of Patagonia, these peaks rise directly from the Beagle Channel — a place where glaciers calve into fjords, where weather systems from the Southern Ocean slam into granite walls, and where almost no one goes.",
      "This expedition combines ocean sailing with ski mountaineering: we approach by boat through channels Magellan and Darwin once navigated, anchor in unnamed fjords, and skin up glaciers to ski lines that may never have been touched. It is raw, demanding, and genuinely exploratory.",
      "This is not a trip for everyone. It requires fitness, patience, comfort with uncertainty, and the kind of appetite for real adventure that can't be faked. For those who are ready, it may be the most extraordinary thing you've ever done.",
    ],
    guideIntro:
      "Our Chilean expedition leader has spent twenty years guiding in Patagonia's most remote ranges. He knows these waters, these glaciers, and these mountains like no one else.",
  },
];
