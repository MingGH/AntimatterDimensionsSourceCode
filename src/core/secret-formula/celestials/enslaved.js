export const enslaved = {
  // These entries will be unlocked in no particular order
  progress: {
    hintsUnlocked: {
      id: 0,
      hint: "无名者想要帮忙，但帮忙需要一些时间。",
      condition: () => `在现实中花费超过 ${formatInt(5)} 实际小时而未完成；
        现实外的时间计为 ${formatPercents(0.4)}。计时器一旦
        现实解锁就开始，并持续累积。`,
    },
    ec1: {
      id: 1,
      hint: "奇怪，自动永恒挑战特权似乎无法正常工作。",
      condition: () => `一次获得超过 ${formatInt(5)} 次永恒挑战 1 的完成次数`,
    },
    feelEternity: {
      id: 2,
      hint: "无限在这个现实中似乎比平时更破碎，但这还能修复吗？",
      condition: "尝试修复无限，但找到了并点击了“感受永恒”按钮",
    },
    ec6: {
      id: 3,
      hint: `有些挑战更难，但作为交换也会提升某些东西。我想知道这里是否有一个挑战
        比平时严格更好。`,
      condition: () => `在完成永恒挑战 6 ${formatInt(5)} 次后再次进入，
        以利用其更便宜的复制器星系`,
    },
    c10: {
      id: 4,
      hint: "有没有办法在没有第 8 反物质维度的情况下获得反物质星系？",
      condition: "使用挑战 10 在拥有第 6 反物质维度的情况下获得超过一个反物质星系",
    },
    secretStudy: {
      id: 5,
      hint: "时间研究 12？那是什么？",
      condition: () => `点击秘密时间研究并获得额外 ${formatInt(100)} 时间定理`,
    },
    storedTime: {
      id: 6,
      hint: "如果你等待足够长的时间，这个现实的某些部分似乎会受到侵蚀。",
      condition: "释放以在这个现实中拥有超过一年的游戏时间",
    },
    challengeCombo: {
      id: 7,
      hint: "我能不能用一个挑战来绕过另一个挑战的限制？",
      condition: "在已经在永恒挑战 6 中时进入挑战 10",
    },
  },
  // These get unlocked sequentially
  glyphHints: [
    "无限和膨胀符文似乎被限制得太紧，根本没用。",
    "力量和时间符文在这里特别强大。",
    `埃法利希符文只有在拥有正确效果时才有用，但你可以在没有它的情况下完成现实。
      复制符文非常有帮助，但它并不是绝对必要的，也不如
      力量和时间符文那么强大。`
  ]
};
