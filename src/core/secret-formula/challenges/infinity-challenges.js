import { DC } from "../../constants";

export const infinityChallenges = [
  {
    id: 1,
    description: `所有普通挑战限制同时激活，除了 Tick 速度 (C9) 和大坍缩 (C12) 挑战。`,
    goal: DC.E650,
    isQuickResettable: true,
    reward: {
      description: () => `每完成一个无限挑战，所有无限维度获得 ${formatX(1.3, 1, 1)} 倍率`,
      effect: () => Math.pow(1.3, InfinityChallenges.completed.length),
      formatEffect: value => formatX(value, 1, 1)
    },
    unlockAM: DC.E2000,
  },
  {
    id: 2,
    description: () => `一旦你拥有第八反物质维度，维度献祭每 ${formatInt(400)} 毫秒自动进行一次。`,
    goal: DC.E10500,
    isQuickResettable: false,
    reward: {
      description: () => `维度献祭自动购买器及更强的维度献祭
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": false })} ➜
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": true })}`,
    },
    unlockAM: DC.E11000,
  },
  {
    id: 3,
    description: () =>
      `Tick 速度升级倍率始终为 ${formatX(1)}。每购买一个 Tick 速度升级，所有反物质维度获得一个基于反物质星系的静态倍率。`,
    goal: DC.E5000,
    isQuickResettable: false,
    effect: () => Decimal.pow(1.05 + (player.galaxies * 0.005), player.totalTickBought),
    formatEffect: value => formatX(value, 2, 2),
    reward: {
      description: `基于反物质星系和 Tick 速度购买数量，获得反物质维度倍率`,
      effect: () => (Laitela.continuumActive
        ? Decimal.pow(1.05 + (player.galaxies * 0.005), Tickspeed.continuumValue)
        : Decimal.pow(1.05 + (player.galaxies * 0.005), player.totalTickBought)),
      formatEffect: value => formatX(value, 2, 2),
    },
    unlockAM: DC.E12000,
  },
  {
    id: 4,
    description: () =>
      `只有最新购买的反物质维度生产正常。所有其他反物质维度
      产量减少 (${formatPow(0.25, 2, 2)})。`,
    goal: DC.E13000,
    isQuickResettable: true,
    effect: 0.25,
    reward: {
      description: () => `所有反物质维度倍率变为倍率${formatPow(1.05, 2, 2)}`,
      effect: 1.05
    },
    unlockAM: DC.E14000,
  },
  {
    id: 5,
    description:
      `购买反物质维度 1-4 会导致所有更便宜的反物质维度价格上涨。
      购买反物质维度 5-8 会导致所有更昂贵的反物质维度价格上涨。`,
    goal: DC.E16500,
    isQuickResettable: true,
    reward: {
      description: () =>
        `所有星系增强 ${formatPercents(0.1)}，并使其和维度提升的需求减少 ${formatInt(1)}`,
      effect: 1.1
    },
    unlockAM: DC.E18000,
  },
  {
    id: 6,
    description: () =>
      `一旦你拥有至少 ${formatInt(1)} 个第二反物质维度，指数增长的物质会除以所有反物质维度的倍率。`,
    goal: DC.D2E22222,
    isQuickResettable: true,
    effect: () => Currency.matter.value.clampMin(1),
    formatEffect: value => `/${format(value, 1, 2)}`,
    reward: {
      description: "基于 Tick 速度获得无限维度倍率",
      effect: () => Tickspeed.perSecond.pow(0.0005),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E22500,
  },
  {
    id: 7,
    description: () => {
      // Copied from DimBoost.power; this is the base amount before any multipliers. Post-eternity this isn't
      // necessarily 2.5x by the time the player sees this challenge; it's probably most accurate to say what it
      // currently is, and this phrasing avoids 10x ➜ 10x with the old description.
      const mult = Effects.max(
        2,
        InfinityUpgrade.dimboostMult,
        InfinityChallenge(7).reward,
        TimeStudy(81)
      );
      return `你无法购买反物质星系。基础维度提升倍率增加至最高
        ${formatX(10)}。（当前基础倍率：${formatX(mult, 2, 1)}）`;
    },
    goal: DC.E10000,
    isQuickResettable: false,
    effect: 10,
    reward: {
      description: () => `维度提升倍率增加至最低 ${formatX(4)}`,
      effect: 4
    },
    unlockAM: DC.E23000,
  },
  {
    id: 8,
    description: () =>
      `反物质维度产量随时间迅速且持续下降。购买反物质维度或 Tick 速度
        升级会将产量重置为 ${formatPercents(1)}，然后再次开始下降。`,
    goal: DC.E27000,
    isQuickResettable: true,
    effect: () => DC.D0_8446303389034288.pow(
      Math.max(0, player.records.thisInfinity.time - player.records.thisInfinity.lastBuyTime)),
    reward: {
      description:
        "基于第一和第八反物质维度的倍率，反物质维度 2-7 获得倍率加成。",
      effect: () => AntimatterDimension(1).multiplier.times(AntimatterDimension(8).multiplier).pow(0.02),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E28000,
  },
];
