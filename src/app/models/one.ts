export interface Imeeting
{
        title: string;
    schedule: {
        date: string;
        time: string;
        location: {
            city: string;
            room: string;
        };
    };
}

export interface Istudent {
    name: string;
    grades: {
        subjects: {
            name: string;
            marks: number;
        }[];
        overall: number;
    };
}

export interface Iemplyee{
       id: number;
    info: {
        name: string;
        position: string;
        department: {
            name: string;
            floor: number;
        };
    };
}


// export interface Ibooking {
//      passenger: {
//         name: string;
//         age: number;
//     };
//     trip: {
//         from: string;
//         to: string;
//         date: string;
//         seat: {
//             type: string;
//             number: string;
//         };
//     };
// }


export interface Icource{
     title: string;
    duration: string;
    instructor: {
        name: string;
        contact: {
            email: string;
            phone: string;
        };
    };
}


export interface Iorder{
     orderId: string;
    customer: {
        name: string;
    };
    items: {
        name: string;
        price: number;
    }[];
    total: number;
}


export interface Iplaylist{
     name: string;
    createdBy: string;
    songs: {
        title: string;
        artist: string;
    }[];
}


export interface Ienrollment{
     student: {
        id: string;
        name: string;
        year: number;
        program: {
            name: string;
            department: string;
        };
    };
    semester: string;
}

export interface IpatientRecord {
     patientId: string;
    name: string;
    age: number;
    visit: {
        date: string;
        doctor: {
            name: string;
            department: string;
        };
        prescription: {
        }
    }
}

export interface Itransaction{
     account: {
        holder: string;
        number: string;
    };
    details: {
        amount: number;
        type: string;
        date: string;
        branch: {
            name: string;
            ifsc: string;
        };
    };
}



export interface Iproduct{
     name: string;
    price: number;
    manufacturer: {
        brand: string;
        warranty: string;
    };
    reviews: {
        rating: number;
        total: number;
    };
}


export interface Imovie{
    info: {
        title: string;
        director: {
            name: string;
            country: string;
        };
        release: {
            year: number;
            language: string;
        };
    };
}


export interface Ishipment{
    trackingId: string;
    destination: {
        city: string;
        country: string;
    };
    status: {
        current: string;
        lastUpdated: string;
    };
}

export interface Iconference{
    name: string;
    year: number;
    location: {
        city: string;
        venue: string;
    };
    speakers: {
        name: string;
        topic: string;
    }[];
}

export interface Iinvoice{
    invoiceNo: string;
    customer: {
        name: string;
        city: string;
    };
    billing: {
        items: {
            name: string;
            price: number;
        }[];
        total: number;
    };
    date: string;
}


export interface IorderNow{
     orderId: string;
    customer: {
        name: string;
        location: string;
    };
    items: {
        name: string;
        price: number;
    }[];
    totalAmount: number;
    status: string;
}


export interface Iticket{
        passenger: {
        name: string;
        age: number;
    };
    flight: {
        airline: string;
        number: string;
        route: {
            from: string;
            to: string;
        };
    };
    seat: string;
    date: string;
}


export interface ItransactionBank{
     txnId: string;
    sender: {
        name: string;
        account: string;
    };
    receiver: {
        name: string;
        account: string;
    };
    amount: number;
    date: string;
}

export interface IproductSell{
     id: string;
    title: string;
    specs: {
        processor: string;
        storage: string;
        color: string;
    };
    price: number;
}


export interface IguestBook{
        bookingId: string;
    guest: {
        name: string;
        nights: number;
    };
    hotel: {
        name: string;
        city: string;
    };
    room: {
        type: string;
        number: number;
    };
    checkIn: string;
}

export interface Icart{
      user: {
        name: string;
    };
    items: {
        name: string;
        quantity: number;
        price: number;
    }[];
    total: number;
}

export interface IrestaurantOrder{
    orderId: string;
    customer: {
        name: string;
        table: number;
    };
    items: {
        name: string;
        price: number;
    }[];
    total: number;
}

export interface IclassSchedule{
    subject: string;
    teacher: {
        name: string;
        room: string;
    };
    time: {
        start: string;
        end: string;
    };
}

export interface IecommerceOrder{
    orderId: string;
    customer: {
        name: string;
        contact: {
            email: string;
            phone: string;
        };
        address: {
            street: string;
            city: string;
            pin: number;
        };
    };
    items: {
        name: string;
        qty: number;
        price: number;
    }[];
    payment: {
        mode: string;
        status: string;
    };
    delivery: {
        expected: string;
        status: string;
    };
}

export interface Iperson {
  fname: string;
  lname: string;
  age: number;
  city: string;
  profession: string;
  company: string;
  hobby: string;
  experience: number;
  favLang: string;
  pet: {
    name: string;
    type: string;
  };
  married: string;
}

export interface Istd{
     name: string;
    school: string;
    grade: number;
    favSubject: string;
    bestFriend: string;
    favSport: string;
    dream: string;
    city: string;
    teacherName: string;
    marks: number;
}


export interface Iphone{
      brand: string;
    model: string;
    price: number;
    color: string;
    storage: string;
    camera: string;
    os: string;
    owner: string;
    purchaseYear: number;
    warranty: string;
}

export interface Imovie1{
     name: string;
    director: string;
    releaseYear: number;
    actor: string;
    genre: string;
    rating: number;
    duration: string;
    platform: string;
    favScene: string;
}

export interface Itrip{
     traveler: string;
    country: string;
    city: string;
    days: number;
    favPlace: string;
    localFood: string;
    stayHotel: string;
    travelMode: string;
    spent: string;
}