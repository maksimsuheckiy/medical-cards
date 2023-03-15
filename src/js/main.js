// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

// App containers
import Home from "./containers/Home.js";

// App components
import API from "./utils/API.js";
import Input from "./components/Input.js";
import Select from "./components/Select.js";
import Header from "./components/Header.js";
import Modal from "./components/Modal.js";
import LoginForm from "./components/Login.js";
import FilterForm from './components/Filter.js';
