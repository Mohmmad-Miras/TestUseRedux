 
const  Fruit={
    apple:5,
    orange:10
  }

  const Food={
      sandvech:50,
      sonati:10
  }




  const Fruitreducer =(state =Fruit ,action)=>{
    switch (action.type) {
      case "Buy_apple":
  
        return {...state,apple:state.apple - 1}

        case "Buy_orange":
  
        return {...state,orange:state.orange - 1}
      default:
        return state;
    }
  }
  
  const Footreducer =(state =Food ,action)=>{
    switch (action.type) {
      case "Buy_sandvich":
  
        return {...state,sandvech:state.sandvech - 1}

        case "Buy_sonati":
  
        return {...state,sonati:state.sonati - 1}
      default:
        return state;
    }
  }

const rootReducer = Redux.combineReducers({
    Fruit:Fruitreducer,
    Food:Footreducer,
})

  const store  =Redux.createStore(rootReducer)
  

const  rander =()=>{
    document.getElementById('txtOrange').innerHTML = store.getState().Fruit.orange +"تعداد"
    document.getElementById('txtApple').innerHTML = store.getState().Fruit.apple +"تعداد"
    document.getElementById('txtSandvech').innerHTML = store.getState().Food.sandvech +"تعداد"
    document.getElementById('txtSonati').innerHTML = store.getState().Food.sonati +"تعداد"
}


  store.subscribe(()=>{
    rander();
  
  })
  
  document.getElementById('btn-Apple').addEventListener('click',()=>{
  
        store.dispatch({type:"Buy_apple"})
  
  })
  
  document.getElementById('btn-Orange').addEventListener('click',()=>{
  
    store.dispatch({type:"Buy_orange"})

})
document.getElementById('btn-Sandvech').addEventListener('click',()=>{
  
    store.dispatch({type:"Buy_sandvich"})

})
document.getElementById('btn-Sonati').addEventListener('click',()=>{
  
    store.dispatch({type:"Buy_sonati"})

})

rander();