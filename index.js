const employee = {
    name: '',
    streetAddress: ''
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}
function deleteFromEmployeeByKey(obj, key, value){
    return {...obj,[key]: value,
    };
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;

    return obj;
}