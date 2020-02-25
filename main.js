/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
    /** *** */ 			? function getDefault() { return module.default; }
    /** *** */ 			: function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = './src/index.js');
/** *** */ }({

  /***/ './src/index.js':
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_projects_projectsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projects/projectsModel */ \"./src/modules/projects/projectsModel.js\");\n/* harmony import */ var _modules_projects_projectsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects/projectsView */ \"./src/modules/projects/projectsView.js\");\n/* harmony import */ var _modules_tasks_tasksModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tasks/tasksModel */ \"./src/modules/tasks/tasksModel.js\");\n/* harmony import */ var _modules_tasks_tasksView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tasks/tasksView */ \"./src/modules/tasks/tasksView.js\");\n/* harmony import */ var _modules_projects_addProjectForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/projects/addProjectForm */ \"./src/modules/projects/addProjectForm.js\");\n/* harmony import */ var _modules_tasks_addTaskForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tasks/addTaskForm */ \"./src/modules/tasks/addTaskForm.js\");\n\n\n\n\n\n\n\n// console.log();\n\n// Clean container\nconst clearContent = elementID => {\n  const div = document.getElementById(elementID);\n  div.removeChild(div.firstChild);\n};\n\n//  Listen for clickevents\ndocument.getElementById('btn-add-project').addEventListener('click', () => {\n  clearContent('add-form');\n  document.getElementById('add-form').appendChild(Object(_modules_projects_addProjectForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\n\ndocument.getElementById('btn-add-task').addEventListener('click', () => {\n  clearContent('add-form');\n  document.getElementById('add-form').appendChild(Object(_modules_tasks_addTaskForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n});\n\n// Render Project list\ndocument.getElementById('project-list').appendChild(_modules_projects_projectsView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].all(_modules_projects_projectsModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allProjects()));\n// Render Card list\n_modules_tasks_tasksView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].all(_modules_tasks_tasksModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].allTasks());\n\n//# sourceURL=webpack:///./src/index.js?");
    /***/ }),

  /***/ './src/modules/projects/addProjectForm.js':
  /*! ************************************************!*\
  !*** ./src/modules/projects/addProjectForm.js ***!
  \*********************************************** */
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n// find form container\nconst formContainer = document.getElementById('add-form');\n\n// create form\nconst form = document.createElement('form');\n\n// create form fields\nconst textBox = document.createElement('input');\ntextBox.setAttribute('type', 'text');\ntextBox.setAttribute('class', 'form-control my-2');\ntextBox.setAttribute('placeholder', 'Project Name');\ntextBox.setAttribute('id', 'project-name');\n\nconst submitBtn = document.createElement('button');\nsubmitBtn.setAttribute('type', 'submit');\nsubmitBtn.setAttribute('class', 'btn btn-outline-dark btn-block my-4');\nsubmitBtn.innerText = 'Create Project';\n\nconst renderProjectForm = () => {\n  form.appendChild(textBox);\n  form.appendChild(submitBtn);\n  formContainer.appendChild(form);\n\n  return formContainer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderProjectForm);\n\n//# sourceURL=webpack:///./src/modules/projects/addProjectForm.js?");
    /***/ }),

  /***/ './src/modules/projects/projectsModel.js':
  /*! ***********************************************!*\
  !*** ./src/modules/projects/projectsModel.js ***!
  \********************************************** */
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n//  Database of Projects\nconst projects = ['Default', 'Javascript', 'HTML5', 'CSS3', 'Ruby', 'Ruby On Rails'];\n\n\nconst projectsModel = {\n  allProjects() {\n    return projects;\n  },\n\n  addProject(project) {\n    projects.push(project);\n  },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectsModel);\n\n//# sourceURL=webpack:///./src/modules/projects/projectsModel.js?");
    /***/ }),

  /***/ './src/modules/projects/projectsView.js':
  /*! **********************************************!*\
  !*** ./src/modules/projects/projectsView.js ***!
  \********************************************* */
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n\nconst projectsView = {\n  all(list) {\n    const listGroup = document.createElement('div');\n    listGroup.setAttribute('class', 'list-group border border-dark');\n\n    list.forEach(lItem => {\n      const listItem = document.createElement('a');\n      listItem.setAttribute('class', 'border border-dark rounded-0 list-group-item list-group-item-action');\n      listItem.innerHTML = lItem;\n      listGroup.appendChild(listItem);\n    });\n    return listGroup;\n  },\n  // todo\n  // find(project){}\n  // show(project)\n  // delete(project){}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectsView);\n\n//# sourceURL=webpack:///./src/modules/projects/projectsView.js?");
    /***/ }),

  /***/ './src/modules/tasks/addTaskForm.js':
  /*! ******************************************!*\
  !*** ./src/modules/tasks/addTaskForm.js ***!
  \***************************************** */
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_projectsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectsModel */ \"./src/modules/projects/projectsModel.js\");\n\n\n// find form container\nconst formContainer = document.getElementById('add-form');\n\n// create form\nconst form = document.createElement('form');\n\n// create form fields\nconst textBox = document.createElement('input');\ntextBox.setAttribute('type', 'text');\ntextBox.setAttribute('class', 'form-control my-2');\ntextBox.setAttribute('placeholder', 'Task title');\ntextBox.setAttribute('id', 'task-name');\ntextBox.setAttribute('name', 'task-name');\n\nconst textArea = document.createElement('textarea');\ntextArea.setAttribute('class', 'form-control my-2');\ntextArea.setAttribute('placeholder', 'Task Description');\ntextArea.setAttribute('id', 'task-desc');\ntextArea.setAttribute('name', 'task-desc');\n\nconst textDate = document.createElement('input');\ntextDate.setAttribute('type', 'date');\ntextDate.setAttribute('class', 'form-control my-2');\ntextDate.setAttribute('id', 'due-date');\ntextDate.setAttribute('name', 'due-date');\n\nconst renderSelect = (id, options) => {\n  const select = document.createElement('select');\n  select.setAttribute('class', 'form-control my-2');\n  select.setAttribute('id', id);\n\n  options.forEach(opt => {\n    const option = document.createElement('option');\n    option.setAttribute('value', opt);\n    option.innerText = opt;\n    select.appendChild(option);\n  });\n\n  return select;\n};\n\nconst selectPriority = renderSelect('select-priority', ['None', 'Low', 'Medium', 'High']);\nconst selectProjects = renderSelect('select-projects', _projects_projectsModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allProjects());\n\nconst submitBtn = document.createElement('button');\nsubmitBtn.setAttribute('type', 'submit');\nsubmitBtn.setAttribute('class', 'btn btn-outline-dark btn-block my-4');\nsubmitBtn.innerText = 'Create Task';\n\nconst renderTaskForm = () => {\n  form.appendChild(textBox);\n  form.appendChild(textArea);\n  form.appendChild(textDate);\n  form.appendChild(selectPriority);\n  form.appendChild(selectProjects);\n  form.appendChild(submitBtn);\n\n  formContainer.appendChild(form);\n  return formContainer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderTaskForm);\n\n//# sourceURL=webpack:///./src/modules/tasks/addTaskForm.js?");
    /***/ }),

  /***/ './src/modules/tasks/tasksModel.js':
  /*! *****************************************!*\
  !*** ./src/modules/tasks/tasksModel.js ***!
  \**************************************** */
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\nconst tasks = [\n  {\n    title: 'Test Page',\n    description: 'This is a test task',\n    dueDate: '2021-11-03',\n    priority: 0,\n    project: 0,\n  }, {\n    title: 'Some other Task',\n    description: 'This is a test task',\n    dueDate: '2021-11-03',\n    priority: 0,\n    project: 0,\n  }, {\n    title: ' Other Task',\n    description: 'This is a test task',\n    dueDate: '2021-11-03',\n    priority: 0,\n    project: 0,\n  },\n];\n\nconst tasksModel = {\n  allTasks() {\n    return tasks;\n  },\n\n  addTask(task) {\n    tasks.push(task);\n  },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasksModel);\n\n//# sourceURL=webpack:///./src/modules/tasks/tasksModel.js?");
    /***/ }),

  /***/ './src/modules/tasks/tasksView.js':
  /*! ****************************************!*\
  !*** ./src/modules/tasks/tasksView.js ***!
  \*************************************** */
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\nconst tasksView = {\n  all(list) {\n    const cardContainer = document.getElementById('tasks-list');\n\n    list.forEach(lItem => {\n      const card = document.createElement('div');\n      card.setAttribute('class', 'card text-dark border-dark');\n\n      const cardBody = document.createElement('div');\n      cardBody.setAttribute('class', 'card-body');\n\n      const cardTitle = document.createElement('h4');\n      cardTitle.setAttribute('class', 'card-title');\n      cardTitle.innerText = lItem.title;\n\n      const cardText = document.createElement('p');\n      cardText.setAttribute('class', 'card-text');\n      cardText.innerText = lItem.description;\n\n      cardBody.appendChild(cardTitle);\n      cardBody.appendChild(cardText);\n\n      card.appendChild(cardBody);\n\n      cardContainer.appendChild(card);\n    });\n    return cardContainer;\n  },\n  // todo\n  // find(project){}\n  // show(project)\n  // delete(project){}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasksView);\n\n//# sourceURL=webpack:///./src/modules/tasks/tasksView.js?");
    /***/ }),

/** *** */ }));