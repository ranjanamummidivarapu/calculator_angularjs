/**
 * Created by Acer on 31-Dec-14.
 */
var rootApp = angular.module('root', ['calculator1','calculator2']);
var cal1 = angular.module("calculator1",[]);
var cal2 = angular.module("calculator2",[]);
var calculatorController = function($scope){
    $scope.input = 0;
    $scope.result = 0;
    $scope.operator = "";
    $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    $scope.operators = ["+","-","*","/","1/x","=","B","C"];
    $scope.append = function(value){
        var input = $scope.input;
        if(input === 0 ){
            input = value;
        }
        else
        {
            input = (input*10)+value;
        }
        $scope.input = input;
    };
    $scope.compute = function(value){
        var operand, inputText, input = $scope.input, result = $scope.result, operator = $scope.operator, length;
        if(value === "C"){
            input = 0;
            result = 0;
        }
        else if(value === "B"){
            input = $scope.display();
            inputText = input.toString();
            length = inputText.length;
            inputText = inputText.substring(0, length - 1);
            input = Number(inputText);
            if(input === 0 ) {
                result = 0;
            }
            if(result != 0)
                result = input;
        }
        else {
            if(value === "1/x") {
                //result = input;
                if(result != 0 ) {
                    result = 1 / result;
                }
                else if(input != 0){
                    result = 1/input;
                }
                else {
                    result = 0;
                }
                input = 0;
                operator = "";
            }
            else if(result === 0 ) {
                result = Number(input);
                operator = value;
            }
            else
            {
                operand = Number(input);
                switch (operator) {
                    case '+':result += operand;
                        break;
                    case '-':result -= operand;
                        break;
                    case '*':result *= operand;
                        break;
                    case '/':result /= operand;
                        break;
                }
                operator = value;
            }
            if(operator !== "")
                input = 0;
        }
        $scope.input = input;
        $scope.result = result;
        $scope.operator = operator;
    }
    $scope.display = function(){
        if($scope.input === 0) {
            return $scope.result;
        }
        else {
            return $scope.input;

        }
    }
}
