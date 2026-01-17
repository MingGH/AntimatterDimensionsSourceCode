export const vQuotes = {
  initial: {
    id: 0,
    lines: [
      "真可悲……"
    ],
  },
  unlock: {
    id: 1,
    lines: [
      "欢迎来到我的现实。",
      "我很惊讶你能到达这里。",
      "毕竟这是我的领域……",
      "不是每个人都像我一样伟大。",
    ],
  },
  realityEnter: {
    id: 2,
    lines: [
      "祝你好运！",
      "你会需要的。",
      "我的现实完美无缺。你会失败的。",
    ],
  },
  realityComplete: {
    id: 3,
    lines: [
      "这么快……",
      "别太自以为是了。",
      "这仅仅是个开始。",
      "你永远比不上我。",
    ],
  },
  achievement1: {
    id: 4,
    requirement: () => V.spaceTheorems >= 1,
    lines: [
      "才一个？可悲。",
      "你的成就和我的相比简直不值一提。",
    ],
  },
  achievement6: {
    id: 5,
    requirement: () => V.spaceTheorems >= 6,
    lines: [
      "这不算什么。",
      "别太骄傲自满。",
    ],
  },
  hex1: {
    id: 6,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 1,
    lines: [
      "别以为接下来会变得更容易。",
      "你为这么小的成就而骄傲，真是可笑。",
    ],
  },
  achievement12: {
    id: 7,
    requirement: () => V.spaceTheorems >= 12,
    lines: [
      "你是怎么……",
      "这根本不算什么！",
      "你永远无法完成所有成就。",
    ],
  },
  achievement24: {
    id: 8,
    requirement: () => V.spaceTheorems >= 24,
    lines: [
      "不可能……",
      "在我经历了那么多困难之后……",
    ],
  },
  hex3: {
    id: 9,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 3,
    lines: [
      "不……不……不……",
      "这不可能……",
    ],
  },
  allAchievements: {
    id: 10,
    requirement: () => V.spaceTheorems >= 36,
    lines: [
      "我……你是怎么做到的……",
      "我那么努力才得到它们……",
      "我是最伟大的……",
      "没人比我更好……",
      "没人……没人……没—",
    ],
  }
};
