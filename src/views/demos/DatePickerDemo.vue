<template>
  <div class="box">
    <div class="box">
      <NovaLocale :block="false">
        <NovaDatePicker
          ref="my-date-picker"
          v-model="emptyDate"
          :disabled-date="disabledDateBefore"
          :format="dateFormat"
          dropdown-class="test"
          placeholder="请选择日期"
          data-id="42"
          @blur="handleInputBlur"
          @change="handleChange"
          @click="handleClick"
          @close="handleClose"
          @focus="handleInputFocus"
          @open="handleOpen"
          @mouseenter="handleMouseenter"
          @mouseleave="handleMouseleave"
        ></NovaDatePicker>
      </NovaLocale>
      <NovaLocale :block="false" :holiday="hideHoliday" :locale="en">
        <NovaDatePicker
          v-model="emptyDate"
          :disabled-date="disabledDateAfter"
          :disabled-month-next="disabledMonthNext"
          :disabled-month-prev="disabledMonthPrev"
          :format="dateFormat"
          :locale="customEnglish"
          :month-size="2"
          @change="handleChange"
          @close="handleClose"
          @open="handleOpen"
        ></NovaDatePicker>
      </NovaLocale>
      <NovaLocale :block="false" :locale="zhCN">
        <NovaDatePicker
          v-model="emptyDate"
          :disabled-date="disabledDateAfter"
          :format="dateFormat"
          :locale="customChinese"
          :month-size="2"
          @change="handleChange"
          @close="handleClose"
          @open="handleOpen"
        ></NovaDatePicker>
      </NovaLocale>
    </div>
    <div class="block"></div>
    <div class="box">
      <NovaButton @click="triggerFocus">Focus</NovaButton>
      <NovaButton @click="triggerBlur">Blur</NovaButton>
      <NovaButton @click="triggerOpen">Open</NovaButton>
      <NovaButton @click="triggerClose">Close</NovaButton>
    </div>
    <div class="box">
      <NovaDatePicker v-model="someDate"></NovaDatePicker>
      <NovaDatePicker v-model="someDate" :disabled="true"></NovaDatePicker>
      <NovaButton @click="handleSelectToday">今天</NovaButton>
    </div>
    <div class="box">
      <NovaLocale :holiday="hideHoliday" :locale="en">
        <NovaDatePicker
          ref="my-range-date-picker"
          v-model="emptyDateRange"
          type="range"
          @blur="handleRangeBlur"
          @click="handleRangeClick"
          @focus="handleRangeFocus"
        ></NovaDatePicker>
      </NovaLocale>
      <NovaDatePicker
        v-model="emptyDateRange"
        :disabled="true"
        placeholder="提示"
        type="range"
      >
      </NovaDatePicker>

      <NovaDatePicker
        v-model="emptyDateRange"
        :custom-tooltip="customTooltip"
        :placeholder="['YYYY-MM-DD', null]"
        type="range"
      ></NovaDatePicker>
      <NovaDatePicker
        v-model="emptyDateRange"
        :placeholder="[null, 'EMPTY']"
        :show-tooltip="false"
        type="range"
      ></NovaDatePicker>
      <NovaDatePicker
        v-model="someDateRange"
        :disabled-date="disabledRange"
        :locale="customChinese"
        type="range"
        @change="handleRangeChange"
        @close="handleClose"
        @open="handleOpen"
      ></NovaDatePicker>
      <NovaDatePicker
        v-model="someDateRange"
        :disabled="[false, true]"
        :disabled-date="disabledRange"
        :locale="customChinese"
        :placeholder="['START', 'END']"
        type="range"
        @change="handleRangeChange"
        @close="handleClose"
        @open="handleOpen"
      ></NovaDatePicker>
      <NovaDatePicker
        v-model="someDateRange"
        :disabled="[true, false]"
        :disabled-date="disabledRange"
        :locale="customChinese"
        :placeholder="['请选择开始日期', '请选择结束日期']"
        type="range"
        @change="handleRangeChange"
        @close="handleClose"
        @open="handleOpen"
      ></NovaDatePicker>
    </div>
    <div class="box">
      <NovaButton @click="triggerFocusStart">Focus Start</NovaButton>
      <NovaButton @click="triggerBlurStart">Blur Start</NovaButton>
      <NovaButton @click="triggerFocusEnd">Focus End</NovaButton>
      <NovaButton @click="triggerBlurEnd">Blur End</NovaButton>
      <NovaButton @click="triggerOpenStart">Open Start</NovaButton>
      <NovaButton @click="triggerOpenEnd">Open End</NovaButton>
      <NovaButton @click="triggerRangeClose">Close</NovaButton>
    </div>
  </div>
</template>

<script>
import NovaDatePicker from '../../components/date-picker/NovaDatePicker';
import NovaLocale from '@/components/locale/NovaLocale';
import zhCN from '@/locales/zh-CN';
import en from '@/locales/en';
import dayjs from 'dayjs';
import NovaButton from '@/components/button/NovaButton';

