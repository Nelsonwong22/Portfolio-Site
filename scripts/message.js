let currId = 0;

function saveEdit(messageId) {
  const editInput = document.getElementById(messageId + "_editInput");
  const newMessage = editInput.value;
  editInput.remove();
  const message = document.getElementById(messageId + "_message");
  message.innerText = newMessage;
  message.className = "";
  const saveButton = document.getElementById(messageId + "_save");
  saveButton.className = "hidden";
  const editButton = document.getElementById(messageId + "_edit");
  editButton.className = "btn";
}

function switchToEditMode(messageId) {
  console.log("swtich");
  const messageNode = document.getElementById(messageId + "_message");
  const previousText = messageNode.innerText;
  messageNode.innerText = "";
  const editInput = document.createElement("input");
  editInput.value = previousText;
  editInput.autofocus = true;
  editInput.id = messageId + "_editInput";
  messageNode.appendChild(editInput);
  const editButton = document.getElementById(messageId + "_edit");
  editButton.className = "hidden";
  const saveButton = document.getElementById(messageId + "_save");
  saveButton.className = "btn";
}

function handleDelete(messageId) {
  console.log(messageId);
  document.getElementById(messageId).remove();
}

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const name = e.target.elements.name.value;
  const message = e.target.elements.message.value;
  const uniqueid = email + currId;

  const messageDiv = document.createElement("div");
  messageDiv.id = uniqueid;
  messageDiv.className = "messageRow column";

  const rowSpan = document.createElement("span");
  rowSpan.className = "row spaceBetween";

  const messageSpan = document.createElement("span");
  messageSpan.id = uniqueid + "_message";
  messageSpan.innerText = message;

  const buttonRowSpan = document.createElement("span");
  buttonRowSpan.class = "row";
  buttonRowSpan.style = "gap:1rem";

  const saveButton = document.createElement("button");
  saveButton.className = "hidden btn";
  saveButton.id = uniqueid + "_save";
  saveButton.innerText = "Save";
  saveButton.style = "background:green";
  saveButton.onclick = function () {
    saveEdit(uniqueid);
  };

  const editButton = document.createElement("button");
  editButton.className = "btn";
  editButton.id = uniqueid + "_edit";
  editButton.innerText = "Edit";
  editButton.onclick = function () {
    switchToEditMode(uniqueid);
  };

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn";
  deleteButton.style = "background:#8B0000";
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    console.log(uniqueid);
    handleDelete(uniqueid);
  };

  const authorSpan = document.createElement("span");
  authorSpan.className = "messageAuthor";
  authorSpan.innerText = "Posted by";

  const mailtoATag = document.createElement("a");
  mailtoATag.innerText = " " + name;
  mailtoATag.href = "mailto:" + email;

  authorSpan.appendChild(mailtoATag);

  buttonRowSpan.appendChild(saveButton);
  buttonRowSpan.appendChild(editButton);
  buttonRowSpan.appendChild(deleteButton);

  rowSpan.appendChild(messageSpan);
  rowSpan.appendChild(buttonRowSpan);

  messageDiv.appendChild(rowSpan);
  messageDiv.appendChild(authorSpan);

  const messageContainer = document.getElementById("messages");
  messageContainer.appendChild(messageDiv);
  console.log("incrementing id");
  currId++;
});
