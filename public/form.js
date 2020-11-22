// handle the form
$(document).ready(function() {  
    $("#vendor").change(function() {
        var theVal1 = $("#vendor option:selected").text();
        console.log("Select Custom Form Value = " + theVal1);
    });
    $("#vendor2").change(function() {
        var theVal2 = $("#vendor2 option:selected").text();
        console.log("Select Vendor Value = " + theVal2);
    });
    $("#amount").change(function() {
        var theVal3 = $( "#amount" ).val();
        console.log("Amount Value = " + theVal3);
    });
    $("#exchange").change(function() {
        var theVal4 = $( "#exchange" ).val();
        console.log("Exchange Rate Value = " + theVal4);
    });
    $("#tax").change(function() {
        var theVal5 = $( "#tax" ).val();
        console.log("Tax Value = " + theVal5);
    });
    $("#check").change(function() {
        console.log("Payment Held is Checked ");
    });
    $("#posting").change(function() {
        var theVal6 = $( "#posting option:selected" ).text();
        console.log("Posting Period Value = " + theVal6);
    });
    $("#memo").change(function() {
        var theVal7 = $( "#memo" ).val();
        console.log("Memo: = " + theVal7);
    });
    $("#approval").change(function() {
        var theVal8 = $("#approval option:selected").text();
        console.log("Approval Status Value = " + theVal8);
    });
    $("#approver").change(function() {
        var theVal9 = $("#approver option:selected").text();
        console.log("Next Approver Value = " + theVal9);
    });
});