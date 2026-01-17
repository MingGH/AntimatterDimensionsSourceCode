import { DC } from "../../constants";
import wordShift from "../../word-shift";

export const pelleRifts = {
  vacuum: {
    id: 1,
    key: "vacuum",
    name: ["真空", "空洞", "虚空"],
    drainResource: "无限点数",
    baseEffect: x => `无限点数获取 ${formatX(x, 2, 2)}`,
    additionalEffects: () => [PelleRifts.vacuum.milestones[2]],
    strike: () => PelleStrikes.infinity,
    percentage: totalFill => Math.log10(totalFill.plus(1).log10() * 10 + 1) ** 2.5 / 100,
    percentageToFill: percentage => Decimal.pow(10,
      Decimal.pow(10, (percentage * 100) ** (1 / 2.5)).div(10).minus(0.1)
    ).minus(1),
    effect: totalFill => {
      if (player.challenge.eternity.current !== 0) {
        const chall = EternityChallenge.current;
        const goal = chall.goalAtCompletions(chall.gainedCompletionStatus.totalCompletions);
        return totalFill.plus(1).pow(0.1).min(goal.pow(0.15));
      }
      return totalFill.plus(1).pow(0.33);
    },
    currency: () => Currency.infinityPoints,
    galaxyGeneratorThreshold: 1000,
    milestones: [
      {
        resource: "vacuum",
        requirement: 0.04,
        description: "你可以装备一个等级和稀有度降低的基础符文"
      },
      {
        resource: "vacuum",
        requirement: 0.06,
        description: () => `移除复制器上限，并使其解锁和升级便宜 ${formatX(1e130)}`,
        effect: () => 1e130
      },
      {
        resource: "vacuum",
        requirement: 0.4,
        description: () => `${wordShift.wordCycle(PelleRifts.vacuum.name)} 也影响永恒点数获取`,
        effect: () => Decimal.pow(4, PelleRifts.vacuum.totalFill.log10() / 2 / 308 + 3),
        formatEffect: x => `永恒点数获取 ${formatX(x, 2, 2)}`
      },
    ],
    galaxyGeneratorText: "没有足够的空间了，你必须填充 $value"
  },
  decay: {
    id: 2,
    key: "decay",
    name: ["衰变", "坍缩", "混乱"],
    drainResource: "复制器",
    spendable: true,
    baseEffect: x => `复制器速度 ${formatX(x, 2, 2)}`,
    additionalEffects: () => [PelleRifts.decay.milestones[0], PelleRifts.decay.milestones[2]],
    strike: () => PelleStrikes.powerGalaxies,
    // 0 - 1
    percentage: totalFill => totalFill.plus(1).log10() * 0.05 / 100,
    // 0 - 1
    percentageToFill: percentage => Decimal.pow(10, 20 * percentage * 100).minus(1),
    effect: totalFill => (PelleRifts.chaos.milestones[0].canBeApplied
      ? Decimal.sqrt(2000 + 1) : Decimal.sqrt(totalFill.plus(1).log10() + 1)),
    currency: () => Currency.replicanti,
    galaxyGeneratorThreshold: 1e7,
    milestones: [
      {
        resource: "decay",
        requirement: 0.2,
        description: "第一个可重复购买的 Pelle 升级也影响第 1 无限维度",
        effect: () => {
          const x = player.celestials.pelle.rebuyables.antimatterDimensionMult;
          return Decimal.pow(1e50, x - 9);
        },
        formatEffect: x => `第 1 无限维度 ${formatX(x, 2, 2)}`
      },
      {
        resource: "decay",
        requirement: 0.6,
        description: () => `当复制器超过 ${format(DC.E1300)} 时，
          所有星系效果增强 ${formatPercents(0.1)}`,
        effect: () => (Replicanti.amount.gt(DC.E1300) ? 1.1 : 1)
      },
      {
        resource: "decay",
        requirement: 1,
        description: "基于裂隙里程碑总数增加最大复制器星系",
        effect: () => {
          const x = PelleRifts.totalMilestones();
          return x ** 2 - 2 * x;
        },
        formatEffect: x => `最大复制器星系数量 +${formatInt(x)}`
      },
    ],
    galaxyGeneratorText: "没有足够的反物质来形成新的星系，你需要逆转 $value"
  },
  chaos: {
    id: 3,
    key: "chaos",
    name: ["混沌", "无序", "杂质"],
    drainResource: ["衰变", "坍缩", "混乱"],
    baseEffect: x => `时间维度 ${formatX(x, 2, 2)}`,
    strike: () => PelleStrikes.eternity,
    percentage: totalFill => totalFill / 10,
    percentageToFill: percentage => 10 * percentage,
    effect: totalFill => {
      const fill = totalFill > 6.5
        ? (totalFill - 6.5) / 7 + 6.5
        : totalFill;
      return Decimal.pow(6, Decimal.pow(6, Decimal.pow(6, fill / 10 + 0.1)).minus(6))
        .div(1e5)
        .plus(Decimal.pow(10, fill / 10 + 0.1));
    },
    currency: () => ({
      get value() {
        return PelleRifts.decay.percentage;
      },
      set value(val) {
        const spent = PelleRifts.decay.percentage - val;
        player.celestials.pelle.rifts.decay.percentageSpent += spent;
      }
    }),
    galaxyGeneratorThreshold: 1e9,
    milestones: [
      {
        resource: "chaos",
        requirement: 0.09,
        description: () => `${wordShift.wordCycle(PelleRifts.decay.name)} \
        效果总是最大化，里程碑总是激活`
      },
      {
        resource: "chaos",
        requirement: 0.15,
        description: "符文获得一个新的 Pelle 特有效果",
      },
      {
        resource: "chaos",
        requirement: 1,
        description: () => `你每秒获得 ${formatPercents(0.01)} 的永恒时获得的永恒点数`,
      },
    ],
    galaxyGeneratorText: "你的星系太碎片化了，你必须稳定 $value"
  },
  recursion: {
    id: 4,
    key: "recursion",
    name: ["递归", "弥散", "毁灭"],
    drainResource: "永恒点数",
    baseEffect: x => `永恒点数公式: log(x)/${formatInt(308)} ➜ log(x)/${formatFloat(308 - x.toNumber(), 2)}`,
    additionalEffects: () => [PelleRifts.recursion.milestones[0], PelleRifts.recursion.milestones[1]],
    strike: () => PelleStrikes.ECs,
    percentage: totalFill => totalFill.plus(1).log10() ** 0.4 / 4000 ** 0.4,
    percentageToFill: percentage => Decimal.pow(10, percentage ** 2.5 * 4000).minus(1),
    effect: totalFill => new Decimal(58 * totalFill.plus(1).log10() ** 0.2 / 4000 ** 0.2),
    currency: () => Currency.eternityPoints,
    galaxyGeneratorThreshold: 1e10,
    milestones: [
      {
        resource: "recursion",
        requirement: 0.10,
        description: "维度提升基于永恒挑战完成次数变得更强",
        effect: () => Math.max(100 * EternityChallenges.completions ** 2, 1) *
          Math.max(1e4 ** (EternityChallenges.completions - 40), 1),
        formatEffect: x => `维度提升力量 ${formatX(x, 2, 2)}`
      },
      {
        resource: "recursion",
        requirement: 0.15,
        description: "无限维度基于永恒挑战完成次数变得更强",
        effect: () => Decimal.pow("1e1500", ((EternityChallenges.completions - 25) / 20) ** 1.7).max(1),
        formatEffect: x => `无限维度 ${formatX(x)}`
      },
      {
        resource: "recursion",
        requirement: 1,
        description: "永久解锁星系生成器",
      },
    ],
    galaxyGeneratorText: "创造更多星系是不可持续的，你必须集中 $value 以允许更多"
  },
  paradox: {
    id: 5,
    key: "paradox",
    name: ["悖论", "矛盾", "谬误"],
    drainResource: "膨胀时间",
    baseEffect: x => `所有维度 ${formatPow(x, 2, 3)}`,
    additionalEffects: () => [PelleRifts.paradox.milestones[2]],
    strike: () => PelleStrikes.dilation,
    percentage: totalFill => totalFill.plus(1).log10() / 100,
    percentageToFill: percentage => Decimal.pow10(percentage * 100).minus(1),
    effect: totalFill => new Decimal(1 + totalFill.plus(1).log10() * 0.004),
    currency: () => Currency.dilatedTime,
    galaxyGeneratorThreshold: 1e5,
    milestones: [
      {
        resource: "paradox",
        requirement: 0.15,
        description: "时间维度 5-8 更便宜，解锁更多膨胀升级",
        // FIXME: Not a great solution
        onStateChange: () => {
          updateTimeDimensionCosts();
        }
      },
      {
        resource: "paradox",
        requirement: 0.25,
        description: () => `膨胀时间获取变成超光速粒子 ${formatPow(1.4, 1, 1)}`,
        effect: 1.4
      },
      {
        resource: "paradox",
        requirement: 0.5,
        description: "膨胀可重复购买次数提高无限能量转换率",
        effect: () => Math.min(
          1.1075 ** (Object.values(player.dilation.rebuyables).sum() - 60),
          712
        ),
        formatEffect: x => `无限能量转换 ${formatX(x, 2, 2)}`
      },
    ],
    galaxyGeneratorText: "应该可以创造更多，但 Pelle 限制了你。无视 $value"
  }
};
