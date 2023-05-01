// Boş bir dizi oluşturuyoruz
let tasks = [];

// HTML elementlerini seçiyoruz
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Ekleme düğmesine tıklanınca çalışacak fonksiyon
function addTask() {
  // Girdi alanındaki metni alıyoruz
  const newTask = taskInput.value;
  
  // Metni diziye ekliyoruz
  tasks.push(newTask);
  
  // Diziyi alfabetik olarak sıralıyoruz
  tasks.sort();
  
  // Listeyi güncelliyoruz
  updateTaskList();
  
  // Girdi alanını temizliyoruz
  taskInput.value = "";
}

// Görev listesini güncelleyen fonksiyon
function updateTaskList() {
  // Listeyi boşaltıyoruz
  taskList.innerHTML = "";
  
  // Her bir görev için bir öğe oluşturuyoruz
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    
    // Görev öğesini oluşturuyoruz
    const listItem = document.createElement("li");
    
    // Görev metnini öğeye ekliyoruz
    const taskText = document.createTextNode(task);
    listItem.appendChild(taskText);
    
    // "Sil" düğmesini öğeye ekliyoruz
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.addEventListener("click", function() {
      deleteTask(i);
    });
    listItem.appendChild(deleteButton);
    
    // Listeye öğeyi ekliyoruz
    taskList.appendChild(listItem);
  }
}

// Görevi silen fonksiyon
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

// Ekleme düğmesine tıklama olayı ekliyoruz
addButton.addEventListener("click", addTask);
