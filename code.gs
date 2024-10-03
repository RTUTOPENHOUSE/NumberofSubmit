function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Registration Status')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getTeamCount() {
  var sheet = SpreadsheetApp.openById('14tBVsvmw8oPPu2opXlk7osQQsItF8RopeXb7myXX7xA').getSheetByName('Form Responses 1');
  var lastRow = sheet.getLastRow();
  var totalTeams = 360; 
  var currentTeams = lastRow - 1;
  
  // ส่งจำนวนทีมและเวลาปัจจุบันไปยัง frontend
  return {
    currentTeams: currentTeams, 
    totalTeams: totalTeams, 
    time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
  };
}
