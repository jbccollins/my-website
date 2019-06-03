import react from "assets/logos/react.png";
import angular from "assets/logos/angular-official.png";
import babel from "assets/logos/babel.png";
import atlassian from "assets/logos/atlassian.png";
import csharp from "assets/logos/csharp.png";
import d3 from "assets/logos/d3.png";
import django from "assets/logos/django-alt.png";
import dotNet from "assets/logos/dot-net.png";
import eslint from "assets/logos/eslint.png";
import git from "assets/logos/git.png";
import github from "assets/logos/github.png";
import google from "assets/logos/google.png";
import heroku from "assets/logos/heroku.png";
import javascript from "assets/logos/javascript.png";
import jest from "assets/logos/jest.png";
import jquery from "assets/logos/jquery.png";
import materialUi from "assets/logos/material-ui.png";
import node from "assets/logos/node.png";
import npm from "assets/logos/npm-alt.png";
import postgresql from "assets/logos/postgresql.png";
import python from "assets/logos/python.png";
import redux from "assets/logos/redux.png";
import sass from "assets/logos/sass-alt.png";
import travis from "assets/logos/travis.png";
import typescript from "assets/logos/typescript.png";
import vscode from "assets/logos/vscode.png";
import webpack from "assets/logos/webpack.png";
import leaflet from "assets/logos/leaflet-alt.png";
import mssql from "assets/logos/mssql.png";
import yarn from "assets/logos/yarn-alt.png";
import unity from "assets/logos/unity.png";
import java from "assets/logos/java.png";
import r from "assets/logos/r.png";
import vanillaweb from "assets/logos/vanillaweb.png";

const REACT = "React";
const ANGULAR = "Angular";
const BABEL = "Babel";
const CSHARP = "C#";
const D3 = "d3";
const DJANGO = "django";
const DOTNET = ".NET";
const ESLINT = "ESLint";
const GIT = "Git";
const GITHUB = "Github";
const GOOGLE = "Google Domains";
const HEROKU = "Heroku";
const JAVASCRIPT = "JavaScript";
const JEST = "Jest";
const JQUERY = "jQuery";
const MATERIALUI = "Material UI";
const NODE = "Node";
const NPM = "npm";
const POSTGRESQL = "PostgreSQL";
const PYTHON = "Python";
const REDUX = "Redux";
const SASS = "Sass";
const TRAVIS = "Travis";
const TYPESCRIPT = "TypeScript";
const VISUALSTUDIO = "Visual Studio";
const WEBPACK = "Webpack";
const MSSQL = "MS SQL";
const LEAFLET = "Leaflet";
const YARN = "Yarn";
const UNITY = "Unity";
const JAVA = "Java";
const R = "R";
const VANILLAWEB = "Vanilla Web";
const ATLASSIAN = "Atlassian Suite";

