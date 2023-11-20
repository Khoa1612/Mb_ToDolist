
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        #todo-container {
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            width: 600px;
			      height: 600px;
        }

        #todo-header {
            background-color: purple ;
            color: #fff;
            padding: 16px;
            text-align: center;
        }

        #todo-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .todo-item {
            display: flex;
            align-items: center;
            padding: 12px;
            border-bottom: 1px solid #ecf0f1;
        }

        .todo-text {
            flex-grow: 1;
            margin-left: 12px;
            font-size: 16px;
            color: #2c3e50;
        }

        .todo-actions {
            display: flex;
            align-items: center;
        }

        .todo-actions button {
            margin-left: 8px;
            padding: 8px;
            background-color: #e74c3c;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        #add-todo {
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #add-todo input {
            flex-grow: 1;
            padding: 8px;
            border: 1px solid #bdc3c7;
            border-radius: 4px;
            margin-right: 8px;
        }

        #add-todo button {
            padding: 8px;
            background-color: #2ecc71;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .edit-input {
            flex-grow: 1;
            padding: 8px;
            border: 1px solid #bdc3c7;
            border-radius: 4px;
            margin-right: 8px;
        }
    </style>
    <title>To Do List</title>
</head>
<body style="background-color:lightpink">

<div id="todo-container">
    <div id="todo-header">
        <h1 style="font-family:cursive">To Do List</h1>
    </div>
    <ul id="todo-list">
        <!-- Tasks will be added dynamically here -->
    </ul>
    <div id="add-todo">
        <input type="text" id="taskInput" placeholder="Nhập công việc vào danh sách" style="font-family:cursive">
        <button onclick="addTask()" style="font-family:cursive">Thêm</button>
    </div>
</div>

<script>
    const tasksContainer = document.getElementById("todo-list");
    const taskInput = document.getElementById("taskInput");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.className = "todo-item";
            li.innerHTML = `
                <input type="checkbox" onchange="toggleTask(this)">
                <span class="todo-text">${taskText}</span>
                <input type="text" class="edit-input" style="display: none;">
                <div class="todo-actions">
                    <button class="edit" onclick="editTask(this)" style="font-family:cursive">Sửa</button>
                    <button class="delete" onclick="deleteTask(this)" style="font-family:cursive">Xóa</button>
                    <button class="save" style="display: none;" onclick="saveTask(this)" style="font-family:cursive">Lưu</button>
                </div>
            `;
            tasksContainer.appendChild(li);
            taskInput.value = "";
        }
    }

    function deleteTask(button) {
        const li = button.parentNode.parentNode;
        li.remove();
    }

    function editTask(button) {
        const li = button.parentNode.parentNode;
        const span = li.querySelector(".todo-text");
        const input = li.querySelector(".edit-input");
        const saveButton = li.querySelector(".save");

        span.style.display = "none";
        input.style.display = "inline-block";
        input.value = span.textContent;

        button.style.display = "none";
        saveButton.style.display = "inline-block";
    }

    function saveTask(button) {
        const li = button.parentNode.parentNode;
        const span = li.querySelector(".todo-text");
        const input = li.querySelector(".edit-input");
        const editButton = li.querySelector(".edit");

        span.textContent = input.value;

        span.style.display = "inline-block";
        input.style.display = "none";

        button.style.display = "none";
        editButton.style.display = "inline-block";
    }

    function toggleTask(checkbox) {
        const span = checkbox.parentNode.querySelector(".todo-text");
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    }
</script>

</body>
</html>
