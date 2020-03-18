import Storage from '@/utils/storage';

export default {
  name: 'NovaOption',
  inject: ['NovaSelect'],
  isSelectOption: true,
  props: {
    prefixedClass: {
      type: String,
      default: `${Storage.prefix}-select`
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  data() {
    return {
      optionId: null
    };
  },
  computed: {
    classList() {
      const { isSelected, disabled, prefixedClass } = this;

      const activeOption = this.NovaSelect.getActiveOption();

      return [
        `${prefixedClass}-option`,
        {
          'is-active':
            activeOption?.componentOptions?.propsData?.value === this.value,
          'is-selected': isSelected,
          'is-disabled': disabled
        }
      ];
    },
    isSelected() {
      const NovaSelect = this.NovaSelect;
      const selected = NovaSelect.getValue();
      const value = this.value;
      let isSelected = false;

      if (NovaSelect.multiple) {
        const found = selected.find(v => {
          return v === value;
        });
        if (found) {
          isSelected = true;
        }
      } else {
        if (selected === value) {
          isSelected = true;
        }
      }
      return isSelected;
    }
  },
  created() {
    const { disabled, label, value } = this;

    this.optionId = this.NovaSelect.addMultipleOption({
      component: this,
      disabled,
      label,
      value
    });
  },
  destroyed() {
    const optionId = this.optionId;
    this.NovaSelect.removeMultipleOption(optionId);
  },
  methods: {
    handleClick(...args) {
      if (this.disabled) {
        return;
      }

      this.$emit('click', ...args);
      this.NovaSelect.setSelected(this.value);

      if (!this.NovaSelect.multiple) {
        this.NovaSelect.close();
      }
    },
    handleMouseenter() {
      if (this.disabled) {
        return;
      }

      this.NovaSelect.setActiveIndex(
        this.NovaSelect.getIndexOfValue(this.value)
      );
    },
    getOptionData() {
      const { disabled, label, value } = this;
      return {
        component: this,
        disabled,
        label,
        value
      };
    }
  },
  render() {
    return null;
  }
};
