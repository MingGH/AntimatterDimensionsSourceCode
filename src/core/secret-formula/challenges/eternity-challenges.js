import { DC } from "../../constants";

const specialInfinityGlyphDisabledEffectText = () => (PelleRifts.chaos.milestones[1].canBeApplied
  ? "无限符文的 Pelle 专属效果也被禁用。"
  : "");

export const eternityChallenges = [
  {
    id: 1,
    description: "时间维度被禁用。",
    goal: DC.E1800,
    goalIncrease: DC.E200,
    reward: {
      description: "基于本次永恒花费时间的时间维度倍率",
      effect: completions =>
        Decimal.pow(Math.max(player.records.thisEternity.time / 10, 0.9), 0.3 + (completions * 0.05)),
      formatEffect: value => formatX(value, 2, 1)
    },
    // These will get notation-formatted and scrambled between for the final goal
    scrambleText: ["1e2600", "1e201600"],
  },
  {
    id: 2,
    description: "无限维度被禁用。",
    goal: DC.E975,
    pelleGoal: DC.E1750,
    goalIncrease: DC.E175,
    reward: {
      description: "基于无限能量的第一无限维度倍率",
      effect: completions => Currency.infinityPower.value.pow(1.5 / (700 - completions * 100)).clampMin(1),
      cap: DC.E100,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 3,
    description: "反物质维度 5-8 不生产任何东西。维度献祭被禁用。",
    goal: DC.E600,
    pelleGoal: DC.E925,
    goalIncrease: DC.E75,
    reward: {
      description: () => `增加购买 ${formatInt(10)} 个反物质维度的倍率`,
      effect: completions => completions * 0.72,
      formatEffect: value => `+${format(value, 2, 2)}`
    }
  },
  {
    id: 4,
    description: `所有无限倍率和生成器被禁用。必须在一定
      数量的无限次数内达到目标，否则挑战失败。`,
    goal: DC.E2750,
    goalIncrease: DC.E550,
    restriction: completions => Math.max(16 - 4 * completions, 0),
    checkRestriction: restriction => Currency.infinities.lte(restriction),
    formatRestriction: restriction => (restriction === 0
      ? "没有任何无限"
      : `在 ${formatInt(restriction)} 次无限或更少内`),
    failedRestriction: "(无限次数过多，无法继续)",
    reward: {
      description: "基于未花费 IP 的无限维度倍率",
      effect: completions => Currency.infinityPoints.value.pow(0.003 + completions * 0.002),
      cap: DC.E200,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 5,
    description: () => `反物质星系成本增长缩放立即开始（通常在 ${formatInt(100)}
      星系）。维度提升成本缩放大幅增加。`,
    goal: DC.E750,
    pelleGoal: DC.E1400,
    goalIncrease: DC.E400,
    reward: {
      description: "遥远星系成本缩放延迟开始",
      effect: completions => completions * 5,
      formatEffect: value => `${formatInt(value)} 星系后`
    }
  },
  {
    id: 6,
    // The asterisk, if present, will get replaced with strings generated from the scramble text
    description: () => {
      if (Enslaved.isRunning) return "你 *。升级最大复制器星系的成本大幅降低。";
      return "你无法正常获得反物质星系。升级最大复制器" +
              "星系的成本大幅降低。";
    },
    goal: DC.E850,
    pelleGoal: DC.E1500,
    goalIncrease: DC.E250,
    reward: {
      description: "进一步降低反物质维度成本倍率增长",
      effect: completions => completions * 0.2,
      formatEffect: value => {
        const total = Math.round(Player.dimensionMultDecrease + Effects.sum(EternityChallenge(6).reward)) - value;
        return `-${format(value, 2, 1)} (总计 ${formatX(total, 2, 1)})`;
      }
    },
    scrambleText: ["无法正常获得反物质星系", "c㏰'퐚 gai鸭 Anti꟢at랜erﻪﶓa⁍axie㮾 䂇orma㦂l"],
  },
  {
    id: 7,
    description:
      "第一时间维度生产第八无限维度，第一无限维度生产" +
      "第七反物质维度。Tick 速度也直接作用于无限和时间维度。",
    goal: DC.E2000,
    pelleGoal: DC.E2700,
    goalIncrease: DC.E530,
    effect: () => TimeDimension(1).productionPerSecond,
    reward: {
      description: "第一时间维度生产第八无限维度",
      effect: completions => TimeDimension(1).productionPerSecond.pow(completions * 0.2).minus(1).clampMin(0),
      formatEffect: value => `每秒 ${format(value, 2, 1)}`
    }
  },
  {
    id: 8,
    description: () => `你只能升级无限维度 ${formatInt(50)} 次和复制器
      升级 ${formatInt(40)} 次。无限维度和复制器升级自动购买器被禁用。`,
    goal: DC.E1300,
    pelleGoal: DC.E2800,
    goalIncrease: DC.E900,
    reward: {
      description: "无限能量增强复制器星系",
      effect: completions => {
        const infinityPower = Math.log10(Currency.infinityPower.value.pLog10() + 1);
        return Math.max(0, Math.pow(infinityPower, 0.03 * completions) - 1);
      },
      formatEffect: value => formatPercents(value, 2)
    }
  },
  {
    id: 9,
    description: () => `你无法购买 Tick 速度升级。无限能量改为以
      大幅降低的效果倍增时间维度。${specialInfinityGlyphDisabledEffectText()}`,
    goal: DC.E1750,
    pelleGoal: DC.E2900,
    goalIncrease: DC.E250,
    reward: {
      description: "基于时间碎片的无限维度倍率",
      effect: completions => Currency.timeShards.value.pow(completions * 0.1).clampMin(1),
      cap: DC.E400,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 10,
    description: () => {
      let description = `时间维度和无限维度被禁用。你从
        无限次数中获得对反物质维度的巨大加成 (无限次数${formatPow(950)})。${specialInfinityGlyphDisabledEffectText()}`;
      EternityChallenge(10).applyEffect(v => description += ` 当前: ${formatX(v, 2, 1)}`);
      return description;
    },
    goal: DC.E3000,
    pelleGoal: DC.E3200,
    goalIncrease: DC.E300,
    effect: () => Decimal.pow(Currency.infinitiesTotal.value, 950).clampMin(1).pow(TimeStudy(31).effectOrDefault(1)),
    reward: {
      description: "基于无限次数的时间维度倍率",
      effect: completions => {
        const mult = Currency.infinitiesTotal.value.times(2.783e-6).pow(0.4 + 0.1 * completions).clampMin(1);
        return mult.powEffectOf(TimeStudy(31));
      },
      formatEffect: value => {
        // Since TS31 is already accounted for in the effect prop, we need to "undo" it to display the base value here
        const mult = formatX(value, 2, 1);
        return TimeStudy(31).canBeApplied
          ? `${formatX(value.pow(1 / TimeStudy(31).effectValue), 2, 1)} (TS31 后: ${mult})`
          : mult;
      }
    }
  },
  {
    id: 11,
    description: () => `所有维度倍率和指数都被禁用，除了来自
      无限能量和维度提升（对反物质维度）的倍率。${specialInfinityGlyphDisabledEffectText()}`,
    goal: DC.E450,
    pelleGoal: DC.E11200,
    goalIncrease: DC.E200,
    pelleGoalIncrease: DC.E1400,
    reward: {
      description: "进一步降低 Tick 速度成本倍率增长",
      effect: completions => completions * 0.07,
      formatEffect: value => {
        const total = Math.round(Player.tickSpeedMultDecrease + Effects.sum(EternityChallenge(11).reward)) - value;
        return `-${format(value, 2, 2)} (总计 ${formatX(total, 2, 2)})`;
      }
    }
  },
  {
    id: 12,
    description: () => (PlayerProgress.realityUnlocked()
      ? `游戏运行速度减慢 ×${formatInt(1000)}；所有其他游戏速度效果被禁用。目标必须在
        一定时间内达到，否则挑战失败。${specialInfinityGlyphDisabledEffectText()}`
      : `游戏运行速度减慢 ×${formatInt(1000)}。目标必须在
        一定时间内达到，否则挑战失败。`),
    goal: DC.E110000,
    pelleGoal: DC.E208000,
    goalIncrease: DC.E12000,
    restriction: completions => Math.max(10 - 2 * completions, 1) / 10,
    checkRestriction: restriction => Time.thisEternity.totalSeconds < restriction,
    formatRestriction: restriction => `在 ${format(restriction, 0, 1)} 游戏内秒或更短时间内。`,
    failedRestriction: "(太慢了，无法继续)",
    reward: {
      description: "无限维度成本倍率降低",
      effect: completions => 1 - completions * 0.008,
      formatEffect: value => `x${formatPow(value, 3, 3)}`
    }
  }
];
