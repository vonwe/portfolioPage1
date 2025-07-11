import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Autonomous IR Sensor Vehicle',
      description: 'Developed a Python algorithm that allows a vehicle equipped with infrared sensors to follow a defined track autonomously.',
      image: 'assets/finishedVehicle.png',
      tags: ['Python', 'Robotics', 'IoT']
    },
    {
      title: 'Ultrasonic Obstacle Avoidance',
      description: 'Built a system using ultrasonic sensors to detect nearby obstacles and automatically steer the vehicle away to avoid collisions.',
      image: 'assets/ultrasonicSensor.png',
      tags: ['Python', 'Robotics', 'IoT']
    },
    {
      title: 'Computer Vision ArUco UAV',
      description: 'Developed a computer vision system that identifies ArUco markers, classifies one as friendly, and deploys a water-based payload upon others.',
      image: 'assets/computerVision.png',
      tags: ['Python', 'OpenCV']
    },
    {
      title: 'Lyrics Search Web App',
      description: 'Full-stack web application using Angular, Azure Data Studio, and C#.NET to search songs via Genius API, display lyrics, and highlight referenced lyrics from other media sources.',
      image: 'assets/fullStackWebApp.png',
      tags: ['Angular', 'C#.NET', 'SQL', 'Azure']
    }
  ];
}
