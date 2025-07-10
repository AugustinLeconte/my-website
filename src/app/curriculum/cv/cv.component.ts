import { Component } from '@angular/core';
import { AssociationsComponent } from '../associations/associations.component';
import { ContactComponent } from '../contact/contact.component';
import { CentresInteretComponent } from '../centres-interet/centres-interet.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { DomainesExpertiseComponent } from '../domaines-expertise/domaines-expertise.component';
import { LanguesComponent } from '../langues/langues.component';
import { SyntheseComponent } from '../synthese/synthese.component';
import { ProComponent } from '../pro/pro.component';
import { FormationsComponent } from '../formations/formations.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cv',
  imports: [
    AssociationsComponent,
    ContactComponent,
    CentresInteretComponent,
    CertificationsComponent,
    DomainesExpertiseComponent,
    LanguesComponent,
    ProComponent,
    FormationsComponent,
    SyntheseComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  downloadPDF() {
    setTimeout(() => {
      const content = document.getElementById('cv-content');
      const clone = content?.cloneNode(true) as HTMLElement;
      const container = document.getElementById('pdf-capture');

      if (!clone || !container) return;

      clone.classList.add('pdf-mode');

      container.innerHTML = '';
      container.appendChild(clone);

      setTimeout(() => {
        html2canvas(clone, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');

          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('CV Augustin Leconte.pdf');
        });
      }, 100);
    });
  }
}
