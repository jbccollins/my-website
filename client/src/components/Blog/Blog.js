import React from "react";
import PropTypes from "prop-types";
import Markdown from 'react-markdown/with-html';
import CodeBlock from 'components/CodeBlock';
import content from "./Posts/HerokuAndGoogle/heroku-and-google.md";

import "./Blog.scss";
class Blog extends React.Component {
  render() {
    return (
      <div className="Blog">
        <Markdown source={content} renderers={{ code: CodeBlock }} escapeHtml={false}/>
      </div>
    );
  }
}
Blog.propTypes = {
};	
export default Blog;