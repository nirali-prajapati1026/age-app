let userinput=document.getElementById("date");
let rst=document.getElementById("h2");
userinput.max=new Date().toISOString().split("T")[0];


function calculatorAge () {
    let rst=document.getElementById("h2");
    let brithdate=new Date(userinput.value);

    let d1=brithdate.getDate();
    let m1=brithdate.getMonth()+1;
    let y1=brithdate.getFullYear();

    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();


    let d3,m3,y3;
    y3=y2-y1;

    if(m2>=m1){
        m3=m2-m1
    }else{
        y3--;
        m3=12+m2-m1
    }
     if(d2>=d1){
        d3=d2-d1;
     }else{
        m3--;
        d3=getdayMonth(y1,m1)+ d2-d1;
     }
     if(m3<0){
        m3=11;
        y3--;
     }
    // console.log(result.innerHTML=y3+m3+d3);
     //rst.innerHTML="you are year "+ y3 +",months "+m3+ " and " +d3+ " days.";
     rst.innerHTML=`Your ${y3}Years, ${m3}months and ${d3}days.`;
    
}
const getdayMonth=(year,month)=>{
  return new Date(year,month,0).getDate();
 
}
    

