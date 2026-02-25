// Get the select element and the input boxes
const selectElement = document.getElementById('selectElement');
const inputBoxNews = document.getElementById('inputBoxNews');
const inputBoxNewsText = document.getElementById('inputBoxNewsText');
const inputBoxAnnouncement = document.getElementById('inputBoxAnnouncement');
const inputBoxAnnouncementDateStart = document.getElementById('inputBoxAnnouncementDateStart');
const inputBoxAnnouncementDateEnd = document.getElementById('inputBoxAnnouncementDateEnd');
const inputBoxAnnouncementText = document.getElementById('inputBoxAnnouncementText');
const inputBoxImageUpload = document.getElementById('inputBoxImageUpload');
// Add an event listener to the select element to detect changes
selectElement.addEventListener('change', function () {
  // Get the selected value
  const selectedValue = selectElement.value;

  // Hide both input boxes by default
  inputBoxImageUpload.style.display='none';
  inputBoxNews.style.display = 'none';
  inputBoxAnnouncement.style.display = 'none';
  inputBoxAnnouncementText.style.display = 'none';
  inputBoxNewsText.style.display='none';
  inputBoxAnnouncementDateStart.style.display='none';
  inputBoxAnnouncementDateEnd.style.display='none';
  // Show the input box based on the selected option
  if (selectedValue === 'news') {
    inputBoxNews.style.display = 'block'; // Show the first input box for "News"
    inputBoxNewsText.style.display='block';
    inputBoxImageUpload.style.display='block';
  } else if (selectedValue === 'announcement') {
    inputBoxAnnouncement.style.display = 'block'; // Show the second input box for "Announcement"
    inputBoxAnnouncementDateStart.style.display='block';
    inputBoxAnnouncementDateEnd.style.display='block';
    inputBoxAnnouncementText.style.display = 'block';
  }
});
