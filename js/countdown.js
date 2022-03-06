//Doctor Strange in the Multiverse of Madness
const countdown = () => {
    const countDate = new Date("March 25, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

   
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

   
    const textDay = Math.floor(gap / day);
    const testHour = Math.floor((gap % day) / hour);
    const testMinute = Math.floor((gap % hour) / minute);
    const testSecond = Math.floor((gap % minute) / second);


    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = testHour;
    document.querySelector(".minute").innerText = testMinute;
    document.querySelector(".second").innerText = testSecond;


   
};


setInterval(countdown, 1000);


//avatar 2
const countdowna = () => {
    const countDate = new Date("December 16, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

  
    const seconda = 1000;
    const minutea = seconda * 60;
    const houra = minutea * 60;
    const daya = houra * 24;

   
    const textDaya = Math.floor(gap / daya);
    const testHoura = Math.floor((gap % daya) / houra);
    const testMinutea = Math.floor((gap % houra) / minutea);
    const testSeconda = Math.floor((gap % minutea) / seconda);


    document.querySelector(".daya").innerText = textDaya;
    document.querySelector(".houra").innerText = testHoura;
    document.querySelector(".minutea").innerText = testMinutea;
    document.querySelector(".seconda").innerText = testSeconda;


   
};


setInterval(countdowna, 1000);


//captain marvel 2
const countdownab = () => {
    const countDate = new Date("July 8, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

  
    const secondab = 1000;
    const minuteab = secondab * 60;
    const hourab = minuteab * 60;
    const dayab = hourab * 24;

   
    const textDayab = Math.floor(gap / dayab);
    const testHourab = Math.floor((gap % dayab) / hourab);
    const testMinuteab = Math.floor((gap % hourab) / minuteab);
    const testSecondab = Math.floor((gap % minuteab) / secondab);


    document.querySelector(".dayab").innerText =  textDayab;
    document.querySelector(".hourab").innerText = testHourab;
    document.querySelector(".minuteab").innerText = testMinuteab;
    document.querySelector(".secondab").innerText = testSecondab;


   
};


setInterval(countdownab, 1000);


//black panther 2
const countdownabc = () => {
    const countDate = new Date("July 8, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

   
    const secondabc = 1000;
    const minuteabc = secondabc * 60;
    const hourabc = minuteabc * 60;
    const dayabc = hourabc * 24;

    const textDayabc = Math.floor(gap / dayabc);
    const testHourac = Math.floor((gap % dayabc) / hourabc);
    const testMinuteabc = Math.floor((gap % hourabc) / minuteabc);
    const testSecondabc = Math.floor((gap % minuteabc) / secondabc);


    document.querySelector(".dayabc").innerText =  textDayabc;
    document.querySelector(".hourabc").innerText = testHourac;
    document.querySelector(".minuteabc").innerText = testMinuteabc;
    document.querySelector(".secondabc").innerText = testSecondabc;


   
};


setInterval(countdownabc, 1000);


//the flash
const countdownabcd = () => {
    const countDate = new Date("November 04, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;


    const secondabcd = 1000;
    const minuteabcd = secondabcd * 60;
    const hourabcd = minuteabcd * 60;
    const dayabcd = hourabcd * 24;

   
    const textDayabcd = Math.floor(gap / dayabcd);
    const testHouracd = Math.floor((gap % dayabcd) / hourabcd);
    const testMinuteabcd = Math.floor((gap % hourabcd) / minuteabcd);
    const testSecondabcd = Math.floor((gap % minuteabcd) / secondabcd);


    document.querySelector(".dayabcd").innerText =  textDayabcd;
    document.querySelector(".hourabcd").innerText = testHouracd;
    document.querySelector(".minuteabcd").innerText = testMinuteabcd;
    document.querySelector(".secondabcd").innerText = testSecondabcd;


   
};

setInterval(countdownabcd, 1000);


//sonic 2
const countdownabcde = () => {
    const countDate = new Date("April 07, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

  
    const secondabcde = 1000;
    const minuteabcde = secondabcde * 60;
    const hourabcde = minuteabcde * 60;
    const dayabcde = hourabcde * 24;

  
    const textDayabcde = Math.floor(gap / dayabcde);
    const testHouracde = Math.floor((gap % dayabcde) / hourabcde);
    const testMinuteabcde = Math.floor((gap % hourabcde) / minuteabcde);
    const testSecondabcde = Math.floor((gap % minuteabcde) / secondabcde);


    document.querySelector(".dayabcde").innerText =  textDayabcde;
    document.querySelector(".hourabcde").innerText = testHouracde;
    document.querySelector(".minuteabcde").innerText = testMinuteabcde;
    document.querySelector(".secondabcde").innerText = testSecondabcde;


   
};


setInterval(countdownabcde, 1000);


//she-hulk
const countdownabcdef = () => {
    const countDate = new Date("September 23, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

  
    const secondabcdef = 1000;
    const minuteabcdef = secondabcdef * 60;
    const hourabcdef = minuteabcdef * 60;
    const dayabcdef = hourabcdef * 24;

    const textDayabcdef = Math.floor(gap / dayabcdef);
    const testHouracdef = Math.floor((gap % dayabcdef) / hourabcdef);
    const testMinuteabcdef = Math.floor((gap % hourabcdef) / minuteabcdef);
    const testSecondabcdef = Math.floor((gap % minuteabcdef) / secondabcdef);


    document.querySelector(".dayabcdef").innerText =  textDayabcdef;
    document.querySelector(".hourabcdef").innerText = testHouracdef;
    document.querySelector(".minuteabcdef").innerText = testMinuteabcdef;
    document.querySelector(".secondabcdef").innerText = testSecondabcdef;


   
};


setInterval(countdownabcdef, 1000);


//clarice
const countdownabcdefg = () => {
    const countDate = new Date("February 11, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

   
    const secondabcdefg = 1000;
    const minuteabcdefg = secondabcdefg * 60;
    const hourabcdefg = minuteabcdefg * 60;
    const dayabcdefg = hourabcdefg * 24;

    
    const textDayabcdefg = Math.floor(gap / dayabcdefg);
    const testHouracdefg = Math.floor((gap % dayabcdefg) / hourabcdefg);
    const testMinuteabcdefg = Math.floor((gap % hourabcdefg) / minuteabcdefg);
    const testSecondabcdefg = Math.floor((gap % minuteabcdefg) / secondabcdefg);


    document.querySelector(".dayabcdefg").innerText =  textDayabcdefg;
    document.querySelector(".hourabcdefg").innerText = testHouracdefg;
    document.querySelector(".minuteabcdefg").innerText = testMinuteabcdefg;
    document.querySelector(".secondabcdefg").innerText = testSecondabcdefg;


   
};


setInterval(countdownabcdefg, 1000);

//blade
const countdownabcdefgh = () => {
    const countDate = new Date("October 07, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    
    const secondabcdefgh = 1000;
    const minuteabcdefgh = secondabcdefgh * 60;
    const hourabcdefgh = minuteabcdefgh * 60;
    const dayabcdefgh = hourabcdefgh * 24;

    const textDayabcdefgh = Math.floor(gap / dayabcdefgh);
    const testHouracdefgh = Math.floor((gap % dayabcdefgh) / hourabcdefgh);
    const testMinuteabcdefgh = Math.floor((gap % hourabcdefgh) / minuteabcdefgh);
    const testSecondabcdefgh = Math.floor((gap % minuteabcdefgh) / secondabcdefgh);


    document.querySelector(".dayabcdefgh").innerText =  textDayabcdefgh;
    document.querySelector(".hourabcdefgh").innerText = testHouracdefgh;
    document.querySelector(".minuteabcdefgh").innerText = testMinuteabcdefgh;
    document.querySelector(".secondabcdefgh").innerText = testSecondabcdefgh;


   
};


setInterval(countdownabcdefgh, 1000);



//aquaman 2 
const countdownabcdefghi = () => {
    const countDate = new Date("December 16, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    
    const secondabcdefghi = 1000;
    const minuteabcdefghi = secondabcdefghi * 60;
    const hourabcdefghi = minuteabcdefghi * 60;
    const dayabcdefghi = hourabcdefghi * 24;

   
    const textDayabcdefghi = Math.floor(gap / dayabcdefghi);
    const testHouracdefghi = Math.floor((gap % dayabcdefghi) / hourabcdefghi);
    const testMinuteabcdefghi = Math.floor((gap % hourabcdefghi) / minuteabcdefghi);
    const testSecondabcdefghi = Math.floor((gap % minuteabcdefghi) / secondabcdefghi);


    document.querySelector(".dayabcdefghi").innerText =  textDayabcdefghi;
    document.querySelector(".hourabcdefghi").innerText = testHouracdefghi;
    document.querySelector(".minuteabcdefghi").innerText = testMinuteabcdefghi;
    document.querySelector(".secondabcdefghi").innerText = testSecondabcdefghi;


   
};


setInterval(countdownabcdefghi, 1000);


//obi-wan 
const countdownabcdefghij = () => {
    const countDate = new Date("April 27, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

   
    const secondabcdefghij = 1000;
    const minuteabcdefghij = secondabcdefghij * 60;
    const hourabcdefghij = minuteabcdefghij * 60;
    const dayabcdefghij = hourabcdefghij * 24;

  
    const textDayabcdefghij = Math.floor(gap / dayabcdefghij);
    const testHouracdefghij = Math.floor((gap % dayabcdefghij) / hourabcdefghij);
    const testMinuteabcdefghij = Math.floor((gap % hourabcdefghij) / minuteabcdefghij);
    const testSecondabcdefghij = Math.floor((gap % minuteabcdefghij) / secondabcdefghij);


    document.querySelector(".dayabcdefghij").innerText =  textDayabcdefghij;
    document.querySelector(".hourabcdefghij").innerText = testHouracdefghij;
    document.querySelector(".minuteabcdefghij").innerText = testMinuteabcdefghij;
    document.querySelector(".secondabcdefghij").innerText = testSecondabcdefghij;


   
};


setInterval(countdownabcdefghij, 1000);


//scream 5
const countdownabcdefghijk = () => {
    const countDate = new Date("January 14, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

 
    const secondabcdefghijk = 1000;
    const minuteabcdefghijk = secondabcdefghijk * 60;
    const hourabcdefghijk = minuteabcdefghijk * 60;
    const dayabcdefghijk = hourabcdefghijk * 24;

   
    const textDayabcdefghijk = Math.floor(gap / dayabcdefghijk);
    const testHouracdefghijk = Math.floor((gap % dayabcdefghijk) / hourabcdefghijk);
    const testMinuteabcdefghijk = Math.floor((gap % hourabcdefghijk) / minuteabcdefghijk);
    const testSecondabcdefghijk = Math.floor((gap % minuteabcdefghijk) / secondabcdefghijk);


    document.querySelector(".dayabcdefghijk").innerText =  textDayabcdefghijk;
    document.querySelector(".hourabcdefghijk").innerText = testHouracdefghijk;
    document.querySelector(".minuteabcdefghijk").innerText = testMinuteabcdefghijk;
    document.querySelector(".secondabcdefghijk").innerText = testSecondabcdefghijk;


   
};


setInterval(countdownabcdefghijk, 1000);



