import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../pages/footers';
import MeetOurTeamPage from '../pages/meetOurTeam';

describe('Component Rendering Tests', () => {
  it('renders Footer component without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });

  it('renders Footer with brand name', () => {
    render(<Footer />);
    const brandElements = screen.getAllByText(/∅verflow/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it('renders MeetOurTeam component without crashing', () => {
    const { container } = render(<MeetOurTeamPage />);
    expect(container).toBeTruthy();
  });

  it('renders MeetOurTeam with founder name', () => {
    render(<MeetOurTeamPage />);
    const founderElements = screen.getAllByText(/Rudhvish Patel/i);
    expect(founderElements.length).toBeGreaterThan(0);
  });

  it('renders MeetOurTeam with heading', () => {
    render(<MeetOurTeamPage />);
    expect(screen.getByText(/Meet Our Founder/i)).toBeInTheDocument();
  });
});
