import { DC } from "../../constants";

const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.reality.rebuyables[props.id],
    1e30,
    props.initialCost,
    props.costMult,
    props.costMult / 10,
    DC.E309,
    1e3,
    props.initialCost * props.costMult
  );
  const { effect } = props;
  props.effect = () => Math.pow(
    effect + ImaginaryUpgrade(props.id).effectOrDefault(0),
    player.reality.rebuyables[props.id] * getAdjustedGlyphEffect("realityrow1pow"));
  props.description = () => props.textTemplate.replace("{value}",
    ImaginaryUpgrade(props.id).effectValue === 0
      ? formatInt(effect)
      : format(effect + ImaginaryUpgrade(props.id).effectValue, 2, 2));
  props.formatEffect = value => formatX(value, 2, 0);
  props.formatCost = value => format(value, 2, 0);
  return props;
};


export const realityUpgrades = [
  rebuyable({
    name: "时间增幅器",
    id: 1,
    initialCost: 1,
    costMult: 30,
    textTemplate: "你获得膨胀时间的速度加快 {value} 倍",
    effect: 3
  }),
  rebuyable({
    name: "复制增幅器",
    id: 2,
    initialCost: 1,
    costMult: 30,
    textTemplate: "你获得复制器的速度加快 {value} 倍",
    effect: 3
  }),
  rebuyable({
    name: "永恒增幅器",
    id: 3,
    initialCost: 2,
    costMult: 30,
    textTemplate: "你获得 {value} 倍的永恒次数",
    effect: 3
  }),
  rebuyable({
    name: "超光速增幅器",
    id: 4,
    initialCost: 2,
    costMult: 30,
    textTemplate: "你获得 {value} 倍的超光速粒子",
    effect: 3
  }),
  rebuyable({
    name: "无界增幅器",
    id: 5,
    initialCost: 3,
    costMult: 50,
    textTemplate: "你获得 {value} 倍的无限次数",
    effect: 5
  }),
  {
    name: "宇宙复制",
    id: 6,
    cost: 15,
    requirement: "在不使用复制器星系的情况下完成你的第一次手动永恒",
    // Note that while noRG resets on eternity, the reality-level check will be false after the first eternity.
    // The noRG variable is eternity-level as it's also used for an achievement check
    hasFailed: () => !(player.requirementChecks.eternity.noRG && player.requirementChecks.reality.noEternities),
    checkRequirement: () => player.requirementChecks.eternity.noRG && player.requirementChecks.reality.noEternities,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    canLock: true,
    lockEvent: "获得一个复制器星系",
    description: "复制器速度基于复制器星系获得倍率",
    effect: () => 1 + Replicanti.galaxies.total / 50,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "无数构造",
    id: 7,
    cost: 15,
    requirement: "在最多 1 个反物质星系的情况下完成你的第一次无限",
    hasFailed: () => !(player.galaxies <= 1 && player.requirementChecks.reality.noInfinities),
    checkRequirement: () => player.galaxies <= 1 && player.requirementChecks.reality.noInfinities,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    canLock: true,
    lockEvent: "获得另一个反物质星系",
    description: "无限次数获取受反物质星系数量加成",
    effect: () => 1 + player.galaxies / 30,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "悖论获得",
    id: 8,
    cost: 15,
    requirement: "手动永恒且不获得任何自动成就",
    hasFailed: () => player.reality.gainedAutoAchievements,
    checkRequirement: () => !player.reality.gainedAutoAchievements,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    canLock: true,
    // We don't have lockEvent because the modal can never show up for this upgrade
    description: "超光速粒子获取受成就倍率加成",
    effect: () => Math.sqrt(Achievements.power),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "语言扩展",
    id: 9,
    cost: 15,
    requirement: () => `仅使用一个等级为 ${formatInt(3)}+ 的符文进行永恒，获得 ${format("1e4000")} 永恒点数。`,
    hasFailed: () => {
      const invalidEquippedGlyphs = Glyphs.activeWithoutCompanion.length > 1 ||
        (Glyphs.activeWithoutCompanion.length === 1 && Glyphs.activeWithoutCompanion[0].level < 3);
      const hasValidGlyphInInventory = Glyphs.inventory.countWhere(g => g && g.level >= 3) > 0;
      return invalidEquippedGlyphs || (Glyphs.activeWithoutCompanion.length === 0 && !hasValidGlyphInInventory);
    },
    checkRequirement: () => Currency.eternityPoints.exponent >= 4000 &&
      Glyphs.activeWithoutCompanion.length === 1 && Glyphs.activeWithoutCompanion[0].level >= 3,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    // There are two locking events - equipping a glyph with too low a level, and equipping a second glyph
    description: "获得另一个符文槽",
    effect: () => 1
  },
  {
    name: "存在延长",
    id: 10,
    cost: 15,
    requirement: () => `以至少 ${formatPostBreak(DC.E400)} 无限点数完成你的第一次手动永恒`,
    hasFailed: () => !player.requirementChecks.reality.noEternities,
    checkRequirement: () => Currency.infinityPoints.exponent >= 400 &&
      player.requirementChecks.reality.noEternities,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    canLock: true,
    lockEvent: "永恒",
    bypassLock: () => Currency.infinityPoints.exponent >= 400,
    description: () => `每次现实开始时拥有 ${formatInt(100)} 次永恒（也适用于当前现实）`,
    automatorPoints: 15,
    shortDescription: () => `开始时拥有 ${formatInt(100)} 次永恒`,
    effect: () => 100
  },
  {
    name: "无界之流",
    id: 11,
    cost: 50,
    requirement: () => `${format(Currency.infinitiesBanked.value, 2)}/${format(DC.E12)} 存储的无限`,
    checkRequirement: () => Currency.infinitiesBanked.exponent >= 12,
    checkEvent: [GAME_EVENT.ETERNITY_RESET_AFTER, GAME_EVENT.REALITY_FIRST_UNLOCKED],
    description: "每秒获得你正常无限时获得的无限次数的 10%",
    automatorPoints: 5,
    shortDescription: () => `持续无限生成`,
    effect: () => gainedInfinities().times(0.1),
    formatEffect: value => `${format(value)} 每秒`
  },
  {
    name: "全知存在",
    id: 12,
    cost: 50,
    requirement: () => `在不完成永恒挑战 1 的情况下，以 ${format(DC.E70)} 永恒点数进行永恒`,
    hasFailed: () => EternityChallenge(1).completions !== 0,
    checkRequirement: () => Currency.eternityPoints.exponent >= 70 && EternityChallenge(1).completions === 0,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    lockEvent: "完成永恒挑战 1",
    description: "基于现实次数和时间定理数量的永恒点数倍率",
    effect: () => Currency.timeTheorems.value
      .minus(DC.E3).clampMin(2)
      .pow(Math.log2(Math.min(Currency.realities.value, 1e4))).clampMin(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "远程机械过程",
    id: 13,
    cost: 50,
    requirement: () => `在不拥有时间维度 5-8 的情况下，以 ${format(DC.E4000)} 永恒点数进行永恒`,
    hasFailed: () => !Array.range(5, 4).every(i => TimeDimension(i).amount.equals(0)),
    checkRequirement: () => Currency.eternityPoints.exponent >= 4000 &&
      Array.range(5, 4).every(i => TimeDimension(i).amount.equals(0)),
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    lockEvent: "购买第 4 维度以上的时间维度",
    description: () => `改进永恒自动购买器并解锁时间维度和 ${formatX(5)} EP 的自动购买器`,
    automatorPoints: 10,
    shortDescription: () => `时间维度和 ${formatX(5)} EP 自动购买器，改进的永恒自动购买器`,
  },
  {
    name: "永恒之流",
    id: 14,
    cost: 50,
    requirement: () => `${format(Currency.eternities.value, 2)}/${format(1e7)} 永恒`,
    checkRequirement: () => Currency.eternities.gte(1e7),
    checkEvent: [GAME_EVENT.ETERNITY_RESET_AFTER, GAME_EVENT.REALITY_FIRST_UNLOCKED],
    description: "Gain Eternities per second equal to your Reality count",
    automatorPoints: 5,
    shortDescription: () => `Continuous Eternity generation`,
    effect: () => Currency.realities.value * Ra.unlocks.continuousTTBoost.effects.eternity.effectOrDefault(1),
    formatEffect: value => `${format(value)} per second`
  },
  {
    name: "The Paradoxical Forever",
    id: 15,
    cost: 50,
    requirement: () => `Have ${format(DC.E10)} Eternity Points without purchasing
      the ${formatX(5)} Eternity Point upgrade`,
    hasFailed: () => player.epmultUpgrades !== 0,
    checkRequirement: () => Currency.eternityPoints.exponent >= 10 && player.epmultUpgrades === 0,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    lockEvent: () => `purchase a ${formatX(5)} EP upgrade`,
    description: () => `Boost Tachyon Particle gain based on ${formatX(5)} Eternity Point multiplier`,
    effect: () => Math.max(Math.sqrt(Decimal.log10(EternityUpgrade.epMult.effectValue)) / 9, 1),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Disparity of Rarity",
    id: 16,
    cost: 1500,
    requirement: () => `Reality with ${formatInt(4)} Glyphs equipped of uncommon or better rarity
      (${formatInt(Glyphs.activeWithoutCompanion.countWhere(g => g && g.strength >= 1.5))} equipped)`,
    hasFailed: () => {
      const availableGlyphs = Glyphs.inventory.countWhere(g => g && g.strength >= 1.5);
      const equipped = Glyphs.activeWithoutCompanion.countWhere(g => g.strength >= 1.5);
      const availableSlots = Glyphs.activeSlotCount - Glyphs.activeList.length;
      return equipped + Math.min(availableGlyphs, availableSlots) < 4;
    },
    checkRequirement: () => Glyphs.activeWithoutCompanion.countWhere(g => g.strength >= 1.5) === 4,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "Improve the Glyph rarity formula",
    effect: 1.3,
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "Duplicity of Potency",
    id: 17,
    cost: 1500,
    requirement: () => `Reality with ${formatInt(4)} Glyphs equipped, each having at least ${formatInt(2)} effects
      (${formatInt(Glyphs.activeWithoutCompanion.countWhere(g => g && countValuesFromBitmask(g.effects) >= 2))}
      equipped)`,
    hasFailed: () => {
      const availableGlyphs = Glyphs.inventory.countWhere(g => g && countValuesFromBitmask(g.effects) >= 2);
      const equipped = Glyphs.activeWithoutCompanion.countWhere(g => countValuesFromBitmask(g.effects) >= 2);
      const availableSlots = Glyphs.activeSlotCount - Glyphs.activeList.length;
      return equipped + Math.min(availableGlyphs, availableSlots) < 4;
    },
    checkRequirement: () => Glyphs.activeWithoutCompanion.countWhere(g => countValuesFromBitmask(g.effects) >= 2) === 4,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: () => `${formatPercents(0.5)} chance to get an additional effect on Glyphs`,
    effect: 0.5,
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "Measure of Forever",
    id: 18,
    cost: 1500,
    requirement: () => `Reality with ${formatInt(4)} Glyphs equipped, each at level ${formatInt(10)} or higher
      (${formatInt(Glyphs.activeWithoutCompanion.countWhere(g => g && g.level >= 10))} equipped)`,
    hasFailed: () => {
      const availableGlyphs = Glyphs.inventory.countWhere(g => g && g.level >= 10);
      const equipped = Glyphs.activeWithoutCompanion.countWhere(g => g.level >= 10);
      const availableSlots = Glyphs.activeSlotCount - Glyphs.activeList.length;
      return equipped + Math.min(availableGlyphs, availableSlots) < 4;
    },
    checkRequirement: () => Glyphs.activeWithoutCompanion.countWhere(g => g.level >= 10) === 4,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "Eternity count boosts Glyph level",
    effect: () => Math.max(Math.sqrt(Currency.eternities.value.plus(1).log10()) * 0.45, 1),
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "Scour to Empower",
    id: 19,
    cost: 1500,
    requirement: () => `Have a total of ${formatInt(30)} or more Glyphs at once
      (You have ${formatInt(Glyphs.allGlyphs.countWhere(g => g.type !== "companion"))})`,
    hasFailed: () => Glyphs.allGlyphs.countWhere(g => g.type !== "companion") < 30,
    checkRequirement: () => Glyphs.allGlyphs.countWhere(g => g.type !== "companion") >= 30,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "You can sacrifice Glyphs for permanent bonuses (Shift + click)",
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "Parity of Singularity",
    id: 20,
    cost: 1500,
    requirement: () => `${formatInt(100)} days total play time after unlocking the Black Hole
      (Currently: ${Time.timeSinceBlackHole.toStringShort(false)})`,
    hasFailed: () => !BlackHole(1).isUnlocked && Currency.realityMachines.lt(100),
    checkRequirement: () => Time.timeSinceBlackHole.totalDays >= 100 && BlackHole(1).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "Unlock another Black Hole",
    automatorPoints: 10,
    shortDescription: () => `Second Black Hole`,
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "Cosmic Conglomerate",
    id: 21,
    cost: 100000,
    requirement: () => `${formatInt(Replicanti.galaxies.total + player.galaxies +
      player.dilation.totalTachyonGalaxies)}/${formatInt(2800)} total Galaxies from all types`,
    checkRequirement: () =>
      Replicanti.galaxies.total + player.galaxies + player.dilation.totalTachyonGalaxies >= 2800,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `Remote Antimatter Galaxy scaling is moved to ${formatInt(1e5)} galaxies`,
    effect: 1e5
  },
  {
    name: "Temporal Transcendence",
    id: 22,
    cost: 100000,
    requirement: () => `${format(Currency.timeShards.value, 1)}/${format(DC.E28000)} Time Shards`,
    checkRequirement: () => Currency.timeShards.exponent >= 28000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "Time Dimension multiplier based on days spent in this Reality",
    effect: () => Decimal.pow10(Math.pow(1 + 2 * Math.log10(Time.thisReality.totalDays + 1), 1.6)),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Replicative Rapidity",
    id: 23,
    cost: 100000,
    requirement: () => `Reality in under ${formatInt(15)} minutes of game time
      (Fastest: ${Time.bestReality.toStringShort()})`,
    hasFailed: () => Time.thisReality.totalMinutes >= 15,
    checkRequirement: () => Time.thisReality.totalMinutes < 15,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "Replicanti speed is boosted based on your fastest game-time Reality",
    effect: () => 15 / Math.clamp(Time.bestReality.totalMinutes, 1 / 12, 15),
    cap: 180,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Synthetic Symbolism",
    id: 24,
    cost: 100000,
    requirement: () => `Reality for ${formatInt(5000)} Reality Machines without equipped Glyphs`,
    hasFailed: () => Glyphs.activeWithoutCompanion.length > 0,
    checkRequirement: () => MachineHandler.gainedRealityMachines.gte(5000) &&
      Glyphs.activeWithoutCompanion.length === 0,
    canLock: true,
    lockEvent: "equip a non-Companion Glyph",
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "Gain another Glyph slot",
    effect: () => 1
  },
  {
    name: "Effortless Existence",
    id: 25,
    cost: 100000,
    requirement: () => `Reach ${format(DC.E11111)} EP (Best: ${format(player.records.bestReality.bestEP, 2)} EP)`,
    checkRequirement: () => player.records.bestReality.bestEP.exponent >= 11111,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    description: "Unlock the Reality autobuyer and Automator command",
    automatorPoints: 100,
    shortDescription: () => `Reality Autobuyer`,
  },
];
