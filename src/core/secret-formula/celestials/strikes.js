import { DC } from "../../constants";
import wordShift from "../../word-shift";

export const pelleStrikes = {
  infinity: {
    id: 1,
    requirementDescription: "达到无限",
    penaltyDescription: () => `反物质维度指数变为 ${formatPow(0.5, 1, 1)}`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.vacuum.name)}
      并获得永久的无限自动购买器`,
    rift: () => PelleRifts.vacuum
  },
  powerGalaxies: {
    id: 2,
    requirementDescription: "强化星系",
    penaltyDescription: () => `无限维度指数变为 ${formatPow(0.5, 1, 1)}`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.decay.name)}`,
    rift: () => PelleRifts.decay
  },
  eternity: {
    id: 3,
    requirementDescription: "达到永恒",
    penaltyDescription: () => `超过 ${format(DC.E2000)} 后，复制器速度进一步减慢`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.chaos.name)}`,
    rift: () => PelleRifts.chaos
  },
  ECs: {
    id: 4,
    requirementDescription: () => `达到 ${formatInt(115)} 时间定理`,
    penaltyDescription: () => `在永恒挑战中，${wordShift.wordCycle(PelleRifts.vacuum.name)}
      的无限点数倍率仅有 ${formatPercents(0.3)} 的效果，且上限为目标的 ${formatPercents(0.15)}`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.recursion.name)}`,
    rift: () => PelleRifts.recursion
  },
  dilation: {
    id: 5,
    requirementDescription: "膨胀时间",
    penaltyDescription: "时间膨胀永久激活",
    rewardDescription: () => `在世界末日后保留时间膨胀研究，提升残骸获取，并解锁
      ${wordShift.wordCycle(PelleRifts.paradox.name)}`,
    rift: () => PelleRifts.paradox
  }
};
