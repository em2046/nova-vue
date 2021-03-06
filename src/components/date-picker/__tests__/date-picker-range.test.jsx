import NovaDatePicker from '@/components/date-picker/NovaDatePicker';
import { mount } from '@vue/test-utils';
import dayjs from 'dayjs';
import flushPromises from 'flush-promises';
import zhTW from '@/locales/zh-TW';

describe('NovaDatePicker type:range', () => {
  it('prop locale should works', async () => {
    const wrapper = mount({
      data() {
        let startDate = dayjs('2000-01-01')
          .startOf('day')
          .toDate();
        let endDate = dayjs('2000-12-31')
          .startOf('day')
          .toDate();
        return {
          someRange: [startDate, endDate]
        };
      },
      render() {
        return (
          <NovaDatePicker
            type="range"
            locale={zhTW}
            holiday={null}
            vModel={this.someRange}
          />
        );
      }
    });
    wrapper.vm.$children[0].open('start');
    await flushPromises();
    expect(wrapper).toMatchSnapshot();
  });

  it('disabled date', async function() {
    function disabledDate(current) {
      let someDate = dayjs('2000-01-15')
        .startOf('day')
        .toDate();
      return current > someDate;
    }

    const wrapper = mount({
      data() {
        let startDate = dayjs('2000-01-01')
          .startOf('day')
          .toDate();
        let endDate = dayjs('2000-12-31')
          .startOf('day')
          .toDate();
        return {
          someRange: [startDate, endDate]
        };
      },
      render() {
        return (
          <NovaDatePicker
            type="range"
            holiday={null}
            vModel={this.someRange}
            disabledDate={disabledDate}
          />
        );
      }
    });
    wrapper.vm.$children[0].open('start');
    await flushPromises();
    expect(wrapper).toMatchSnapshot();
  });
});
