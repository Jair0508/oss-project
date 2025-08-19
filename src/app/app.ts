import { Component, signal } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { History } from './components/history/history';
import { Champions } from './components/champions/champions';
import { MasterClass } from './components/master-class/master-class';
import { SaturdayTraining } from './components/saturday-training/saturday-training';
import { CoursesEvents } from './components/courses-events/courses-events';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { OssProject } from "./components/oss-project/oss-project";


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, History, Champions, MasterClass, SaturdayTraining, CoursesEvents, Footer, OssProject],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
