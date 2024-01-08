import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects = signal<IProject[]>([
    {
      src: "assets/img/projects/vfull.png",
      alt: "Vida FullStack",
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: "",
      links: [
        {
          name: "Conheça o Blog",
          href: "https://vidafullstack.com.br"
        }
      ]
    }
  ]);
}
