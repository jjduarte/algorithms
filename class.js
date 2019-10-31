let Employee = (function () {
        function Employee(firstname, lastname, floor, complexity, id) {
            this.firstname = '';
            this.lastname = '';
            this.complexity = 0;
            this.floor = "";
            this.id = 0;
            
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.floor = floor;
            this.complexity = complexity;
        }
        Employee.prototype.getId = function () {
            return this.id;
        };
        Employee.prototype.getLastName = function () {
            return this.lastname;
        };
        Employee.prototype.getFirstName = function () {
            return this.firstname;
        };
        Employee.prototype.getComplexity = function () {
            return this.complexity;
        };
        Employee.prototype.getFloor = function () {
            return this.floor;
        };
        Employee.prototype.getShiftList = function () {
            return this.shiftList;
        };
        Employee.prototype.addComplexity = function (complexity) {
            return this.complexity += complexity;
        };
        Employee.prototype.addEmployees = function () {
        };
        return Employee;
    }());
    
    console.log(new Employee('Joao', 'Duarte', 5, 3, 1))