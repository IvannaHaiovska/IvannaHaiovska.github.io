import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

import { EmailService } from './service/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  public cars = [
    {
      name: 'AUDI', model: [
        { name: 'A8' },
        { name: 'A7' },
        { name: 'A6' },
        { name: 'A5' },
        { name: 'Q3' },
        { name: 'Q5' },
        { name: 'Q7' },
        { name: '100' },
        { name: '80' }
      ]
    },
    {
      name: 'BMW', model: [
        { name: '1 SERIES' },
        { name: '2 SERIES' },
        { name: '3 SERIES' },
        { name: '4 SERIES' },
        { name: '5 SERIES' },
        { name: '6 SERIES' },
        { name: '5 GT' },
        { name: '6 GT' },
        { name: 'X2' },
        { name: 'X3' },
        { name: 'X4' },
        { name: 'X5' },
        { name: 'X6' }
      ]
    },
    {
      name: 'CHEVROLET', model: [
        { name: 'AVEO' },
        { name: 'VIVA' },
        { name: 'SONIC' },
        { name: 'ORLANDO' },
        { name: 'MATIZ' },
        { name: 'MALIBU' },
        { name: 'LANOS' },
        { name: 'EPICA' },
        { name: 'CAPTIVA' }
      ]
    },
    {
      name: 'CITROEN', model: [
        { name: 'C-CROSSER' },
        { name: 'XSARA' },
        { name: 'SAXO' },
        { name: 'DS4' },
        { name: 'C6' },
        { name: 'C5' },
        { name: 'C4 PICASSO' },
        { name: 'C4' },
        { name: 'C3' }
      ]
    },
    {
      name: 'DAEWOO', model: [
        { name: 'ESPERO' },
        { name: 'GENTRA' },
        { name: 'KALOS' },
        { name: 'LACETTI' },
        { name: 'LANOS' },
        { name: 'NEXIA' },
        { name: 'NUBIRA' },
        { name: 'TOSCA' },
        { name: 'MATIZ' }
      ]
    },
    {
      name: 'FIAT', model: [
        { name: 'FREEMONT' },
        { name: 'SEDICI' },
        { name: 'PUNTO' },
        { name: 'PANDA' },
        { name: 'GRANDE PUNTO' },
        { name: 'DOBLO' },
        { name: 'BRAVO' },
        { name: 'BRAVA' },
        { name: 'ALBEA' }
      ]
    },
    {
      name: 'FORD', model: [
        { name: 'ECOSPORT' },
        { name: 'TAURUS' },
        { name: 'RANGER' },
        { name: 'MUSTANG' },
        { name: 'MAVERICK' },
        { name: 'KA' },
        { name: 'GALAXY' },
        { name: 'FUSION' },
        { name: 'FOCUS' },
        { name: 'FIESTA' },
        { name: 'EXPLORER' },
        { name: 'ESCAPE' },
        { name: 'SCORPIO' }
      ]
    },
    {
      name: 'HONDA', model: [
        { name: 'JAZZ' },
        { name: 'RIDGELINE' },
        { name: 'PILOT' },
        { name: 'ODYSSEY' },
        { name: 'LEGEND' },
        { name: 'ACCORD' },
        { name: 'FR-V' },
        { name: 'CROSSTOUR' },
        { name: 'CR-Z' }
      ]
    },
    {
      name: 'HYUNDAI', model: [
        { name: 'ACCENT' },
        { name: 'CRETA' },
        { name: 'LANTRA' },
        { name: 'MATRIX' },
        { name: 'SANTA FE' },
        { name: 'SOLARIS' },
        { name: 'SONATA' },
        { name: 'TERRACAN' },
        { name: 'TIBURON' },
        { name: 'TUCSON' },
        { name: 'PALISADE' },
        { name: 'ELANTRA' },
        { name: 'EQUUS' },
        { name: 'GENESIS' }
      ]
    },
    {
      name: 'INFINITI', model: [
        { name: 'EX' },
        { name: 'FX' },
        { name: 'G' },
        { name: 'JX' },
        { name: 'M' },
        { name: 'Q' },
        { name: 'QX30' },
        { name: 'QX50' },
        { name: 'QX60' }
      ]
    },
    {
      name: 'KIA', model: [
        { name: 'CARENS' },
        { name: 'CARNIVAL' },
        { name: 'FORTE' },
        { name: 'MOHAVE' },
        { name: 'OPTIMA' },
        { name: 'PICANTO' },
        { name: 'RIO' },
        { name: 'SORENTO' },
        { name: 'SPORTAGE' },
        { name: 'MAGENTIS' },
        { name: 'OPIRUS' }
      ]
    },
    {
      name: 'MAZDA', model: [
        { name: '626' },
        { name: 'XEDOX 9' },
        { name: '323' },
        { name: '929' },
        { name: 'CX-5' },
        { name: 'CX-7' },
        { name: 'CX-9' },
        { name: '2' },
        { name: '3' },
        { name: '5' },
        { name: '6' }
      ]
    },
    {
      name: 'MERCEDES', model: [
        { name: 'A-КЛАСС' },
        { name: 'B-КЛАСС' },
        { name: 'C-КЛАСС' },
        { name: 'E-КЛАСС' },
        { name: 'S-КЛАСС' },
        { name: 'GLE' },
        { name: 'VITO' },
        { name: 'ML' },
        { name: 'R-КЛАСС' },
        { name: 'V-CLASS' },
        { name: 'G-КЛАСС' },
        { name: 'CLS' },
        { name: 'CLK' },
        { name: 'CLA' },
        { name: 'CL' }
      ]
    },
    {
      name: 'MITSUBISHI', model: [
        { name: 'SPACE STAR' },
        { name: 'PAJERO' },
        { name: 'OUTLANDER' },
        { name: 'MONTERO' },
        { name: 'LANCER' },
        { name: 'GRANDIS' },
        { name: 'GALANT' },
        { name: 'ECLIPSE' },
        { name: 'ECLIPSE CROSS' }
      ]
    },
    {
      name: 'NISSAN', model: [
        { name: 'ALTIMA' },
        { name: 'XTERRA' },
        { name: 'X-TRAIL' },
        { name: 'TITAN' },
        { name: 'TIIDA' },
        { name: 'TERRANO' },
        { name: 'SUNNY' },
        { name: 'SKYLINE' },
        { name: 'SENTRA' },
        { name: 'PRIMERA' },
        { name: 'NOTE' },
        { name: 'MURANO' },
        { name: 'ALMERA' }
      ]
    },
    {
      name: 'OPEL', model: [
        { name: 'ANTARA' },
        { name: 'ASTRA' },
        { name: 'CALIBRA' },
        { name: 'FRONTERA' },
        { name: 'MERIVA' },
        { name: 'OMEGA' },
        { name: 'VECTRA' },
        { name: 'ZAFIRA' }
      ]
    },
    {
      name: 'PEUGEOT', model: [
        { name: '107' },
        { name: '206' },
        { name: '207' },
        { name: '208' },
        { name: '307' },
        { name: '308' },
        { name: '407' },
        { name: '508' },
        { name: '2008' },
        { name: '3008' },
        { name: '4008' },
        { name: '5008' },
        { name: 'BOXER' },
        { name: 'PARTNER' },
        { name: 'TRAVELLER' }
      ]
    },
    {
      name: 'RENAULT', model: [
        { name: 'DUSTER' },
        { name: 'SANDERO STEPWEY' },
        { name: 'SYMBOL' },
        { name: 'SCENIC' },
        { name: 'SANDERO' },
        { name: 'MEGANE' },
        { name: 'LOGAN' },
        { name: 'LAGUNA' },
        { name: 'KOLEOS' },
        { name: 'KANGOO' },
        { name: 'GRAND SCENIC' },
        { name: 'FLUENCE' },
        { name: 'ESPASE' },
        { name: 'CLIO' }
      ]
    },
    {
      name: 'SKODA', model: [
        { name: 'FABIA' },
        { name: 'OCTAVIA' },
        { name: 'KODIAK' },
        { name: 'RAPID' },
        { name: 'ROOMSTER' },
        { name: 'SUPERB' },
        { name: 'YETI' },
        { name: 'KODIAQ' },
        { name: 'KAROQ' }
      ]
    },
    {
      name: 'TOYOTA', model: [
        { name: 'AURIS' },
        { name: 'MARK 2' },
        { name: 'WILL VS' },
        { name: 'GT' },
        { name: 'YARIS' },
        { name: 'VENZA' },
        { name: 'RAV4' },
        { name: 'MATRIX' },
        { name: 'CAMRY' },
        { name: 'COROLLA' },
        { name: 'HIACE' },
        { name: 'LAND CRUISER' },
        { name: 'PRIUS' },
        { name: 'SIENNA' },
        { name: 'VISTA' }
      ]
    },
    {
      name: 'VOLKSWAGEN', model: [
        { name: 'AMAROK' },
        { name: 'CADDY' },
        { name: 'CARAVELLE' },
        { name: 'PASSAT' },
        { name: 'PASSAT CC' },
        { name: 'POLO' },
        { name: 'PHAETON' },
        { name: 'SCIROCCO' },
        { name: 'TOUAREG' },
        { name: 'TOURAN' },
        { name: 'TIGUAN' },
        { name: 'TRANSPORTER' },
        { name: 'GOLF' },
        { name: 'GOLF PLUS' },
        { name: 'JETTA' }
      ]
    },
  ];

  public years = ['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'
  ];

  public categories = [
    {
      name: 'AC Heating And Cooling', Subcategory: [
        'Car Radiator Service',
        'AC Check up',
        'AC Cooling Less',
        'AC Servicing',
        'Overheating Problems',
        'AC Gas filling',
        'Car Radiator Replacement',
        'Others - AC Service'
      ]
    },
    {
      name: 'Battery Services', Subcategory: [
        'Battery boost',
        'Battery cable replacement',
        'Battery terminal end servicing',
        'Others - Battery services',
        'Battery Replacement'
      ]
    },
    {
      name: 'Security, Locking And Keys', Subcategory: [
        'Central Locking Systems',
        'Key Programming and Codes',
        'Key Replacement',
        'Car Alarm Keeps Going Off',
        'Others - Security, Locking and keys'
      ]
    },
    {
      name: 'Not Sure - Help Me Choose!', Subcategory: [
        'General Check up',
        'Body Repair',
        'Leak',
        'Minor Repairs',
        'Banging or Knocking Noise',
        "My Car Won't Start",
        'Loss of Power',
        'Other Problem - Smoking, Strange Smells etc',
        'Noise',
        'General Repairs',
        'Vibration'
      ]
    },
    {
      name: 'Brake Services', Subcategory: [
        'Hand Brake',
        'Brake Pad Replacement Front',
        'Brake Pad Replacement Rear',
        'Brakes Inspection',
        'Others - Brake services'
      ]
    },
    {
      name: 'Windows, Window Screens And Mirrors', Subcategory: [
        'Windows, Windscreens and Mirrors - Other',
        'Windscreen Wipers',
        'Window Tinting',
        'Electric Window Faults',
        'Windscreen Replacement'
      ]
    },
    {
      name: 'Bodywork, Dents And Repairs', Subcategory: [
        'Full Vehicle Body Paint',
        'Denting & Body Repair',
        'Full Vehicle Polishing & Scratch Repair',
        'Others - Bodywork, Dents and repairs'
      ]
    },
    {
      name: 'Clutch And Gearbox Repairs', Subcategory: [
        'Gearbox Repair',
        'Auto Gearbox Repairs',
        'Clutch Plate',
        'Gearbox Oil',
        'New Clutch',
        'Others - Clutch and gearbox repairs',
        'Automatic Transmission Fluid'
      ]
    },
    {
      name: 'Diagnostics', Subcategory: [
        'Vehicle will not start',
        'Noise',
        'Smell',
        'Dashboard service light',
        'Vibration',
        'Im not sure',
        'Others - Diagnotics'
      ]
    },
    {
      name: 'Electrical', Subcategory: [
        'Check engine light',
        'Light and Bulbs',
        'Central Locking Systems',
        'Immobiliser Faults',
        'Key Programming and Codes',
        'Key Replacement',
        'Starter motor replacement',
        'Security, Locking and Keys - Other',
        'Parking sensors',
        'Car Alarm Keeps Going Off',
        'Others - Electrical'
      ]
    },
    {
      name: 'Steering And Suspension', Subcategory: [
        'Suspension Repairs',
        'Axle Repairs',
        'Steering Wheel Shaking',
        'Coil Springs',
        'Shock Absorber Repair',
        'Car Pulling Left or Right',
        'Power Steering',
        'Steering Rack',
        'Others - Steering and Suspension'
      ]
    },
    {
      name: 'Engine', Subcategory: [
        'Engine Parts',
        'Engine Oil',
        'Water Pump',
        'Timing Belt',
        'Engine and Cooling - Other',
        'Engine Management Light',
        'Power Steering',
        'Head Gasket',
        'Fuel Pump',
        'Turbo Faults and Replacement',
        'Fuel Injection System',
        'Fan Belt',
        'Others - Engine'
      ]
    },
    {
      name: 'Tyre, Wheels And Tracking', Subcategory: [
        'Alloy Wheel Refurbishment',
        'Wheel Alignment',
        'Puncture Repair',
        'Specialist Tyres',
        'Purchase tires',
        'Tire rotation',
        'Wheel Refurbishment',
        'Others - Tyres, Wheels and Tracking'
      ]
    },
    {
      name: 'Wash and detailing', Subcategory: [
        'Full Car Wash',
        'Car Wash',
        'Steam Wash',
        'Interior Detailing',
        'Ceramic Treatment',
        'Leather Seat Treatment',
        'Car Full Detailing Package',
        'Exterior Polish',
        'Car Wrapping',
        'Window Tinting',
        'Other Treatment',
        'AC Sanitation'
      ]
    }
  ];
  public emirates = [
    {
      name: 'ABU DHABI', area: [
        'Abu Dhabi City',
        'MUSSAFAH',
      ]
    },
    {
      name: 'AJMAN', area: [
        'INDUSTRIAL AREA 1',
        'INDUSTRIAL AREA 2',
        'RASHIDIYA',
      ]
    },
    {
      name: 'AL AIN', area: [
        'INDUSTRIAL CITY'
      ]
    },
    {
      name: 'DUBAI', area: [
        'AL QUOZ',
        'AL QUSAIS',
        'DEIRA',
        'DIP',
        'NEAR ACADEMIC CITY',
        'RAS AL KHOR',
        'RASHIDIYA'
      ]
    },
    {
      name: 'RAS AL KHAIMAH', area: [
        'RAK CO-OPERATIVE SOCIETY'
      ]
    },
    {
      name: 'SHARJAH', area: [
        'INDUSTRIAL AREA 11',
        'INDUSTRIAL AREA 4',
        'INDUSTRIAL AREA 7',
      ]
    },
  ];

  public checks = [
    { value: 'Need tow Truck', formControl: 'towTruck' },
    { value: 'Need car Pickup', formControl: 'carPickup' },
    { value: 'Custom Parts', formControl: 'customParts' }
  ];

  public models: any;
  public subcategories: any;
  public areas: any;
  public selected = 'Model';
  public ifmodel = false;
  public ifcategory = false;
  public ifemirate = false;

  public repaired!: string;
  public order: any;
  public orderDate!: Date;

  public selectedOption!: string;
  public orderForm !: FormGroup;

  public validDate = false;
  public myDate: any;
  constructor(
    private fb: FormBuilder,
    private emailService: EmailService) { }

  ngOnInit(): void {
    this.initOrderForm();
    this.myDate = formatDate(new Date(), 'yyyy-MM-dd', 'en')
  }

  initOrderForm(): void {
    this.orderForm = this.fb.group({
      marks: ['', Validators.required],
      models: ['', Validators.required],
      years: ['', Validators.required],
      repaired: ['', Validators.pattern('[a-zA-Z]{1,50}')],
      description1: ['', Validators.pattern('[a-zA-Z]{1,50}')],
      categories: ['', Validators.required],
      subcategories: ['', Validators.required],
      emirates: ['', Validators.required],
      areas: ['', Validators.required],
      towTruck: [null],
      carPickup: [null],
      customParts: [null],
      orderDate: ['', Validators.required],
      description2: ['', Validators.pattern('[a-zA-Z]{1,50}')],
    });
  }
  CheckMark(event: any) {
    this.orderForm.patchValue({
      models: ''
    });
    this.cars.map(car => {
      if (event.target.value === car.name) {
        this.models = car.model;
        this.ifmodel = true;
      }
    })
  }

  CheckCategory(event: any) {
    this.orderForm.patchValue({
      subcategories: ''
    });
    this.categories.map(category => {
      if (event.target.value === category.name) {
        this.subcategories = category.Subcategory;
        this.ifcategory = true;
      }
    })
  }
  CheckEmirate(event: any) {
    this.orderForm.patchValue({
      areas: ''
    });
    this.emirates.map(emirate => {
      if (event.target.value === emirate.name) {
        this.areas = emirate.area;
        this.ifemirate = true;
      }
    })
  }

  Send() {
    if (this.orderForm.value.orderDate <= this.myDate) {
      this.validDate = true;
    }
    else {
      this.validDate = false;
      this.emailService.sendEmail(this.orderForm.value).subscribe(() => { });
      alert("Your order send! Wait for call from our manager");
    }

  }
  Clear() {
    this.orderForm.reset()
    this.orderForm.patchValue({
      marks: '',
      models: '',
      years: '',
      categories: '',
      subcategories: '',
      emirates: '',
      areas: ''
    })
  }
}
