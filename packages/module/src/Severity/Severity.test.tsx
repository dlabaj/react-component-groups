import React from 'react';
import { render } from '@testing-library/react';
import Severity, { SeverityLevel } from './Severity';

describe('Severity component', () => {
  jest.spyOn(global.console, 'error');
  describe('should render correctly', () => {

    test('Critical', () => {
      const { container } = render(<Severity severity={SeverityLevel.critical} label="Critical" />);
      expect(container).toMatchSnapshot();
    });
  
    test('Important', () => {
      const { container } = render(<Severity severity={SeverityLevel.important} label="High" />);
      expect(container).toMatchSnapshot();
    });

    test('MediumSeverity', () => {
      const { container } = render(<Severity severity={SeverityLevel.medium} label="Medium" />);
      expect(container).toMatchSnapshot();
    });

    test('LowSeverity', () => {
      const { container } = render(<Severity severity={SeverityLevel.low} label="Low" />);
      expect(container).toMatchSnapshot();
    });

    test('Null, default', () => {
      const { container } = render(<Severity severity={'' as SeverityLevel} label={''} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('API', () => {
    test('should hide label', () => {
      const { container } = render(<Severity severity={SeverityLevel.high} label="high" labelHidden />);
      expect(container).toMatchSnapshot();
    });
  });
});
