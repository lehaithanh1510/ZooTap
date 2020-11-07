const getManyDocument = (response) => {
    const listData = []
    for (const doc of response.docs) {
        listData.push(getOneDocument(doc))
    }
    return listData
  }
const getOneDocument = (response) => {
const data = response.data()
data.id = response.id
return data
}


model = {
    
}

let animalID;

model.animal = []
model.getAnimalDetails = async () => {
    const response = await firebase.firestore().collection("Animal").get()
    model.animal = getManyDocument(response)
    console.log(model.animal)
    animalID = "C111902778";
    document.getElementById("farm").innerHTML = model.animal[0].farm
    document.getElementById("animal_Host").innerHTML = model.animal[0].animal_Host
    document.getElementById("phone").innerHTML = model.animal[0].phone
    document.getElementById("weight").innerHTML = model.animal[0].weight
    document.getElementById("age").innerHTML = model.animal[0].age
    document.getElementById("gender").innerHTML = model.animal[0].gender
    document.getElementById("special_condition").innerHTML = model.animal[0].special_condition
}


model.healthStatus = []
model.getHealthStatus = async () => {
    const response = await firebase.firestore().collection("health_status").get()
    model.healthStatus = getManyDocument(response)
    console.log(model.healthStatus)
    let foundAnimalID = model.healthStatus.find(element => element.animal_ID == animalID);
    console.log(foundAnimalID)
    model.renderHealthStatus(foundAnimalID);
}

model.getAnimalDetails();
model.getHealthStatus();

model.renderHealthStatus = (foundAnimalID) => {
    for (let i = 1; i <= foundAnimalID.checks.length; i++){

        let statusHtml = `<div id="status-#id#">
            <p style=" font-weight: 400;">#Time#</p>
            <ul class="list-group">
                <li class="list-group-item">Details: #detail# </li>
                <li class="list-group-item">Doctor: #doctor#</li>
            </ul>
        </div>`
        let newSttHtml;

        newSttHtml = statusHtml.replace('#id#',i);
        newSttHtml = newSttHtml.replace('#Time#',foundAnimalID.checks[i-1].date);
        newSttHtml = newSttHtml.replace('#detail#',foundAnimalID.checks[i-1].details);
        newSttHtml = newSttHtml.replace('#doctor#',foundAnimalID.checks[i-1].doctor);
        document.getElementById("healthStt").insertAdjacentHTML("beforeend",newSttHtml);
    }
}

