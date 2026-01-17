import { DC } from "../../constants";

// I tried to make it relatively simple to add more locks; the idea is that you give it a value here
// and then it's all handled in the backend
// If you need to lock a challenge, set lockedAt to a new Decimal variable reflective of a desired number of Infinities
// They will always be unlocked post-eternity

export const normalChallenges = [
  {
    id: 1,
    legacyId: 1,
    isQuickResettable: false,
    description() {
      return PlayerProgress.eternityUnlocked()
        ? "在挑战之外首次达到无限。"
        : "首次达到无限。";
    },
    name: "第一反物质维度自动购买器",
    reward: "可升级的第一反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 2,
    legacyId: 2,
    isQuickResettable: false,
    description:
      () => "购买反物质维度或 Tick 速度升级会停止所有反物质维度的生产。" +
      `生产在 ${formatInt(3)} 分钟内逐渐恢复正常。`,
    name: "第二反物质维度自动购买器",
    reward: "可升级的第二反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 3,
    legacyId: 3,
    isQuickResettable: false,
    description:
      `第一反物质维度被大幅削弱，但获得一个无上限的指数增长倍率。
        该倍率在维度提升和反物质星系后重置。`,
    name: "第三反物质维度",
    reward: "可升级的第三反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 4,
    legacyId: 8,
    isQuickResettable: false,
    description: "购买一个反物质维度会自动清除所有低阶反物质维度，" +
      "就像没有加成的献祭一样。",
    name: "第四反物质维度自动购买器",
    reward: "可升级的第四反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 5,
    legacyId: 6,
    isQuickResettable: false,
    description:
      () => `Tick 速度购买倍率从 ${formatX(1.080, 0, 3)} 开始，而不是 ${formatX(1.1245, 0, 3)}。`,
    name: "第五反物质维度自动购买器",
    reward: "可升级的第五反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 6,
    legacyId: 10,
    isQuickResettable: false,
    description: () => `升级每个反物质维度花费低 ${formatInt(2)} 阶的反物质维度 ` +
      "而不是反物质。反物质维度价格已调整。",
    name: "第六反物质维度自动购买器",
    reward: "可升级的第六反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 7,
    legacyId: 9,
    isQuickResettable: false,
    description: () =>
      `购买 ${formatInt(10)} 个反物质维度的倍率降低至 ${formatX(1)}。该倍率随维度提升每阶增加
        ${formatX(0.2, 1, 1)}，最高为 ${formatX(2)}，且不受任何升级影响。`,
    name: "第七反物质维度自动购买器",
    reward: "可升级的第七反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 8,
    legacyId: 11,
    isQuickResettable: false,
    description: `维度提升不提供倍率，且无法购买反物质星系。维度
      献祭重置反物质和所有反物质维度，但也提供显著更强的倍率。`,
    name: "第八反物质维度自动购买器",
    reward: "可升级的第八反物质维度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 9,
    legacyId: 5,
    isQuickResettable: true,
    description: () => `每当你购买 Tick 速度升级或 ${formatInt(10)} 个反物质维度时，` +
      "所有其他同等价格的项目都会增加到下一个价格阶梯。",
    name: "Tick 速度自动购买器",
    reward: "可升级的 Tick 速度自动购买器",
    lockedAt: DC.D0,
  },
  {
    id: 10,
    legacyId: 4,
    isQuickResettable: false,
    description: () => `只有 ${formatInt(6)} 个反物质维度。维度提升 ` +
      "和反物质星系的花费已调整。",
    name: "自动维度提升",
    reward: "维度提升自动购买器",
    lockedAt: DC.D16,
  },
  {
    id: 11,
    legacyId: 12,
    isQuickResettable: true,
    description: () => `当你拥有至少 ${formatInt(1)} 个第二反物质 ` +
      "维度时，普通物质会增加。如果它超过你的反物质，将进行维度提升但不提供加成。",
    name: "自动反物质星系",
    reward: "反物质星系自动购买器",
    lockedAt: DC.D16,
  },
  {
    id: 12,
    legacyId: 7,
    isQuickResettable: false,
    description: () => `每个反物质维度生产低 ${formatInt(2)} 阶的维度
      而不是 ${formatInt(1)} 阶。第一和第二维度都生产反物质。
      第二、第四和第六维度已增强以补偿。`,
    name: "自动大坍缩",
    reward: "大坍缩自动购买器",
    lockedAt: DC.D16,
  }
];
