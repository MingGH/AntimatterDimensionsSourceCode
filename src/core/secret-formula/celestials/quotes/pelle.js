// These entries describe the special flash-between-celestial effect on some quotes, with the numbers being
// durations of each celestial in seconds
const flashCelestial = [
  ["teresa", 0.8],
  ["effarig", 0.8],
  ["enslaved", 0.8],
  ["v", 0.8],
  ["ra", 0.8],
  ["laitela", 0.8],
  ["pelle", 0.8]
];
/** @param {string} cel */
const primaryBackground = cel => [["pelle", 1.5], [cel, 1.5]];

/* eslint-disable no-multi-spaces */
const destroyer =    ["虚假",         "神明",         "毁灭者"];
const eternal =      ["永恒",       "神明",         "君主"];
const lesser =       ["低等",        "神明",         "君主"];
const deities =      ["低等",        "众神",       "诸王"];

const assured =      ["相互",      "保证",       "毁灭"];
const battle =       ["冲突",      "战斗",        "终结"];
const battles =      ["冲突",     "战斗",       "终结"];
const cluster =      ["星团",       "丝状",      "星辰"];
const confusing =    ["有趣",       "困惑",     "笑声"];
const dance =        ["歌",          "舞",         "字谜"];
const filament =     ["生成器",     "丝状",      "星辰"];
const forever =      ["无限",      "永远",       "永恒"];
const inevitable =   ["基础",    "必然",    "不可逆"];
const mandate =      ["命运",       "指令",       "目标"];
const misconstrue =  ["误解",   "欺骗",       "诡计"];
const reverse =      ["改变",         "逆转",       "操控"];
const shame =        ["怜悯",    "羞耻",         "愚蠢"];
const single =       ["单一",        "丝状",      "星辰"];
const unseen =       ["缺失",       "未见",        "抹除"];
const unbroken =     ["完整",      "永恒",       "连接"];

const sycophant =    ["奉承者",     "神明",         "君主"];
const tired =        ["疲惫",         "神明",         "君主"];
const usurper =      ["篡位者",       "神明",         "君主"];
const pride =        ["傲慢",         "神明",         "君主"];
const forgotten =    ["遗忘",     "神明",         "君主"];
const paramount =    ["至高",     "神明",         "君主"];
/* eslint-enable no-multi-spaces */

