import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pointsTotal = 0;
  selectedCharacteristicPointMap = {};

  addPoints = function(event, characteristic, option) {
    if (characteristic.type === 'checkbox') {
      if (event.srcElement.checked) {
        this.selectedCharacteristicPointMap[characteristic.description + ' - ' + option.description] = option.points;
      } else {
        delete this.selectedCharacteristicPointMap[characteristic.description + ' - ' + option.description];
      }
    } else {
      this.selectedCharacteristicPointMap[characteristic.description] = option.points;
    }

    this.pointsTotal = 0;
    for (const key in this.selectedCharacteristicPointMap ) {
      if (this.selectedCharacteristicPointMap.hasOwnProperty(key)) {
        this.pointsTotal += this.selectedCharacteristicPointMap[key];
      }
    }
  };
  // tslint:disable-next-line:member-ordering
  tRad = {
    'id': 1,
    'description': 'ARC TI-RADS',
    'characteristics': [
      {
        'description': 'Composition',
        'type': 'radio',
        'options': [
          {
            'description': 'Cystic or almost completely cystic',
            'points': 0
          },
          {
            'description': 'Spongiform',
            'points': 0,
            'break': true
          },
          {
            'description': 'Mixed cystic and solid',
            'points': 1
          },
          {
            'description': 'Solid or almost completely solid',
            'points': 2
          }
        ]
      },
      {
        'description': 'Echogenicity',
        'type': 'radio',
        'options': [
          {
            'description': 'Anechoic',
            'points': 0
          },
          {
            'description': 'Hyperechoic or isoechoic',
            'points': 1
          },
          {
            'description': 'Hypoechoic',
            'points': 2
          },
          {
            'description': 'Very hypoechoic',
            'points': 3
          }
        ]
      },
      {
        'description': 'Shape',
        'type': 'radio',
        'options': [
          {
            'description': 'Wider-than-tall',
            'points': 0
          },
          {
            'description': 'Taller-than-wide',
            'points': 3
          }
        ]
      },
      {
        'description': 'Margin',
        'type': 'radio',
        'options': [
          {
            'description': 'Smooth',
            'points': 0
          },
          {
            'description': 'Ill-defined',
            'points': 0
          },
          {
            'description': 'Lobulated or irregular',
            'points': 2
          },
          {
            'description': 'Extra-thyroidal extension',
            'points': 3
          }
        ]
      },
      {
        'description': 'Echogenic Foci',
        'type': 'checkbox',
        'options': [
          {
            'description': 'None or large comet-tail artifacts',
            'points': 0
          },
          {
            'description': 'Macrocalcifications',
            'points': 1
          },
          {
            'description': 'Peripheral (rim) calcifications',
            'points': 2
          },
          {
            'description': 'Punctate echogenic foci',
            'points': 3
          }
        ]
      }
    ]
  };
}
