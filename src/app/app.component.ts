import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pointsTotal = 0;
  selectedCharacteristicPointMap = {};
  index = 0;

  addPoints = function(event, characteristic, option) {
    if(option.break){
      alert("we're done here folks, it's all spongy and therefore BENIGN.");
    } else {
      if (characteristic.type === 'checkbox') {
        if (event.srcElement.checked) {
          this.selectedCharacteristicPointMap[characteristic.description + ' - ' + option.description] = option.points;
        } else {
          delete this.selectedCharacteristicPointMap[characteristic.description + ' - ' + option.description];
        }
      } else {
        this.selectedCharacteristicPointMap[characteristic.description] = option.points;

        let onNotOnLastCharacteristic = this.index < this.tRad.characteristics.length - 1;
        if(onNotOnLastCharacteristic){
          this.move(1);
        }
      }

      this.pointsTotal = 0;
      for (const key in this.selectedCharacteristicPointMap ) {
        if (this.selectedCharacteristicPointMap.hasOwnProperty(key)) {
          this.pointsTotal += this.selectedCharacteristicPointMap[key];
        }
      }
    }
  };

  move = function (direction){
    this.tRad.characteristics[this.index].hidden = true;
    this.index += direction;
    this.tRad.characteristics[this.index].hidden = false;
  }
  // tslint:disable-next-line:member-ordering
  tRad = {
    'id': 1,
    'description': 'ARC TI-RADS',
    'characteristics': [
      {
        'hidden': false,
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
        'hidden': true,
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
        'hidden': true,
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
        'hidden': true,
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
        'hidden': true,
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