export default {
  name: 'DatePickerDemo',
  components: { NovaButton, NovaLocale, NovaDatePicker },
  data() {
    let someDate = dayjs()
      .startOf('day')
      .toDate();
    let anotherDate = dayjs()
      .add(15, 'day')
      .toDate();

    return {
      en,
      zhCN,
      customEnglish: {
        datePicker: {}
      },
      customChinese: {
        datePicker: {
          weeksLong: {
            sun: '周日',
            mon: '周一',
            tue: '周二',
            wed: '周三',
            thu: '周四',
            fri: '周五',
            sat: '周六'
          }
        }
      },
      hideHoliday: null,
      emptyDate: null,

      someDate,
      emptyDateRange: [null, null],
      someDateRange: [someDate, anotherDate],
      dateFormat: ['YYYY-MM-DD', 'MM-DD-YYYY']
    };
  },
  methods: {
    handleClick(e) {
      console.log('Click', e);
    },
    handleMouseenter(e) {
      console.log(e);
    },
    handleMouseleave(e) {
      console.log(e);
    },
    handleInputFocus(e) {
      console.log('Input Focus', e);
    },
    handleInputBlur(e) {
      console.log('Input Blur', e);
    },
    handleRangeFocus(e, rangeName) {
      console.log('Range Focus', e, rangeName);
    },
    handleRangeBlur(e, rangeName) {
      console.log('Range Blur', e, rangeName);
    },
    handleRangeClick(e) {
      console.log('Range click', e);
    },
    handleOpen(rangeName) {
      console.log('DatePicker Dropdown OPEN', rangeName);
    },
    handleClose(rangeName) {
      console.log('DatePicker Dropdown CLOSE', rangeName);
    },
    handleChange(value) {
      console.log(value);
    },
    handleRangeChange(dates, rangeName) {
      console.log(dates, rangeName);

      let start = dayjs(dates[0]);
      let end = dayjs(dates[1]);
      if (start.isSame(end, 'day')) {
        end.add(1, 'day');
      }
      this.someDateRange[1] = end.toDate();
    },
    disabledDateBefore(current) {
      // Can not select days before today and today
      let today = dayjs()
        .startOf('day')
        .toDate();
      return current && current < today;
    },
    disabledDateAfter(current) {
      // Can not select days after today
      let today = dayjs()
        .endOf('day')
        .toDate();
      return current > today;
    },
    disabledRange(current, rangeName) {
      // Start
      if (rangeName === 'start') {
        let today = dayjs()
          .startOf('day')
          .toDate();
        return current < today;
      }
      // End
      if (rangeName === 'end') {
        let start = this.someDateRange[0];
        return (
          current <= start ||
          dayjs(start)
            .add(30, 'day')
            .isBefore(current)
        );
      }
    },
    customTooltip(date) {
      let today = dayjs().startOf('day');
      let dateMoment = dayjs(date);
      return dateMoment.diff(today, 'day');
    },
    disabledMonthPrev(date) {
      let thisMonth = dayjs().startOf('month');
      return (
        thisMonth.isSame(date, 'month') || thisMonth.isAfter(date, 'month')
      );
    },
    disabledMonthNext(date) {
      let thisMonth = dayjs().startOf('month');
      let sixMonthLater = thisMonth.add(6, 'month');
      return sixMonthLater.isSame(date) || sixMonthLater.isBefore(date);
    },
    handleSelectToday() {
      this.someDate = new Date();
    },
    triggerFocus() {
      let $myDatePicker = this.$refs['my-date-picker'];

      setTimeout(() => {
        $myDatePicker.focus();
      }, 1);
    },
    triggerBlur() {
      let $myDatePicker = this.$refs['my-date-picker'];

      setTimeout(() => {
        this.triggerFocus();
      }, 1);

      setTimeout(() => {
        $myDatePicker.blur();
      }, 1000);
    },
    triggerOpen() {
      let $myDatePicker = this.$refs['my-date-picker'];
      setTimeout(() => {
        $myDatePicker.open();
      }, 1);
    },
    triggerClose() {
      let $myDatePicker = this.$refs['my-date-picker'];

      setTimeout(() => {
        this.triggerOpen();
      }, 1);

      setTimeout(() => {
        $myDatePicker.close();
      }, 1000);
    },
    triggerFocusStart() {
      let $myDatePicker = this.$refs['my-range-date-picker'];

      setTimeout(() => {
        $myDatePicker.focus('start');
      }, 1);
    },
    triggerBlurStart() {
      let $myDatePicker = this.$refs['my-range-date-picker'];

      setTimeout(() => {
        this.triggerFocusStart();
      }, 1);

      setTimeout(() => {
        $myDatePicker.blur('start');
      }, 1000);
    },
    triggerFocusEnd() {
      let $myDatePicker = this.$refs['my-range-date-picker'];

      setTimeout(() => {
        $myDatePicker.focus('end');
      }, 1);
    },
    triggerBlurEnd() {
      let $myDatePicker = this.$refs['my-range-date-picker'];

      setTimeout(() => {
        this.triggerFocusEnd();
      }, 1);

      setTimeout(() => {
        $myDatePicker.blur('end');
      }, 1000);
    },
    triggerOpenStart() {
      let $myDatePicker = this.$refs['my-range-date-picker'];
      setTimeout(() => {
        $myDatePicker.open('start');
      }, 1);
    },
    triggerOpenEnd() {
      let $myDatePicker = this.$refs['my-range-date-picker'];

      setTimeout(() => {
        $myDatePicker.open('end');
      }, 1);
    },
    triggerRangeClose() {
      let $myDatePicker = this.$refs['my-range-date-picker'];

      setTimeout(() => {
        $myDatePicker.open('start');
      }, 1);
      setTimeout(() => {
        $myDatePicker.open('end');
      }, 500);

      setTimeout(() => {
        $myDatePicker.close();
      }, 1000);

      setTimeout(() => {
        $myDatePicker.open('end');
      }, 1500);
      setTimeout(() => {
        $myDatePicker.open('start');
      }, 2000);

      setTimeout(() => {
        $myDatePicker.close();
      }, 2500);
    }
  }
};
</script>

<style lang="less" scoped>
.nova-date-picker {
  margin-right: 20px;
  margin-bottom: 20px;

  /deep/ .nova-date-picker-toggle {
    .nova-date-picker-inner {
      margin-bottom: 10px;
    }
  }
}

.nova-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
