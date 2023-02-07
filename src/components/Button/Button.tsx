import { ReactNode, forwardRef, ElementType, Ref } from 'react';

import { OVERRIDABLE_PROPS } from '@src/utilityType/utilityTypes';

import classNames from 'classnames/bind';
import style from './Button.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  variant?: 'primary' | 'primary-light' | 'warning';
  size?: 'large' | 'medium' | 'small';
  children?: ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'button';

type Props<T extends ElementType> = OVERRIDABLE_PROPS<T, BaseProps>;

function Button<T extends ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  props: Props<T>,
  ref: Ref<any>,
) {
  const Component = props.as ?? DEFAULT_COMPONENT_ELEMENT;

  return (
    <Component
      ref={ref}
      {...props}
      className={`
        ${cx('jp', 'btn', props.size, props.variant)}
        ${' '}
        ${props.className}`}
    />
  );
}

export default forwardRef(Button) as typeof Button;
