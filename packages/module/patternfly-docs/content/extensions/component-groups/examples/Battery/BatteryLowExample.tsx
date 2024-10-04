import React from 'react';
import Severity, { SeverityLevel } from '@patternfly/react-component-groups/dist/dynamic/Severity';

export const BasicExample: React.FunctionComponent = () => <Severity severity={SeverityLevel.low} label="Low severity" />;
