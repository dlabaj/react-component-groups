import * as React from 'react';
import { StatusComponentProps } from '../StatusProps';
import PopoverStatus from './PopoverStatus';
import StatusIconAndText from './StatusIconAndText';

interface GenericStatusProps extends StatusComponentProps {
  Icon: React.ComponentType<{ title?: string }>;
  popoverTitle?: string;
  noTooltip?: boolean;
  children?: React.ReactNode;
};

/**
 * Component for a generic status popover
 * @param {string} [title] - (optional) status text
 * @param {boolean} [iconOnly] - (optional) if true, only displays icon
 * @param {boolean} [noTooltip] - (optional) if true, tooltip won't be displayed
 * @param {string} [className] - (optional) additional class name for the component
 * @param {string} [popoverTitle] - (optional) title for popover
 * @param {React.ComponentType} Icon - icon to be displayed
 * @param {ReactNode} [children] - (optional) children for the component
 * @example
 * ```tsx
 * <GenericStatus Icon={CircleIcon} />
 * ```
 */
const GenericStatus: React.FC<GenericStatusProps> = (props) => {
  const { Icon, children, popoverTitle, title, noTooltip, iconOnly, ...restProps } = props;
  const renderIcon = iconOnly && !noTooltip ? <Icon title={title} /> : <Icon />;
  const statusBody = (
    <StatusIconAndText
      {...restProps}
      noTooltip={noTooltip}
      title={title}
      iconOnly={iconOnly}
      icon={renderIcon}
    />
  );
  return React.Children.toArray(children).length ? (
    <PopoverStatus title={popoverTitle || title} {...restProps} statusBody={statusBody}>
      {children}
    </PopoverStatus>
  ) : (
    statusBody
  );
};

export default GenericStatus;
