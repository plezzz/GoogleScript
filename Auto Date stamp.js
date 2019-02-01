function onEdit(event)
{ 
  var sheet=event.source.getActiveSheet();
  /* List1 Start */
  if(sheet.getName()=="List1") /* the tab in which magic will happen */
  {
    var timezone = "GMT-2";
    var timestamp_format = "dd.MM.yyyy"; // Timestamp Format. 
    var updateColName = "Customer"; /* Add the name of the column we are going to change */
    var timeStampColName = "date"; /* A column in which the date will automatically be added */
    var actRng = event.range;
    var editColumn = actRng.getColumn();
    var actRow = actRng.getRow();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    var dateCol = headers[0].indexOf(timeStampColName) + 1;
    var updateCol = headers[0].indexOf(updateColName) + 1; 
    if (dateCol > 0 && actRow > 1 && editColumn == updateCol) 
    {
      var cell = sheet.getRange(actRow, dateCol);
      var date = Utilities.formatDate(new Date(), timezone, timestamp_format);
      cell.setValue(date);
    }
  }
  /* List1 End */
}


/* For two tabs we repeat if (From "List1 Start" to "List1 End" including) */
/* For date and time change Timestamp Format "dd-MM-yyyy hh:mm:ss" */
/* Original: https://stackoverflow.com/questions/46162179/auto-timestamp-when-editing-column */
