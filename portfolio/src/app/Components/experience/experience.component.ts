import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Engineer Intern (NTBF) | Chevron',
      subtitle: 'May 2024 - August 2024',
      description: 'Built a Power Apps-based tool which automated internal developer request workflows',
      description2: 'Conducted infrastructure integration assessments with emerging tech companies, strengthening system resilience',
      image: '../../../../assets/finishedVehicle.png'
    },
    {
      title: 'Research Assistant | Prairie View A&M University',
      subtitle: 'August 2023 - May 2024',
      description: 'Showcased IoT implementations in transportation via IR-sensor based autonomous vehicle, and a collision avoiding vehicle',
      description2: 'Created documentation for reproducibility and future scaling of robotics experiments',
      image: '../../../../assets/ultrasonicSensor.png'
    },
    {
      title: 'Software Engineer Intern | Simon Data',
      subtitle: 'May 2023 - August 2023',
      description: 'Bolstered backend reliability with robust unit tests; increasing system coverage by 20%',
      description2: 'Improved alerting infrastructure based on cross-functional feedback, enhancing incident visibility',
      image: '../../../../assets/computerVision.png'
    }
  ];
}
