// Handle login submission
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Sample logic for role-based redirection
    if (email === "admin@example.com") {
      window.location.href = "admin_homepage.html";
    } else {
      window.location.href = "homepage.html";
    }
  }
  
  // Open Add Notice Form with Category Pre-Selected
  function openAddNoticeForm(category) {
    window.location.href = `add_notice.html?category=${category}`;
  }
  
  // Handle Add Notice Form Submission
  function submitNotice(event) {
    event.preventDefault();
    const category = document.getElementById("category").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    // Posting notice based on category
    if (category === "Medical Emergency" || category === "Anonymous") {
      alert("Your notice has been posted immediately!");
    } else {
      alert("Your notice is pending admin approval.");
    }
  
    // Redirect back to the homepage
    window.location.href = "homepage.html";
  }
  
  // Approval queue display (sample for admin page)
  document.addEventListener("DOMContentLoaded", () => {
    const approvalQueue = document.getElementById("approval-queue");
    if (approvalQueue) {
      approvalQueue.innerHTML = `
        <div class="notice-card">
          <h3>Sample Academic Notice</h3>
          <p>Submitted on: 2024-11-09</p>
          <button class="approve-btn" onclick="approveNotice()">Approve</button>
          <button class="reject-btn" onclick="rejectNotice()">Reject</button>
          <button class="edit-btn" onclick="editNotice()">Edit</button>
        </div>
      `;
    }
  });
  
  function approveNotice() {
    alert("Notice approved!");
  }
  
  function rejectNotice() {
    alert("Notice rejected!");
  }
  
  function editNotice() {
    alert("Edit functionality coming soon!");
  }
  