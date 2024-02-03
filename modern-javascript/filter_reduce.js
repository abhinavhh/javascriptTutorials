const donations=[{name:"abhi",city:"ka",amount:100},
    {name:"abhi",city:"va",amount:100},
    {name:"abhi",city:"ko",amount:100},
    {name:"abhi",city:"tr",amount:100},
    {name:"abhi",city:"ka",amount:100}
]

//javascript callback function(filter) using traditional function

// const donatefilter=donations.filter(function(donate){
//     if(donate.city=='ka'){
//         return true;
//     }
// });
// console.log("Traditional function - Donors from ka : ",donatefilter);

// //javascript callback function(filter) using arrow functions

// const donatefilter_arrow=donations.filter((donate)=>donate.city=='ka');
// console.log("Arrow function - Donors from ka : ",donatefilter_arrow);

//javascript callback function(reduce) using traditional function

const donationsum=donations.reduce(
    function(total,donation){
        return total+donation.amount;
    },0
);
console.log("Traditional function - Total donations : "+donationsum);

//javascript callback function(reduce) using arrow function

const donationsum_arrow=donations.reduce((total,donation)=>total+donation.amount,0);
console.log("arrow function - Total donations : "+donationsum_arrow);