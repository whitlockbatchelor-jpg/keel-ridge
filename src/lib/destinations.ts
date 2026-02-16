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
    slug: "japanese-alps",
    name: "Japanese Alps",
    region: "Japan",
    theme: "Deep powder skiing through ancient cedar forests and hidden mountain villages",
    gradient: "from-slate via-navy to-ink",
    description: [
      "The Japanese Alps are where the world's deepest snowpack meets an almost spiritual silence. Ancient cedar forests stand sentinel over valleys where hidden villages have weathered centuries of winter, their thatched roofs bowing under meters of powder that falls with a consistency found almost nowhere else on earth. This isn't resort skiing — it's a slow, deliberate immersion into terrain that demands respect and rewards patience.",
      "Our routes thread through volcanic highlands and remote ranges, guided by locals who've skied these mountains since childhood. Between runs, the rhythm shifts: wood-fired onsen tucked into mountainsides, izakaya dinners of fresh-caught seafood, mornings that start with matcha and end with waist-deep turns through untracked glades beneath thousand-year-old trees.",
      "This is Japan at its most elemental — snow, forest, silence, warmth. Every detail is considered, every day earned. The mountain villages here are not stops on a tour. They are the experience itself.",
    ],
    guideIntro:
      "Our Japanese Alps guide grew up skiing these mountains before the rest of the world discovered them. He knows every drainage, every aspect, every tree gap worth threading — and every onsen worth soaking in after.",
  },
  {
    slug: "tajikistan",
    name: "Tajikistan",
    region: "Central Asia",
    theme: "Expedition trekking through the Pamir Mountains and the roof of the world",
    gradient: "from-[#2A3020] via-slate to-ink",
    description: [
      "The Pamir Mountains of Tajikistan are Central Asia's last great frontier — a place where the borders of China, Afghanistan, and Kyrgyzstan converge beneath peaks that exceed seven thousand meters. The Pamir Highway, one of the world's highest roads, threads through valleys where yurt camps dot alpine meadows and eagles circle overhead. This is trekking at altitude, through terrain that has changed very little in centuries.",
      "The routes here cross high passes between communities where hospitality is not a courtesy but a way of life. You share bread and tea with families who've herded livestock across these plateaus for generations, sleep in homestays where the stars feel close enough to touch, and walk through landscapes so vast they redefine your sense of scale.",
      "Tajikistan is not on most travelers' maps — and that's precisely the point. The trekking is demanding, the culture is rich, and the sense of discovery is real. This is what adventure travel felt like before the industry found it.",
    ],
    guideIntro:
      "Born in the Wakhan Valley, our Pamiri guide is a mountaineer and cultural bridge between travelers and the communities of the high plateaus. His knowledge of these mountains is generational.",
  },
  {
    slug: "marquesas",
    name: "Marquesas Islands",
    region: "French Polynesia",
    theme: "Sailing between volcanic islands at the edge of the Pacific",
    gradient: "from-[#1A2535] via-[#1B2A4A] to-ink",
    description: [
      "The Marquesas Islands rise from the Pacific like the spines of a drowned mountain range — volcanic, dramatic, and impossibly remote. Located over a thousand miles from Tahiti, these islands are among the most isolated inhabited places on earth. The sailing here is blue-water and demanding, the anchorages wild, and the landscape unlike anything else in Polynesia.",
      "Between passages, you anchor in bays where waterfalls drop from cathedral cliffs into the sea, hike to archaeological sites that predate European contact by centuries, and dive in waters where hammerheads and mantas patrol the deep. The Marquesan culture is fierce and proud — this is not the Polynesia of resort brochures.",
      "This expedition is for sailors and adventurers who want to experience the Pacific as it was before the world shrank. The passages are real, the islands are wild, and the experience is unlike anything a cruise ship could offer.",
    ],
    guideIntro:
      "Our Marquesan sailing guide has crossed the Pacific multiple times and knows these islands — their anchorages, their currents, their stories — with the intimacy of someone who has spent a lifetime among them.",
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
    slug: "baja",
    name: "Baja Peninsula",
    region: "Mexico",
    theme: "Whale watching, sea kayaking, and mountain biking from the Sea of Cortez to the Pacific",
    gradient: "from-[#1A2520] via-[#1B2A3A] to-ink",
    description: [
      "The Baja Peninsula is a thousand-mile ribbon of desert, mountain, and coastline wedged between two of the world's most productive seas. The Sea of Cortez — what Cousteau called the world's aquarium — teems with whale sharks, mobula rays, and sea lions. On the Pacific side, gray whales migrate into the warm lagoons each winter to calve and nurse, close enough to touch from a kayak.",
      "Between the coasts, the Sierra de la Laguna rises from the desert floor — a sky island of oak and pine that offers some of the most underrated mountain biking terrain in North America. The trails here are raw, the vistas endless, and the descents earn every pedal stroke of the climb.",
      "Baja is where the desert meets the sea in the most dramatic way imaginable. The guides here are fishermen, naturalists, and trail builders who know this land with the intimacy of people who've never left it.",
    ],
    guideIntro:
      "Our Baja guide is a marine biologist turned adventure operator who has spent two decades exploring the peninsula's coastlines, mountains, and hidden canyons.",
  },
  {
    slug: "azores",
    name: "Azores",
    region: "Portugal",
    theme: "Mountain biking volcanic ridgelines and sailing the mid-Atlantic",
    gradient: "from-[#1A2030] via-[#1B2A4A] to-ink",
    description: [
      "The Azores are nine volcanic islands scattered across the mid-Atlantic like stepping stones between continents. The terrain is dramatic — crater lakes nested inside collapsed calderas, ridgelines that drop into the ocean on both sides, and trails that wind through laurel forests older than Portugal itself. For mountain bikers, these islands are a revelation: technical singletrack on volcanic soil, with views that make you forget to pedal.",
      "The sailing between islands is equally compelling — moderate Atlantic passages with whales and dolphins as regular companions, anchorages in harbors where the volcanic rock glows in the afternoon light, and a seafaring culture that dates back to the Age of Exploration.",
      "The Azores sit at the crossroads of the Atlantic, and they feel like it — European in culture, volcanic in character, and wild in a way that most of Europe forgot long ago. This is adventure at the edge of the known world.",
    ],
    guideIntro:
      "Born on São Miguel, our Azorean guide is a competitive mountain biker and offshore sailor who knows every trail and every passage in the archipelago.",
  },
];
