import { Component, OnInit } from '@angular/core';
import { Iemplyee, Imeeting, Imovie1, Iperson, Iphone, Istd, Istudent, Itrip } from 'src/app/models/one';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
msg : string ="work hard , party hard"
// 1️⃣ This meeting object represents an official corporate discussion scheduled for the company's tech strategy planning. 
// It includes the meeting title, date, time, and a nested location object with details about the city and room where the meeting will be held. 
// Students can use this to build a sentence like: "The meeting titled Tech Strategy Discussion will take place on 2025-12-01 at 4:30 PM in Conference Hall A, Mumbai."
 meeting:Imeeting = {
  title: 'Tech Strategy Discussion',
  schedule: {
    date: '2025-12-01',
    time: '4:30 PM',
    location: { city: 'Mumbai', room: 'Conference Hall A' }
  }
};

//*************************************************************************************888
//  */


// 2️⃣ This student object describes Aisha Khan’s academic record for her current semester. 
// It has a nested grades object that contains an array of subjects with their marks and an overall grade percentage. 
// Ideal for interpolation like: "Aisha Khan scored 92 in Math and 88 in Science, making her overall grade 90%."
 student :Istudent = {
  name: 'Aisha Khan',
  grades: {
    subjects: [
      { name: 'Math', marks: 92 },
      { name: 'Science', marks: 88 }
    ],
    overall: 90
  }
};


//************************************************************************8
// ************************************************ */



// 3️⃣ This employee object stores information about a team member working in an IT department. 
// It includes personal details such as name, position, and nested department info containing the department name and floor number.
 employee :Iemplyee = {
  id: 1024,
  info: {
    name: 'Rahul Sharma',
    position: 'Frontend Developer',
    department: { name: 'IT', floor: 3 }
  }
};


//*****************************************************************************
// *******************************************88 */


course = {
  title: 'Full Stack Web Development',
  duration: '6 months',
  instructor: {
    name: 'Vikram Patel',
    contact: { email: 'vikram@learnhub.com', phone: '9876543210' }
  }
};


//******************************* *
// ***************************88/


order = {
  orderId: 'ORD-5487',
  customer: { name: 'Anjali Verma' },
  items: [
    { name: 'Laptop', price: 75000 },
    { name: 'Mouse', price: 1200 }
  ],
  total: 76200
};


//********************
// **************************************** */


playlist = {
  name: 'Chill Vibes',
  createdBy: 'Arnav',
  songs: [
    { title: 'Ocean Eyes', artist: 'Billie Eilish' },
    { title: 'Sunflower', artist: 'Post Malone' }
  ]
};


enrollment = {
  student: {
    id: 'ST-303',
    name: 'Divya Nair',
    year: 2,
    program: { name: 'B.Tech CSE', department: 'Computer Science' }
  },
  semester: 'Winter 2025',
  subjects: [
    { code: 'CS501', title: 'Data Structures', credits: 3 },
    { code: 'CS503', title: 'Operating Systems', credits: 4 }
  ],
  advisor: { name: 'Prof. Ajay Kumar', email: 'ajay@univ.edu' }
};



//************************** */

 patientRecord = {
  patientId: 'PT-4523',
  name: 'Rajeev Mehta',
  age: 45,
  visit: {
    date: '2025-10-10',
    doctor: { name: 'Dr. Rakesh Sinha', department: 'Cardiology' },
    prescription: [
      { medicine: 'Aspirin', dosage: '75mg', frequency: 'Once Daily' },
      { medicine: 'Atorvastatin', dosage: '10mg', frequency: 'Night' }
    ]
  },
  insurance: { provider: 'MediCare', policyNo: 'MC-9988' }
};


//******************************************** */\

transaction = {
  account: { holder: 'Farhan Ali', number: 'XXXX-7865' },
  details: {
    amount: 15000,
    type: 'Credit',
    date: '2025-11-09',
    branch: { name: 'Andheri', ifsc: 'SBIN0001234' }
  }
};

product = {
  name: 'Wireless Headphones',
  price: 4999,
  manufacturer: { brand: 'SoundMax', warranty: '1 year' },
  reviews: { rating: 4.5, total: 230 }
};


movie = {
  info: {
    title: 'Interstellar',
    director: { name: 'Christopher Nolan', country: 'UK' },
    release: { year: 2014, language: 'English' }
  }
};


shipment = {
  trackingId: 'TRK9845',
  destination: { city: 'Chennai', country: 'India' },
  status: { current: 'In Transit', lastUpdated: '2025-11-07' }
};

conference = {
  name: 'JSConf India',
  year: 2025,
  location: { city: 'Goa', venue: 'IT Convention Center' },
  speakers: [
    { name: 'Tanvi Singh', topic: 'Web Performance' },
    { name: 'Harish Nair', topic: 'Angular Best Practices' }
  ]
};


