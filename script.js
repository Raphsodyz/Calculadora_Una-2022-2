var i, valores, operando1, operando2, funcao, resultado, numeros = [];
function calc(i) {
    var display = document.getElementById("calc");
    switch (i) {
        case 0:
            numeros.push(0);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, "");
            display.value = valores
            break;
        case 1:
            numeros.push(1);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, "");
            display.value = valores
            break;
        case 2:
            numeros.push(2);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, "");
            display.value = valores
            break;
        case 3:
            numeros.push(3);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, "");
            display.value = valores
            break;
        case 4:
            numeros.push(4);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, "");
            display.value = valores
            break;
        case 5:
            numeros.push(5);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, "");
            display.value = valores
            break;
        case 6:
            numeros.push(6);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, "");
            display.value = valores;
            break;
        case 7:
            numeros.push(7);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, ""); 
            display.value = valores
            break;
        case 8:
            numeros.push(8);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, ""); 
            display.value = valores
            break;
        case 9:
            numeros.push(9);
            valores = numeros.toString().replace(/[^a-zA-Z0-9 ]/g, ""); 
            display.value = valores
            break;
        case '+':
            operando1 = parseFloat(valores);
            valores = ""
            numeros = []; 
            display.value = valores;
            funcao = '+'
            break;
        case '-': 
            operando1 = parseFloat(valores); 
            valores = "";
            numeros = []; 
            display.value = valores;
            funcao = '-';
            break;
        case '/':
            operando1 = parseFloat(valores);
            valores = "";
            numeros = []; 
            display.value = valores;
            funcao = '/';
            break;
        case '*':
            operando1 = parseFloat(valores);
            valores = "";
            numeros = []; 
            display.value = valores;
            funcao = '*';
            break;
        case 'del':
            numeros = []; 
            valores = "";
            display.value = valores
            break;
        case "=":
            operando2 = parseFloat(valores);
            var conta = {
                '+': function(x,y){return x + y},
                '-': function(x,y){return x - y},
                '/': function(x,y){return x / y},
                '*': function(x,y){return x * y}
            }
            resultado = conta[funcao](operando1, operando2);
            display.value = resultado.toString();
            operando1 = 0
            operando2 = 0
            numeros = []; 
            valores = "";
        break;
    }
}