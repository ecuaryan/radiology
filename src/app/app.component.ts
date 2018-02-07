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
  outcome: any = {};

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

        let onNotOnLastCharacteristic = this.index < this.tiRad.characteristics.length - 1;
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

      this.calculateOutcome();
    }
  };

  calculateOutcome (){
    if(this.pointsTotal < 2){
      this.outcome = this.tiRadLevelOutcome.TR1;
    } else if (this.pointsTotal < 3){
      this.outcome = this.tiRadLevelOutcome.TR2;
    } else if (this.pointsTotal < 4){
      this.outcome = this.tiRadLevelOutcome.TR3;
    } else if (this.pointsTotal < 7){
      this.outcome = this.tiRadLevelOutcome.TR4;
    } else {
      this.outcome = this.tiRadLevelOutcome.TR5;
    }
  }

  move = function (direction){
    this.tiRad.characteristics[this.index].hidden = true;
    this.index += direction;
    this.tiRad.characteristics[this.index].hidden = false;
  }
  // tslint:disable-next-line:member-ordering
  tiRad = {
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
            'note': 'Spongiform: Composed predominantly (>50%) of small cystic spaces. Do not add further points for other categories.',
            'points': 0,
            'break': true
          },
          {
            'description': 'Mixed cystic and solid',
            'note': 'Mixed cystic and solid: Assign points for predominant solid component.',
            'points': 1
          },
          {
            'description': 'Solid or almost completely solid',
            'points': 2
          },
          {
            'description': 'Cannot be determined because of calcification.',
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
            'note': 'Anechoic: Applies to cystic or almost completely cystic nodules.',
            'points': 0
          },
          {
            'description': 'Hyperechoic or isoechoic',
            'note': 'Hyperechoic/isoechoic/hypoechoic: Compared to adjacent parenchyma.',
            'points': 1
          },
          {
            'description': 'Hypoechoic',
            'note': 'Very hypoechoic: More hypoechoic than strap muscles.',
            'points': 2
          },
          {
            'description': 'Very hypoechoic',
            'points': 3
          },
          {
            'description': 'Cannot be determined',
            'points': 1
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
            'note': 'Taller-than-wide: Should be assessed on a transverse image with measurements parallel to sound beam for height and perpendicular to sound beam for width.',
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
            'note': 'Lobulated: Protrusions into adjacent tissue.<br>Irregular: Jagged, spiculated, or sharp angles.',
            'points': 2
          },
          {
            'description': 'Extra-thyroidal extension',
            'note': 'Extrathyroidal extension: Obvious invasion = malignancy.',
            'points': 3
          },
          {
            'description': 'Cannot be determined',
            'points': 0
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
            'note': 'Large comet-tail artifacts: V-shaped, >1 mm, in cystic components.',
            'points': 0
          },
          {
            'description': 'Macrocalcifications',
            'note': 'Macrocalcifications: Cause acoustic shadowing.',
            'points': 1
          },
          {
            'description': 'Peripheral (rim) calcifications',
            'note': 'Peripheral: Complete or incomplete along margin.',
            'points': 2
          },
          {
            'description': 'Punctate echogenic foci',
            'note': 'Punctate echogenic foci: May have small comet-tail artifacts.',
            'points': 3
          }
        ]
      }
    ]
  };

  tiRadLevelOutcome = {
    'TR1' : {
      'prognosis': 'Benign',
      'notes': ['No FNA']
    },
    'TR2' : {
      'prognosis': 'Not Suspicious',
      'notes': ['No FNA']
    },
    'TR3' : {
      'prognosis': 'Mildly Suspicious',
      'notes': ['FNA if &ge; 2.5 cm', 'Follow if &ge; 1.5 cm']
    },
    'TR4' : {
      'prognosis': 'Moderately Suspicious',
      'notes': ['FNA if &ge; 1.5 cm', 'Follow if &ge; 1 cm']
    },
    'TR5' : {
      'prognosis': 'Highly Suspicious',
      'notes': ['FNA if &ge; 1 cm', 'Follow if &ge; 0.5 cm*', '*Refer to discussion of papillary microcarcinomas for 5-9 mm TR5 nodules.']
    }
  }
}
