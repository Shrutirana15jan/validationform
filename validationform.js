function validateform(){
    var Name=document.getElementById("Name");
    var Email=document.getElementById("Email");
    var Mobileno=document.getElementById("Mobilrno");
    var City=document.getElementById("Cityname");
    var State=document.getElementById("State");
    var Country=document.getElementById("Country");
    var ZIPcode=document.getElementById("ZIPcode");
    var fileuplaod=document.getElementById("fileupload");
}
function validatename(){
     var a=document.name.value;
    if(a==""){
        alert("Please enter your name");
        document.name.focus();
        return false;
    }
}
 
function validateEmail(){
    var Email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(Email.value.match(Email)){
        return true;
    }
    else{
        alert("Enter your  valid email-id");
        Email.focus();
        return true;
    }
}
 
function validatemobileno(){
    var mobileno=/^\d{10}$/;
    if(Mobileno.value.match(Mobileno)){
        return true;
    }
    else{
        alert("Enter 10 digit mobile no.");
        Mobileno.focus();
        return false;
    }
}

function validateAddress(){
    var letters=/^[0-9a-zA-Z]+$/;
    if(Address.value.match(letters)){
        return true;
    }
    else{
        alert("Enter your address");
        Address.focus();
        return false;
    }
}
var places=[{
    "id":"1",
    "name":"Afghanistan",
    "phone-code":"+93",
    "state":{
        "Badakhshan":[
            "Eshkashem",
            "Fayzabad",
            "Khandud",
            "Jurm"
        ],
        "Badgis":[
            "Bala Morghab"
        ],
        "Baglan":[
            "Andarab",
            "Baghlan",
            "Dahaneh-ye Ghawri",
            "Nahrin",
            "Pol-e Khumri"
        ]

        
    }
},
{
    "id":"2",
    "name":"Albania",
    "phone-code":"+355",
    "state":{
        "Berat":[
            "Berat",
            "Polican",
            "Ure Vajgurore"
        ],
        "Bulqize":[
            "Bulqize"
        ],
        "Delvine":[
            "Delvine"
        ],
        "Devoll":[
            "Bilisht"
        ],
        "Dibre":[
            "Maqellare",
            "Peshkopi"
        ],
        "Durres":[
            "Durres",
            "Shijak"
        ],
        "Elbasan":[
            "Cerrik"
        ]

    }
},
{
     "id":"3",
     "name":"India",
     "phone-code":"+91",
     "state":{
          "Maharastra":[
              "Mumbai",
              "Pune",
              "Nagpur",
              "Thane",
              "Nashik",
              "Kalyan-Dombivali",
              "Vasai-Virar",
              "Solapur"
          ],
          "Madhya Pradesh":[
              "Indore",
              "Bhopal",
              "Ujjain",
              "Ratlam",
              "Jabalpur"
          ],
          "West Bengal":[
              "Kolkata",
              "Sikkim",
              "Gangtok",
              "Kalimpong<",
              "Siliguri"
          ]
     }
}
]



    var xmlhttp=new XMLHttpRequest;
    method='GET',
  overrideMIMEType='application/json',
  url='validationform.html';
   xmlhttp.onreadystatechange= function(){
       if(xmlhttp.readyState==4&&xmlhttp.status==200){
           var places=JSON.parse(xmlhttp.responseText);
           var ele=document.getElementById('City-name');
           for(i=0;i<places.length;i++){
            ele.innerHTML=ele.innerHTML+'<option value="'+places[i].id+'">'+places[i].Name+  '</option>';      
          }
       };
   
   xmlhttp.open(method,url,true);
   xmlhttp.send();
}
 function show(ele){
     var msg=document.getElementById('msg');
     msg.innerHTML='Selected places:<b>'+ele.options[ele.selectedindex].text+'</b></br>'+'ID:<b>'+ele.value+'</b>';
    
 }
 