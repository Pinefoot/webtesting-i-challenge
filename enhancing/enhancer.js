module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
if(item.enhancement >= 20){
  return item
}else{
  return { ...item,
    enhancement: item.enhancement + 1
  };
}
}


//greaterthan or equal to 15 -10 dur, and when its > 16 -1 enhance
                //     >=15 and >16 .... if its =15 >16 --> what happens on 16?

function fail(item) {
  let enhancement = item.enhancement
  let durability = item.durabilty

  if(enhancement < 15){
    return {...item,
               durability: item.durability - 5
      }
  }
    else if( (enhancement === 15 || enhancement === 16) ){
      return {
        ...item,
        durability: item.durability -10
      }
     }
    else if(enhancement > 16){
      return {...item,
         enhancement: item.enhancement -1,
          durability: item.durability - 10}

    }
   
           
             
   
    
  
  


}

function repair(item) {
  //console.log(item.durability)
if(item.durability < 100){
  return { ...item,
    durability: 100
   };
  }else{
    return item;
  }
}

function get(item) {
  return { ...item };
}
