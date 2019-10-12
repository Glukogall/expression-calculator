//@ts-check

function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr=expr+'_'
    let exprArr = expr.split('');
    let stackCalk = [];
    let num = '';
    let result;
    
  
    //преобразование в обратную польсую запись
    let outArr = [];
  let stackNum = [];
  let stackOut = []

  // преобразование в обратную польскую запись
  for (let e=0;e<expr.length;e++){
    if (Number(expr[e])|| expr[e]=='0'){                             //цифирь
      stackNum.push(expr[e])
    }
    else if (!Number(expr[e])){                     //не цифирь
      let out = stackNum.join('');
      if (out!=''){ 
        outArr.push(out)
        stackNum = [];
        }
    }
    if (expr[e]=='+'){                              //+
      if (stackOut.length==0){                      //ничего
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='('){   //скобка
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='+'){   //плюс
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='-'){   //минус
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])

      }
      else if (stackOut[stackOut.length-1]=='*'){   //умножить
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='/'){   //разделить
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }

    }
    if (expr[e]=='-'){                            //минус
      if (stackOut.length==0){                    //ничего
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='('){ //скобка
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='+'){ //плюс
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='-'){ //минус
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='*'){   //умножить
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='/'){   //разделить
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
    }
    if (expr[e]=='*'){                            //умножить
      if (stackOut.length==0){                    //ничего
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='('){ //скобка
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='+'){ //плюс
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='-'){ //минус
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='*'){   //умножить
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
      else if (stackOut[stackOut.length-1]=='/'){   //разделить
        outArr.push(stackOut.pop())
        stackOut.push(expr[e])
      }
    }
    if (expr[e]=='/'){                            //разделить
    if (stackOut.length==0){                    //ничего
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='('){ //скобка
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='+'){ //плюс
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='-'){ //минус
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='*'){   //умножить
      outArr.push(stackOut.pop())
      stackOut.push(expr[e])
    }
    else if (stackOut[stackOut.length-1]=='/'){   //разделить
      outArr.push(stackOut.pop())
      stackOut.push(expr[e])
    }
    }
    if (expr[e]=='('){                              //скобка
  if (stackOut.length==0){                      //ничего
    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='('){   //скобка
    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='+'){   //плюс

    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='-'){   //минус

    stackOut.push(expr[e])

  }
  else if (stackOut[stackOut.length-1]=='*'){   //умножить
    stackOut.push(expr[e])
  }
  else if (stackOut[stackOut.length-1]=='/'){   //разделить
    stackOut.push(expr[e])
  }

    }
    if (expr[e]==')'){                              //скобка 2
        if (stackOut.includes('('))
       { while(stackOut[stackOut.length-1]!='('){
            outArr.push(stackOut.pop())
        }
        stackOut.pop()
    }
      else if (!stackOut.includes('(')){
        throw 'ExpressionError: Brackets must be paired'
      }
    }
    if (expr[e]=='_'){
        break}
}
if (stackOut.includes('(')){
    throw 'ExpressionError: Brackets must be paired'
}
while(stackOut.length){
  outArr.push(stackOut.pop())
}
  // подсчет
    for(let c=0; c<outArr.length; c++){             //подсчет
      switch (outArr[c]){
        case '+':
            stackCalk.push(stackCalk.pop()+stackCalk.pop());

            break;
        case '-':
            let d=stackCalk.pop();
            let di=stackCalk.pop();
            stackCalk.push(di-d);

            break;
        case '*':
            stackCalk.push(stackCalk.pop()*stackCalk.pop());

            break;
        case '/':
            if (stackCalk[stackCalk.length-1]==0){
              throw 'TypeError: Division by zero.'
            }
            else{
              let d=stackCalk.pop();
              let di=stackCalk.pop();
              let did=di/d;
              stackCalk.push(did);
              }
              break;
        case '(':
            return result = 'ExpressionError: Brackets must be paired';
        default:
          stackCalk.push(Number(outArr[c]));
          break;
      }
    }
    result = Math.round(stackCalk[0]*10000)/10000;
    
    return result;
}

module.exports = {
    expressionCalculator
}