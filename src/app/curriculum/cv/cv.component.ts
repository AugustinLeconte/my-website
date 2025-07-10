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
export class CvComponent {}
