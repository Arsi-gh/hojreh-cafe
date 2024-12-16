// dami => 0
// espresoo => 1
// based espresso => 2
// milk espresso => 3
// based milk => 4
// tasty milk => 5
// sharbat => 6
// gasdar => 7
// damnoosh => 8
// cake => 9 
// cookie => 10
// breakfast => 11

const menuData = [
    { img : "" , name : "ترک" , category : 0 , desc : "" , price : 20 , options : null},
    { img : "" , name : "100 روبستا" , category : 1 , desc : "" , price : null , options : [
        {id : 1 , key : "تک" , value : 16},
        {id : 2 , key : "دوبل" , value : 24},
    ]},
    { img : "" , name : "70 روبوستا" , category : 1 , desc : "" , price : null , options : [
        {id : 1 , key : "تک" , value : 18},
        {id : 2 , key : "دوبل" , value : 27},
    ]},
    { img : "" , name : "50 / 50" , category : 1 , desc : "" , price : null , options : [
        {id : 1 , key : "تک" , value : 20},
        {id : 2 , key : "دوبل" , value : 30},
    ]},
    { img : "" , name : "70 عربیکا" , category : 1 , desc : "" , price : null , options : [
        {id : 1 , key : "تک" , value : 26},
        {id : 2 , key : "دوبل" , value : 35},
    ]},
    { img : "" , name : "100 عربیکا" , category : 1 , desc : "" , price : null , options : [
        {id : 1 , key : "تک" , value : 30},
        {id : 2 , key : "دوبل" , value : 40},
    ]},
    { img : "" , name : "رومانو" , category : 2 , desc : "دوبل 100 عربیکا + وج لیمو" , price : 45 , options : null},
    { img : "" , name : "آمریکانو" , category : 2 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم ( 200 سی سی )" , value : 37},
        {id : 2 , key : "خنک ( 200 سی سی )" , value : 39},
    ]},
    { img : "" , name : "روماکانو" , category : 2 , desc : "آمریکانو + وج لیمو - (گرم 200 سی سی )" , price : 45 , options : null},
    { img : "" , name : "کوک اسپرسو" , category : 2 , desc : "خنک ( 200 سی سی )" , price : 55 , options : null},
    { img : "" , name : "فراپه کلاسیک" , category : 2 , desc : "خنک ( 200 سی سی )" , price : 55 , options : null},
    { img : "" , name : "کاپوچینو" , category : 3 , desc : "فوم فراوان (سیروپ دلخواه)" , price : null , options : [
        {id : 1 , key : "گرم - تک - (220 سی سی)" , value : 40},
        {id : 2 , key : "گرم - دوبل - (360 سی سی)" , value : 55},
        {id : 3 , key : "خنک - تک - (300 سی سی)" , value : 44},
        {id : 4 , key : "خنک - دوبل - (400 سی سی)" , value : 59},
    ]},
    { img : "" , name : "لاته" , category : 3 , desc : "شیر و فوم یکسدت (سیروپ دلخواه)" , price : null , options : [
        {id : 1 , key : "گرم - تک - (220 سی سی)" , value : 40},
        {id : 2 , key : "گرم - دوبل - (360 سی سی)" , value : 55},
        {id : 3 , key : "خنک - تک - (300 سی سی)" , value : 44},
        {id : 4 , key : "خنک - دوبل - (400 سی سی)" , value : 59},
    ]},
    { img : "" , name : "لاته کارامل ماکیاتو" , category : 3 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 55},
        {id : 2 , key : "خنک (400 سی سی)" , value : 59},
    ]},
    { img : "" , name : "موکا" , category : 3 , desc : "لته + سیروپ و گارنیش شکلات" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 55},
        {id : 2 , key : "خنک (400 سی سی)" , value : 59},
    ]},
    { img : "" , name : "موکاچینو" , category : 3 , desc : "همان موکا + فوم بیشتر" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 55},
        {id : 2 , key : "خنک (400 سی سی)" , value : 59},
    ]},
    { img : "" , name : "فلت وایت" , category : 3 , desc : "دوبل اسپرسو + شیر" , price : null , options : [
        {id : 1 , key : "گرم (220 سی سی)" , value : 50},
        {id : 2 , key : "خنک (300 سی سی)" , value : 54},
    ]},
    { img : "" , name : "کورتادو" , category : 3 , desc : "همان فلت وایت + فوم بیشتر" , price : null , options : [
        {id : 1 , key : "گرم (220 سی سی)" , value : 50},
        {id : 2 , key : "خنک (300 سی سی)" , value : 54},
    ]},
    { img : "" , name : "پیناکولادا" , category : 4 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 55},
        {id : 2 , key : "خنک (400 سی سی)" , value : 45},
    ]},
    { img : "" , name : "شیر نسکافه" , category : 4 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 45},
        {id : 2 , key : "خنک (400 سی سی)" , value : 49},
    ]},
    { img : "" , name : "شیر کاکائو" , category : 4 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 45},
        {id : 2 , key : "خنک (400 سی سی)" , value : 49},
    ]},
    { img : "" , name : "شیر عسل (دارچین دلخواه)" , category : 4 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 35},
        {id : 2 , key : "خنک (400 سی سی)" , value : 39},
    ]},
    { img : "" , name : "شیر و شیره" , category : 4 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 35},
        {id : 2 , key : "خنک (400 سی سی)" , value : 39},
    ]},
    { img : "" , name : "شیر کارامل" , category : 4 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 35},
        {id : 2 , key : "خنک (400 سی سی)" , value : 39},
    ]},
    { img : "" , name : "کاپوچینو پودری" , category : 4 , desc : "" , price : null , options : [
        {id : 1 , key : "گرم (360 سی سی)" , value : 45},
        {id : 2 , key : "خنک (400 سی سی)" , value : 49},
    ]},
    { img : "" , name : "شیر نارگیل" , category : 4 , desc : "گرم (360 سی سی)" , price : 55 , options : null},
    { img : "" , name : "شیر بادام زمینی" , category : 4 , desc : "گرم (360 سی سی)" , price : 50 , options : null},
    { img : "" , name : "هات چاکلت" , category : 4 , desc : "گرم (220 سی سی)" , price : 45 , options : null},
    { img : "" , name : "آیس چاکلت" , category : 4 , desc : "خنک (400 سی سی)" , price : 50 , options : null},
    { img : "" , name : "چای لاته کارامل" , category : 4 , desc : "گرم (360 سی سی)" , price : 45 , options : null},
    { img : "" , name : "ماسالا" , category : 4 , desc : "گرم (360 سی سی)" , price : 45 , options : null},
    { img : "" , name : "شیر قهوه ترک" , category : 4 , desc : "گرم (220 سی سی)" , price : 40 , options : null},
    { img : "" , name : "نعنا لیمو" , category : 6 , desc : "" , price : 40 , options : null},
    { img : "" , name : "گل سرخ" , category : 6 , desc : "" , price : 35 , options : null},
    { img : "" , name : "بهار نارنج" , category : 6 , desc : "" , price : 40 , options : null},
    { img : "" , name : "کاسنی" , category : 6 , desc : "" , price : 40 , options : null},
    { img : "" , name : "لیمو" , category : 6 , desc : "" , price : 35 , options : null},
    { img : "" , name : "جلاب" , category : 6 , desc : "" , price : 50 , options : null},
    { img : "" , name : "شربت ترش" , category : 6 , desc : "" , price : 45 , options : null},
    { img : "" , name : "تخم شربتی" , category : 6 , desc : "" , price : 40 , options : null},
    { img : "" , name : "خاکشیر" , category : 6 , desc : "" , price : 40 , options : null},
    { img : "" , name : "لیموناد" , category : 7 , desc : "" , price : 55 , options : null},
    { img : "" , name : "کرن بری" , category : 7 , desc : "" , price : 55 , options : null},
    { img : "" , name : "بلو اسکای" , category : 7 , desc : "" , price : 55 , options : null},
    { img : "" , name : "آناناس لیمو" , category : 7 , desc : "" , price : 55 , options : null},
    { img : "" , name : "موهیتو" , category : 7 , desc : "" , price : 55 , options : null},
    { img : "" , name : "اردیبهشت" , category : 8 , desc : "بادرنجبویه ، به لیمو ، اسطوخودوس ، گل راعی" , price : 30 , options : null},
    { img : "" , name : "آرامش" , category : 8 , desc : "چای سبز ، دارچین ، ارونه ، به لیمو" , price : 30 , options : null},
    { img : "" , name : "زنجبیل دارچین" , category : 8 , desc : "طبع گرم ، چربی سوزی" , price : 25 , options : null},
    { img : "" , name : "آویشن" , category : 8 , desc : "طبع گرم و خشک ، تقویت سیستم ایمنی و تنفسی" , price : 20 , options : null},
    { img : "" , name : "گل گاو زبان و سنبل الطیب" , category : 8 , desc : "طبع گرم و مرطوب ، آرامش بخش ، کمک یه کاهش استرس" , price : 25 , options : null},
    { img : "" , name : "نعنا فلفلی" , category : 8 , desc : "طبع گرم و خشک ، کمک به معده و سیستم گوارشی" , price : 20 , options : null},
    { img : "" , name : "اسطوخودوس" , category : 8 , desc : "طبع گرم و خسک ، آرامش بخش و تقویت کننده قوای جسمی" , price : 20 , options : null},
    { img : "" , name : "بادرنجبویه" , category : 8 , desc : "طبع گرم ، نشاط آور و رفع خستگی" , price : 30 , options : null},
    { img : "" , name : "به لیمو" , category : 8 , desc : "طبع گرم ، آرامش بخش و تقویت کننده قوای جسمی" , price : 30 , options : null},
    { img : "" , name : "رزماری" , category : 8 , desc : "طبع گرم ، خواصیت آنتی اکسیدان و ضد میکروب" , price : 30 , options : null},
    { img : "" , name : "چای سبز" , category : 8 , desc : "طبع سرد و خشک ، کالری سوز قوی" , price : 30 , options : null},
    { img : "" , name : "چای ترش" , category : 8 , desc : "طبع سرد ، کاهش فشار خون و تقویت سیستم ایمنی" , price : 30 , options : null},
    { img : "" , name : "چای سیاه ویژه" , category : 8 , desc : "همراه با هل / دارچین / زعفران / زنجبیل / بهار نارنج" , price : 30 , options : null},
    { img : "" , name : "کیک شکلاتی" , category : 9 , desc : "" , price : 40 , options : null},
    { img : "" , name : "چیزکیک" , category : 9 , desc : "" , price : 40 , options : null},
    { img : "" , name : "کوکی دبل چاکلت" , category : 10 , desc : "" , price : 15 , options : null},
    { img : "" , name : "کوکی کره ای" , category : 10 , desc : "" , price : 16 , options : null},
    { img : "" , name : "کوکی دارچین" , category : 10 , desc : "" , price : 16 , options : null},
    { img : "" , name : "کوکی پنیری" , category : 10 , desc : "" , price : 20 , options : null},
    { img : "" , name : "تست بادام زمینی" , category : 11 , desc : "کره بادام زمینی + عسل + گرانول بادام زمینی+ نان تست" , price : 60 , options : null},
    { img : "" , name : "تست بادام درختی" , category : 11 , desc : "کره بادام درختی + عسل + گرانول بادام درختی + نان تست" , price : 60 , options : null},
    { img : "" , name : "تست فندق" , category : 11 , desc : "کره فندق + عسل + گرانول فندق + نان تست" , price : 60 , options : null},
    { img : "" , name : "تست نارگیل" , category : 11 , desc : "کره نارگیل + عسل + گرانول نارگیل + نان تست" , price : 60 , options : null},
]

export const menu = menuData.map(item => {
    return {...item , id : crypto.randomUUID()}
})