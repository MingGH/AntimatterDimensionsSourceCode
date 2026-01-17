<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "BigCrunchModal",
  components: {
    ResetModal
  },
  data() {
    return {
      gainedInfinities: new Decimal(),
      gainedInfinityPoints: new Decimal(),
      startingBoosts: 0,
      startingAM: 10,
      willStartWithGalaxy: false
    };
  },
  computed: {
    isFirstInfinity() {
      return !PlayerProgress.infinityUnlocked();
    },
    message() {
      const info = this.isFirstInfinity ? this.firstInfinityInfo : ``;
      return `无限后，所有维度、维度提升和反物质星系将被重置。${info}`;
    },
    firstInfinityInfo() {
      return `作为回报，你将获得一个无限点数 (IP)。这允许你购买无限标签页中的多种升级。你还将获得一次无限，这是统计标签页中显示的统计数据。`;
    },
    ipGainInfo() {
      return `你将获得 ${format(this.gainedInfinities, 2, 0)} 次无限
        和 ${format(this.gainedInfinityPoints, 2, 0)} 无限点数。`;
    },
    startingResources() {
      const gainedResources = [];
      if (this.startingAM.gte(10)) gainedResources.push(`${format(this.startingAM, 2, 1)} 反物质`);
      if (this.startingBoosts > 0) gainedResources.push(`${formatInt(this.startingBoosts)} 维度提升`);
      if (this.willStartWithGalaxy) gainedResources.push(`1 星系`);

      return `你将在下一次无限开始时拥有 ${makeEnumeration(gainedResources)}。`;
    }
  },
  methods: {
    update() {
      this.gainedInfinities = gainedInfinities().round();
      this.gainedInfinityPoints = gainedInfinityPoints().round();
      this.startingBoosts = DimBoost.startingDimensionBoosts;
      this.startingAM = Currency.antimatter.startingValue;
      this.willStartWithGalaxy = InfinityUpgrade.skipResetGalaxy.isBought;
    },
    handleYesClick() {
      bigCrunchResetRequest();
      EventHub.ui.offAll(this);
      if (this.isFirstInfinity) {
        setTimeout(() => Modal.message.show(`This animation will occur after every manually-triggered Infinity. If
          you would like to disable it, there is a setting to do so in the Options tab. This can be done for any
          visual animation effect in the game after seeing it for the first time.`, {}, 3), 2000);
      }
    }
  },
};
</script>

<template>
  <ResetModal
    header="你即将无限"
    :message="message"
    :gained-resources="ipGainInfo"
    :starting-resources="startingResources"
    :confirm-fn="handleYesClick"
    :alternate-condition="isFirstInfinity"
    :alternate-text="message"
    :confirm-option="isFirstInfinity ? undefined : 'bigCrunch'"
  />
</template>
