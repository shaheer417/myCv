// Function to toggle visibility of sections
function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block"; // Show section
  } else {
    section.style.display = "none"; // Hide section
  }
}
