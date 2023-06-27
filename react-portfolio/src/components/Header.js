import React from 'react';
import Navigation from './Navigation';

export default function Header() {
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            background: '#437445',
          }}
        >
            <h1>Sydnie Farrell</h1>
            
          < Navigation />
        </section>
      </nav>
    );
  }
  