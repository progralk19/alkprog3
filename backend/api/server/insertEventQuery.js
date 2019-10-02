const express = require("express");
const app = express();

var moment = require("moment");

// helps extract data from client
const bodyParser = require("body-parser");
// cors is not best to be used on production; will need to do something different on prod
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

// INSERT CALENDAR EVENT
app.post("/insertevent", function(req, res) {
  //var logs = [];
  var formdata = req.body;
  var newClient = formdata.newClient;
  var newBillType = formdata.newBillType;
  // var newClientType = formdata.newClientType;
  //var newClient = formdata.newClient;
  var newTherapist = formdata.newTherapist;
  var newLocation = formdata.newLocation;
  var newCategory = formdata.newCategory;
  var checkedRepeat = formdata.checkedRepeat; //true,false
  var repeatOption = formdata.repeatOption; //"Daily","Weekly","Monthly","Custom"
  var newEndRepeat = formdata.newEndRepeat; //"After","On Date"
  var newCustomFreq = formdata.newCustomFreq; //"Specifid Days","Every x days","Weekly","Monthly"
  var newRepeatEveryNumDays = formdata.newRepeatEveryNumDays;
  var newRepeatEveryNumWeeks = formdata.newRepeatEveryNumWeeks;
  var newRepeatEveryNumMonths = formdata.newRepeatEveryNumMonths;
  var sun = formdata.sun;
  var mon = formdata.mon;
  var tues = formdata.tues;
  var wed = formdata.wed;
  var thu = formdata.thu;
  var fri = formdata.fri;
  var sat = formdata.sat;
  var selected_days = [sun, mon, tues, wed, thu, fri, sat];
  var start_dates = [];
  var end_dates = [];

  //------------------occurances-----------------------------
  var existingNumOccurences = formdata.existingNumOccurences; //"4"
  var occurances_to_add = 0;
  if (existingNumOccurences)
    occurances_to_add = parseInt(existingNumOccurences);
  var occurances_added = 0;
  var interval = 0;
  var interval_unit = "days";
  //---------------------------------------------------------
  //------------------dates----------------------------------
  var selectedDate = formdata.selectedDate; //start date
  var endSelectedDate = formdata.endSelectedDate; //end date
  var first_start_date = moment(selectedDate, "YYYY-MM-DD HH:mm:ss");
  var start_date_to_add = moment(selectedDate, "YYYY-MM-DD HH:mm:ss");
  var end_date_to_add = moment(endSelectedDate, "YYYY-MM-DD HH:mm:ss");

  var date_limit = moment(start_date_to_add).add(1, "seconds");
  var selectedDateOccurenceEnd = formdata.selectedDateOccurenceEnd; // repeat end date "2019-09-18 03:41:00"
  if (selectedDateOccurenceEnd) {
    var date_limit_str =
      selectedDateOccurenceEnd.substring(0, 10) +
      " " +
      selectedDate.substring(11, 19);
    date_limit = moment(date_limit_str, "YYYY-MM-DD HH:mm:ss");
  }
  //---------------------------------------------------------

  //these logs are added to response just for debugging
  //after full testing, these may be removed
  /*
  logs.push("start_date_to_add");
  logs.push(start_date_to_add.format("YYYY-MM-DD HH:mm:ss"));
  logs.push("end_date_to_add");
  logs.push(end_date_to_add.format("YYYY-MM-DD HH:mm:ss"));
  logs.push("date_limit");
  logs.push(date_limit.format("YYYY-MM-DD HH:mm:ss"));
  logs.push("checkedRepeat");
  logs.push(checkedRepeat);
  logs.push("repeatOption");
  logs.push(repeatOption);
  logs.push("newCustomFreq");
  logs.push(newCustomFreq);
  logs.push("newEndRepeat");
  logs.push(newEndRepeat);
  logs.push("existingNumOccurences");
  logs.push(existingNumOccurences);
  */

  /*
  
    In the while loop  these two arrays start_dates and end_dates are filled
    and then used the dates in them to make insert queries whether its one appointment
     or multiple appointments that needs to be created

     The while loop runs until the required number of occourances are added or
     the last date comes as given by user to stop the repeat appointments

     The dates are created by adding up days to the first date (provided by user)
     The number of days to be added is decided based on the interval (provided by user)
     or just 1 day is added in each iteration and only the specific days get added
     */
  while (
    (!checkedRepeat && occurances_added < 1) ||
    (checkedRepeat &&
      newEndRepeat === "After" &&
      occurances_added < occurances_to_add) ||
    (checkedRepeat &&
      newEndRepeat === "On Date" &&
      start_date_to_add <= date_limit)
  ) {
    //logs.push("while");
    if (repeatOption === "Daily") interval = 1;
    else if (repeatOption === "Weekly") interval = 7;
    else if (repeatOption === "Monthly") {
      interval = 1;
      interval_unit = "months";
    } else if (repeatOption === "Custom") {
      if (newCustomFreq === "Every x days") interval = newRepeatEveryNumDays;
      else if (newCustomFreq === "Weekly")
        interval = newRepeatEveryNumWeeks * 7;
      else if (newCustomFreq === "Monthly") {
        interval = newRepeatEveryNumMonths;
        interval_unit = "months";
      }
    }

    if (repeatOption === "Custom" && newCustomFreq === "Specific Days") {
      //logs.push("specific days");
      if (
        occurances_added < 1 ||
        (occurances_added > 0 && selected_days[start_date_to_add.day()])
      ) {
        start_dates.push(start_date_to_add.format("YYYY-MM-DD HH:mm:ss"));
        end_dates.push(end_date_to_add.format("YYYY-MM-DD HH:mm:ss"));
        occurances_added++;
      }
      start_date_to_add.add(1, "days");
      end_date_to_add.add(1, "days");
    } else {
      occurances_added++;
      start_dates.push(start_date_to_add.format("YYYY-MM-DD HH:mm:ss"));
      end_dates.push(end_date_to_add.format("YYYY-MM-DD HH:mm:ss"));
      start_date_to_add = start_date_to_add.add(interval, interval_unit);
      end_date_to_add = end_date_to_add.add(interval, interval_unit);

      // for a special case e.g. a user creates an appointment on 31st and sets a monthly repetition
      //using moment library 31st + 1 month -> 30th and then 30th + 1 month -> 30th (even if month has 31 days)
      //so I have checked each repitition's date and adjusted it to set the real date wheneever available
      if (interval_unit === "months") {
        var month_end_diff = first_start_date.date() - start_date_to_add.date();
        if (month_end_diff > 0) {
          var new_start_date_to_add = moment(start_date_to_add).add(
            month_end_diff,
            "days"
          );
          var new_end_date_to_add = moment(end_date_to_add).add(
            month_end_diff,
            "days"
          );
          if (start_date_to_add.month() === new_start_date_to_add.month())
            start_date_to_add = new_start_date_to_add;
          end_date_to_add = new_end_date_to_add;
        }
      }
    }
  }

  var sql =
    "INSERT INTO testevent (title, bill_type, client, therapist, location, category, start, end ) VALUES";
  for (var i = 0; i < start_dates.length; i++) {
    sql +=
      " ('" +
      newClient +
      "','" +
      checkedRepeat +
      "','" +
      newBillType +
      "','" +
      newClient +
      "','" +
      newTherapist +
      "','" +
      newLocation +
      "','" +
      newCategory +
      "','" +
      start_dates[i] +
      "','" +
      end_dates[i] +
      "')";
    if (i < start_dates.length - 1) sql += ",";
  }
  // res.json({logs:logs,start_dates:start_dates,end_dates:end_dates,query:sql});
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});