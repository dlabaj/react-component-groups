import React, { useMemo } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss'

const batteryDefault = {
  '& svg': {
    '& path': { fill: 'var(--pf-t--color--gray--60)' }
  }
};

const batteryLow = {
  '& svg': {
    '& path': { fill: 'var(--pf-t--global--icon--color--status--success--default)' }
  }
};

const batteryMedium = {
  '& svg': {
    '& path': { fill: 'var(--pf-t--global--icon--color--status--warning--default)' }
  }
};

const batteryHigh = {
  '& svg': {
    '& path': { fill: 'var(--pf-t--color--orange--50)' }
  }
};

const batteryCritical = {
  '& svg': {
    '& path': { fill: 'var(--pf-t--global--color--status--danger--default)' }
  }
};

const batteryLineColor = {
  '& svg': {
    '& path': { stroke: 'var(--pf-t--global--border--color--100)' }
  }
};

const useStyles = createUseStyles({
  battery: {
    display: 'inline-block',
    'line-height': 0,
    '& svg': {
      position: 'relative',
      top: 'var(--pf-t--global--spacer--sm)',
      height: '1.75rem'
    }
  },

  batteryDefault,
  batteryLow,
  batteryMedium,
  batteryHigh,
  batteryCritical,
  batteryLineColor
});

const severityLevels = (severity: SeverityLevel, classMode?: boolean) => {
  switch (severity) {
  case 'critical':
    return classMode ? 'critical' : <path d="M 99.168858,143.38516 H 351.33914 c 5.33437,0 9.69886,-5.04 9.69886,-11.2 v -28 c 0,-6.16 -4.36449,-11.2 -9.69886,-11.2 H 99.168857 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.2 9.698858,11.2 z M 99.168857,235.25069 H 351.33914 c 5.33437,0 9.69886,-5.04 9.69886,-11.2 v -28 c 0,-6.16 -4.36449,-11.2 -9.69886,-11.2 H 99.168857 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.2 9.698857,11.2 z M 99.168857,327.14542 H 351.33914 c 5.33437,0 9.69886,-5.04 9.69886,-11.19999 v -28 c 0,-6.16001 -4.36449,-11.2 -9.69886,-11.2 H 99.168857 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.19999 9.698857,11.19999 z M 99.168993,419.0375 H 351.33927 c 5.33437,0 9.69886,-5.04 9.69886,-11.2 v -28 c 0,-6.16 -4.36449,-11.2 -9.69886,-11.2 H 99.168993 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.2 9.698857,11.2 z" />;
  case 'important':
    return classMode ? 'important' : <path d="M 99.168857,235.25069 H 351.33914 c 5.33437,0 9.69886,-5.04 9.69886,-11.2 v -28 c 0,-6.16 -4.36449,-11.2 -9.69886,-11.2 H 99.168857 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.2 9.698857,11.2 z M 99.168857,327.14542 H 351.33914 c 5.33437,0 9.69886,-5.04 9.69886,-11.19999 v -28 c 0,-6.16001 -4.36449,-11.2 -9.69886,-11.2 H 99.168857 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.19999 9.698857,11.19999 z M 99.168993,419.0375 H 351.33927 c 5.33437,0 9.69886,-5.04 9.69886,-11.2 v -28 c 0,-6.16 -4.36449,-11.2 -9.69886,-11.2 H 99.168993 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.2 9.698857,11.2 z" />;
  case 'moderate':
    return classMode ? 'moderate' : <path d="M 99.168857,327.14542 H 351.33914 c 5.33437,0 9.69886,-5.04 9.69886,-11.19999 v -28 c 0,-6.16001 -4.36449,-11.2 -9.69886,-11.2 H 99.168857 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.19999 9.698857,11.19999 z M 99.168993,419.0375 H 351.33927 c 5.33437,0 9.69886,-5.04 9.69886,-11.2 v -28 c 0,-6.16 -4.36449,-11.2 -9.69886,-11.2 H 99.168993 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.2 9.698857,11.2 z" />;
  case 'minor':
    return classMode ? 'batteryLow' : <path d="M 99.168993,419.0375 H 351.33927 c 5.33437,0 9.69886,-5.04 9.69886,-11.2 v -28 c 0,-6.16 -4.36449,-11.2 -9.69886,-11.2 H 99.168993 c -5.334371,0 -9.698857,5.04 -9.698857,11.2 v 28 c 0,6.16 4.364486,11.2 9.698857,11.2 z" />;
  case 'none':
    return classMode ? 'none' : <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="m 38.875,84.75 h 12.25 c 0.4832,0 0.875,0.39175 0.875,0.875 V 86.5 c 0,0.48325 -0.3918,0.875 -0.875,0.875 H 38.875 C 38.3918,87.375 38,86.98325 38,86.5 v -0.875 c 0,-0.48325 0.3918,-0.875 0.875,-0.875 z m 0,4.375 h 12.25 C 51.6082,89.125 52,89.51675 52,90 v 3.5 c 0,0.4832 -0.3918,0.875 -0.875,0.875 H 38.875 C 38.3918,94.375 38,93.9832 38,93.5 V 90 c 0,-0.48325 0.3918,-0.875 0.875,-0.875 z" fill="#4394e5" />
  default:
    return classMode ? 'undefined' : <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="m 8.875,88.25 h 4.375 c 0.48325,0 0.875,0.39175 0.875,0.875 V 90 c 0,0.48325 -0.39175,0.875 -0.875,0.875 H 8.875 C 8.391751,90.875 8,90.48325 8,90 V 89.125 C 8,88.64175 8.391751,88.25 8.875,88.25 Z m 7.875,0 h 4.375 c 0.4832,0 0.875,0.39175 0.875,0.875 V 90 c 0,0.48325 -0.3918,0.875 -0.875,0.875 H 16.75 c -0.48325,0 -0.875,-0.39175 -0.875,-0.875 v -0.875 c 0,-0.48325 0.39175,-0.875 0.875,-0.875 z" fill="#c7c7c7" />;
  }
};

