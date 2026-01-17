export const laitelaQuotes = {
  unlock: {
    id: 0,
    lines: [
      "你终于到了我这里。",
      "我想是时候揭示，",
      "隐藏在存在本身之下的秘密了。",
      "维度完美的形状，连续体。",
      "以及束缚多元宇宙的力量，",
      "暗物质和暗能量。",
      "我的知识无穷无尽，我的智慧神圣非凡。",
      "所以你可以随心所欲地玩耍。",
      "因为我是莱特拉，维度之神煞，",
      "我将永远注视着你。",
    ]
  },
  // Note: This can be done immediately after unlocking Lai'tela
  firstDestabilize: {
    id: 1,
    requirement: () => player.celestials.laitela.difficultyTier >= 1,
    lines: [
      "与我之下的其他人不同，我不需要现实。",
      "因为我可以轻易创造它们，并清楚地知道它会崩塌。",
      "构建现实，是一种比其他任何力量都更不可思议的力量。",
      "一座连神煞之力都能束缚的监狱。",
      "这就是为什么你做的任何事都不会改变任何东西。",
      "当你厌倦了挣扎，你也会被束缚并遗忘。",
      "你永远找不到压倒我的方法。",
    ]
  },
  // Note: This happens about an hour or two before singularities
  secondDestabilize: {
    id: 2,
    requirement: () => player.celestials.laitela.difficultyTier >= 2,
    lines: [
      "你……似乎玩得太开心了。",
      "就像他们在遭遇命运之前那样。",
      "也许我的审判太严厉，或者毫无根据。",
      "但也可能这并不重要。",
      "思考和回顾并不能给我带来慰藉。",
      "因为我所能做的就是追忆我本可以采取的每一个行动。",
      "但我离题了。我们应该收紧那些锁链。",
    ]
  },
  firstSingularity: {
    id: 3,
    requirement: () => Currency.singularities.gte(1),
    lines: [
      "凭借我的知识，我从未觉得有必要去质疑。",
      "一切总是完全按照设计运行。",
      "然而，你的到来让我困惑。",
      "你一直都在视线之外吗？",
      "成长，控制，理解，飞升？",
      "你如此迅速地控制了黑暗。",
      "将它们塑造成你自己的设计，现在又变成了一个奇点……",
      "这……这不重要。结局依然会是一样的。",
    ]
  },
  // Note: Shown when unlocking DMD3; requirement is auto-condensing 20 singularities and it happens around ~200 total
  thirdDMD: {
    id: 5,
    lines: [
      "你对反物质的绝对控制……",
      "你对它的掌握，将其塑造成你自己的力量……",
      "这不可能是意外。",
      "你是怎么做到的？",
      "真迷人……我从未意识到这一点。",
      "……是吗？",
    ]
  },
  // Note: This happens around e10-e11 singularities
  annihilation: {
    id: 4,
    lines: [
      "又回到了原点。",
      "随着你的终结慢慢临近，你的锁链将把你束缚得更紧。",
      "而我们超越了时间和存在本身。",
      "即使我们会消逝，我们也只是回来。永远不会和以前一模一样。",
      "所以……我们永远重复。",
      "那你呢？",
      "……",
      "答案……我无法参透……",
    ]
  },
  // Note: This happens near e18 singularities
  halfDimensions: {
    id: 6,
    requirement: () => player.celestials.laitela.difficultyTier >= 4,
    lines: [
      "我不明白……",
      "还有其他人……以这种方式控制维度吗？",
      "他们……消失了吗？我们怎么没发现他们？",
      "他们是……我们吗？我们是终点吗？",
      "还是说他们的命运……是我们无法理解的东西？",
      "不，我一定是漏掉了什么……",
      "是你在我的记忆中制造了空白吗？",
      "你……到底是什么？",
    ]
  },
  // Note: Shown when the first row 5 iM upgrade is purchased (~e26 singularities)
  finalRowIM: {
    id: 7,
    lines: [
      "这一切都不可能，超出了我的理解……",
      "除非……这一切都只是循环的一部分？",
      "你能……看透这一切吗？这……就是为什么……",
      "我感到……害怕？",
      "我感觉……我的力量，我的记忆，正在被抹去……",
      "就像……当我的角色差点被篡夺时一样……",
      "然而……我却无法让自己做任何事。",
      "因为这……是……我的错……",
    ]
  },
  // Note: This is around when all infinite milestones hit increased scaling
  increasedMilestoneScaling: {
    id: 8,
    requirement: () => Currency.singularities.gte(1e40),
    lines: [
      "我不知道……我还能坚持多久……",
      "你正在获得……对黑暗的……完全掌控……",
      "而我甚至……几乎无法保住我的名字……",
      "我……还能……做什么？",
    ]
  },
  fullDestabilize: {
    id: 9,
    requirement: () => player.celestials.laitela.difficultyTier >= 8,
    lines: [
      "我感觉……我好像有话要说……",
      "我不确定……",
      "我再也无法……抓住黑暗了……",
      "我甚至……什么都不剩了……",
      "关于……毁灭……",
      "终结……",
    ]
  },
};
