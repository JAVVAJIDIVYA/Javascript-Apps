//this keyword
const employinfo= {
    firstname : "Divya",
    lastname: "JAVVAJI",
    empdetails: function () {
        return this.firstname + " " + this.lastname;

    }   
}
console.log(employinfo.empdetails());
