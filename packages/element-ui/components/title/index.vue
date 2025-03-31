<template>
  <div class="title-header">
    <div class="title-header--left">
      <slot />
    </div>
    <slot name="right" class="title-header--right" />
    <div v-if="hasUnpack" class="title-header--right" @click="modelValue = !modelValue">
      <template v-if="modelValue">
        收起
        <i class="el-icon-arrow-up" />
      </template>
      <template v-if="!modelValue">
        展开
        <i class="el-icon-arrow-down" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    hasUnpack: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modelValue: this.value,
    }
  },
  watch: {
    value(val) {
      this.modelValue = val
    },
    modelValue(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.title-header {
  display: flex;
  align-items: center;

  &::before {
    content:'';
    display:inline-block;
    margin-right: 8px;
    width: 4px;
    height: 12px;
    line-height: 24px;
    background: var(--cs-color_primary);
  }

  &--left {
    display: flex;
    flex: 1;
    height: 24px;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    align-items: center;
  }

  &--right {
    margin-left: 10px;
    color: var(--cs-color_primary, #697dff);
    cursor: pointer;
  }

}
</style>