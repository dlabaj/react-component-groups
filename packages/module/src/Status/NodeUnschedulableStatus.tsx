import * as React from 'react';
import { StatusComponentProps } from '@openshift-console/dynamic-plugin-sdk';
import { WarningStatus } from './statuses';

const NodeUnschedulableStatus: React.FC<NodeUnschedulableStatusProps> = ({
  status,
  title,
  iconOnly,
  noTooltip,
  className,
}) => {
  const statusProps = { title: title || status, iconOnly, noTooltip, className };
  return <WarningStatus {...statusProps} />;
};

type NodeUnschedulableStatusProps = StatusComponentProps & {
  status: string;
};

export default NodeUnschedulableStatus;
