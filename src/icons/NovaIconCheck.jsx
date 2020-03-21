import iconCheck from '../../icons/entities/icon-check.json';
import NovaIcon from '@/components/icon/NovaIcon';

export default {
  name: 'NovaIconCheck',
  functional: true,
  render(h, context) {
    const { data, props } = context;
    const iconProps = {
      ...data,
      props: {
        ...data.props,
        ...props,
        src: iconCheck
      }
    };
    return <NovaIcon {...iconProps} />;
  }
};
