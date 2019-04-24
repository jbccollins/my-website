import React from "react";
import Portfolio from "components/Portfolio";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import "../../../fonts/style.css";
import Grid from '@material-ui/core/Grid';
import "./app.scss";
import { portfolioItems } from "data/portfolioItems";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar";
import GradientScroll from 'react-gradient-scroll-indicator'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = {
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      borderRadius: '0.3em',
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  root: {
    boxShadow: "inset 0 0 10px red"
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          {/* <Grid container spacing={24}>
            <Grid item xs={2}>
              <Sidebar/>
            </Grid>
            <Grid item xs={10}>
              <Portfolio items={portfolioItems} />
            </Grid>
          </Grid> */}
          <Sidebar/>         
          <div className="portfolio-wrapper">
            <GradientScroll>
              <Portfolio items={portfolioItems} />
            </GradientScroll>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
