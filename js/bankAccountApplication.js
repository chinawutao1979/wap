function doCreateNewAccount(){
    if(!doEemptyCheck()){
        alert("AccountName and Deposit can not be empty!!!");
        return;
    }

    if(nameExistCheck()){
        alert("AccountName has existed!!!");
        return;
    }
    let deposit = document.getElementById("deposit").value;
    if(!isNum(deposit)){
        alert("Deposit must be number!!!");
        return;
    }
    
    const instance = new CreateNewAccount();
    instance.createAccount();    
    document.getElementById("accountList").value=instance.toString();
}

class Account {    
    constructor(name, deposit) {
      this.name = name;
      this.deposit = deposit;
    }

    toString() {
        return "Account Name:  "+this.name+"  Balance:  "+this.deposit;
    }
}

class CreateNewAccount {
    static accountInfoList;    
    constructor() {
        this.accountInfoList = new Array(); 
        let currentStr = document.getElementById("accountList").value;   
           
        if(currentStr !==""){           
            let arr1 = currentStr.split("\n");
            
            for(var i=0;i<arr1.length;i++){
                let arr2 = arr1[i].split("  ");
                        
                this.accountInfoList.push(new Account(arr2[1],arr2[3]));               
            }
            
        }      
            
    }
    createAccount(){       
        var accountName = document.getElementById("accountName").value;
        var deposit = document.getElementById("deposit").value;
        this.accountInfoList.push(new Account(accountName,deposit));
    }

    toString(){
        var accountInfoArr = new Array();       
        for(var i=0;i<this.accountInfoList.length;i++){            
            accountInfoArr.push(this.accountInfoList[i].toString());           
        }
        let finalString  = accountInfoArr.join('\n');
        return finalString;
    }
}

function doEemptyCheck(){
    var accountName = document.getElementById("accountName").value;
    var deposit = document.getElementById("deposit").value;
    
    return accountName !=="" && deposit!=="";
}

function nameExistCheck(){
    let accountInfoList = getAccountInfoList();
    var accountName = document.getElementById("accountName").value;
    let bRepeat = false;
    for(let i=0;i<accountInfoList.length;i++){
        if(accountInfoList[i].name === accountName){
            bRepeat = true;
            break;
        }        
    }
    return bRepeat;
}

function doDeposit(){
    alert("doDeposit");
}

function doDebit(){
    alert("doDebit");
}  

function showDialog(kindVal){    
   
    if(isEmptyAccountInfoList()){
        alert("accountList can not be empty!!!");
        return;
    }
    
    if(kindVal===1){
        document.getElementById("titleName").innerHTML="Deposit";
        document.getElementById("valNmae").innerHTML="Deposit";
    }else{
        document.getElementById("titleName").innerHTML="Debit";
        document.getElementById("valNmae").innerHTML="Debit";
    }
    
    document.getElementById("depositId").value="";
    var dialog = document.querySelector("dialog");        
    dialog.showModal();
    let accountInfoList = getAccountInfoList();      
    var accountNames = $("#accountNames");
    accountNames.empty();
    for(let i=0;i<accountInfoList.length;i++){
        let name = accountInfoList[i].name;
        accountNames.append("<option value='"+name+"'>"+name+"</option>"); 
    }     
}

function submitDeposit(){
    let deposit = document.getElementById("depositId").value;
    let valName = document.getElementById("valNmae").innerHTML;
    if(deposit===""){
        alert(valName+" can not be empty!!!");
        return;
    }
    if(!isNum(deposit)){
        alert(valName+" must be number!!!");
        return;
    }
    
    let dialog = document.querySelector("dialog"); 
    let titleName = document.getElementById("titleName").innerHTML;
    let kindVal = 1;
    if(titleName === "Debit"){
        kindVal = 2;
    }
    let accountInfoStr = getAccountInfoStr($("#accountNames option:selected").val(),deposit,kindVal);
    document.getElementById("accountList").value = accountInfoStr;
    dialog.close();
}

function closeDialog(){          
    document.querySelector("dialog").close();
}

function getAccountInfoList(){
    let accountInfoArray = new Array();
    let currentStr = document.getElementById("accountList").value; 
    let arr1 = currentStr.split("\n");            
    for(var i=0;i<arr1.length;i++){
        let arr2 = arr1[i].split("  ");                
        accountInfoArray.push(new Account(arr2[1],arr2[3]));               
    }
    
    return accountInfoArray;
}

function getAccountInfoStr(name,intVal,kindVal){
    let accountInfoList = getAccountInfoList();
    let accountInfoArr = new Array();       
    for(let i=0;i<accountInfoList.length;i++){  
        let accountInfo = accountInfoList[i];
        if(accountInfo.name===name){
            if(kindVal===1){
                accountInfo.deposit = parseInt(accountInfo.deposit) + parseInt(intVal);
            }else{
                accountInfo.deposit = parseInt(accountInfo.deposit) - parseInt(intVal);
            }            
        }
        accountInfoArr.push(accountInfoList[i].toString());           
    }
    let finalString  = accountInfoArr.join('\n');
    return finalString;
}

function isEmptyAccountInfoList(){
    let currentStr = document.getElementById("accountList").value; 
    return currentStr ==="";
}

function isNum(str){    
    if(str === "" || str ==null || str.trim()===""){
        return false;
　　}

   if(!isNaN(str)){    
       return true;
   }else{    
    return false;
   }
}

    