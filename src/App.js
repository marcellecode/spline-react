import logo from "./logo.svg";
import "./App.css";
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

app.load('https://prod.spline.design/ARZRwPxk23aAQlzZ/scene.splinecode');