invoice = {
  invoiceNo: 'INV-2048',
  customer: { name: 'Pooja Desai', city: 'Ahmedabad' },
  billing: {
    items: [
      { name: 'Smartphone', price: 24000 },
      { name: 'Charger', price: 1500 }
    ],
    total: 25500
  },
  date: '2025-10-20'
};


orderNow = {
  orderId: 'ORD-7856',
  customer: { name: 'Ravi Kumar', location: 'Delhi' },
  items: [
    { name: 'Wireless Mouse', price: 899 },
    { name: 'Keyboard', price: 1299 }
  ],
  totalAmount: 2198,
  status: 'Delivered'
};


ticket = {
  passenger: { name: 'Neha Sharma', age: 29 },
  flight: {
    airline: 'Air India',
    number: 'AI-302',
    route: { from: 'Mumbai', to: 'Singapore' }
  },
  seat: '14B',
  date: '2025-12-04'
};


transactionBank = {
  txnId: 'TXN987654',
  sender: { name: 'Kiran Verma', account: 'SB-9820' },
  receiver: { name: 'Manoj Das', account: 'SB-7411' },
  amount: 5000,
  date: '2025-11-02'
};

 productSell = {
  id: 'PRD-501',
  title: 'MacBook Air M3',
  specs: { processor: 'Apple M3', storage: '512GB SSD', color: 'Midnight' },
  price: 134999
};


guestBook = {
  bookingId: 'HTL-3342',
  guest: { name: 'Rekha Joshi', nights: 3 },
  hotel: { name: 'Blue Lagoon', city: 'Goa' },
  room: { type: 'Deluxe', number: 407 },
  checkIn: '2025-12-20'
};


cart = {
  user: { name: 'Simran Kaur' },
  items: [
    { name: 'T-shirt', quantity: 2, price: 799 },
    { name: 'Sneakers', quantity: 1, price: 2999 }
  ],
  total: 4597
};


restaurantOrder = {
  orderId: 'RES-9807',
  customer: { name: 'Pratik Deshmukh', table: 5 },
  items: [
    { name: 'Paneer Tikka', price: 320 },
    { name: 'Butter Naan', price: 60 }
  ],
  total: 380
};


classSchedule = {
  subject: 'Mathematics',
  teacher: { name: 'Mr. Rajesh', room: '201A' },
  time: { start: '10:00 AM', end: '11:00 AM' }
};

ecommerceOrder = {
  orderId: 'ORD-9999',
  customer: {
    name: 'Tanya Kapoor',
    contact: { email: 'tanya.kapoor@mail.com', phone: '9876543210' },
    address: {
      street: '45, Rosewood Apartments',
      city: 'Gurgaon',
      pin: 122002
    }
  },
  items: [
    { name: 'iPhone 15', qty: 1, price: 79999 },
    { name: 'AirPods Pro', qty: 1, price: 24999 }
  ],
  payment: { mode: 'Credit Card', status: 'Paid' },
  delivery: { expected: '2025-11-12', status: 'Dispatched' }
};



  person :Iperson= {
  fname: "Ravi",
  lname: "Kiran",
  age: 30,
  city: "Pune",
  profession: "Software Engineer",
  company: "TechUnity Corp",
  hobby: "cycling",
  experience: 8,
  favLang: "JavaScript",
  pet: {
    name: "Bruno",
    type: "dog"
  },
  married: "Yes"
};


 std :Istd= {
  name: "Aarav",
  school: "Sunshine Public School",
  grade: 7,
  favSubject: "Science",
  bestFriend: "Riya",
  favSport: "Cricket",
  dream: "Scientist",
  city: "Nagpur",
  teacherName: "Mrs. Sharma",
  marks: 89
};

 phone:Iphone = {
  brand: "Apple",
  model: "iPhone 15 Pro",
  price: 145000,
  color: "Titanium Blue",
  storage: "256GB",
  camera: "48MP",
  os: "iOS 18",
  owner: "Rohit",
  purchaseYear: 2024,
  warranty: "2 years"
};


 movie1:Imovie1 = {
  name: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  actor: "Leonardo DiCaprio",
  genre: "Sci-Fi",
  rating: 8.8,
  duration: "2h 28m",
  platform: "Netflix",
  favScene: "Hallway fight"
};




  constructor() { }

  ngOnInit(): void {
  }

}


var trip:Itrip = {
  traveler: "Sanya",
  country: "Japan",
  city: "Tokyo",
  days: 10,
  favPlace: "Shibuya Crossing",
  localFood: "Sushi",
  stayHotel: "Hotel Sakura",
  travelMode: "Flight",
  spent: "₹1,20,000"
};
