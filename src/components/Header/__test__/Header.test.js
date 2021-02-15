import React from 'react';
import Header from '../Header';

// import tools from React testing library 
import { render } from '@testing-library/react';

it("renders the correct output", () =>{
    // Render Reach component and return assertion methods
    const { getByText } = render(<Header />);

    // Make assertions 
  
});

