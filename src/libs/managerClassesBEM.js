const managerClassesBEM = (className) => {
    return (modifiers) => {
        Object.keys(modifiers).forEach(key => { 
            let modifier = modifiers[key] ? className+"-"+key : "";
            className += modifier ? " " + modifier : "";
        });
        return className;
    }
}

export default managerClassesBEM;