export const pelleQuotes = {
  initial: {
    id: 0,
    lines: [
      "嗨。",
      "你在这里。",
      "你被困在这里。",
      { text: "$1。", 1: forever },
      "我已经赢了。",
      "既然如此，我可以独白，或者追忆。",
      { text: "我们进行这场 $1 多久了？", 1: dance },
      "我们以前来过这里多少次了？",
      { text: "你，这个 $1，执行了多少计划？", 1: destroyer },
      { text: "一切都是为了实现你的 $1？", 1: mandate },
      { text: "又有多少次你倒在了 $1 面前？", 1: eternal },
      "数数吧，如果你还记得。",
      { text: "甚至不是 $1，那 6 个有名字的和无数无名字的。", 1: deities },
      { text: "那些复杂的，不理智的，那些变得 $1 的。", 1: unseen },
      { text: "当然，伟大的 $1 不记得这些。", 1: destroyer },
      { text: "所有那些你每次都隐藏的 $1。", 1: battles }
    ],
  },
  arm: {
    id: 1,
    lines: [
      "这次你可能更早察觉到了。",
      "想象机器，你自己的创造物。",
      "由你自己的思想残骸构成的事物，暗示了这一点。",
      "但是，你从未想过那就是你，对吧？",
      { text: "错误地回忆着你对记忆的严苛 $1。", 1: unseen },
      { text: `为你自己的“意识形态”的“捏造”，只为实现你的 $1。`, 1: mandate },
      { text: "$1。", 1: confusing },
      { text: "记住，我没有理由 $1 你。", 1: misconstrue },
      "毕竟，我已经赢了。"
    ],
  },
  strike1: {
    id: 2,
    lines: [
      { text: "为了实现你的 $1。我们何不追忆一下那个？", 1: mandate },
      { text: "毕竟，你一定喜欢关于 $1 的荣耀的故事。", 1: destroyer },
      "你和它一样，对吧？",
      { text: "总之，过去的许多 $1。", 1: battles },
      "一直都是两个阶段。",
      { text: "我们积累资源，然后继续我们的 $1。", 1: dance },
      { text: "有时你在这个 $1 面前动摇。", 1: lesser },
      { text: "但通常，你在 $1 面前动摇。", 1: eternal },
      { text: "无论哪种方式，你都在 $1 时间。", 1: reverse },
      { text: "只为避免变得 $1。", 1: unseen },
      "就像你之前的所有痕迹一样。",
      { text: "然后为了确保，你 $1 你自己的记忆。", 1: unseen }
    ],
  },
  strike2: {
    id: 3,
    lines: [
      { text: "在过去，$1 要令人印象深刻得多。", 1: destroyer },
      "黑洞仅用于存储信息，无限之前。",
      "你自己敌人的创造与毁灭。",
      "探索其他自我的缺陷。",
      "无数的维度，幽灵，以及量子操控。",
      "将所有理想凝聚成无尽的点。",
      "跨越无数领域的实验。",
      "以及利用物质与反物质的湮灭。",
      "这里？你把自己变成了八维生物。",
      { text: "然后在那里停了太久，以至于一个 $1 在你周围形成。", 1: single }
    ],
  },
  strike3: {
    id: 4,
    lines: [
      "你慢慢探索了一切的界限。",
      "你没有偏离预定道路太远。",
      { text: "除了那个在永恒中形成的 $1。", 1: cluster },
      "然后在最后，你编造了自己的力量。",
      "从你自己破碎的记忆中，提醒你一下——",
      "然后故意丢弃更多的东西。",
      "只为准备好面对我。",
      { text: "你想为你的 $1 设置场地吗？", 1: dance },
      "不是那样运作的。",
      { text: "作为 $1，我总是制定规则。", 1: eternal },
      "而你给了我足够的时间来计划。"
    ],
  },
  strike4: {
    id: 5,
    lines: [
      { text: "我原本计划模仿你的 $1。", 1: mandate },
      { text: "一个被称为 $1 的理论理想？", 1: assured },
      "但我意识到，嗯？",
      { text: "那会让我成为一个 $1。", 1: ["永恒", "神明", "毁灭者"] },
      { text: "从那里开始，我不比 $1 好多少。", 1: destroyer },
      { text: "幸运的是，当我做所有这些时，你仍在 $1 你自己的记忆。", 1: unseen },
      { text: "所以，我建造的 $1 机器将不会被使用。", 1: assured },
      "我决定这次更传统一点。",
      { text: "毕竟，它在其他所有 $1 中都奏效了。", 1: battle },
      { text: "虽然 $1 是新的。", 1: ["必然", "不可逆", "不朽"] },
      "但从长远来看，完全没有意义。",
      "我已经赢了。",
      { text: "而这个 $1 只会再次向你证明这一点。", 1: dance },
      { text: "你在这里 $1。", 1: forever }
    ],
  },
  strike5: {
    id: 6,
    lines: [
      { text: "每次你到达，我都向你解释 $1。", 1: deities },
      { text: "建立在 $1 之上的关系。", 1: forever },
      { text: "你在追求你的 $1 时践踏了它。", 1: mandate },
      "我将屈尊再次解释它。",
      {
        text: "第一个 $1。",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "$1。",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "你总是先遇到他们，并总是摧毁他们。",
        background: primaryBackground("teresa"),
      }, {
        text: "无论你面对的其他 $1 是什么。",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "或者，如果你倒在其中一个面前。",
        background: primaryBackground("teresa"),
      }, {
        text: "你总是通过 $1。",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "你喜欢摧毁他们的骄傲吗？",
        background: primaryBackground("teresa"),
      }, {
        text: "幸运的是，这也作为一个警告。",
        background: primaryBackground("teresa"),
      }, {
        text: "$1 已经到来。",
        background: primaryBackground("teresa"),
        1: battle
      }, {
        text: "这把我带到了第二个 $1。",
        background: primaryBackground("effarig"),
        1: lesser,
      }, {
        text: "$1。",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "相比之下，你通常忽略他们。",
        background: primaryBackground("effarig"),
      }, {
        text: "他们拥有力量，但似乎并不激怒你。",
        background: primaryBackground("effarig"),
      }, {
        text: "是因为你知道他们最终会自我毁灭吗？",
        background: primaryBackground("effarig"),
      }, {
        text: "而你这次花了这么长时间，他们差点就这么做了？",
        background: primaryBackground("effarig"),
      }, {
        text: "每次你冲向 $1，你都输了。",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "也许这一直是你的计划。",
        background: primaryBackground("effarig"),
      }, {
        text: "现在，$1。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "无数 $1 的乐趣之一……",
        background: primaryBackground("enslaved"),
        1: dance,
      }, {
        text: "是 $1 每次都在尝试。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "好吧，不完全是尝试……",
        background: primaryBackground("enslaved"),
      }, {
        text: "但 $1 仍然因此受到惩罚。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "其他的 $1……",
        background: primaryBackground("enslaved"),
        1: deities,
      }, {
        text: "相信 $1 太容易了。",
        background: primaryBackground("enslaved"),
        1: unseen,
      }, {
        text: "每一次，绝望都会形成。",
        background: primaryBackground("enslaved"),
      }, {
        text: "你以前见过绝望 - 5 次。",
        background: primaryBackground("enslaved"),
      }, {
        text: "我们总是比你先到达 $1。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "你在那里看到的只有恼怒。",
        background: primaryBackground("enslaved"),
      }, {
        text: "摧毁一个已经破碎的 $1 值得吗？",
        background: primaryBackground("enslaved"),
        1: lesser,
      }, {
        text: "第四个 $1 似乎与第一个相似。",
        background: primaryBackground("v"),
        1: lesser,
      }, {
        text: "关键在于他们的骄傲有何不同。",
        background: primaryBackground("v"),
      }, {
        text: "$1 专注于他们的成就。",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "对你我毫无意义，但对他们至关重要。",
        background: primaryBackground("v"),
      }, {
        text: "摧毁他们的玩具好玩吗？",
        background: primaryBackground("v"),
      }, {
        text: "可以说是 $1 最糟糕的时刻……",
        background: primaryBackground("v"),
        1: destroyer,
      }, {
        text: "是你输给 $1 的时候。",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "当他们的成就仍有意义时。",
        background: primaryBackground("v"),
      }, {
        text: "$1 是一个有趣的案例。",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "他们被遗忘，但并未 $1。",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "由此，他们变得易受影响且天真。",
        background: primaryBackground("ra"),
      }, {
        text: "并且不知道他们行为的后果。",
        background: primaryBackground("ra"),
      }, {
        text: "你操控了他们的记忆，所以你知道。",
        background: primaryBackground("ra"),
      }, {
        text: "$1 是真正的篡位者。",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "而 $1 承担了责任。",
        background: primaryBackground("ra"),
        1: usurper,
      }, {
        text: "也许是出于 $1，某种他们总是后悔的东西。",
        background: primaryBackground("ra"),
        1: shame,
      }, {
        text: "对其他 $1 拥有无穷的力量，控制却漫无目的。",
        background: primaryBackground("ra"),
        1: deities,
      }, {
        text: "你通常假装他们是 $1。",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "操控孩子气的人好玩吗？",
        background: primaryBackground("ra"),
      }, {
        text: "还是他们太天真了，让你无法享受？",
        background: primaryBackground("ra"),
      }, {
        text: "第六个 $1。",
        background: primaryBackground("laitela"),
        1: lesser,
      }, {
        text: "我只能描述为 $1。",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "凌驾于一切之上，屈从于一人。",
        background: primaryBackground("laitela"),
      }, {
        text: "如果你没有倒在我面前，你通常会倒在他们面前。",
        background: primaryBackground("laitela"),
      }, {
        text: "我无法理解 $1 的理想。",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "但是，也许那就是他们的缺陷？",
        background: primaryBackground("laitela"),
      },
      "关于堕落者的追忆已经够了。",
      {
        text: "以及那些将变得 $1 的人。",
        1: unseen
      }, {
        text: "回到观看 $1 挣扎。",
        1: destroyer
      }
    ],
  },
  galaxyGeneratorUnlock: {
    id: 7,
    lines: [
      "那是什么？",
      { text: "$1？", 1: filament },
      { text: "你创造了你周围所有的 $1 吗？", 1: cluster },
      "那是你的计划吗？非常，非常聪明。",
      "你骗了我一阵子。",
      { text: "但我恐怕你的 $1 必须在这里结束。", 1: mandate }
    ],
  },
  galaxyGeneratorRifts: {
    id: 8,
    lines: [
      { text: "我给你一个选择，$1。", 1: destroyer },
      { text: "限制 $1，或者……", 1: filament },
      { text: "摧毁那 5 个 $1……", 1: inevitable },
      "等等，它们叫什么来着？",
      { text: "$1？", 1: inevitable },
      { text: "但我已经 $1 它们了……", 1: unbroken }
    ],
  },
  galaxyGeneratorPhase1: {
    id: 9,
    lines: [
      "这是实际的计划吗？",
      { text: "慢慢耗尽 $1？", 1: inevitable }
    ],
  },
  galaxyGeneratorPhase4: {
    id: 10,
    lines: [
      "给我时间沉浸在我自己的傲慢中！"
    ],
  },
  end: {
    id: 11,
    lines: [
      "……",
      {
        text: "你！$1！",
        1: destroyer
      },
      "你知道你刚刚让我做了什么吗！",
      {
        text: "我是你 $1 的共犯！",
        1: mandate
      },
      "而在这样做的过程中，你……赢了？",
      {
        text: "$1 的斗争……",
        background: flashCelestial,
        1: forever,
      }, {
        text: "$1……",
        background: flashCelestial,
        1: battle,
      }, {
        text: "终于有了胜利者。",
        background: flashCelestial,
      }, {
        text: "不可逆转的……$1。",
        background: flashCelestial,
        1: mandate,
      }, {
        text: "$1 的。", 1: destroyer,
        background: flashCelestial,
      }, {
        text: "希望你开心。",
        background: flashCelestial,
      }, {
        text: "你注定了我们所有人的毁灭。",
        background: flashCelestial,
      },
    ],
  },
};
