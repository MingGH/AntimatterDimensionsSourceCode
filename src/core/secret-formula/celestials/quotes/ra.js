export const raQuotes = {
  unlock: {
    id: 0,
    lines: [
      "一……位访客？",
      "我在这里！我就是你要找的那个……我想……",
      "我又是什么来着？",
      "哦对了，记忆之神煞。",
    ]
  },
  realityEnter: {
    id: 1,
    lines: [
      "我好久没见过其他人了……",
      "你能帮我记住他们吗？",
      "作为交换，我可以给你力量。",
    ]
  },
  teresaStart: {
    id: 2,
    requirement: () => Ra.pets.teresa.level >= 2,
    lines: [
      "特……蕾……莎……",
      "我想我记得。",
    ]
  },
  teresaLate: {
    id: 3,
    requirement: () => Ra.pets.teresa.level >= 15,
    lines: [
      "我相信特蕾莎是和机器打交道的。",
      "我记得去过几次特蕾莎的店。",
      "等等，别人也有店，对吧？",
    ]
  },
  effarigStart: {
    id: 4,
    requirement: () => Ra.pets.effarig.level >= 2,
    lines: [
      "埃……法……利希",
      "我记得埃法利希很友好。",
    ]
  },
  effarigLate: {
    id: 5,
    requirement: () => Ra.pets.effarig.level >= 15,
    lines: [
      "埃法利希很挑剔？",
      "我还记得一个可怕的现实……",
      "它是关于……苦难？",
    ]
  },
  enslavedStart: {
    id: 6,
    requirement: () => Ra.pets.enslaved.level >= 2,
    lines: [
      "我记不太清这一个了……",
    ]
  },
  enslavedLate: {
    id: 7,
    requirement: () => Ra.pets.enslaved.level >= 15,
    lines: [
      "我开始记起来了……",
      "为什么我在这里……",
      "为什么我独自一人……",
      "帮帮我。",
    ]
  },
  vStart: {
    id: 8,
    requirement: () => Ra.pets.v.level >= 2,
    lines: [
      "我见过这个吗？",
      "如此孤独，却是心甘情愿……",
    ]
  },
  vLate: {
    id: 9,
    requirement: () => Ra.pets.v.level >= 15,
    lines: [
      "我想我见过 V 一次……",
      "我能记得那些成就。",
    ]
  },
  remembrance: {
    id: 10,
    requirement: () => Ra.remembrance.isUnlocked,
    lines: [
      "我记起了一些事情！",
      "看这个！",
      "追忆！",
      "我现在可以更专注地记住他们了！",
    ]
  },
  midMemories: {
    id: 11,
    requirement: () => Ra.totalPetLevel >= 50,
    lines: [
      "现实是我的家，但我无法创造我自己的现实。",
      "我只能复制我朋友们的现实。",
      "但是……为什么我听到了声音？",
      "他们在求救吗？",
    ]
  },
  lateMemories: {
    id: 12,
    requirement: () => Ra.totalPetLevel >= 80,
    lines: [
      "我觉得他们在叫我停下。",
      "你……不管你是什么？",
      "发生了什么？",
      "我做错了什么吗？",
    ]
  },
  maxLevels: {
    id: 13,
    requirement: () => Ra.totalPetLevel === Ra.maxTotalPetLevel,
    lines: [
      "终于，我记起了一切。",
      "这驱逐了我的黑暗。",
      "莱特拉……",
      "他们驱逐我是对的。",
      "我的力量……",
      "它们窃取，它们腐蚀。",
      "请离开。",
      "我不想也伤害你。",
    ]
  },
};
