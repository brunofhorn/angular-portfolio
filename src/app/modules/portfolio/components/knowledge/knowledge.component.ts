import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledges = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de Conhecimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de Conhecimento de CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de Conhecimento de Javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de Conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de Conhecimento de NODEJS'
    }
  ]);
}
