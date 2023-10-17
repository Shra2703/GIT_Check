import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        {/* Inline styling for nav bar */}
        {/* <div
          style={{
            width: "100%",
            height: 70,
            background: "red",
            display: "flex",
            justifyContent: "space-between",
          }}
        > */}

        <div style={styles.nav}>
          <div style={styles.title}>Movie-App</div>
          <div style={styles.cartContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              alt="Cart Icon"
              style={styles.cartIcon}
            />
            <span style={styles.cartCount}> 0</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;

// Internal styling for nav bar
const styles = {
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,
  },

  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};
