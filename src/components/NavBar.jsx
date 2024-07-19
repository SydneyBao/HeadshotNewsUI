export const NavBar = () => {
  return (
    <div>
      <nav className="navbar px-2 py-3 text-light no-select" style={{ position: 'fixed', zIndex: '3' }}>
        <div style={{ position: 'relative' }}>
          <h2 style={{ textShadow: '#DC4C64 1px 0 10px', fontFamily: 'Montserrat' }}>
            <span className="badge fs-4" style={{ 
              borderImage: 'linear-gradient(to bottom right, rgba(220, 76, 100, 1) 0%, rgba(220, 76, 100, 0.5) 50%, rgba(220, 76, 100, 0.5) 100%) 1',
              borderImageSlice: '1',
              borderRadius: '50px',
              borderStyle: 'solid',
              borderWidth: '2px',
              
            }}>HEADSHOT</span> News
          </h2>
          <div
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '105px',
              width: '195px',
              height: '32px',
              background: 'radial-gradient(ellipse at center, rgba(220,76,100,0.7) 0%, rgba(220,76,100,0) 75%)',
              zIndex: '1',
            }}
          ></div>
          <span
            style={{
              fontStyle: 'italic',
              position: 'absolute',
              bottom: '-7px',
              left: '140px',
              fontSize: '0.9rem',
              zIndex: '1',
              color: 'white', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',  
            }}
          >
            COUNTER STRIKE
          </span>
        </div>
      </nav>
    </div>
  );
};