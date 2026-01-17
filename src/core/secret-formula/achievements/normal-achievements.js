import { DC } from "../../constants";

export const normalAchievements = [
  {
    id: 11,
    name: "千里之行始于足下",
    description: "购买一个第一反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 12,
    name: "100反物质很多了",
    description: "购买一个第二反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 13,
    name: "半条命3确认发布",
    description: "购买一个第三反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 14,
    name: "求生之路：剩下4个维度",
    description: "购买一个第四反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 15,
    name: "五维反物质拳",
    description: "购买一个第五反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 16,
    name: "我们要不起9",
    get description() {
      return Enslaved.isRunning
        ? "购买一个第六反物质维度（它们从没什么用）"
        : "购买一个第六反物质维度。";
    },
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 17,
    name: "非运气类成就",
    description: "购买一个第七反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 18,
    name: "90度通向无限",
    get description() {
      return Enslaved.isRunning
        ? "购买一个第八反物质维度（别习惯了）"
        : "购买一个第八反物质维度。";
    },
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 21,
    name: "飞向无限！",
    description: "达到无限。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `初始拥有 ${formatInt(100)} 反物质。`; },
    effect: 100
  },
  {
    id: 22,
    name: "假新闻！",
    get description() { return `遇到 ${formatInt(50)} 条不同的新闻消息。`; },
    checkRequirement: () => NewsHandler.uniqueTickersSeen >= 50,
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER
  },
  {
    id: 23,
    name: "第九维度是个谎言",
    get description() { return `恰好拥有 ${formatInt(99)} 个第八反物质维度。`; },
    checkRequirement: () => AntimatterDimension(8).amount.eq(99),
    get reward() { return `第八反物质维度增强 ${formatPercents(0.1)}。`; },
    effect: 1.1
  },
  {
    id: 24,
    name: "反物质启示录",
    get description() { return `获得超过 ${format(DC.E80)} 反物质。`; },
    checkRequirement: () => Currency.antimatter.exponent >= 80,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 25,
    name: "提升到极限",
    get description() { return `购买 ${formatInt(10)} 个维度提升。`; },
    checkRequirement: () => DimBoost.purchasedBoosts >= 10,
    checkEvent: GAME_EVENT.DIMBOOST_AFTER
  },
  {
    id: 26,
    name: "你越过了高墙",
    description: "购买一个反物质星系。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.GALAXY_RESET_BEFORE
  },
  {
    id: 27,
    name: "双重星系",
    get description() { return `购买 ${formatInt(2)} 个反物质星系。`; },
    checkRequirement: () => player.galaxies >= 2,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER
  },
  {
    id: 28,
    name: "那样做毫无意义……",
    get description() {
      return `当你拥有超过 ${format(DC.E150)} 个第一反物质维度时，再购买一个。`;
    },
    checkRequirement: () => AntimatterDimension(1).amount.exponent >= 150,
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `第一反物质维度增强 ${formatPercents(0.1)}。`; },
    effect: 1.1
  },
  {
    id: 31,
    name: "我忘了削弱那个",
    get description() { return `使任意反物质维度的倍率超过 ${formatX(DC.E31)}。`; },
    checkRequirement: () => AntimatterDimensions.all.some(x => x.multiplier.exponent >= 31),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `第一反物质维度增强 ${formatPercents(0.05)}。`; },
    effect: 1.05
  },
  {
    id: 32,
    name: "众神以此为悦",
    get description() { return `在挑战8之外，通过维度献祭获得超过 ${formatX(600)} 的倍率。`; },
    checkRequirement: () => !NormalChallenge(8).isOnlyActiveChallenge && Sacrifice.totalBoost.gte(600),
    checkEvent: GAME_EVENT.SACRIFICE_RESET_AFTER,
    get reward() {
      return `维度献祭更强了。
      ${Sacrifice.getSacrificeDescription({ "Achievement32": false, "Achievement57": false, "Achievement88": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": false, "Achievement88": false })}`;
    },
    effect: 0.1,
  },
  {
    id: 33,
    name: "好多无限",
    get description() { return `达到无限 ${formatInt(10)} 次。`; },
    checkRequirement: () => Currency.infinities.gte(10),
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER
  },
  {
    id: 34,
    name: "反正你也不需要它",
    description: "在没有第八反物质维度的情况下达到无限。",
    checkRequirement: () => AntimatterDimension(8).totalAmount.eq(0),
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `维度 1-7 增强 ${formatPercents(0.02)}。`; },
    effect: 1.02
  },
  {
    id: 35,
    name: "你敢睡觉试试",
    get description() {
      return PlayerProgress.realityUnlocked()
        ? `离线超过 ${formatInt(6)} 小时（实际时间）。`
        : `离线超过 ${formatInt(6)} 小时。`;
    },
    checkRequirement: () => Date.now() - player.lastUpdate >= 21600000,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE
  },
  {
    id: 36,
    name: "幽闭恐惧症",
    get description() {
      return `仅用 ${formatInt(1)} 个反物质星系达到无限。（你的反物质星系会在无限时重置。）`;
    },
    checkRequirement: () => player.galaxies === 1,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `初始Tick速度乘以 ${format(1.02, 2, 2)}。`; },
    effect: 1 / 1.02
  },
  {
    id: 37,
    name: "太快了！",
    get description() { return `在 ${formatInt(2)} 小时内达到无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalHours <= 2,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `初始拥有 ${formatInt(5000)} 反物质。`; },
    effect: 5000
  },
  {
    id: 38,
    name: "我不信神",
    get description() {
      return `在不进行维度献祭的情况下购买一个反物质星系。
        （你的反物质星系会在无限时重置。）`;
    },
    checkRequirement: () => player.requirementChecks.infinity.noSacrifice,
    checkEvent: GAME_EVENT.GALAXY_RESET_BEFORE
  },
  {
    id: 41,
    name: "不需要DLC",
    get description() { return `购买 ${formatInt(16)} 个无限升级。`; },
    checkRequirement: () => player.infinityUpgrades.size >= 16,
    checkEvent: [
      GAME_EVENT.INFINITY_UPGRADE_BOUGHT,
      GAME_EVENT.REALITY_RESET_AFTER,
      GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT
    ],
    get reward() {
      return `解锁两个新的无限升级—— ${formatX(2)} IP 倍率和离线 IP 产出。`;
    },
  },
  {
    id: 42,
    name: "超级索尼克",
    get description() {
      return `使每秒获得的反物质超过你当前反物质的 ${format(DC.E63)} 倍。`;
    },
    checkRequirement: () =>
      Currency.antimatter.exponent >= 63 &&
      Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 43,
    name: "防不胜防..",
    description:
      "使第八反物质维度的倍率最高，第七反物质维度的倍率第二高，以此类推。",
    checkRequirement: () => {
      const multipliers = Array.range(1, 8).map(tier => AntimatterDimension(tier).multiplier);
      for (let i = 0; i < multipliers.length - 1; i++) {
        if (multipliers[i].gte(multipliers[i + 1])) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `每个反物质维度获得一个基于其阶层的加成
      （8维获得 ${formatPercents(0.08)}，7维获得 ${formatPercents(0.07)}，以此类推）`;
    }
  },
  {
    id: 44,
    name: "30秒真男人",
    get description() {
      return `使每秒获得的反物质超过你当前的反物质，持续 ${formatInt(30)} 秒。`;
    },
    checkRequirement: () => AchievementTimers.marathon1
      .check(Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value), 30),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
  },
  {
    id: 45,
    name: "比土豆还快",
    get description() { return `每秒获得超过 ${format(DC.E29)} 个Tick。`; },
    checkRequirement: () => Tickspeed.current.exponent <= -26,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `初始Tick速度乘以 ${formatX(1.02, 0, 2)}。`; },
    effect: 0.98
  },
  {
    id: 46,
    name: "多维",
    get description() { return `除第八维度外，所有反物质维度数量达到 ${format(DC.E12)}。`; },
    checkRequirement: () => AntimatterDimension(7).amount.exponent >= 12,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 47,
    name: "超胆侠",
    get description() { return `完成 ${formatInt(3)} 个普通挑战。`; },
    checkRequirement: () => NormalChallenges.all.countWhere(c => c.isCompleted) >= 3,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
  },
  {
    id: 48,
    name: "反挑战者",
    get description() { return `完成所有 ${formatInt(12)} 个普通挑战。`; },
    checkRequirement: () => NormalChallenges.all.countWhere(c => !c.isCompleted) === 0,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    get reward() { return `所有维度增强 ${formatPercents(0.1)}。`; },
    effect: 1.1
  },
  {
    id: 51,
    name: "突破极限",
    description: "打破无限。",
    checkRequirement: () => player.break,
    checkEvent: [GAME_EVENT.BREAK_INFINITY, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
  },
  {
    id: 52,
    name: "自动化时代",
    description: "使反物质维度和Tick速度升级自动购买器的间隔达到最小。",
    checkRequirement: () => Autobuyer.antimatterDimension.zeroIndexed.concat(Autobuyer.tickspeed)
      .every(a => a.isUnlocked && a.hasMaxedInterval),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT]
  },
  {
    id: 53,
    name: "绝对不值得",
    description: "使所有普通自动购买器的间隔达到最小。",
    // The upgradeable autobuyers are dimensions, tickspeed, dimension boost,
    // galaxy, and big crunch (the ones you get from normal challenges).
    // We don't count autobuyers which can be upgraded via e.g. perks as upgradeable.
    checkRequirement: () => Autobuyers.upgradeable
      .every(a => a.isUnlocked && a.hasMaxedInterval),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT]
  },
  {
    id: 54,
    name: "那更快了！",
    get description() { return `在 ${formatInt(10)} 分钟或更短时间内达到无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalMinutes <= 10,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `初始拥有 ${format(5e5)} 反物质。`; },
    effect: 5e5
  },
  {
    id: 55,
    name: "永远也没多长",
    get description() { return `在 ${formatInt(1)} 分钟或更短时间内达到无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalMinutes <= 1,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `初始拥有 ${format(5e10)} 反物质。`; },
    effect: 5e10
  },
  {
    id: 56,
    name: "死了很多次",
    get description() {
      return `在 ${formatInt(3)} 分钟或更短时间内完成第二反物质维度自动购买器挑战。`;
    },
    checkRequirement: () => NormalChallenge(2).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `在每次无限的前 ${formatInt(3)} 分钟内，所有反物质维度变得更强。`;
    },
    effect: () => Math.max(6 / (Time.thisInfinity.totalMinutes + 3), 1),
    effectCondition: () => Time.thisInfinity.totalMinutes < 3,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 57,
    name: "众神的礼物",
    get description() {
      return `在 ${formatInt(3)} 分钟或更短时间内完成第八反物质维度自动购买器挑战。`;
    },
    checkRequirement: () => NormalChallenge(8).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `维度献祭更强了。
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": false, "Achievement88": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": false })}`;
    },
    effect: 0.1
  },
  {
    id: 58,
    name: "还好。",
    get description() { return `在 ${formatInt(3)} 分钟或更短时间内完成Tick速度自动购买器挑战。`; },
    checkRequirement: () => NormalChallenge(9).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `购买 ${formatInt(10)} 个反物质维度的倍率增加 +${formatPercents(0.01)}。`;
    },
    effect: 1.01
  },
  {
    id: 61,
    name: "批量化",
    get description() {
      return `使所有反物质维度自动购买器的批量购买数量达到
        ${formatInt(Autobuyer.antimatterDimension.bulkCap)}。`;
    },
    checkRequirement: () => Autobuyer.antimatterDimension.zeroIndexed.every(x => x.hasMaxedBulk),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT,
      GAME_EVENT.SAVE_CONVERTED_FROM_PREVIOUS_VERSION],
    reward: "维度自动购买器的批量购买数量无限制。"
  },
  {
    id: 62,
    name: "噢，嘿... 你还在这里？",
    get description() { return `达到每分钟 ${format(DC.E8)} 无限点数。`; },
    checkRequirement: () => Player.bestRunIPPM.exponent >= 8,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER
  },
  {
    id: 63,
    name: "新的开始",
    description: "开始产生无限能量。",
    checkRequirement: () => Currency.infinityPower.gt(1),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 64,
    name: "零死亡",
    description: "在进行普通挑战时，在没有维度提升或反物质星系的情况下达到无限。",
    checkRequirement: () => player.galaxies === 0 && DimBoost.purchasedBoosts === 0 && NormalChallenge.isRunning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `反物质维度 1-4 增强 ${formatPercents(0.25)}。`; },
    effect: 1.25
  },
  {
    id: 65,
    name: "没什么挑战性",
    get description() { return `使所有普通挑战的用时之和低于 ${formatInt(3)} 分钟。`; },
    checkRequirement: () => Time.challengeSum.totalMinutes < 3,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    get reward() {
      return `在每次无限的前 ${formatInt(3)} 分钟内，所有反物质维度变得更强，但仅在挑战中生效。`;
    },
    effect: () => (Player.isInAnyChallenge ? Math.max(4 / (Time.thisInfinity.totalMinutes + 1), 1) : 1),
    effectCondition: () => Player.isInAnyChallenge && Time.thisInfinity.totalMinutes < 3,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 66,
    name: "比平方土豆还快",
    get description() { return `每秒获得超过 ${format(DC.E58)} 个Tick。`; },
    checkRequirement: () => Tickspeed.current.exponent <= -55,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `初始Tick速度乘以 ${formatX(1.02, 0, 2)}。`; },
    effect: 0.98
  },
  {
    id: 67,
    name: "无限挑战",
    description: "完成一个无限挑战。",
    checkRequirement: () => InfinityChallenges.completed.length > 0,
    checkEvent: [GAME_EVENT.INFINITY_CHALLENGE_COMPLETED, GAME_EVENT.REALITY_RESET_AFTER]
  },
  {
    id: 68,
    name: "你再做一次只是为了成就对吧？",
    get description() {
      return `在 ${formatInt(10)} 秒或更短时间内完成第三反物质维度自动购买器挑战。`;
    },
    checkRequirement: () => NormalChallenge(3).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalSeconds <= 10,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `第一反物质维度增强 ${formatPercents(0.5)}。`; },
    effect: 1.5
  },
  {
    id: 71,
    name: "错误 909：未找到维度",
    description:
      `在进行第二反物质维度自动购买器挑战时，仅使用一个第一反物质维度，且没有维度提升或反物质星系的情况下达到无限。`,
    checkRequirement: () =>
      NormalChallenge(2).isOnlyActiveChallenge &&
      AntimatterDimension(1).amount.eq(1) &&
      DimBoost.purchasedBoosts === 0 &&
      player.galaxies === 0,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `第一反物质维度增强 ${formatInt(3)} 倍。`; },
    effect: 3
  },
  {
    id: 72,
    name: "这些无限我都要",
    get description() {
      return `使所有反物质维度的倍率超过 ${formatX(Decimal.NUMBER_MAX_VALUE, 1)}。`;
    },
    checkRequirement: () => AntimatterDimensions.all.every(x => x.multiplier.gte(Decimal.NUMBER_MAX_VALUE)),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `所有反物质维度增强 ${formatPercents(0.1)}。`; },
    effect: 1.1
  },
  {
    id: 73,
    name: "这个成就不存在",
    get description() { return `获得 ${formatPostBreak(DC.D9_9999E9999, 4)} 反物质。`; },
    checkRequirement: () => Currency.antimatter.gte(DC.D9_9999E9999),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "反物质维度获得基于当前反物质的倍率。",
    effect: () => Currency.antimatter.value.pow(0.00002).plus(1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 74,
    name: "一秒不差",
    get description() { return `使所有普通挑战的最佳用时之和低于 ${formatInt(5)} 秒。`; },
    checkRequirement: () => Time.challengeSum.totalSeconds < 5,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    get reward() { return `所有反物质维度增强 ${formatPercents(0.4)}，但仅在挑战中生效。`; },
    effect: 1.4,
    effectCondition: () => Player.isInAnyChallenge
  },
  {
    id: 75,
    name: "新维度？？？",
    description: "解锁第四无限维度。",
    checkRequirement: () => InfinityDimension(4).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "你的成就加成会影响无限维度。",
    effect: () => Achievements.power
  },
  {
    id: 76,
    name: "每个维度一天",
    get description() { return `游玩 ${formatInt(8)} 天。`; },
    checkRequirement: () => Time.totalTimePlayed.totalDays >= 8,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "基于游戏时间，反物质维度获得极小的倍率加成。",
    effect: () => Math.max(Math.pow(Time.totalTimePlayed.totalDays / 2, 0.05), 1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 77,
    name: "100万很多了",
    get description() { return `达到 ${format(1e6)} 无限能量。`; },
    checkRequirement: () => Currency.infinityPower.exponent >= 6,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 78,
    name: "眨眼之间",
    get description() { return `在 ${formatInt(250)} 毫秒或更短时间内达到无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalMilliseconds <= 250,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `初始拥有 ${format(5e25)} 反物质。`;
    },
    effect: 5e25
  },
  {
    id: 81,
    name: "游戏设计是我的热情所在",
    get description() { return `在 ${formatInt(15)} 秒或更短时间内完成无限挑战 5。`; },
    checkRequirement: () => InfinityChallenge(5).isRunning && Time.thisInfinityRealTime.totalSeconds <= 15,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE
  },
  {
    id: 82,
    name: "反-反挑战者",
    get description() { return `完成所有 ${formatInt(8)} 个无限挑战。`; },
    checkRequirement: () => InfinityChallenges.completed.length === 8,
    checkEvent: [GAME_EVENT.INFINITY_CHALLENGE_COMPLETED, GAME_EVENT.REALITY_RESET_AFTER],
  },
  {
    id: 83,
    name: "你有50个星系？！？！",
    get description() { return `拥有 ${formatInt(50)} 个反物质星系。`; },
    checkRequirement: () => player.galaxies >= 50,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    get reward() { return `每个反物质星系使 Tick 速度额外加快 ${formatPercents(0.05)}。`; },
    effect: () => DC.D0_95.pow(player.galaxies),
    formatEffect: value => `${formatX(value.recip(), 2, 2)}`
  },
  {
    id: 84,
    name: "我还有一点备用的",
    get description() { return `达到 ${formatPostBreak("1e35000")} 反物质。`; },
    checkRequirement: () => Currency.antimatter.exponent >= 35000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "反物质维度基于你未花费的反物质变得更强。",
    effect: () => Currency.antimatter.value.pow(0.00002).plus(1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 85,
    name: "你所有的IP都属于我们",
    get description() { return `一次大坍缩获得 ${format(DC.E150)} 无限点数。`; },
    checkRequirement: () => gainedInfinityPoints().exponent >= 150,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `无限点数获得额外的 ${formatX(4)} 倍率。`; },
    effect: 4
  },
  {
    id: 86,
    name: "你会扭曲时间吗兄弟？",
    get description() { return `使每个 Tick 速度升级的效果达到 ${formatX(1000)} 倍。`; },
    checkRequirement: () => Tickspeed.multiplier.recip().gte(1000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `所有星系增强 ${formatPercents(0.01)}。`; },
    effect: 1.01
  },
  {
    id: 87,
    name: "200万次无限",
    get description() { return `无限 ${format(DC.D2E6)} 次。`; },
    checkRequirement: () => Currency.infinities.gt(DC.D2E6),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `超过 ${formatInt(5)} 秒的无限
      额外获得 ${formatX(250)} 倍无限次数。`;
    },
    effect: 250,
    effectCondition: () => Time.thisInfinity.totalSeconds > 5
  },
  {
    id: 88,
    name: "又一个无限致敬",
    get description() {
      return `一次维度献祭获得 ${formatX(Decimal.NUMBER_MAX_VALUE, 1, 0)} 倍率。`;
    },
    checkRequirement: () => Sacrifice.nextBoost.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.SACRIFICE_RESET_BEFORE,
    get reward() {
      return `维度献祭更强了。
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": true })}`;
    },
    effect: 0.1
  },
  {
    id: 91,
    name: "极速狂飙",
    get description() {
      return `在 ${formatInt(2)} 秒或更短时间内通过大坍缩获得 ${format(DC.E200)} 无限点数。`;
    },
    checkRequirement: () => gainedInfinityPoints().exponent >= 200 && Time.thisInfinityRealTime.totalSeconds <= 2,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `在每次无限的前 ${formatInt(5)} 秒内，所有反物质维度显著增强。`;
    },
    effect: () => Math.max((5 - Time.thisInfinity.totalSeconds) * 60, 1),
    effectCondition: () => Time.thisInfinity.totalSeconds < 5,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 92,
    name: "我谁也不让！",
    get description() {
      return `在 ${formatInt(20)} 秒或更短时间内通过大坍缩获得 ${format(DC.E250)} 无限点数。`;
    },
    checkRequirement: () => gainedInfinityPoints().exponent >= 250 && Time.thisInfinityRealTime.totalSeconds <= 20,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `在每次无限的前 ${formatInt(60)} 秒内，所有反物质维度显著增强。`;
    },
    effect: () => Math.max((1 - Time.thisInfinity.totalMinutes) * 100, 1),
    effectCondition: () => Time.thisInfinity.totalMinutes < 1,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 93,
    name: "最大超速",
    get description() { return `一次大坍缩获得 ${format(DC.E300)} 无限点数。`; },
    checkRequirement: () => gainedInfinityPoints().exponent >= 300,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `无限点数获得额外的 ${formatX(4)} 倍率。`; },
    effect: 4
  },
  {
    id: 94,
    name: "4.3333分钟的无限",
    get description() { return `达到 ${format(DC.E260)} 无限能量。`; },
    checkRequirement: () => Currency.infinityPower.exponent >= 260,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "无限能量获取翻倍。",
    effect: 2
  },
  {
    id: 95,
    name: "这安全吗？",
    get description() { return `在 ${formatInt(1)} 小时内获得 ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} 复制器。`; },
    get reward() { return `你在无限时保留你的复制器和 ${formatInt(1)} 个复制器星系。`; },
    checkRequirement: () =>
      (Replicanti.amount.eq(Decimal.NUMBER_MAX_VALUE) || player.replicanti.galaxies > 0) &&
      Time.thisInfinityRealTime.totalHours <= 1,
    checkEvent: GAME_EVENT.REPLICANTI_TICK_AFTER
  },
  {
    id: 96,
    name: "时间是相对的",
    description: "进行永恒。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 97,
    name: "就像踩在乐高上",
    get description() { return `使无限挑战的用时之和低于 ${format(6.66, 2, 2)} 秒。`; },
    checkRequirement: () => Time.infinityChallengeSum.totalSeconds < 6.66,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
  },
  {
    id: 98,
    name: "距离无限0度",
    description: "解锁第八无限维度。",
    checkRequirement: () => InfinityDimension(8).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 101,
    name: "没人有时间做那个",
    description: "在不购买反物质维度 1-7 的情况下进行永恒。",
    checkRequirement: () => player.requirementChecks.eternity.onlyAD8,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 102,
    name: "这英里花了一永恒",
    description: "获得所有永恒里程碑。",
    checkRequirement: () => EternityMilestone.all.every(m => m.isReached),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 103,
    name: "这个成就不存在 II",
    get description() { return `达到 ${formatPostBreak(DC.D9_99999E999, 5, 0)} 无限点数。`; },
    checkRequirement: () => Currency.infinityPoints.exponent >= 1000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `优化无限点数公式。log(x)/${formatInt(308)} ➜ log(x)/${formatFloat(307.8, 1)}`;
    },
    effect: 307.8
  },
  {
    id: 104,
    name: "那不算永恒",
    get description() { return `在 ${formatInt(30)} 秒内进行永恒。`; },
    checkRequirement: () => Time.thisEternity.totalSeconds <= 30,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    get reward() { return `永恒时初始拥有 ${format(5e25)} 无限点数。`; },
    effect: 5e25
  },
  {
    id: 105,
    name: "无限时间",
    get description() { return `从时间维度获得 ${formatInt(308)} 个 Tick 速度升级。`; },
    checkRequirement: () => player.totalTickGained >= 308,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "时间维度基于 Tick 速度获得倍率加成。",
    effect: () => Tickspeed.perSecond.pow(0.000005),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 106,
    name: "虫群",
    get description() { return `在 ${formatInt(15)} 秒内获得 ${formatInt(10)} 个复制器星系。`; },
    checkRequirement: () => Replicanti.galaxies.total >= 10 && Time.thisInfinity.totalSeconds <= 15,
    checkEvent: GAME_EVENT.REPLICANTI_TICK_AFTER
  },
  {
    id: 107,
    name: "你真的需要指南吗？",
    get description() { return `在少于 ${formatInt(10)} 次无限的情况下进行永恒。`; },
    checkRequirement: () => Currency.infinities.lt(10),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 108,
    name: "我们买得起 9 个",
    get description() { return `在持有正好 ${formatInt(9)} 个复制器的情况下进行永恒。`; },
    checkRequirement: () => Replicanti.amount.round().eq(9),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 111,
    name: "哟兄弟，听说你喜欢无限...",
    get description() {
      return `使你过去 ${formatInt(10)} 次无限中，每一次的无限点数都比前一次高至少
      ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} 倍。`;
    },
    checkRequirement: () => {
      if (player.records.recentInfinities.some(i => i[0] === Number.MAX_VALUE)) return false;
      const infinities = player.records.recentInfinities.map(run => run[2]);
      for (let i = 0; i < infinities.length - 1; i++) {
        if (infinities[i].lt(infinities[i + 1].times(Decimal.NUMBER_MAX_VALUE))) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    reward: "你的反物质不会因维度提升或反物质星系而重置。"
  },
  {
    id: 112,
    name: "绝不再来",
    get description() { return `使无限挑战的用时之和低于 ${formatInt(750)} 毫秒。`; },
    checkRequirement: () => Time.infinityChallengeSum.totalMilliseconds < 750,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER]
  },
  {
    id: 113,
    name: "永恒是新的无限",
    get description() { return `在 ${formatInt(250)} 毫秒内进行永恒。`; },
    checkRequirement: () => Time.thisEternity.totalMilliseconds <= 250,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    get reward() { return `获得 ${formatX(2)} 倍永恒次数。`; },
    effect: 2,
  },
  {
    id: 114,
    name: "你是个错误",
    description: "在永恒挑战中失败。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.CHALLENGE_FAILED,
    reward: "一种逐渐消逝的成就感。",
    effect: () => "成就感（逐渐消逝）"
  },
  {
    id: 115,
    name: "我希望我有7次永恒",
    description: "在永恒挑战中开始一个无限挑战。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 116,
    name: "我真的需要无限吗",
    get description() { return `在只有 ${formatInt(1)} 次无限的情况下进行永恒。`; },
    checkRequirement: () => Currency.infinities.lte(1),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    reward: "基于无限次数倍增无限点数。",
    effect: () => Decimal.pow(Currency.infinitiesTotal.value.clampMin(1), LOG10_2 / 4).powEffectOf(TimeStudy(31)),
    cap: () => Effarig.eternityCap,
    formatEffect: value => {
      // Since TS31 is already accounted for in the effect prop, we need to "undo" it to display the base value here
      const mult = formatX(value, 2, 2);
      return TimeStudy(31).canBeApplied
        ? `${formatX(value.pow(1 / TimeStudy(31).effectValue), 2, 1)} (After TS31: ${mult})`
        : mult;
    }
  },
  {
    id: 117,
    name: "Costco 现在卖维度提升了！",
    get description() { return `一次性批量购买 ${formatInt(750)} 个维度提升。`; },
    checkRequirement: ([bulk]) => bulk >= 750,
    checkEvent: GAME_EVENT.DIMBOOST_AFTER,
    get reward() {
      return `维度提升对反物质维度的倍率增加 ${formatPercents(0.01)}。`;
    },
    effect: 1.01
  },
  {
    id: 118,
    name: "战力突破 9000",
    get description() { return `维度献祭的总倍率达到 ${formatPostBreak(DC.E9000)}。`; },
    checkRequirement: () => Sacrifice.totalBoost.exponent >= 9000,
    checkEvent: GAME_EVENT.SACRIFICE_RESET_AFTER,
    reward: `维度献祭不再重置你的反物质维度，
      且自动购买器开启时每个 Tick 都会触发。`,
  },
  {
    id: 121,
    name: "你能获得无限 IP 吗？",
    get description() { return `达到 ${formatPostBreak("1e30008")} 无限点数。`; },
    checkRequirement: () => Currency.infinityPoints.exponent >= 30008,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 122,
    name: "你已经死了。",
    description: "在不购买反物质维度 2-8 的情况下进行永恒。",
    checkRequirement: () => player.requirementChecks.eternity.onlyAD1,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE
  },
  {
    id: 123,
    name: "距离更新还有 5 个永恒",
    get description() { return `完成 ${formatInt(50)} 个不同的永恒挑战层级。`; },
    checkRequirement: () => EternityChallenges.completions >= 50,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER
  },
  {
    id: 124,
    name: "长久的羁绊",
    get description() {
      return `在单次无限中，使你的每秒无限能量获取连续 ${formatInt(60)} 秒
      超过你当前的无限能量。`;
    },
    checkRequirement: () => AchievementTimers.marathon2
      .check(
        !EternityChallenge(7).isRunning &&
        InfinityDimension(1).productionPerSecond.gt(Currency.infinityPower.value),
        60
      ),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 125,
    name: "如同享用臀部盛宴",
    get description() {
      return `在当前永恒中，在没有任何无限次数或第一反物质维度的情况下，
      达到 ${format(DC.E90)} 无限点数。`;
    },
    checkRequirement: () => Currency.infinityPoints.exponent >= 90 &&
      player.requirementChecks.eternity.noAD1 && Currency.infinities.eq(0),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "基于本次无限的时间倍增无限点数。",
    effect() {
      const thisInfinity = Time.thisInfinity.totalSeconds * 10 + 1;
      return DC.D2.pow(Math.log(thisInfinity) * Math.min(Math.pow(thisInfinity, 0.11), 500));
    },
    cap: () => Effarig.eternityCap,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 126,
    name: "流行音乐",
    get description() { return `拥有的复制器星系数量是反物质星系的 ${formatInt(180)} 倍。`; },
    checkRequirement: () => Replicanti.galaxies.total >= 180 * player.galaxies && player.galaxies > 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `复制器星系不再将复制器重置为 ${formatInt(1)}，
      而是除以 ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)}。`;
    },
  },
  {
    id: 127,
    name: "但我想要另一层转生...",
    get description() { return `达到 ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} 永恒点数。`; },
    checkRequirement: () => Currency.eternityPoints.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 128,
    name: "我该怎么做才能摆脱你",
    get description() { return `在没有时间研究的情况下达到 ${formatPostBreak("1e22000")} 无限点数。`; },
    checkRequirement: () => Currency.infinityPoints.exponent >= 22000 && player.timestudy.studies.length === 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "时间维度获得基于你拥有的时间研究数量的倍率。",
    effect: () => Math.max(player.timestudy.studies.length, 1),
    formatEffect: value => `${formatX(value)}`
  },
  {
    id: 131,
    name: "没有道德的消费",
    get description() { return `获得 ${format(DC.D2E9)} 存储的无限次数。`; },
    checkRequirement: () => Currency.infinitiesBanked.gt(DC.D2E9),
    checkEvent: [GAME_EVENT.ETERNITY_RESET_AFTER, GAME_EVENT.SAVE_CONVERTED_FROM_PREVIOUS_VERSION],
    get reward() {
      return `你获得的无限次数 ${formatX(2)}，
      且永恒后永久保留 ${formatPercents(0.05)} 的无限次数作为存储的无限次数。`;
    },
    effects: {
      infinitiesGain: 2,
      bankedInfinitiesGain: () => Currency.infinities.value.times(0.05).floor()
    }

  },
  {
    id: 132,
    name: "独特的雪花",
    get description() {
      return `在当前永恒中，在不获得任何复制器星系的情况下
        拥有 ${formatInt(569)} 个反物质星系。`;
    },
    checkRequirement: () => player.galaxies >= 569 && player.requirementChecks.eternity.noRG,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    reward: "基于反物质星系数量，倍增超光速粒子和膨胀时间的获取。",
    effect: () => 1.22 * Math.max(Math.pow(player.galaxies, 0.04), 1),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 133,
    name: "反正我从没喜欢过这些无限的东西",
    get description() {
      return `在不购买任何无限维度或 ${formatX(2)} 无限点数倍率的情况下，
      达到 ${formatPostBreak(DC.E200000)} 无限点数。`;
    },
    checkRequirement: () =>
      Array.dimensionTiers.map(InfinityDimension).every(dim => dim.baseAmount === 0) &&
      player.IPMultPurchases === 0 &&
      Currency.infinityPoints.exponent >= 200000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "永恒时初始解锁并完成所有无限挑战。"
  },
  {
    id: 134,
    name: "何时才是个头？",
    get description() { return `达到 ${formatPostBreak(DC.E18000)} 复制器。`; },
    checkRequirement: () => Replicanti.amount.exponent >= 18000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `当复制器数量低于 ${format(replicantiCap(), 1)} 时，复制器获取速度 ${formatInt(2)}。`;
    },
  },
  {
    id: 135,
    name: "比土豆^286078 还快",
    get description() { return `每秒获得超过 ${formatPostBreak("1e8296262")} 个 Tick。`; },
    checkRequirement: () => Tickspeed.current.exponent <= -8296262,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 136,
    name: "我已经告诉过你了，时间是相对的",
    description: "进行时间膨胀。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
  },
  {
    id: 137,
    name: "现在你用膨胀来思考了！",
    get description() {
      return `在膨胀状态下，${formatInt(1)} 分钟内
      获得 ${formatPostBreak("1e260000")} 反物质。`;
    },
    checkRequirement: () =>
      Currency.antimatter.exponent >= 260000 &&
      Time.thisEternity.totalMinutes <= 1 &&
      player.dilation.active,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `膨胀状态下获得 ${formatX(2)} 倍的膨胀时间和时间定理。`; },
    effect: () => (player.dilation.active ? 2 : 1),
  },
  {
    id: 138,
    name: "这就是为了摆脱你我必须做的。",
    get description() {
      return `在膨胀状态下，且没有任何时间研究的情况下，
      达到 ${formatPostBreak("1e26000")} 无限点数。`;
    },
    checkRequirement: () =>
      player.timestudy.studies.length === 0 &&
      player.dilation.active &&
      Currency.infinityPoints.exponent >= 26000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "移除主动和闲置时间研究路径中时间研究 131 和 133 的负面效果。"
  },
  {
    id: 141,
    name: "回归现实",
    description: "进行一次现实。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() {
      return `${formatX(4)} 无限点数获取，且购买 ${formatInt(10)}
      个反物质维度的倍率增加 +${format(0.1, 0, 1)}。`;
    },
    effects: {
      ipGain: 4,
      buyTenMult: 0.1
    }
  },
  {
    id: 142,
    name: "这怎么运作？",
    description: "解锁自动机。",
    checkRequirement: () => Player.automatorUnlocked,
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_BOUGHT, GAME_EVENT.PERK_BOUGHT,
      GAME_EVENT.BLACK_HOLE_UNLOCKED],
    get reward() { return `维度提升的效果增强 ${formatPercents(0.5)}。`; },
    effect: 1.5,
  },
  {
    id: 143,
    name: "哟兄弟，听说你喜欢换皮...",
    get description() {
      return `使你过去 ${formatInt(10)} 次永恒中，每一次的永恒点数都比前一次高至少
      ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} 倍。`;
    },
    checkRequirement: () => {
      if (player.records.recentEternities.some(i => i[0] === Number.MAX_VALUE)) return false;
      const eternities = player.records.recentEternities.map(run => run[2]);
      for (let i = 0; i < eternities.length - 1; i++) {
        if (eternities[i].lt(eternities[i + 1].times(Decimal.NUMBER_MAX_VALUE))) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    reward: "反物质星系不再重置维度提升。"
  },
  {
    id: 144,
    name: "这是星际穿越梗吗？",
    description: "解锁黑洞。",
    checkRequirement: () => BlackHole(1).isUnlocked,
    checkEvent: GAME_EVENT.BLACK_HOLE_UNLOCKED,
  },
  {
    id: 145,
    name: "你确定方向没反吗？",
    description: "使任意黑洞的间隔时间小于其持续时间。",
    checkRequirement: () => BlackHoles.list.some(bh => bh.interval < bh.duration),
    checkEvent: GAME_EVENT.BLACK_HOLE_UPGRADE_BOUGHT,
    get reward() { return `黑洞间隔时间减少 ${formatPercents(0.1)}。`; },
    effect: 0.9
  },
  {
    id: 146,
    name: "生存的特权",
    description: "购买所有特权。",
    checkRequirement: () => player.reality.perks.size === Perks.all.length,
    checkEvent: GAME_EVENT.PERK_BOUGHT,
    get reward() { return `+${formatPercents(0.01)} 符文稀有度。`; },
    effect: 1
  },
  {
    id: 147,
    name: "现实大师",
    description: "购买所有现实升级。",
    checkRequirement: () => RealityUpgrades.allBought,
    checkEvent: GAME_EVENT.REALITY_UPGRADE_BOUGHT,
    reward: "解锁现实天神特蕾莎。"
  },
  {
    id: 148,
    name: "皇家同花顺",
    description: "携带每种基础符文类型各一个进行现实。",
    checkRequirement: () => BASIC_GLYPH_TYPES
      .every(type => Glyphs.activeList.some(g => g.type === type)),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    reward: "获得的符文等级增加，增加量等于装备的不同符文类型数量。",
    effect: () => (new Set(Glyphs.activeWithoutCompanion.map(g => g.type))).size,
    formatEffect: value => `+${formatInt(value)}`
  },
  {
    id: 151,
    name: "反正你真的不需要它",
    get description() {
      return `在当前无限中，在不购买第 ${formatInt(8)} 反物质维度的情况下
      获得 ${formatInt(800)} 个反物质星系。`;
    },
    checkRequirement: () => player.galaxies >= 800 && player.requirementChecks.infinity.noAD8,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    reward: "解锁成就天神 V。"
  },
  {
    id: 152,
    name: "你们还有符文吗？",
    get description() { return `库存中有 ${formatInt(100)} 个符文。`; },
    checkRequirement: () => Glyphs.inventoryList.length >= 100,
    checkEvent: GAME_EVENT.GLYPHS_CHANGED
  },
  {
    id: 153,
    name: "更像是“真没关系”",
    description: "在不生产反物质的情况下进行现实。",
    checkRequirement: () => player.requirementChecks.reality.noAM,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
  },
  {
    id: 154,
    name: "我是速度",
    get description() { return `在 ${formatInt(5)} 秒（游戏时间）内进行现实。`; },
    checkRequirement: () => Time.thisReality.totalSeconds <= 5,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `每次现实有 ${formatPercents(0.1)} 几率获得 ${formatX(2)} 倍现实次数和特权点数。`; },
    effect: 0.1
  },
  {
    id: 155,
    name: "成就 #15983",
    get description() { return `游玩时间达到 ${formatFloat(13.7, 1)} 亿年。`; },
    checkRequirement: () => Time.totalTimePlayed.totalYears > 13.7e9,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `黑洞持续时间增加 ${formatPercents(0.1)}。`; },
    effect: 1.1
  },
  {
    id: 156,
    name: "大学辍学",
    description: "在不购买时间定理的情况下进行现实。",
    checkRequirement: () => player.requirementChecks.reality.noPurchasedTT,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `获得 ${formatX(2.5, 0, 1)} 倍生成的时间定理，以及一张麦当劳™️的免费优惠券。`; },
    effect: 2.5
  },
  {
    id: 157,
    name: "效果拔群！",
    get description() { return `获得一个拥有 ${formatInt(4)} 个效果的符文。`; },
    checkRequirement: () => Glyphs.activeList.concat(Glyphs.inventoryList).map(
      glyph => getGlyphEffectsFromBitmask(glyph.effects, 0, 0)
        .filter(effect => effect.isGenerated).length
    ).max() >= 4,
    checkEvent: GAME_EVENT.GLYPHS_CHANGED
  },
  {
    id: 158,
    name: "兄弟，你是住在洞里吗？",
    description: "使两个黑洞都变为永久激活。",
    checkRequirement: () => BlackHole(1).isPermanent && BlackHole(2).isPermanent,
    checkEvent: GAME_EVENT.BLACK_HOLE_UPGRADE_BOUGHT,
    get reward() { return `黑洞效果增强 ${formatPercents(0.1)}。`; },
    effect: 1.1
  },
  {
    id: 161,
    name: "那你就错了，孩子",
    get description() { return `在膨胀状态下获得 ${formatPostBreak(DC.E1E8)} 反物质。`; },
    checkRequirement: () => Currency.antimatter.exponent >= 100000000 && player.dilation.active,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 162,
    name: "重装游戏并重新加入服务器",
    description: "同时拥有所有时间研究。",
    checkRequirement: () => player.timestudy.studies.length >= 58,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 163,
    name: "实际上，超级简单！几乎没有不便！",
    get description() {
      return `在当前现实中，在少于 ${formatInt(1)} 秒（游戏时间）内
      完成所有永恒挑战各 ${formatInt(5)} 次。`;
    },
    checkRequirement: () => EternityChallenges.all.map(ec => ec.completions).min() >= 5 &&
      Time.thisReality.totalSeconds <= 1,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 164,
    name: "无限乘以二",
    get description() { return `获得 ${format(Decimal.NUMBER_MAX_VALUE, 1)} 次无限。`; },
    checkRequirement: () => Currency.infinitiesTotal.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `获得的无限次数 ×${formatInt(1024)}。`; },
    effect: 1024
  },
  {
    id: 165,
    name: "完美平衡",
    get description() { return `获得一个等级 ${formatInt(5000)} 的符文，且所有符文等级权重相等。`; },
    checkRequirement: () => gainedGlyphLevel().actualLevel >= 5000 &&
      ["repl", "dt", "eternities"].every(
        i => player.celestials.effarig.glyphWeights[i] === player.celestials.effarig.glyphWeights.ep),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    reward: "解锁最佳自动符文等级权重调整。"
  },
  {
    id: 166,
    name: "好耶好耶。",
    get description() { return `获得一个等级正好为 ${formatInt(6969)} 的符文。`; },
    checkRequirement: () => gainedGlyphLevel().actualLevel === 6969,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `符文等级 +${formatInt(69)}。`; },
    effect: 69
  },
  {
    id: 167,
    name: "Layer 先生？抱歉，你不在名单上",
    get description() { return `达到 ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)} 现实机器。`; },
    checkRequirement: () => Currency.realityMachines.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "基于你当前的现实机器数量获得更多现实机器。",
    effect: () => Math.clampMin(1, Currency.realityMachines.value.log2()),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    id: 168,
    name: "哇，我们已经走了一半了",
    get description() { return `总共获得 ${formatInt(50)} 个拉天神记忆等级。`; },
    checkRequirement: () => Ra.totalPetLevel >= 50,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `获得 ${formatPercents(0.1)} 更多记忆。`; },
    effect: 1.1
  },
  {
    id: 171,
    name: "神明很高兴",
    description: "献祭每种可献祭的符文类型至少一次。",
    checkRequirement: () => Object.values(player.reality.glyphs.sac).every(s => s > 0),
    checkEvent: GAME_EVENT.GLYPHS_CHANGED,
    get reward() { return `符文献祭效果增强 ${formatX(2)} 倍。`; },
    effect: 2,
  },
  {
    id: 172,
    name: "现实漫游指南",
    get description() {
      return `在不拥有任何充能无限升级、不装备任何符文、不购买任何三元研究的情况下，
      以 ${format(Decimal.NUMBER_MAX_VALUE, 1)} 现实机器进行现实。`;
    },
    checkRequirement: () => MachineHandler.gainedRealityMachines.gte(Decimal.NUMBER_MAX_VALUE) &&
      player.celestials.ra.charged.size === 0 && Glyphs.activeWithoutCompanion.length === 0 &&
      player.requirementChecks.reality.noTriads,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
  },
  {
    id: 173,
    name: "这个成就不存在 III",
    get description() { return `达到 ${formatPostBreak(DC.D9_99999E999, 5, 0)} 现实机器。`; },
    checkRequirement: () => player.reality.realityMachines.gte(DC.D9_99999E999),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 174,
    name: "你不是已经有两个了吗？",
    description: "获得一个奇点。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.SINGULARITY_RESET_BEFORE
  },
  {
    id: 175,
    name: "第一位反历史学家",
    get description() { return `获得所有炼金资源各 ${formatInt(Ra.alchemyResourceCap)} 个。`; },
    checkRequirement: () => AlchemyResources.all.every(x => x.amount >= Ra.alchemyResourceCap),
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    get reward() {
      return `协同效应可以超过 ${formatPercents(1)}，动量增加速度快 ${formatX(10)} 倍。`;
    },
    effect: 10,
  },
  {
    id: 176,
    name: "妈妈数到 3 了",
    description: "湮灭你的暗物质维度。",
  },
  {
    id: 177,
    name: "这英里花了一个天神",
    description: "完成所有奇点里程碑至少一次。",
    checkRequirement: () => SingularityMilestones.all.every(x => x.completions > 0),
    checkEvent: GAME_EVENT.SINGULARITY_RESET_AFTER,
  },
  {
    id: 178,
    name: "世界的毁灭者",
    get description() { return `获得 ${formatInt(100000)} 个反物质星系。`; },
    checkRequirement: () => player.galaxies >= 100000,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    get reward() { return `所有星系增强 ${formatPercents(0.01)}。`; },
    effect: 1.01
  },
  {
    id: 181,
    displayId: 666,
    name: "反物质维度永恒",
    description: "毁灭你的现实。",
    checkRequirement: () => Pelle.isDoomed,
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
  },
  {
    id: 182,
    name: "再一次",
    description: "永久取回所有反物质维度自动购买器。",
    checkRequirement: () => PelleUpgrade.antimatterDimAutobuyers1.canBeApplied &&
      PelleUpgrade.antimatterDimAutobuyers2.canBeApplied,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 183,
    name: "似曾相识 vOoM",
    description: "在毁灭状态下完成无限挑战 5。",
    checkRequirement: () => Pelle.isDoomed && InfinityChallenge(5).isCompleted,
    checkEvent: GAME_EVENT.INFINITY_CHALLENGE_COMPLETED,
    // Weirdly specific reward? Yes, its V's ST bonus because we forgot to disable it
    // when balancing Pelle and only realised too late.
    get reward() { return `所有反物质维度获得 ^${formatPow(1.0812403840463596, 0, 3)} 的指数加成。`; },
    effect: 1.0812403840463596
  },
  {
    id: 184,
    name: "你出局了！",
    description: "遭遇第三次佩尔打击。",
    checkRequirement: () => PelleStrikes.eternity.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED
  },
  {
    id: 185,
    name: "八十七年前",
    description: "遭遇第四次佩尔打击。",
    checkRequirement: () => PelleStrikes.ECs.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED
  },
  {
    id: 186,
    displayId: 181,
    name: "不健康的痴迷",
    description: `在毁灭状态下购买时间研究 181。`,
  },
  {
    id: 187,
    name: "有膨胀时间的那个",
    description: "在毁灭状态下解锁膨胀。",
    checkRequirement: () => PelleStrikes.dilation.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED,
    // We forgot to disable a singularity milestone while balancing Pelle; now it's disabled
    // and this upgrade has the same effect as it used to.
    get reward() {
      return `可重复购买的膨胀时间倍率升级的倍率增加 ${formatX(1.35, 0, 2)} 倍。`;
    },
    effect: 1.35
  },
  {
    id: 188,
    name: "终焉",
    description: "通关游戏。",
    checkRequirement: () => GameEnd.endState > END_STATE_MARKERS.GAME_END && !GameEnd.removeAdditionalEnd,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
];