const logos = [
  {
    name: REACT,
    image: react,
    website: "https://reactjs.org/",
    color: "#61dafb",
    proficiency: 3,
  },
  {
    name: ANGULAR,
    image: angular,
    color: "rgb(224, 0, 54)",
    website: "https://angular.io/",
    proficiency: 1.5,
  },
  {
    name: BABEL,
    image: babel,
    color: "rgb(247, 216, 101)",
    website: "https://babeljs.io/",
    proficiency: 2,
  },
  {
    name: CSHARP,
    image: csharp,
    color: "rgb(105, 37, 119)",
    proficiency: 2,
  },
  {
    name: D3,
    image: d3,
    color: "rgb(245, 108, 93)",
    proficiency: 1.5,
  },
  {
    name: DJANGO,
    image: django,
    color: "rgb(0, 42, 27)",
    proficiency: 2,
  },
  {
    name: DOTNET,
    image: dotNet,
    color: "rgb(0, 87, 148)",
    proficiency: 1,
  },
  {
    name: ESLINT,
    image: eslint,
    color: "rgb(72, 57, 190)",
    proficiency: 1,
  },
  {
    name: GIT,
    image: git,
    color: "rgb(243, 79, 60)",
    proficiency: 3,
  },
  {
    name: GITHUB,
    image: github,
    color: "rgb(23, 21, 22)",
    proficiency: 3,
  },
  {
    name: GOOGLE,
    image: google,
    color: "rgb(238, 66, 61)",
    proficiency: 1,
  },
  {
    name: HEROKU,
    image: heroku,
    color: "rgb(126, 90, 189)",
    proficiency: 1.5,
  },
  {
    name: JAVASCRIPT,
    image: javascript,
    color: "rgb(242, 217, 97)",
    proficiency: 3,
  },
  {
    name: JEST,
    image: jest,
    color: "rgb(155, 66, 91)",
    proficiency: 1,
  },
  {
    name: JQUERY,
    image: jquery,
    color: "rgb(0, 107, 170)",
    proficiency: 3,
  },
  {
    name: MATERIALUI,
    image: materialUi,
    color: "rgb(0, 178, 251)",
    proficiency: 1.5,
  },
  {
    name: NODE,
    image: node,
    color: "rgb(100, 158, 104)",
    proficiency: 1.5
  },
  {
    name: NPM,
    image: npm,
    color: "rgb(206, 55, 60)",
    proficiency: 2.5,
  },
  {
    name: POSTGRESQL,
    image: postgresql,
    color: "rgb(46, 104, 143)",
    proficiency: 1.5,
  },
  {
    name: PYTHON,
    image: python,
    color: "rgb(49, 111, 153)",
    proficiency: 2.5,
  },
  {
    name: REDUX,
    image: redux,
    color: "rgb(118, 17, 184)",
    proficiency: 3,
  },
  {
    name: SASS,
    image: sass,
    color: "rgb(208, 104, 153)",
    proficiency: 3,
  },
  {
    name: TRAVIS,
    image: travis,
    color: "rgb(151, 29, 43)",
    proficiency: 1,
  },
  {
    name: TYPESCRIPT,
    image: typescript,
    color: "rgb(0, 124, 200)",
    proficiency: 2,
  },
  {
    name: VISUALSTUDIO,
    image: vscode,
    color: "rgb(0, 125, 201)",
    proficiency: 3,
  },
  {
    name: WEBPACK,
    image: webpack,
    color: "rgb(4, 122, 188)",
    proficiency: 2,
  },
  {
    name: MSSQL,
    image: mssql,
    color: "rgb(230, 77, 75)",
    proficiency: 1,
  },
  {
    name: LEAFLET,
    image: leaflet,
    color: "rgb(128, 190, 80)",
    proficiency: 3,
  },
  {
    name: YARN,
    image: yarn,
    color: "rgb(31, 143, 184)",
    proficiency: 2.5,
  },
  {
    name: UNITY,
    image: unity,
    color: "rgb(33, 44, 54)",
    proficiency: 1,
  },
  {
    name: JAVA,
    image: java,
    color: "rgb(234, 110, 36)",
    proficiency: 1.5,
  },
  {
    name: R,
    image: r,
    color: "rgb(23, 108, 187)",
    proficiency: 1,
  },
  {
    name: VANILLAWEB,
    image: vanillaweb,
    color: "rgb(231, 76, 49)",
    proficiency: 3,
  },
  {
    name: ATLASSIAN,
    image: atlassian,
    color: "rgb(0, 86, 199)",
    proficiency: 3,
  },
];

export {
  logos,
  REACT,
  ANGULAR,
  BABEL,
  CSHARP,
  D3,
  DJANGO,
  DOTNET,
  ESLINT,
  GIT,
  GITHUB,
  GOOGLE,
  HEROKU,
  JAVASCRIPT,
  JEST,
  JQUERY,
  MATERIALUI,
  NODE,
  NPM,
  POSTGRESQL,
  PYTHON,
  REDUX,
  SASS,
  TRAVIS,
  TYPESCRIPT,
  VISUALSTUDIO,
  WEBPACK,
  MSSQL,
  LEAFLET,
  YARN,
  UNITY,
  JAVA,
  R,
  VANILLAWEB,
  ATLASSIAN,
};
