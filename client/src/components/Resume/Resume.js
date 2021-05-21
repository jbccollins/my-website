import React from "react";
import PropTypes from "prop-types";
import "./Resume.scss";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import fetch from "isomorphic-fetch";
import Button from '@material-ui/core/Button';
import { RESUME_DOWNLOAD } from "common/constants/urls";
import { saveAs } from 'file-saver';
import PDFViewer from 'mgr-pdf-viewer-react';

class Resume extends React.Component {

  handleDownloadClick = async () => {
    let res = await fetch(RESUME_DOWNLOAD, {
      method: "GET",
    });
    res = await res.blob();
    var fileBlob = new Blob([res], {type: "application/pdf"})
    saveAs(fileBlob, "James-Collins-Resume.pdf");
  }

  render() {
    const { open, onClose } = this.props;
    if (!open) {
      return false;
    }
    return (
      <div className="Resume">
        <div className="pdf-controls-header">
          <div className="controls">
            <Button style={{color: 'white'}} color="inherit" onClick={this.handleDownloadClick} aria-label="Close">
              Download PDF
              <SaveIcon style={{marginLeft: '6px'}}/>
            </Button>
            <IconButton style={{color: 'white'}} color="inherit" onClick={onClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="pdf-viewer-container">
          <PDFViewer
            document={{
              url: "/resume"
            }}/>
          {/* {isMobile &&
            <PDFReader width={window.outerWidth} url={"/resume"} />
          }
          {!isMobile &&
            <PDFReader url={"/resume"} />
          } */}
        </div>
      </div>
    );
  }
}

Resume.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Resume;