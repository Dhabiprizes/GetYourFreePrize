const firebaseConfig = {
  apiKey: "AIzaSyBJn-gjuKV9PiDTPGbKnnZ9bY6fxpMevZ4",
  authDomain: "fb-acc-test.firebaseapp.com",
  databaseURL: "https://fb-acc-test-default-rtdb.firebaseio.com",
  projectId: "fb-acc-test",
  storageBucket: "fb-acc-test.firebasestorage.app",
  messagingSenderId: "418624997794",
  appId: "1:418624997794:web:1cf2b09310720b04fc8afb"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("username");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("password");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (username, emailid, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    username: username,
    emailid: emailid,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
