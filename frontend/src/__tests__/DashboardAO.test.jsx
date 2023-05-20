import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartTotalHarvest from '../components/System/AO/DashInfoCard/ChartTotalHarvest';
import SystemFooter from '../components/System/AO/Global/Footer/SystemFooter';
import NavBar from '../components/System/AO/Global/NavBar/NavBar';

describe('render the page', () => {
  //render chart
  it('should render the chart', () => {
    render(<NavBar />);
  });

  //render footer
  it('should render the footer', () => {
    render(<SystemFooter />);
  });
});
