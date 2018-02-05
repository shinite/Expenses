import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBvgqNt4I99pTVZM2Df-4IDnrdxGdqIJGs",
    authDomain: "expenses-87d0d.firebaseapp.com",
    databaseURL: "https://expenses-87d0d.firebaseio.com",
    projectId: "expenses-87d0d",
    storageBucket: "expenses-87d0d.appspot.com",
    messagingSenderId: "1078350160858"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase,database as default};

  //child_removed

 //  database.ref('expenses').on('child_removed',(snapshot)=>{
 //   console.log(snapshot.key, snapshot.val());
 //  })
 //
 // //child_changed
 //   database.ref('expenses').on('child_changed',(snapshot)=>{
 //   console.log(snapshot.key, snapshot.val());
 //  })
 //
 //  //child_added
 //  database.ref('expenses').on('child_added',(snapshot)=>{
 //   console.log(snapshot.key, snapshot.val());
 //  })

  //database.ref('expenses')
  //.once('value')
  //.then((snapshot)=>{
  // const expenses = [];
    //snapshot.forEach((childSnapshot)=>{
	//expenses.push({
	  //id:childSnapshot.key,
	  //...childSnapshot.val()
	//})
     //})
	//console.log(expenses);

  //});

  //database.ref('expenses').on('value',(snapshot)=>{
    //const expenses = [];
    //snapshot.forEach((childSnapshot)=>{
	//expenses.push({
	  //id:childSnapshot.key,
	  //...childSnapshot.val()
	//})
     //})
    //console.log(expenses);
  //});


  //database.ref('expenses').push(
    //{
      //description:'eat food',
      //note:'eat',
      //amount:'700',
      //createdAt:'jan 5th, 2019'
   // })

  // database.ref('notes').push({
  //       title:'Course Topics',
  //       body:'React,Angular,Python'
  //     });

  //database.ref('notes/-L4XI9txVcjHNFhePiv0').remove();
  //Fetching data

  //on is not as a promise because it needs to be run over
  //and over on each value change. While promises can be
  //resolved or rejected only once
  // const onValueChange = database.ref().on('value',(snapshot)=>{
  //   console.log(snapshot.val())
  // }, (e)=>{
  //   console.log("error with fetching",e);
  // })
  //
  // setTimeout(()=>{
  //   database.ref('age').set(29);
  // },3500)
  //
  // setTimeout(()=>{
  //   database.ref().off(onValueChange);
  // },7000)
  //
  // setTimeout(()=>{
  //   database.ref('age').set(30);
  // },10500)

  // database.ref().on('value',(snapshot)=>{
  //   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
  // })
  //
  // setTimeout(()=>{
  //   database.ref().update({
  //     'name':'Andrew Mead',
  //     'job/title':'Manager',
  //     'job/company':'Google'
  //   })
  // },3000)

  // database.ref()
  // .once('value')
  // .then((snapshot)=>{
  // 	const val = snapshot.val();
  // 	console.log(val);
  // })
  // .catch((e)=>{
  // 	console.log('error fetching',e);
  // })
 // database.ref().set({
   // name:'Shambhavi Shah',
   // age:23,
//stressLevel: 6,
  //  job:{
	//title:'Software Developer',
	//company:'Google'
//},
  //  location:{
    //  city:'philadelphia',
      //country:'us'
    //}
  //}).then(()=>{
    //console.log("data is saved");
  //}).catch((err)=>{
    //console.log('this failed',err);
  //})

  //update
  //database.ref().update({
   //	stressLevel:9,
	//'job/company':'Amazon',
	//'location/city':'Seattle'
 // });

  //remove
  // database.ref('isSingle').set(null);

  // database.ref('isSingle')
  // .remove()
  // .then(()=>{
  //   console.log("removed successfully");
  // })
  // .catch((err)=>{
  //   console.log("remove failed", err);
  // })
