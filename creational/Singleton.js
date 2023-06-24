// The Singleton Design Pattern is a creational pattern that restricts the instantiation of a class to a single instance. This pattern is useful when exactly one object is needed to coordinate actions across the system, like a process manager in an operating system.

class ProcessManager {
  constructor() {
    this.processList = [];
  }

  addProcess(process) {
    this.processList.push(process);
  }

  getProcesses() {
    return this.processList;
  }
}

// Implementation of a process manager singleton
class ProcessManagerSingleton {
  constructor() {
    if (!ProcessManagerSingleton.instance) {
      ProcessManagerSingleton.instance = new ProcessManager();
    }
  }

  getInstance() {
    return ProcessManagerSingleton.instance;
  }
}

// Use the Singleton
const singleton = new ProcessManagerSingleton();
const processManager = singleton.getInstance();

processManager.addProcess('process 1');
processManager.addProcess('process 2');

console.log(processManager.getProcesses());

// This will also be the same instance
const singleton2 = new ProcessManagerSingleton();
const processManager2 = singleton2.getInstance();

// Try adding a process to the second pm
processManager2.addProcess('process 3');

// Log the results and see if it uses the same instance
console.log(processManager2.getProcesses());

// Compare the first and second instances
console.log(processManager === processManager2); // returns true
