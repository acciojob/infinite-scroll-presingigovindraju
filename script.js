//your code here!
const infiList = document.getElementById('infi-list');

// Function to add more list items
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement('li');
    li.textContent = 'List Item ' + (infiList.childElementCount + 1);
    infiList.appendChild(li);
  }
}

// Add initial list items
for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li');
  li.textContent = 'List Item ' + i;
  infiList.appendChild(li);
}

// Event listener to check if the user has scrolled to the end
infiList.addEventListener('scroll', function () {
  if (
    infiList.scrollTop + infiList.clientHeight >=
    infiList.scrollHeight - 20 // You can adjust this value as needed
  ) {
    addMoreItems();
  }
});

// Initial call to add more items if the list is empty
if (infiList.childElementCount === 0) {
  addMoreItems();
}