export const SeverityLevel = {
  undefined: 'undefined',
  none: 'none',
  minor: 'minor',
  moderate: 'moderate',
  important: 'important',
  critical: 'critical',
} as const;

export type SeverityLevel = typeof SeverityLevel[keyof typeof SeverityLevel];

export interface SeverityProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  /** Determines a variant of displayed severity */
  severity: SeverityLevel;
  /** Label displayed next to the severity */
  label: string;
  /** Option to hide the label */
  labelHidden?: boolean;
  /** Custom className */
  className?: string;
  /** Custom OUIA ID */
  ouiaId?: string | number;
}

export const Severity: React.FunctionComponent<SeverityProps> = ({ severity, label, labelHidden, className, ouiaId = 'Severity-icon', ...props }: SeverityProps) => {
  const classes = useStyles();
  const batteryClasses = clsx(classes.battery, classes[String(batteryLevels(severity, true))], className);

  const title = { title: `${severity} ${label}` };

  const batteryVariant = useMemo(() => severityLevels(severity) , [ severity ])

  return (
    <React.Fragment>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <i className={batteryClasses} {...title} {...props} widget-type="Severity" widget-id={label} data-ouia-component-id={ouiaId}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 448 512"
          style={{ enableBackground: 'new 0 0 448 512' } as React.CSSProperties}
          shapeRendering="geometricpresision"
        >
          <path
            style={{
              fill: 'none',
              fillOpacity: 1,
              stroke: batteryLineColor['& svg']['& path'].stroke,
              strokeWidth: 41.96378708,
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m 144.16452,21.032222 h 159.67454 q 123.1748,0 123.1748,128.667868 v 212.64759 q 0,128.66788 -123.1748,128.66788 H 144.16452 q -123.174811,0 -123.174811,-128.66788 V 149.70009 q 0,-128.667868 123.174811,-128.667868 z"
          />
          {batteryVariant}
        </svg>
      </i>
      {!labelHidden && <span> {label} </span>}
    </React.Fragment>
  );
};

export default Severity;
