import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import "./GithubButton.scss";

const styles = {
  small: {
    width: 30,
    height: 30
  }
};

function GithubButton(props) {
  const { classes, onClick } = props;
  return (
    <div className="GithubButton">
      <Tooltip title="View on GitHub" placement="bottom-end">
        <IconButton onClick={onClick}>
          <Avatar
            alt="github"
            src={`${process.env.PUBLIC_URL}/github-circle.png`}
            className={classNames(classes.small)}
          />
        </IconButton>
      </Tooltip>
    </div>
  );
}

GithubButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GithubButton);
